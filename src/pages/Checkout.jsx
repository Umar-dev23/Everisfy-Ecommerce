// src/pages/Checkout.jsx
import { useEffect, useState } from "react";
import OrderSummary from "@/components/OrderSummary";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Checkout = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("cod");

  const cart = useSelector(
    (stateRedux) => stateRedux.productReducer?.cart ?? []
  );
  const [products, setProducts] = useState([]);

  // keep products in sync with redux cart
  useEffect(() => {
    setProducts(cart);
  }, [cart]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log({
      email,
      phone,
      firstName,
      lastName,
      address,
      city,
      state,
      zipCode,
      paymentMethod,
      products,
    });
  };

  return (
    <div className="bg-gray-50 min-h-screen py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page header */}
        <div className="mb-6">
          <h1 className="text-2xl text-center sm:text-3xl font-bold text-green-600">
            Checkout
          </h1>
          <p className="text-sm text-center text-gray-600 mt-1">
            Fill in your details and choose a payment method to place the order.
          </p>
        </div>

        {/* layout: single column on mobile, form (2) + summary (1) on lg */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Form area - spans 2 columns on large screens */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-sm p-4 sm:p-6">
              <h2 className="text-lg sm:text-xl font-semibold text-gray-800 mb-4">
                Contact & Shipping
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Contact */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Email Address *
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="you@example.com"
                      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-green-500 focus:border-green-500"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Phone Number *
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+92 3xx xxx xxxx"
                      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-green-500 focus:border-green-500"
                    />
                  </div>
                </div>

                <hr className="border-t border-gray-200" />

                {/* Name */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="firstName"
                      className="block text-sm font-medium text-gray-700"
                    >
                      First Name *
                    </label>
                    <input
                      id="firstName"
                      type="text"
                      required
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      placeholder="John"
                      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-green-500 focus:border-green-500"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="lastName"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Last Name *
                    </label>
                    <input
                      id="lastName"
                      type="text"
                      required
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      placeholder="Doe"
                      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-green-500 focus:border-green-500"
                    />
                  </div>
                </div>

                {/* Address */}
                <div>
                  <label
                    htmlFor="address"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Street Address *
                  </label>
                  <input
                    id="address"
                    type="text"
                    required
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    placeholder="Street, Apartment, Suite, etc."
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-green-500 focus:border-green-500"
                  />
                </div>

                {/* City / State / ZIP */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label
                      htmlFor="city"
                      className="block text-sm font-medium text-gray-700"
                    >
                      City *
                    </label>
                    <input
                      id="city"
                      type="text"
                      required
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                      placeholder="Lahore"
                      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-green-500 focus:border-green-500"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="state"
                      className="block text-sm font-medium text-gray-700"
                    >
                      State / Province *
                    </label>
                    <input
                      id="state"
                      type="text"
                      required
                      value={state}
                      onChange={(e) => setState(e.target.value)}
                      placeholder="Punjab"
                      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-green-500 focus:border-green-500"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="zipCode"
                      className="block text-sm font-medium text-gray-700"
                    >
                      ZIP Code *
                    </label>
                    <input
                      id="zipCode"
                      type="text"
                      required
                      value={zipCode}
                      onChange={(e) => setZipCode(e.target.value)}
                      placeholder="54000"
                      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-green-500 focus:border-green-500"
                    />
                  </div>
                </div>

                <hr className="border-t border-gray-200" />

                {/* Payment Method */}
                <div className="space-y-3">
                  <h3 className="text-base font-medium text-gray-800">
                    Payment Method
                  </h3>

                  <div
                    role="button"
                    tabIndex={0}
                    onClick={() => setPaymentMethod("cod")}
                    onKeyDown={(e) =>
                      e.key === "Enter" && setPaymentMethod("cod")
                    }
                    className={`flex items-start gap-3 p-3 rounded-md border ${
                      paymentMethod === "cod"
                        ? "border-green-500 bg-green-50"
                        : "border-gray-300"
                    } cursor-pointer`}
                  >
                    <div
                      className={`w-5 h-5 rounded-full border flex items-center justify-center ${
                        paymentMethod === "cod"
                          ? "border-green-500 bg-green-500"
                          : "border-gray-400"
                      }`}
                    >
                      {paymentMethod === "cod" && (
                        <div className="w-2 h-2 rounded-full bg-white" />
                      )}
                    </div>
                    <div>
                      <div className="font-medium text-gray-900">
                        Cash on Delivery
                      </div>
                      <div className="text-sm text-gray-600">
                        Pay when you receive your order
                      </div>
                    </div>
                  </div>

                  <div
                    role="button"
                    tabIndex={0}
                    onClick={() => setPaymentMethod("online")}
                    onKeyDown={(e) =>
                      e.key === "Enter" && setPaymentMethod("online")
                    }
                    className={`flex items-start gap-3 p-3 rounded-md border ${
                      paymentMethod === "online"
                        ? "border-green-500 bg-green-50"
                        : "border-gray-300"
                    } cursor-pointer`}
                  >
                    <div
                      className={`w-5 h-5 rounded-full border flex items-center justify-center ${
                        paymentMethod === "online"
                          ? "border-green-500 bg-green-500"
                          : "border-gray-400"
                      }`}
                    >
                      {paymentMethod === "online" && (
                        <div className="w-2 h-2 rounded-full bg-white" />
                      )}
                    </div>
                    <div>
                      <div className="font-medium text-gray-900">
                        Pay Online
                      </div>
                      <div className="text-sm text-gray-600">
                        Secure online payment
                      </div>
                    </div>
                  </div>
                </div>

                {/* Action buttons */}
                <div className="flex flex-col-reverse sm:flex-row justify-between gap-3 mt-6">
                  <button
                    type="button"
                    onClick={() => navigate("/cart")}
                    className="w-full sm:w-auto px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
                  >
                    Back to Cart
                  </button>

                  <button
                    type="submit"
                    className="w-full sm:w-auto px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700"
                  >
                    Place Order
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* Order summary - sticky on large screens */}
          <div className="w-full">
            <div className="bg-white rounded-lg shadow-sm p-4 sm:p-6 lg:sticky lg:top-20">
              <OrderSummary products={products} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
