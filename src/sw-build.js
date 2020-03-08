const workboxBuild = require("workbox-build");

// NOTE: This should be run *AFTER* all your assets are built
const buildSW = () => {
  return workboxBuild.generateSW({
    // The destination to which the service worker will be generated
    swDest: "build/sw.js",
    // Life cycle method to claim a new client
    // https://developers.google.com/web/fundamentals/primers/service-workers/lifecycle#clientsclaim
    clientsClaim: true,
    // Install the new version of the service worker
    // https://bitsofco.de/what-self-skipwaiting-does-to-the-service-worker-lifecycle/
    skipWaiting: true,
    // Folder in which the global precaching will apply
    globDirectory: "build",
    // Ignore the following files
    globIgnores: ["**/service-worker.js", "**precache-manifest**"],
    // Apply precaching to all files that end with the following filetype
    globPatterns: ["**/*{js,css,html,json}"],
    // The runtime caching configuration
    runtimeCaching: [
      // Cache images as they are used
      {
        // Match any request that ends with .png, .jpg, .jpeg or .svg.
        urlPattern: /\.(?:png|jpg|jpeg|svg)$/,
        // Apply a cache-first strategy.
        handler: "CacheFirst",
        options: {
          // Use a custom cache name.
          cacheName: "images",
          // Only cache 10 images.
          expiration: {
            maxEntries: 10
          }
        }
      },
      // Cache requests that are made against the test API
      {
        // Match the request against the URL
        urlPattern: new RegExp("https://jsonplaceholder.typicode.com"),
        // Apply a network first (cache fallback) strategy
        handler: "NetworkFirst",
        options: {
          // Use a custom cache name.
          cacheName: "api-calls"
        }
      }
    ]
  });
};

// Finally build the service worker which was configured previously
buildSW();
