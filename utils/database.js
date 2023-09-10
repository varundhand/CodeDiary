import mongoose from "mongoose";

let isConnected = false;

export const connectToDB = async () => {
  mongoose.set("strictQuery", true);

  if (isConnected) {
    console.log("MongoDB is already connected!");
  }

  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      dbName: "code_diary",
      // useNewUrlParse: true, // According to Mongoose 6.0 docs, this code is redundant
      // useUnifiedToolgy: true,
    });

    isConnected = true;

    console.log("MongoDB connected");
  } catch (error) {
    console.log(error);
  }
};
