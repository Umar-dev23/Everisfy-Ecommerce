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
    <div className="container mx-auto px-4 py-4">
      <div className="flex py-3 justify-between">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Shopping Cart</h1>
        <Button
          onClick={handleClearCart}
          className="w-[10%] bg- border-red-600 border-2 text-red-600 mt-6"
          size="lg"
        >
          Clear Cart
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Cart Items */}
        <div className="lg:col-span-2">
          {cartItems.length === 0 ? (
            <Alert color="info">
              Your cart is empty. Continue shopping to add items.
            </Alert>
          ) : (
            <div className="space-y-6">
              {cartItems.map((item) => (
                <Card
                  key={item.id}
                  className="flex flex-row gap-4 p-4 bg-white shadow-md"
                >
                  {/* Product Image */}
                  <div className="w-40 h-40 flex-shrink-0">
                    <img
                      className="object-contain w-full h-full"
                      src={item.image}
                      alt={item.title}
                    />
                  </div>

                  {/* Product Details */}
                  <div className="flex flex-col justify-between flex-1">
                    <div>
                      <div className="flex justify-between">
                        <h3 className="text-lg font-semibold text-gray-900">
                          {item.title}
                        </h3>
                        <p className="text-xl font-bold text-gray-900">
                          ${item.price.toFixed(2)}
                        </p>
                      </div>
                      <p className="mt-2 text-sm font-semibold text-gray-900">
                        ({item.category})
                      </p>
                      <div className="flex gap-4 items-center">
                        <div className="flex items-center">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`h-4 w-4 ${
                                i < Math.floor(item.rating?.rate || 0)
                                  ? "text-yellow-400 fill-yellow-400"
                                  : "text-gray-300"
                              }`}
                            />
                          ))}
                        </div>{" "}
                        <p className="mt-1 text-sm text-gray-500">
                          {item.rating.rate} ({item.rating.count} reviews)
                        </p>
                      </div>
                    </div>

                    {/* Price & Quantity */}
                    <div className="flex items-center justify-between mt-4">
                      <div className="flex items-center border rounded-lg">
                        <button
                          className="px-3 py-1 text-lg font-bold text-gray-700 hover:bg-gray-200"
                          onClick={() => updateQuantity(item.id, -1)}
                        >
                          −
                        </button>
                        <span className="px-4 text-lg">{item.quantity}</span>
                        <button
                          className="px-3 py-1 text-lg font-bold text-gray-700 hover:bg-gray-200"
                          onClick={() => updateQuantity(item.id, 1)}
                        >
                          +
                        </button>
                      </div>

                      <Button
                        className="text-red-500 border-none bg-white hover:text-red-800 hover:bg-white"
                        size="sm"
                        onClick={() => removeItem(item.id)}
                      >
                        Remove
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          )}
        </div>

        {/* Order Summary */}
        <div>
          <Card className="p-6 shadow-md">
            <h2 className="text-xl font-bold text-gray-900 mb-4">
              Order Summary
            </h2>

            <div className="space-y-2">
              <div className="flex justify-between">
                <span>Original Price</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>

              <div className="flex justify-between">
                <span className="text-gray-600">Shipping:</span>
                <span className="font-medium text-green-600">Free</span>
              </div>
              
              <div className="flex justify-between">
                <span>Tax</span>
                <span>${tax.toFixed(2)}</span>
              </div>

              <hr className="my-4" />

              <div className="flex justify-between font-bold text-lg">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>
            </div>

            <Button
              onClick={() => {
                navigate("/checkout");
              }}
              className="w-full bg-green-600 mt-6"
              size="lg"
            >
              Proceed to Checkout
            </Button>

            <div className="text-center mt-4">
              <a href="/" className="text-blue-600 hover:underline">
                or Continue Shopping →
              </a>
            </div>

            <div className="mt-6 ">
              <h3 className="font-medium mb-2">
                Do you have a voucher or gift card?
              </h3>
              <div className="flex flex-wrap gap-1">
                <input
                  type="text"
                  placeholder="Enter code"
                  className="flex-1 px-4 border border-gray-300 rounded-lg"
                />
                <Button
                  size="lg"
                  className="px-3 py-2 text-xs bg-green-600 rounded-lg"
                >
                  Apply Code
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
