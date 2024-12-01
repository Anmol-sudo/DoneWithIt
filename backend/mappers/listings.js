const config = require("config");

const listingMapper = (listing) => {
  const baseUrl = config.get("assetsBaseUrl");

  const mapImage = (image) => ({
    url: `${baseUrl}${image.fileName}_full.jpg`,
    thumbnailUrl: `${baseUrl}${image.fileName}_thumb.jpg`,
  });

  return {
    id: listing.id,
    title: listing.title,
    price: listing.price,
    categoryId: listing.categoryId,
    description: listing.description,
    images: listing.images.map(mapImage),
    userId: listing.userId,
    // Add any other properties that might be relevant
  };
};

module.exports = listingMapper;
