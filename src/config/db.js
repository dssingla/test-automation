import mongoose from "mongoose";

const connectDB = async () => {
  try {
    console.log("Connecting to Mongo...");   // add this

    if (mongoose.connection.readyState >= 1) {
      console.log("Already connected to Mongo");
      return;
    }

    await mongoose.connect(process.env.MONGO_URI);

    console.log("🔥 MongoDB Connected Successfully");

  } catch (error) {
    console.log("❌ MongoDB connection error:", error);
  }
};

export default connectDB;
