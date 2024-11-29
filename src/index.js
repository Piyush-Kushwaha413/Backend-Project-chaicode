import  connectDB  from "./db/connect_db.js";
import dotenv from "dotenv"

dotenv.config({
    path: './.env'
})

connectDB();

/*

import mongoose from "mongoose";
import { DB_Name } from "./constants.js";
import  express  from "express";
const app = express() 
// connect db 
;(async ()=>{
    try {
        
       await mongoose.connect(`${process.env.MONGODB_URI}/${DB_Name}`);

        // not know why use this 
        app.on("error", (error)=>{
            console.log("error 23:",error);
            throw error

        })
        // app listen 
        app.listen(`${process.env.PORT}`, ()=>(
            console.log(`app is listeing on post ${process.env.PORT}`)
        ))


    } catch (error) {
        console.log("error 35",error);
        // throw error
          
    }
})()
*/
