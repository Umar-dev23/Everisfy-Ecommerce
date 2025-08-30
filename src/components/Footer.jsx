import React from "react";
import SocialButton from "@/components/SocialButton";
import FooterPageLinks from "@/components/FooterPageLinks";
import { BriefcaseBusiness } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();

  const companyPages = ["About Us", "Careers", "Contact", "Blog"];
  const supportPages = ["Help Center", "Returns", "Shipping", "Track Order"];
  const legalPages = [
    "Privacy Policy",
    "Terms of Service",
    "Cookie Policy",
    "GDPR",
  ];

  return (
    <footer className="bg-gray-50 bottom-0 left-0 w-full border-t border-gray-200 py-6 px-6 md:px-8 z-50">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="flex flex-col lg:flex-row lg:justify-between gap-10 mb-8">
          {/* Brand Section */}
          <div className="lg:w-1/3">
            <div
              className="flex items-center cursor-pointer gap-2 mb-4"
              onClick={() => {
                navigate("/");
              }}
            >
              <BriefcaseBusiness className="text-green-500 w-7 h-7" />
              <span className="text-2xl font-bold text-green-500">
                EVersify
              </span>
            </div>

            <p className="text-gray-600 text-sm leading-relaxed max-w-md mb-6">
              Your one-stop destination for quality products at affordable
              prices. Discover amazing deals and shop with confidence.
            </p>
            <SocialButton />
          </div>

          {/* Links Sections */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 w-full lg:w-2/3">
            <FooterPageLinks title="Company" pages={companyPages} />
            <FooterPageLinks title="Support" pages={supportPages} />
            <FooterPageLinks title="Legal" pages={legalPages} />
          </div>
        </div>

        {/* Bottom Copyright Section */}
        <div className="border-t border-gray-200 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-600 text-sm text-center md:text-left">
              © 2025 ECommerce. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center md:justify-end items-center gap-4">
              <a
                href="#"
                className="text-gray-600 hover:text-gray-900 text-sm transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-gray-900 text-sm transition-colors"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-gray-900 text-sm transition-colors"
              >
                Cookie Settings
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
