const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/group-me",
    createProxyMiddleware({
      target: "https://api.groupme.com/v3",
      changeOrigin: true,
    })
  );
};
