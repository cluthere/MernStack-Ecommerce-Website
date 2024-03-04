import mongoose from "mongoose";
import {DB_NAME} from "../constant.js";
import {} from "dotenv/config.js";

const dbConnect = async()=>{
    try{
        const connection = await mongoose.connect(`${process.env.DB_URI}/${DB_NAME}`);
        console.log(`mongodb connected to db: ${connection.connection.host}`);
    }
    catch(error){
        console.log(`error found in mongodb connection :- ${error}`);
    }
}

export default dbConnect;