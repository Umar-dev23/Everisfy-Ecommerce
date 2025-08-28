import React from "react";
import { Button } from "@/components/ui/button";
import { Instagram, Twitter, Linkedin, MessageCircleMore } from "lucide-react";

const SocialButton = () => {
  const socialLinks = [
    {
      icon: <Instagram className="w-4 h-4" />,
      href: "#",
      label: "Instagram",
    },
    {
      icon: <Twitter className="w-4 h-4" />,
      href: "#",
      label: "Twitter",
    },
    {
      icon: <Linkedin className="w-4 h-4" />,
      href: "#",
      label: "LinkedIn",
    },
    {
      icon: <MessageCircleMore className="w-4 h-4" />,
      href: "#",
      label: "WhatsApp",
    },
  ];

  return (
    <div className="flex items-center gap-3">
      {socialLinks.map((social, index) => (
        <Button
          key={index}
          variant="outline"
          size="icon"
          className="rounded-full w-10 h-10 bg-white border-gray-300 hover:bg-green-50 hover:border-green-300 hover:text-green-600 transition-colors"
          asChild
        >
          <a
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={social.label}
          >
            {social.icon}
          </a>
        </Button>
      ))}
    </div>
  );
};

export default SocialButton;
