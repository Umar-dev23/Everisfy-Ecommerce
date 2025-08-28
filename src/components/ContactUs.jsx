import React, { useState } from "react";
import { Send, User, Mail, MessageSquare, Phone } from "lucide-react";
import ContactCard from "@/components/ContactCard";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

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
  const [charCount, setCharCount] = useState(0);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (name === "message") {
      setCharCount(value.length);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically handle form submission
    console.log("Form submitted:", formData);
    alert("Thank you for your message! We will get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
    setCharCount(0);
  };

  return (
    <div
      id="contact"
      className="min-h-screen bg-green-50 flex flex-col items-center justify-center w-[100%] p-4"
    >
      <div className="w-[60%] p-5  overflow-hidden">
        {/* Header */}
        <div className="  p-8 text-center">
          <h1 className="text-4xl text-green-500 font-bold mb-3">
            Get In Touch
          </h1>
          <p className="text-lg">
            Have a question or want to work together? We'd love to hear from
            you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>
      </div>
      {/* Form */}
      <form
        onSubmit={handleSubmit}
        className="p-8 w-[60%] bg-white rounded-2xl shadow-xl shadow-green-900/30 space-y-6"
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
          <div className="text-right text-sm text-gray-500 mt-1">
            {charCount}/1000 characters
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-[30%] bg-green-600 hover:bg-green-700 text-white py-3 px-3 rounded-lg font-medium transition-colors flex items-center justify-center"
        >
          <Send className="h-5 w-5 mr-2" />
          Send Message
        </button>
      </form>
      <div className=" flex items-center justify-evenly p-8">
        <div className="w-[100%] justify-evenly flex gap-10 ">
          {contactData.map((item, index) => (
            <ContactCard key={index} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
