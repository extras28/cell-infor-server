import mongoose from "mongoose";

const database = {
  connect: async () => {
    try {
      await mongoose.connect(
        `mongodb+srv://extras28:nguyenanhdung28@extras28.qswwap5.mongodb.net/Embedded?retryWrites=true&w=majority`
      );
      console.log("connected to MongoDB successfuly");
    } catch (error) {
      console.log("connect failed");
      console.log(error.message);
    }
  },
};

export default database;
