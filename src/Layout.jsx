import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Layout = () => {
  const [toSearch, setToSearch] = useState("");

  function handleSearchChange(value) {
    setToSearch(value);
  }

  return (
    <div className="min-h-screen flex flex-col">
      {/* Always visible header */}
      <Header onChangeInput={handleSearchChange} />

      {/* Page content changes here */}
      <main
        className="
          flex-1 w-full
          max-w-7xl mx-auto
          px-2 sm:px-4 md:px-6 lg:px-8
          py-4 sm:py-6
        "
      >
        <Outlet context={{ toSearch }} />
      </main>

      {/* Footer (optional) */}
      <Footer />
    </div>
  );
};

export default Layout;
