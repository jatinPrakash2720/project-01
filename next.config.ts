import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Allow opening the dev server from a phone on the LAN (http://192.168.x.x:3000)
  allowedDevOrigins: ["192.168.*.*", "10.*.*.*", "172.*.*.*"],
};

export default nextConfig;
