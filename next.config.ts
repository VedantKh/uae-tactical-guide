import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/uae-tactical-guide",
  reactCompiler: true,
  async redirects() {
    return [
      {
        source: "/",
        destination: "/uae-tactical-guide",
        basePath: false as const,
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
