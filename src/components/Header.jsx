import { useNavigate } from "react-router-dom";
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
  const navigate = useNavigate(); // ✅ fix here
  const [search, setSearch] = useState("");

  function handleSearch() {
    onChangeInput(search);
  }

  return (
    <header className="bg-white border-b border-gray-200 px-8 py-4 sticky top-0 z-50">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        {/* Logo */}
        <div
          className="flex items-center cursor-pointer gap-1"
          onClick={() => navigate("/")}
        >
          <BriefcaseBusiness className="text-green-500" />
          <span className="text-2xl font-bold text-green-500">EVersify</span>
        </div>

        {/* Search */}
        <div className="flex-1 max-w-2xl mx-8">
          <div className="relative">
            <Input
              type="text"
              onChange={(e) => {
                const newValue=e.target.value;
                setSearch(newValue);
                handleSearch();
              }}
              value={search}
              placeholder="Search products..."
              className="px-12 py-3 w-[150%] text-lg border-gray-300 
                         focus:ring-1 focus:shadow-lg focus:shadow-green-200 
                         focus:ring-green-500 focus:border-transparent"
            />
            <div className="absolute left-3 top-1/2 -translate-y-1/2">
              <Search size={16} />
            </div>
          </div>
        </div>

        {/* Buttons with navigation */}
        <div className="flex items-center space-x-4">
          <Button
            onClick={() => navigate("/")}
            variant="ghost"
            className="flex items-center gap-1 text-gray-700 
                       hover:text-green-700 hover:bg-green-50"
          >
            <House /> <span className="font-medium">Home</span>
          </Button>

          <a
            href="#contact"
            className="flex py-2 rounded-lg px-3 items-center gap-1 text-gray-700 
                       hover:text-green-700 hover:bg-green-50"
          >
            <Mail size={16} className="text-gray-700" />
            <span className="text-sm font-medium">Contact</span>
          </a>

          <Button
            onClick={() => navigate("/cart")}
            variant="ghost"
            className="flex items-center gap-1 text-gray-700 
                       hover:text-green-700 hover:bg-green-50"
          >
            <ShoppingCart />
            <span className=" font-medium">Cart</span>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
