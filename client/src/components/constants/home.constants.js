import { Users, Shield, CloudRain } from "lucide-react";
import { Camera, Bike, Package } from "lucide-react";
import { IMAGES } from "./images";

export const CATEGORIES = [
  {
    id: 1,
    name: "Action Cameras",
    icon: Camera,
    color: "bg-gradient-to-br from-[#FF8C00] to-brand",
    link: "/shop?category=cameras",
    description: "Premium action cameras for every ride",
  },
  {
    id: 2,
    name: "Motorcycle Mounts",
    icon: Bike,
    color: "bg-gradient-to-br from-[#00D9FF] to-electric-blue",
    link: "/shop?category=bike-mounts",
    description: "Secure mounting systems for your bike",
  },
  {
    id: 3,
    name: "Accessories",
    icon: Package,
    color: "bg-gradient-to-br from-[#FF6B6B] to-error-red",
    link: "/shop?category=accessories",
    description: "Everything you need for perfect footage",
  },
];

export const WHY_RIDER_LENS_FEATURES = [
  {
    icon: Users,
    title: "Built for Riders",
    description: "Designed by riders who understand what you need on the road.",
    color: "bg-brand",
  },
  {
    icon: Shield,
    title: "Vibration-Safe Systems",
    description:
      "Advanced mounting technology that protects your footage and gear.",
    color: "bg-electric-blue",
  },
  {
    icon: CloudRain,
    title: "Weather Ready",
    description: "Rain or shine, our gear keeps recording through it all.",
    color: "bg-error-red",
  },
];

export const FEATURED_PRODUCTS = [
  {
    id: 1,
    name: "GoPro Hero 12 Black",
    price: 449.99,
    image: IMAGES.products.gopro,
    badge: "Best Seller",
  },
  {
    id: 2,
    name: "Camera Chest Mount",
    price: 34.99,
    image: IMAGES.products.chest_Mount,
  },
  {
    id: 3,
    name: "Pro Chin Mount Kit",
    price: 299.99,
    image: IMAGES.products.chin_Mount,
  },
  {
    id: 4,
    name: "GoPro Hero 11 Black",
    price: 349.99,
    image: IMAGES.products.gopro,
  },
  {
    id: 5,
    name: "Helmet Mount Pro",
    price: 89.99,
    image: IMAGES.products.helmet_mount,
  },
  {
    id: 6,
    name: "Vibration Dampener",
    price: 219.99,
    image: IMAGES.products.dampener,
  },
];

export const ACTION_VIDEOS = [
  {
    id: 1,
    thumbnail: "/images/video-thumb-1.jpg",
    title: "Helmet Cam for Everyday Riding",
    url: "https://www.youtube.com/shorts/0eL55QxHbVs",
  },
  {
    id: 2,
    thumbnail: "/images/video-thumb-2.jpg",
    title: "Pro Mounting Techniques",
    url: "https://www.youtube.com/shorts/6WiA9ND5nAc",
  },
];
