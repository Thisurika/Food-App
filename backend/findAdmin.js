import mongoose from "mongoose";
import config from "./config.js";
import User from "./models/user.js";

async function findAdmins() {
  try {
    await mongoose.connect(config.mongodbURI);
    const admins = await User.find({ $or: [{ isAdmin: true }, { role: "admin" }] });
    console.log("Admins found:", admins.map(a => ({ email: a.email, firstname: a.firstname, lastname: a.lastname })));
  } catch (err) {
    console.error(err);
  } finally {
    mongoose.disconnect();
  }
}

findAdmins();
