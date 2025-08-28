import React from "react";

const OrderSummary = ({ products = [] }) => {
  // Calculate order totals
  const itemsTotal = products.reduce((total, product) => {
    return total + product.price * (product.quantity || 1);
  }, 0);

  const shipping = 0; // Free shipping
  const tax = itemsTotal * 0.08; // 8% tax
  const orderTotal = itemsTotal + shipping + tax;

  // Format currency
  const formatCurrency = (amount) => {
    return `$${amount.toFixed(2)}`;
  };

  return (
    <div className="max-w-md mx-auto border-green-400 border bg-white rounded-lg shadow-md overflow-hidden">
      <div className=" p-4 text-green-500">
        <h2 className="text-xl font-bold">Order Summary</h2>
      </div>

      <div className="p-4">
        {/* Product List */}
        <div className="space-y-4 mb-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="flex items-center border-b border-gray-100 pb-4"
            >
              <img
                src={product.image}
                alt={product.title}
                className="w-16 h-16 object-contain rounded-md"
              />
              <div className="ml-4 flex-1">
                <h3 className="text-sm font-medium text-gray-900 line-clamp-1">
                  {product.title}
                </h3>
                <p className="text-green-600 font-semibold">
                  {formatCurrency(product.price * (product.quantity || 1))}
                </p>
                <p className="text-xs text-gray-500">
                  Qty: {product.quantity || 1} × {formatCurrency(product.price)}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Order Totals */}
        <div className="space-y-2 mb-6">
          <div className="flex justify-between">
            <span className="text-gray-600">
              Items (
              {products.reduce(
                (total, product) => total + (product.quantity || 1),
                0
              )}
              ):
            </span>
            <span className="font-medium">{formatCurrency(itemsTotal)}</span>
          </div>

          <div className="flex justify-between">
            <span className="text-gray-600">Shipping:</span>
            <span className="font-medium text-green-600">Free</span>
          </div>

          <div className="flex justify-between">
            <span className="text-gray-600">Tax:</span>
            <span className="font-medium">{formatCurrency(tax)}</span>
          </div>

          <div className="border-t border-gray-200 pt-2 mt-2">
            <div className="flex justify-between text-lg font-bold">
              <span>Total:</span>
              <span className="text-green-700">
                {formatCurrency(orderTotal)}
              </span>
            </div>
          </div>
        </div>

        {/* Security Message */}
        <p className="text-xs text-center text-gray-500 mt-3 flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 mr-1 text-green-500"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
              clipRule="evenodd"
            />
          </svg>
          Your payment information is encrypted and secure
        </p>
        <p className="text-green-500 text-center font-semibold text-sm">
          Thankyou for using Everisfy!
        </p>
        <p className="text-green-500 text-center font-semibold text-sm">
          Feeling Proud to Serve You the Best Service!
        </p>
      </div>
    </div>
  );
};

export default OrderSummary;
