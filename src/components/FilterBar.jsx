import React from "react";
import { Grid2X2, List } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";

const FilterBar = ({ selectedFilters, onFilterChange }) => {
  const categories = [
    "All Categories",
    "men's clothing",
    "jewelery",
    "electronics",
    "women's clothing",
  ];

  const sortOptions = [
    "Default",
    "Price: Low to High",
    "Price: High to Low",
    "Rating: Highest",
  ];

  const viewOptions = [
    {
      value: "grid",
      icon: <Grid2X2 className="w-4 h-4" />,
      label: "Grid View",
    },
    { value: "list", icon: <List className="w-4 h-4" />, label: "List View" },
  ];

  const handleCategoryChange = (value) => {
    onFilterChange({
      ...selectedFilters,
      category: value,
    });
  };

  const handleSortChange = (value) => {
    onFilterChange({
      ...selectedFilters,
      sort: value,
    });
  };

  const handleViewChange = (viewType) => {
    onFilterChange({
      ...selectedFilters,
      view: viewType,
    });
  };

  return (
    <div className="flex flex-col md:flex-row justify-center items-center p-3 bg-white gap-4 w-[100%] border border-gray-200 rounded-lg shadow-sm mb-4">
      {/* Category Filter */}
      <div className="w-full items-center justify-start flex flex-col md:w-4/4">
        <label className="block text-xs text-left font-medium text-gray-700 mb-1">
          Category
        </label>
        <Select
          value={selectedFilters.category}
          onValueChange={handleCategoryChange}
        >
          <SelectTrigger className="h-8 text-sm">
            <SelectValue placeholder="Select category" />
          </SelectTrigger>
          <SelectContent>
            {categories.map((category) => (
              <SelectItem key={category} value={category} className="text-sm">
                {category}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Sort Filter */}
      <div className="w-full items-center justify-start flex flex-col md:w-4/4">
        <label className="block text-xs  font-medium text-gray-700 mb-1">
          Sort by
        </label>
        <Select value={selectedFilters.sort} onValueChange={handleSortChange}>
          <SelectTrigger className="h-8 text-sm">
            <SelectValue placeholder="Sort by" />
          </SelectTrigger>
          <SelectContent>
            {sortOptions.map((option) => (
              <SelectItem key={option} value={option} className="text-sm">
                {option}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* View Toggle */}
      <div className="w-full items-center justify-start flex flex-col md:w-4/4">
        <label className="block text-xs font-medium text-gray-700 mb-1">
          View
        </label>
        <div className="flex space-x-1">
          {viewOptions.map((view) => (
            <Button
              key={view.value}
              variant={
                selectedFilters.view === view.value ? "default" : "outline"
              }
              size="sm"
              onClick={() => handleViewChange(view.value)}
              className={`h-8 px-2 ${
                selectedFilters.view === view.value
                  ? "bg-green-500 hover:bg-green-600 text-white"
                  : "bg-white text-gray-700 border-gray-300 hover:bg-gray-50"
              }`}
              title={view.label}
            >
              {view.icon}
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FilterBar;
