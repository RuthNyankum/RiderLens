import { Facebook, Instagram, Youtube } from "lucide-react";

export const footerSections = [
  {
    title: "Shop",
    links: [
      { to: "/shop?category=cameras", label: "Action Cameras" },
      { to: "/shop?category=helmet-mounts", label: "Helmet Mounts" },
      { to: "/shop?category=bike-mounts", label: "Bike Mounts" },
      { to: "/shop?category=accessories", label: "Accessories" },
    ],
  },
  {
    title: "Support",
    links: [
      { to: "/contact", label: "Contact Us" },
      { to: "/shipping", label: "Shipping Info" },
      { to: "/returns", label: "Returns" },
    ],
  },
  {
    title: "Legal",
    links: [
      { to: "/privacy-policy", label: "Privacy Policy" },
      { to: "/terms-conditions", label: "Terms & Conditions" },
    ],
  },
];

export const socialLinks = [
  {
    name: "Facebook",
    icon: Facebook,
    url: "https://facebook.com/riderlens",
    ariaLabel: "Follow us on Facebook",
  },
  {
    name: "Instagram",
    icon: Instagram,
    url: "https://instagram.com/riderlens",
    ariaLabel: "Follow us on Instagram",
  },
  {
    name: "YouTube",
    icon: Youtube,
    url: "https://youtube.com/@riderlens",
    ariaLabel: "Subscribe to our YouTube channel",
  },
];
