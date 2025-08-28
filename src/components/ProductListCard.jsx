import React from "react";
import { ShoppingCart, Star } from "lucide-react";
import { useNavigate } from "react-router-dom";

const ProductListCard = ({ product }) => {
  const { id, title, price, image, rating } = product;
  const navigate = useNavigate();
  return (
    <div className="rounded-lg flex gap-3 items-center w-[100%] border border-gray-200 bg-white py-3 px-4 shadow-sm transition-shadow hover:shadow-md">
      {/* Product Image */}
      <div className="h-26 w-[15%]">
        <a onClick={() => navigate(`/product/?id=${id}`)}>
          <img
            className="mx-auto h-full object-contain"
            src={image}
            alt={title}
          />
        </a>
      </div>

      {/* Product Info */}
      <div className=" w-[85%]">
        {/* Product Name */}
        <a
          onClick={() => navigate(`/product/?id=${id}`)}
          className="text-lg cursor-pointer font-semibold leading-tight text-gray-900 hover:underline line-clamp-2 h-14"
        >
          {title}
        </a>

        {/* Rating */}
        <div className="mt-2 flex items-center gap-2">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`h-4 w-4 ${
                  i < Math.floor(rating?.rate || 0)
                    ? "text-yellow-400 fill-yellow-400"
                    : "text-gray-300"
                }`}
              />
            ))}
          </div>
          <p className="text-sm font-medium text-gray-500">({rating?.count})</p>
        </div>

        {/* Price and Add to Cart */}
        <div className="mt-4 flex items-center justify-between gap-4">
          <p className="text-2xl font-extrabold text-gray-900">${price}</p>

          <button
            type="button"
            className="inline-flex items-center rounded-lg bg-green-600 px-5 py-2.5 text-sm font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-4 focus:ring-green-300"
          >
            <ShoppingCart className="-ms-2 me-2 h-5 w-5" />
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductListCard;
