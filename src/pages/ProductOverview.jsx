import { useState } from "react";
import { Star } from "lucide-react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useGetOneProductQuery } from "@/redux/api";
import { addProduct, updateProduct } from "@/redux/slice";

const ProductOverview = () => {
  const [searchParams] = useSearchParams();
  const productId = searchParams.get("id");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Redux cart state
  const cart = useSelector((state) => state.productReducer?.cart ?? []);

  const {
    data: product,
    isLoading,
    isError,
    error,
  } = useGetOneProductQuery(productId);

  // Find product in cart
  const existing = product
    ? cart.find((p) => p.id === product.id)
    : null;
  const quantity = existing ? existing.quantity : 0;

  const handleAddToCart = () => {
    if (!existing) {
      dispatch(addProduct({ ...product, quantity: 1 }));
    } else {
      dispatch(updateProduct({ ...existing, quantity: existing.quantity + 1 }));
    }
  };

  const handleDecreaseQuantity = () => {
    if (existing && existing.quantity > 1) {
      dispatch(updateProduct({ ...existing, quantity: existing.quantity - 1 }));
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading products...</p>
        </div>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="text-red-500 text-2xl mb-4">Error</div>
          <p className="text-gray-600">{error?.message || "Something went wrong"}</p>
          <button
            onClick={() => window.location.reload()}
            className="mt-4 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  if (product) {
    return (
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Product Image */}
          <div className="md:w-1/2">
            <div className="bg-white p-6 rounded-lg shadow-md h-full flex items-center justify-center">
              <img
                src={product.image}
                alt={product.title}
                className="max-h-80 object-contain"
              />
            </div>
          </div>

          {/* Product Details */}
          <div className="md:w-1/2">
            <h1 className="text-2xl font-bold text-gray-900 mb-2">
              {product.title}
            </h1>
            <p className="text-3xl font-bold text-green-700 mb-6">
              ${product.price.toFixed(2)}
            </p>

            <div className="mb-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-2">
                Description
              </h2>
              <p className="text-gray-700">{product.description}</p>
            </div>

            {/* Quantity Control */}
            {quantity > 0 && (
              <div className="flex items-center mb-6">
                <span className="mr-4 text-gray-700">Quantity:</span>
                <div className="flex items-center border border-gray-300 rounded-md">
                  <button
                    onClick={handleDecreaseQuantity}
                    className="px-3 py-1 text-gray-600 hover:bg-gray-100"
                    disabled={quantity <= 1}
                  >
                    -
                  </button>
                  <span className="px-4 py-1 border-l border-r border-gray-300">
                    {quantity}
                  </span>
                  <button
                    onClick={handleAddToCart}
                    className="px-3 py-1 text-gray-600 hover:bg-gray-100"
                  >
                    +
                  </button>
                </div>
              </div>
            )}

            {/* Buttons */}
            <div className="flex gap-4 mb-8">
              {quantity === 0 ? (
                <button
                  onClick={handleAddToCart}
                  className="px-6 py-3 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors"
                >
                  Add to Cart
                </button>
              ) : (
                <button
                  onClick={handleAddToCart}
                  className="px-6 py-3 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors"
                >
                  Add More ({quantity})
                </button>
              )}

              <button
                className="px-6 py-3 border border-green-600 text-green-600 rounded-md hover:bg-green-50 transition-colors"
                onClick={() => {
                  navigate("/cart");
                }}
              >
                View Cart
              </button>
            </div>

            {/* Product Meta */}
            <div className="border-t border-gray-200 pt-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">
                Product Details
              </h2>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-gray-600">Category:</p>
                  <p className="font-medium capitalize">{product.category}</p>
                </div>
                <div>
                  <p className="text-gray-600">Reviews:</p>
                  <p className="font-medium">{product.rating.count}</p>
                </div>
                <div>
                  <p className="text-gray-600">Rating:</p>
                  <div className="flex items-center">
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${
                            i < Math.floor(product.rating?.rate || 0)
                              ? "text-yellow-400 fill-yellow-400"
                              : "text-gray-300"
                          }`}
                        />
                      ))}
                    </div>
                    <span className="ml-2 font-medium">
                      {product.rating.rate}/5
                    </span>
                  </div>
                </div>
                <div>
                  <p className="text-gray-600">Availability:</p>
                  <p className="font-medium text-green-600">In Stock</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default ProductOverview;
