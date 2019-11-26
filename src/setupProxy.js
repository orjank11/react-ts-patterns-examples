const proxy = require("http-proxy-middleware");

module.exports = function(app) {
  app.use(
    proxy("/api", {
      target: "restcountries.eu/rest/v2",
      changeOrigin: true,
      https: true,
      pathRewrite: { "^/api": "" }
    })
  );
};
