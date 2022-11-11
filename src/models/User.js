import {Schema, model} from "mongoose";


const userSchena = new Schema({
    firstname:{
        type:String,
        required: true
    },
    lastname:{
        type:String,
        required: true
    },
    age:{
        type:Number,
        required: true
    },    
});

export default model("User", userSchena);