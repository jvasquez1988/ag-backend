import Mongoose from "mongoose";

export async function connect() {
  try {

    require('dotenv').config({path:'.env'});

    await Mongoose.connect(process.env.MONGO_CONNECTION || "mongodb+srv://jcvasquez:UnavezfuialaplayaconDios@test-ag.qxvritb.mongodb.net/?retryWrites=true&w=majority");

    console.log(`Conectados a DB Mongo en ${process.env.MONGO_CONNECTION}`);
  } catch (e) {
    console.log(e);
  }
}
