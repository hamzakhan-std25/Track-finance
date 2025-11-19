// next.config.mjs
import withSerwist from "@serwist/next";

const serwistConfig = {
  swSrc: "public/src/sw.js",
  swDest: "public/sw.js",
  disable: process.env.NODE_ENV === "development",
};

const nextConfig = { /* ... */ };

export default withSerwist(serwistConfig)(nextConfig);
