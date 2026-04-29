import mongoose from "mongoose";
import bcrypt from "bcrypt";
import config from "./config.js";
import User from "./models/user.js";

async function createAdmin() {
  try {
    await mongoose.connect(config.mongodbURI);
    const email = "admin@admin.com";
    const password = "admin";
    
    let admin = await User.findOne({ email });
    if (admin) {
      console.log("Admin already exists!");
    } else {
      const hashedPassword = bcrypt.hashSync(password, 10);
      admin = new User({
        email,
        firstname: "System",
        lastname: "Admin",
        password: hashedPassword,
        isAdmin: true,
        isStaff: false,
        role: "admin"
      });
      await admin.save();
      console.log("Admin created successfully! Email: " + email + ", Password: " + password);
    }
  } catch (err) {
    console.error(err);
  } finally {
    mongoose.disconnect();
  }
}

createAdmin();
