import { useNavigate, useLocation } from "react-router-dom";
import React, { useState } from "react";
import {
  BriefcaseBusiness,
  Search,
  House,
  Mail,
  ShoppingCart,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const Header = ({ onChangeInput }) => {
  const navigate = useNavigate();
  const location = useLocation(); // ✅ get current route
  const [search, setSearch] = useState("");

  function handleSearch() {
    onChangeInput(search);
  }

  return (
    <header className="bg-white border-b border-gray-200 px-4 sm:px-8 py-4 sticky top-0 z-50">
      <div className="flex flex-col items-center justify-center sm:flex-row sm:items-center sm:justify-center max-w-7xl mx-auto gap-4">
        {/* Logo */}
        <div
          className="flex items-center cursor-pointer gap-1"
          onClick={() => navigate("/")}
        >
          <BriefcaseBusiness className="text-green-500" />
          <span className="text-xl sm:text-2xl font-bold text-green-500">
            EVersify
          </span>
        </div>

        {/* Search */}
        <div className="w-full sm:flex-1 sm:max-w-2xl">
          <div className="relative">
            <Input
              type="text"
              onChange={(e) => {
                const newValue = e.target.value;
                setSearch(newValue);
                handleSearch();
              }}
              value={search}
              placeholder="Search products..."
              className="px-10 py-2 sm:py-3 w-full text-sm sm:text-lg border-gray-300 
                     focus:ring-1 focus:shadow-lg focus:shadow-green-200 
                     focus:ring-green-500 focus:border-transparent"
            />
            <div className="absolute left-3 top-1/2 -translate-y-1/2">
              <Search size={16} />
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex items-center justify-center sm:justify-end space-x-2 sm:space-x-4">
          <Button
            onClick={() => navigate("/")}
            variant="ghost"
            className={`flex items-center gap-1 text-gray-700 text-sm sm:text-base 
              hover:text-green-700 hover:bg-green-50
              ${location.pathname === "/" ? "bg-green-200" : ""}`}
          >
            <House /> <span>Home</span>
          </Button>

          <a
            href="#contact"
            className={`flex py-2 rounded-lg font-medium px-3 items-center gap-1 text-gray-700 
              hover:text-green-700 hover:bg-green-50 text-sm sm:text-base
              ${location.pathname === "#contact" ? "bg-green-200" : ""}`}
          >
            <Mail size={16} className="text-gray-600" />
            <span>Contact</span>
          </a>

          <Button
            onClick={() => navigate("/cart")}
            variant="ghost"
            className={`flex items-center gap-1 text-gray-700 text-sm sm:text-base 
              hover:text-green-700 hover:bg-green-50
              ${location.pathname === "/cart" ? "bg-green-200" : ""}`}
          >
            <ShoppingCart />
            <span>Cart</span>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
