import mongoose from "mongoose";

const connectDB = async () => {
  try {
    // mongoose.connect('mongodb://127.0.0.1:27017/myapp');
    await mongoose.connect(process.env.MONGO);
    console.log("MongoDB is connected!")
  } catch (err) {
    console.log(err);
  }
};

export default connectDB;

