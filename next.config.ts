import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["api.dicebear.com", "res.cloudinary.com"],
  },
};

module.exports = nextConfig;
