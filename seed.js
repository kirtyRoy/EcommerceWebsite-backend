const mongoose = require("mongoose");
require("dotenv").config();
const User = require("./models/User");

const seedUsers = async () => {
  await mongoose.connect(process.env.MONGO_URI);

  await User.deleteMany();

  await User.create({ name: "Kirty Roy", email: "kirty@ecom.com", password: "123456", role: "admin" });
  await User.create({ name: "Messy", email: "messy@ecom.com", password: "123456", role: "user" });

  process.exit();
};

seedUsers();