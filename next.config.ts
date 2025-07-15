import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  basePath:
    process.env.NODE_ENV === "production" ? "/meraih-pengasih-margosari" : "",
  output: "export",
  images: {
    unoptimized: true, // Nonaktifkan optimisasi gambar
  },
  trailingSlash: true, // Untuk konsistensi path
};

export default nextConfig;
