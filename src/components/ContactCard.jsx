import React from "react";

const ContactCard = ({ icon: Icon, iconColor, iconBg, title, description }) => {
  return (
    <div className="p-6 w-50 bg-white rounded-xl shadow-md flex flex-col items-center text-center hover:shadow-lg transition">
      <div
        className={`p-4 rounded-full mb-4`}
        style={{ backgroundColor: iconBg }}
      >
        <Icon className="w-6 h-6" style={{ color: iconColor }} />
      </div>
      <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  );
};

export default ContactCard;
