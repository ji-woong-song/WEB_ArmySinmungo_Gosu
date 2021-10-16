const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use("/board", createProxyMiddleware({ target: "https://armysinmungo-api.herokuapp.com", changeOrigin: true}));
};