# Minimal React PWA

The idea of this project is to create a playground for a minimal working PWA in a ReactJS context. For this purpose a test API is called and the result will be available even if there is no internet connection.

# What is happening here?

You can fetch a todo by pressing the respective button. The rest API is provided by https://jsonplaceholder.typicode.com/. You will randomly select a todo with an ID between 1 and 10. As soon as you fetch a todo it gets cached for the offline case. So you can use the app in a offline case as well.

# Sources

[Generate a Service Worker with Workbox-build](https://developers.google.com/web/tools/workbox/guides/generate-service-worker/workbox-build)

# Credits

_This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app)._

Background image: Photo by Donald Giannatti on Unsplash

The Test-API is provided by: https://jsonplaceholder.typicode.com/
