const withOptimizedImages = require("next-optimized-images");
const withFonts = require("next-fonts");

module.exports = withFonts(
  withOptimizedImages({
    /* config for next-optimized-images */
    // your config for other plugins or the general next.js here...
    env: {
      // HOST
      ABLY_API_KEY:"4rdpig.qegwCw:y4s4geYgYFdWAVZhU2pUN8kAx8dlyu2UBNWDpZU3MlI",
    }
  })
);
