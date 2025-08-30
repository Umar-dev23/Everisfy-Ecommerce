import React, { useState } from "react";
import { Send, User, Mail, MessageSquare, Phone } from "lucide-react";
import ContactCard from "@/components/ContactCard";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [charCount, setCharCount] = useState(0);

  const contactData = [
    {
      icon: MessageSquare,
      iconColor: "#16a34a", // green
      iconBg: "#dcfce7", // light green
      title: "Live Chat",
      description: "Available 24/7",
    },
    {
      icon: Phone,
      iconColor: "#2563eb", // blue
      iconBg: "#dbeafe", // light blue
      title: "Call Us",
      description: "+123 456 7890",
    },
    {
      icon: Mail,
      iconColor: "#d97706", // orange
      iconBg: "#fef3c7", // light orange
      title: "Email",
      description: "support@example.com",
    },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (name === "message") setCharCount(value.length);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Thank you for your message! We will get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
    setCharCount(0);
  };

  return (
    <div
      id="contact"
      className="min-h-screen bg-green-50 flex flex-col items-center justify-center w-full px-4 py-10"
    >
      {/* Header */}
      <div className="max-w-2xl md:max-w-3xl lg:max-w-4xl w-full mb-10 text-center">
        <h1 className="text-2xl md:text-4xl text-green-500 font-bold mb-3">
          Get In Touch
        </h1>
        <p className="text-base md:text-lg text-gray-700">
          Have a question or want to work together? We'd love to hear from you.
          Send us a message and we'll respond as soon as possible.
        </p>
      </div>

      {/* Form */}
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-lg md:max-w-2xl bg-white rounded-2xl shadow-xl shadow-green-900/20 p-6 md:p-8 space-y-6"
      >
        {/* Name Field */}
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Full Name <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <User className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your full name"
              required
              className="pl-10 w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors"
            />
          </div>
        </div>

        {/* Email Field */}
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Email Address <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Mail className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email address"
              required
              className="pl-10 w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors"
            />
          </div>
        </div>

        {/* Message Field */}
        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Your Message <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <div className="absolute top-3 left-3 pointer-events-none">
              <MessageSquare className="h-5 w-5 text-gray-400" />
            </div>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Write your message here..."
              required
              rows={5}
              maxLength={1000}
              className="pl-10 w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors resize-vertical"
            />
          </div>
          <div className="text-right text-xs md:text-sm text-gray-500 mt-1">
            {charCount}/1000 characters
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full sm:w-auto bg-green-600 hover:bg-green-700 text-white py-3 px-6 rounded-lg font-medium transition-colors flex items-center justify-center mx-auto"
        >
          <Send className="h-5 w-5 mr-2" />
          Send Message
        </button>
      </form>

      {/* Contact Info Cards */}
      <div className="grid grid-cols-1 mt-10 sm:grid-cols-2 lg:grid-cols-3 gap-6">
  {contactData.map((item, index) => (
    <ContactCard key={index} {...item} />
  ))}
</div>
    </div>
  );
};

export default ContactUs;
