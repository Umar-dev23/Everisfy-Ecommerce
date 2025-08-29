import { useState } from "react";
import Hero from "@/components/Hero";
import FilterBar from "@/components/FilterBar";
import Products from "@/components/Products";
import ContactUs from "@/components/ContactUs";

const Home = () => {
  const [filters, setFilters] = useState({
    category: "All Categories",
    sort: "Default",
    view: "grid",
  });

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
    // You can also trigger API calls or filter products here
  };
  return (
    <div className="w-[100%] flex flex-col items-center">
      <Hero />
      <div className="flex flex-col items-center">
        <FilterBar
          selectedFilters={filters}
          onFilterChange={handleFilterChange}
        />
      </div>
      <Products filters={filters} />
      <ContactUs />
    </div>
  );
};

export default Home;
