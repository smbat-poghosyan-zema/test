const jwt = require('jsonwebtoken');

/**
 * Middleware to authenticate requests using JWT.
 * Expects Authorization header: "Bearer <token>".
 * On success attaches decoded user info to req.user.
 */
module.exports = function (req, res, next) {
  const authHeader = req.headers.authorization || '';
  const [scheme, token] = authHeader.split(' ');

  if (scheme !== 'Bearer' || !token) {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = { id: decoded.id, role: decoded.role };
    next();
  } catch (err) {
    return res.status(401).json({ message: 'Unauthorized' });
  }
};
