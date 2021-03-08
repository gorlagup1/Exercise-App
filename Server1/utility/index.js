const jwt = require('jsonwebtoken');

exports.authenticateToken = function (req, res, next) {
  // Gather the jwt access token from the request header
  const token = req.headers['authorization'] || req.headers['Authorization'];
  if (token == null) return res.status(401).send({message: "Not Authorised. Plese login"}); // if there isn't any token

  jwt.verify(token, config.JWT_SECRET, (err, verifiedJwt) => {
    if (err) return res.status(403).send({message: "Invalid or expired token. Plese login again"})
    req.user = verifiedJwt.user;
    next();
  })
}
