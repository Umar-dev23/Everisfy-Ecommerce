import React from "react";


const FooterPageLinks = ({ title, pages }) => {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
      <ul className="space-y-3">
        {pages.map((page, index) => (
          <li key={index}>
            <a
              href="#"
              className="text-gray-600 hover:text-green-600 transition-colors duration-200 text-sm"
            >
              {page}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterPageLinks;