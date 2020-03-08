const workboxBuild = require("workbox-build");

// NOTE: This should be run *AFTER* all your assets are built
const buildSW = () => {
  return workboxBuild.generateSW({
    swDest: "build/sw.js",
    clientsClaim: true,
    skipWaiting: true,
    globDirectory: "build",
    globIgnores: ["**/service-worker.js", "**precache-manifest**"],
    globPatterns: ["**/*{js,css,html,png}"],
    runtimeCaching: [
      {
        urlPattern: new RegExp("https://jsonplaceholder.typicode.com"),
        handler: "NetworkFirst"
      }
    ]
  });
};

buildSW();
