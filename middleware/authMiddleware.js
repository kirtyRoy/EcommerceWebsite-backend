// authMiddleware.js
const jwt = require("jsonwebtoken");
const User = require("../models/User");

// Protect routes
const protect = async (req, res, next) => {
  let token = req.headers.authorization;

  if (token && token.startsWith("Bearer")) {
    try {
      token = token.split(" ")[1]; // remove "Bearer "
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user = decoded.id; // attach user ID
      next(); // pass to next controller
    } catch {
      return res.status(401).json({ message: "Not authorized, token failed" });
    }
  } else {
    return res.status(401).json({ message: "No token provided" });
  }
};

// Admin middleware
const admin = async (req, res, next) => {
  const user = await User.findById(req.user);
  if (user && user.role === "admin") {
    next();
  } else {
    res.status(403).json({ message: "Admin access only" });
  }
};

module.exports = { protect, admin };