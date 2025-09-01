import React, { useState } from "react";
import { Send, User, Mail, MessageSquare, Phone } from "lucide-react";
import ContactCard from "@/components/ContactCard";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";


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
const ContactUs = () => {

  const form = useForm({
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });
  const { register, handleSubmit, formState } = form;
  const { errors } = formState;

  function onSubmit(data) {
    const templateParams = {
      name: data.name,
      email: data.email,
      message: data.message,
    };
    emailjs
      .send(import.meta.env.VITE_SERVICE_ID, import.meta.env.VITE_TEMPLATE_ID, templateParams, {
        publicKey: import.meta.env.VITE_PUBLIC_KEY,
        blockList: {
          watchVariable: "userEmail",
        },
        limitRate: {
          throttle: 0, // turn off the limit rate for these requests
        },
      })
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
        },
        (err) => {
          console.log("FAILED...", err);
        }
      );
  }
  return (
    <div
      id="contact"
      className="min-h-screen bg-green-50 flex flex-col items-center justify-center w-full px-4 py-10"
    >
      {/* Header */}
      <div className="max-w-6xl md:max-w-3xl lg:max-w-4xl w-full mb-10 text-center">
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
        onSubmit={handleSubmit(onSubmit)}
        noValidate
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
              // placeholder="Enter your full name"
              // required
              {...register("name", {
                required: {
                  value: true,
                  message: "The Name is Requried",
                },
              })}
              className="pl-10 w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors"
            />
            <p className="text-red-600">{errors.name?.message}</p>
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
              // placeholder="Enter your email address"
              // required
              {...register("email", {
                required: {
                  value: true,
                  message: "Email is required",
                },
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Invalid Email Format",
                },
                validate: {
                  notAdmin: (value) => {
                    return (
                      value !== "admin@gmail.com" || "The Admin mail is allowed"
                    );
                  },
                  notBlackListed: (value) => {
                    return (
                      !value.endsWith("bad.com") || "This domain is Forbidden"
                    );
                  },
                },
              })}
              className="pl-10 w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors"
            />
            <p className="text-red-600">{errors.email?.message}</p>
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
              rows={5}
              {...register("message", {
                required: {
                  value: true,
                  message: "message is required",
                },
              })}
              className="pl-10 w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors resize-vertical"
            />
            <p className="text-red-600">{errors.message?.message}</p>
          </div>
          <div className="text-right text-xs md:text-sm text-gray-500 mt-1">
            {/* {charCount}/1000 characters */}
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

      <div className="grid grid-cols-1 mt-10 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {contactData.map((item, index) => (
          <ContactCard key={index} {...item} />
        ))}
      </div>
    </div>
  );
};

export default ContactUs;
