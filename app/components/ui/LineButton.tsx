"use client";

import { Instagram } from "lucide-react";
import { motion } from "framer-motion";
import { INSTAGRAM_URL } from "../../siteConfig";

interface LineButtonProps {
  className?: string;
  size?: "sm" | "md" | "lg";
  href?: string;
}

export default function LineButton({
  className = "",
  size = "md",
  href = INSTAGRAM_URL,
}: LineButtonProps) {
  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.97 }}
      className={`inline-flex items-center gap-2 bg-brand-red hover:bg-brand-red-dark text-white font-bold rounded-full transition-colors pulse-red ${sizes[size]} ${className}`}
    >
      <Instagram size={size === "lg" ? 22 : 18} />
      Instagramで予約相談
    </motion.a>
  );
}
