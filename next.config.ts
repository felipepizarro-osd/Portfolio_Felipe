import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
  env: {
    SERVICE_ID : 'service_j9tkuj3',
    TEMPLATE_ID : 'template_bjzq08l',
    PUBLIC_KEY : '8gcjqXlh7Q0QhhfiW',
  },
};

export default nextConfig;
