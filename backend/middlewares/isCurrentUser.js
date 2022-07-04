const jwt = require("jsonwebtoken");

const isCurrentUser = (req, res, next) => {
  const { authorization } = req.headers;
  try {
    const token = authorization.split(" ")[1];
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const { username, userId } = decoded;
    req.username = username;
    req.userid = userId;
    req.hasAccess = true;
    next();
  } catch {
    next();
  }
};

module.exports = isCurrentUser;
