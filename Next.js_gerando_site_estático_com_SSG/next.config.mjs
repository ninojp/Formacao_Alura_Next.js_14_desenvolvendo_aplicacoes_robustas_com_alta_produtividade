/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // assetPrefix: '/out',
  trailingSlash: true,
  images: {
    // remotePatterns: [
    //   {
    //     protocol: "https",
    //     hostname: "raw.githubusercontent.com",
    //     pathname: "**",
    //   },
    // ],
    loader: 'custom',
    loaderFile: './src/app/imagem.js',
  },
};

export default nextConfig;
