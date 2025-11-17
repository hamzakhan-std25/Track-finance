// next.config.js
import withPWAInit from "next-pwa";

const withPWA = withPWAInit({
  dest: "public",
  register: true,
  skipWaiting: true,
  disable: process.env.NODE_ENV === "development", // SW disabled in dev
});

const nextConfig = {
  reactStrictMode: true,

  experimental: {
    optimizePackageImports: ["firebase"],
  },
};

export default withPWA(nextConfig);
