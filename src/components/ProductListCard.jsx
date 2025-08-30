import React from "react";
import { ShoppingCart, Star } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addProduct, updateProduct } from "@/redux/slice";

const ProductListCard = ({ product }) => {
  const { id, title, price, image, rating } = product;
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const cart = useSelector((state) => state.productReducer?.cart ?? []);
  const existing = cart.find((p) => p.id === id);
  const quantity = existing ? existing.quantity : 0;

  const handleAddToCart = () => {
    if (!existing) {
      dispatch(addProduct({ ...product, quantity: 1 }));
    } else {
      dispatch(updateProduct({ ...existing, quantity: existing.quantity + 1 }));
    }
  };

  return (
    <div className="flex flex-row gap-4 items-center border-b border-gray-200 py-4 px-2 hover:bg-gray-50 transition">
      {/* Image - small and fixed */}
      <div className="w-20 h-20 flex-shrink-0">
        <button onClick={() => navigate(`/product/?id=${id}`)} className="w-full h-full">
          <img
            className="w-full h-full object-contain"
            src={image}
            alt={title}
          />
        </button>
      </div>

      {/* Info */}
      <div className="flex flex-col flex-1">
        {/* Title */}
        <button
          onClick={() => navigate(`/product/?id=${id}`)}
          className="text-sm sm:text-base font-semibold text-left text-gray-900 hover:underline line-clamp-2"
        >
          {title}
        </button>

        {/* Rating */}
        <div className="mt-1 flex items-center gap-2">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`h-3 w-3 sm:h-4 sm:w-4 ${
                  i < Math.floor(rating?.rate || 0)
                    ? "text-yellow-400 fill-yellow-400"
                    : "text-gray-300"
                }`}
              />
            ))}
          </div>
          <p className="text-xs text-gray-500">({rating?.count})</p>
        </div>

        {/* Price & Cart */}
        <div className="mt-2 flex items-center justify-between">
          <p className="text-base sm:text-lg font-bold text-gray-900">${price}</p>

          {quantity === 0 ? (
            <button
              type="button"
              onClick={handleAddToCart}
              className="flex items-center rounded-md bg-green-600 px-3 py-1.5 text-xs sm:text-sm font-medium text-white hover:bg-green-700"
            >
              <ShoppingCart className="mr-1 h-4 w-4" /> Add
            </button>
          ) : (
            <button
              type="button"
              onClick={handleAddToCart}
              className="flex items-center rounded-md bg-green-600 px-3 py-1.5 text-xs sm:text-sm font-medium text-white"
            >
              <ShoppingCart className="mr-1 h-4 w-4" />
              Add More{" "}
              <span className="ml-2 rounded-full bg-white text-xs text-black px-2">
                {quantity}
              </span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductListCard;
