import mongoose from "mongoose";


const userCollection = "users";

const userSchema = new mongoose.Schema({
    name:String,
    password:String,
    email:{
        type:String,
        unique:true
    }
});

export const userModel = mongoose.model(userCollection, userSchema);