import mongoose from 'mongoose';
import { Jwt } from 'jsonwebtoken';
import bcrypt from "bcrypt";

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

// password encryption
userSchema.pre("save", async function (next) {
    if (!this.isModified("password")){return next()}
    this.password = await bcrypt.hash(this.password, 10)
    next()
  })
  
  
  // compare password
  userSchema.methods.comparePassword = async function (password) {
    return await bcrypt.compare(password, this.password);
  };
  
  //jwt token
  // access token
  userSchema.methods.generateAccessToken = function () {
    return jwt.sign(
      {
        _id: this._id,
        fullName: this.fullName,
        email: this.email,
        userName: this.userName,
        phone: this.phone,
      },
      process.env.JWT_ACCESS_TOKEN,
      { expiresIn: process.env.JWT_ACCESS_TOKEN_EXPIRY }
    );
  };
  
  
  // refresh token
  userSchema.methods.generateRefreshToken = function () {
    return jwt.sign(
      {
        _id: this._id,
      },
      process.env.JWT_REFRESH_TOKEN,
      { expiresIn: process.env.JWT_REFRESH_TOKEN_EXPIRY}
    );
  };

const User = mongoose.model("User", userSchema);

export default User;
