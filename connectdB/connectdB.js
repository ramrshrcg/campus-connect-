import mongoose from "mongoose";

const connectdB = async () => {
  try {
    await mongoose.connect("mongodb+srv://ramrshrcg:UGVjG13JNbW5wEI2@camousdb.8ehoh.mongodb.net/?retryWrites=true&w=majority&appName=camousdb");
    console.log("Connected to MongoDB");
  } catch (error) {
    console.log("Error connecting to MongoDB");
  }
};
export default connectdB;
