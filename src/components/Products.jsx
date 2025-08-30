import React from "react";
import ProductListCard from "@/components/ProductListCard";
import ProductCard from "@/components/ProductCard";
import {
  useGetAllProductsQuery,
  useGetCategoryProdcutsQuery,
} from "@/redux/api";
import { useOutletContext } from "react-router-dom";
import { PackageSearch } from "lucide-react";

const Products = ({ filters }) => {
  const { toSearch } = useOutletContext();

  // Always call both hooks
  const allProductsQuery = useGetAllProductsQuery(undefined, {
    skip: filters.category !== "All Categories", // skip when filtering by category
  });

  const categoryProductsQuery = useGetCategoryProdcutsQuery(filters.category, {
    skip: filters.category === "All Categories", // skip when not needed
  });

  // Pick the correct query result
  const isCategory = filters.category !== "All Categories";
  const { data, isLoading, isError, error } = isCategory
    ? categoryProductsQuery
    : allProductsQuery;

  // Handle loading
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

  // Handle error
  if (isError) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="text-red-500 text-2xl mb-4">Error</div>
          <p className="text-gray-600">
            {error?.error || "Something went wrong"}
          </p>
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

  if (!data) return null;

  // Clone and modify data
  let processedData = [...data];

  // 🔹 Only modify images when it's category-based query
  if (isCategory) {
    processedData = processedData.map((product) => ({
      ...product,
      image: product.image.endsWith(".jpg")
        ? product.image.replace(".jpg", "t.png")
        : product.image,
    }));
  }

  // Sorting
  if (filters.sort === "Price: Low to High") {
    processedData.sort((a, b) => a.price - b.price);
  } else if (filters.sort === "Price: High to Low") {
    processedData.sort((a, b) => b.price - a.price);
  } else if (filters.sort === "Rating: Highest") {
    processedData.sort((a, b) => b.rating.rate - a.rating.rate);
  }

  processedData = processedData.filter((p) => {
    return (
      p.title.toLowerCase().includes(toSearch?.toLowerCase()) ||
      p.description.toLowerCase().includes(toSearch?.toLowerCase() || "")
    );
  });
  const isListView = filters.view === "list";
  if (processedData.length === 0) {
    return (
      <div
        id="productsSection"
        className="flex flex-col items-center justify-center h-[50vh] text-center space-y-4"
      >
        <PackageSearch className="w-16 h-16 text-gray-400" />
        <h2 className="text-xl font-semibold text-gray-700">
          No Products Found
        </h2>
        <p className="text-gray-500">
          We couldn’t find any results matching your search. Try adjusting your
          keywords or filters.
        </p>
        <button
          onClick={() => window.location.reload()}
          className="px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition"
        >
          Refresh
        </button>
      </div>
    );
  }
  return (
    <div
      id="productsSection"
      className="container flex items-center justify-center mx-auto px-4 py-8"
    >
      {isListView ? (
        <div className="flex flex-col w-[80%] gap-6">
          {processedData.map((product) => (
            <ProductListCard
              className="w-full"
              key={product.id}
              product={product}
            />
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {processedData.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Products;
