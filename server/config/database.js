const mongoose = require('mongoose');
require('dotenv').config();
// console.log("// DEBUG: Loading database.js...");
const connectDB = () => {
    // console.log("// DEBUG: Connecting to DB with MONGO_URI =", process.env.MONGO_URI);
    mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log("// DEBUG: MongoDB connected successfully");
    })
    .catch((err) => {
        console.error("// DEBUG: MongoDB connection error:", err.message)
    })
}
// console.log("// DEBUG: Database.js loaded successfully");
module.exports = connectDB;