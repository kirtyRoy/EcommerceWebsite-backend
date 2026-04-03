const jwt = require("jsonwebtoken");

const generateToken = (id, role) => {
  if (!id || !role) throw new Error("ID and role are required for JWT");
  if (!process.env.JWT_SECRET) throw new Error("JWT_SECRET is not defined in .env");

  return jwt.sign({ id, role }, process.env.JWT_SECRET, { expiresIn: "7d" });
};

module.exports = generateToken;