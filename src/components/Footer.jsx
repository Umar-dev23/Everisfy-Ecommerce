import React from "react";
import SocialButton from "@/components/SocialButton";
import FooterPageLinks from "@/components/FooterPageLinks";
import { BriefcaseBusiness } from "lucide-react";

const Footer = () => {
  const companyPages = ["About Us", "Careers", "Contact", "Blog"];
  const supportPages = ["Help Center", "Returns", "Shipping", "Track Order"];
  const legalPages = [
    "Privacy Policy",
    "Terms of Service",
    "Cookie Policy",
    "GDPR",
  ];

  return (
    <footer className="bg-gray-50  bottom-0 left-0 w-full border-t border-gray-200 py-6 px-8 z-50">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="flex justify-between gap-8 mb-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div
              className="flex items-center cursor-pointer gap-1 "
              onClick={() => {
                navigate("/");
              }}
            >
              <BriefcaseBusiness className=" text-green-500" />
              <span className="text-2xl font-bold text-gray-900  text-green-500">
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
          <FooterPageLinks title="Company" pages={companyPages} />
          <FooterPageLinks title="Support" pages={supportPages} />
          <FooterPageLinks title="Legal" pages={legalPages} />
        </div>

        {/* Bottom Copyright Section */}
        <div className="border-t border-gray-200 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-600 text-sm">
              © 2025 ECommerce. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
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
