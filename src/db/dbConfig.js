import mongoose from "mongoose";
import { MONGO_URI } from "../../config/keys";
const connectDB = async () => {
  try {
    const uri = MONGO_URI;
    await mongoose
      .connect(uri, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true,
        dbName: "mern-blog-db",
      })
      .catch((error) => console.log(error));
    const connection = mongoose.connection;
    console.log("MONGODB CONNECTED SUCCESSFULLY!");
  } catch (error) {
    console.log(error);
    return error;
  }
};

export default connectDB;
