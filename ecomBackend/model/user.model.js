import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
    userName:{
        type:String,
        required:[true, "please provide userName"],
        unique: true,
        lowerCase:true
    },
    fullName:{
        type:String,
        required:[true, "please provide your full name"]
    },
    avatar:{
        type:String,
        required:[true, "please provide your avatar"]
    },
    Phone:{
        type:String,
        required:[true, "Please provide your active Phone number"],
        unique: true,
    },
    password:{
        type:String,
        required:[true, "Please provide password"]
    },
    email:{
        type:String,
        required:[true, "Please provide your email address"],
        unique:true,
    },
    address:{
        type:String,
    }

},{timesmaps: true})

const User = mongoose.model("User", userSchema);

export default User;
