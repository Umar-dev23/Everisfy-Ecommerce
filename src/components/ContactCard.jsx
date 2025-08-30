import React from "react";

const ContactCard = ({ icon: Icon, iconColor, iconBg, title, description }) => {
  return (
    <div className="p-6 w-full sm:w-64 bg-white rounded-xl shadow-md flex flex-col items-center text-center hover:shadow-lg transition">
      {/* Icon Wrapper */}
      <div
        className="p-4 rounded-full mb-4 flex items-center justify-center"
        style={{ backgroundColor: iconBg }}
      >
        <Icon className="w-6 h-6" style={{ color: iconColor }} />
      </div>

      {/* Title */}
      <h3 className="text-lg font-semibold text-gray-900">{title}</h3>

      {/* Description */}
      <p className="text-sm text-gray-600 mt-1">{description}</p>
    </div>
  );
};

export default ContactCard;
