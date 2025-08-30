import React, { useEffect, useState } from "react";
import { Alert } from "flowbite-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { clearAll, removeProduct, updateProduct } from "@/redux/slice";

const ShoppingCart = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const cart = useSelector((state) => state.productReducer?.cart ?? []);

  const [cartItems, setCartItems] = useState([]);

  // sync local state whenever redux cart changes
  useEffect(() => {
    setCartItems(cart);
  }, [cart]);

  const updateQuantity = (id, delta) => {
    setCartItems((items) => {
      const updatedItems = items.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: Math.max(0, item.quantity + delta),
            }
          : item
      );
      // Find the updated item and dispatch the update
      const updatedItem = updatedItems.find((item) => item.id === id);
      if (updatedItem) {
        dispatch(updateProduct(updatedItem));
      }
      return updatedItems;
    });
  };

  const removeItem = (id) => {
    setCartItems((items) => items.filter((item) => item.id !== id));
    dispatch(removeProduct(id));
  };

  // CLEAR CART: dispatch the redux action
  const handleClearCart = () => {
    dispatch(clearAll());
    // optional: also clear local state immediately for UI responsiveness
    setCartItems([]);
  };

  // Totals (derived from local cartItems which mirrors redux cart)
  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  const shippingCost = 0;
  const tax = subtotal * 0.08;
  const total = subtotal + shippingCost + tax;

  return (
    <div className="container mx-auto px-4 py-6">
      {/* Header row: title + clear button */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
          Shopping Cart
        </h1>

        <div className="flex gap-3 w-full md:w-auto">
          <Button
            onClick={handleClearCart}
            variant="destructive"
            className="w-full md:w-auto bg-transparent border border-red-600 text-red-600 hover:bg-red-50"
            size="sm"
          >
            Clear Cart
          </Button>

          <Button
            onClick={() => navigate("/")}
            variant="outline"
            className="w-full md:w-auto"
            size="sm"
          >
            Continue Shopping
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Items column (span 2 on large screens) */}
        <div className="lg:col-span-2">
          {cartItems.length === 0 ? (
            <Alert color="info">
              Your cart is empty. Continue shopping to add items.
            </Alert>
          ) : (
            <div className="space-y-4">
              {cartItems.map((item) => (
                <Card
                  key={item.id}
                  className="flex flex-row gap-4 p-4 bg-white shadow-sm hover:shadow-md transition"
                >
                  {/* Product Image */}
                  <div className="flex-shrink-0 w-20 h-20 sm:w-28 sm:h-28 bg-gray-50 p-2 rounded">
                    <button
                      onClick={() => navigate(`/product/?id=${item.id}`)}
                      className="w-full h-full"
                    >
                      <img
                        className="w-full h-full object-contain"
                        src={item.image}
                        alt={item.title}
                      />
                    </button>
                  </div>

                  {/* Product text area */}
                  <div className="flex flex-col justify-between flex-1 min-w-0">
                    <div>
                      <div className="flex justify-between items-start gap-4">
                        <button
                          onClick={() => navigate(`/product/?id=${item.id}`)}
                          className="text-sm sm:text-base font-semibold text-left text-gray-900 hover:underline line-clamp-2"
                        >
                          {item.title}
                        </button>

                        <p className="text-base sm:text-lg font-bold text-gray-900">
                          ${item.price.toFixed(2)}
                        </p>
                      </div>

                      <p className="mt-1 text-xs sm:text-sm text-gray-600">
                        ({item.category})
                      </p>

                      <div className="mt-2 flex items-center gap-2 text-sm text-gray-500">
                        <div className="flex items-center">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`h-3 w-3 sm:h-4 sm:w-4 ${
                                i < Math.floor(item.rating?.rate || 0)
                                  ? "text-yellow-400 fill-yellow-400"
                                  : "text-gray-300"
                              }`}
                            />
                          ))}
                        </div>
                        <span className="text-xs sm:text-sm">
                          {item.rating?.rate ?? "0"} ({item.rating?.count ?? 0})
                        </span>
                      </div>
                    </div>

                    {/* controls */}
                    <div className="mt-3 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                      <div className="flex items-center border rounded-md overflow-hidden">
                        <button
                          className="px-3 py-2 text-lg font-semibold text-gray-700 hover:bg-gray-100"
                          onClick={() => updateQuantity(item.id, -1)}
                          aria-label="Decrease quantity"
                        >
                          −
                        </button>
                        <span className="px-4 text-sm sm:text-base">{item.quantity}</span>
                        <button
                          className="px-3 py-2 text-lg font-semibold text-gray-700 hover:bg-gray-100"
                          onClick={() => updateQuantity(item.id, 1)}
                          aria-label="Increase quantity"
                        >
                          +
                        </button>
                      </div>

                      <div className="flex items-center gap-2">
                        <Button
                          className="bg-white border text-red-600 hover:text-red-800 hover:bg-white"
                          size="sm"
                          onClick={() => removeItem(item.id)}
                        >
                          Remove
                        </Button>

                        <Button
                          className="bg-green-600 text-white hover:bg-green-700"
                          size="sm"
                          onClick={() => navigate(`/checkout`)}
                        >
                          Buy Now
                        </Button>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          )}
        </div>

        {/* Summary column */}
        <div>
          <Card className="p-4 sm:p-6 shadow-sm">
            <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-4">
              Order Summary
            </h2>

            <div className="space-y-3 text-sm text-gray-700">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>

              <div className="flex justify-between">
                <span>Shipping</span>
                <span className="font-medium text-green-600">Free</span>
              </div>

              <div className="flex justify-between">
                <span>Tax (8%)</span>
                <span>${tax.toFixed(2)}</span>
              </div>

              <hr className="my-3" />

              <div className="flex justify-between items-center font-bold text-lg">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>
            </div>

            <Button
              onClick={() => {
                navigate("/checkout");
              }}
              className="w-full py-3 bg-green-600 mt-5"
              size="md"
            >
              Proceed to Checkout
            </Button>

            <div className="text-center mt-4">
              <button
                onClick={() => navigate("/")}
                className="text-sm text-blue-600 hover:underline"
              >
                Continue shopping →
              </button>
            </div>

            <div className="mt-4">
              <h3 className="font-medium mb-2 text-sm">Have a voucher?</h3>
              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="Enter code"
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-md text-sm"
                />
                <Button size="sm" className="px-3 py-2 bg-green-600">
                  Apply
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
