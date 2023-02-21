module.exports = {
  reactStrictMode: true,
  images: {
    loader: "imgix",
    path: process.env.NEXT_PUBLIC_API_URL_IMAGE + "/original",
  },
};
