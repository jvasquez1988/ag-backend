import Mongoose from "mongoose";

export async function connect() {
  try {
    await Mongoose.connect("mongodb://localhost:27017/mongodbgrapql");

    console.log("Conectados a DB Mongo en mongodb://localhost:27017/mongodbgrapql");
  } catch (e) {
    console.log(e);
  }
}
