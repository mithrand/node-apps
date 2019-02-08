const router = require('express').Router();

const requestLogger = router.use((req, res, next) => {
  console.info(
    `${req.method.toUpperCase()} ${req.protocol}://${req.host}${req.url} ${
      req.socket.localAddress
    }:${req.socket.localPort} HTTP v${req.httpVersion}`,
  );
  next();
});

module.exports = requestLogger;
