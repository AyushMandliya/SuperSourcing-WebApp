// next.config.js

const nextConfig = {
  images: {
    domains: [
      "cdn.britannica.com", // Example domain already configured
      "imgs.search.brave.com", // Another example domain already configured
      "upload.wikimedia.org", // Another example domain already configured
      "www.indiewire.com", // Add the new domain here
      "theblaze.com",
    ],
  },
  // Other configurations can be added as needed
};

module.exports = nextConfig;
