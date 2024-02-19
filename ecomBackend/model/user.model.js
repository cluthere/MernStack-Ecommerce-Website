import mongoose from 'mongoose'

const userSchema = mongoose.Schema({
    userName:{
        type:String,
        required:[true, "please provide userName"]
    },
    FullName:{
        type:String,
        required:[true, "please provide your full name"]
    },
    Avatar:{
        type:String,
        required:[true, "please provide your avatar"]
    },
    Phone:{
        type:String,
        required:[true, "Please provide your active Phone number"]
    },
    password:{
        type:String,
        required:[true, "Please provide password"]
    },
    email:{
        type:String,
        required:[true, "Please provide your email address"]
    },
    address:{
        type:String,
    }

},{timesmaps: true})

const User = mongoose.model(User, userSchema);

export default User;
