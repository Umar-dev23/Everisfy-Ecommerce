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
    <div className="w-full flex flex-col items-center">
      {/* Hero Section */}
      <section className="w-full">
        <Hero />
      </section>

      {/* Filter Bar */}
      <section className="w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 my-6">
          <FilterBar
            selectedFilters={filters}
            onFilterChange={handleFilterChange}
          />
        </div>
      </section>

      {/* Products */}
      <section className="w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <Products filters={filters} />
      </section>

      {/* Contact Us */}
      <section className="w-full">
        <ContactUs />
      </section>
    </div>
  );
};

export default Home;
