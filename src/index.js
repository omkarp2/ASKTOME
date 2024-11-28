import dotenv from "dotenv" // importing enviorement variable in first file so that all evc should load everywhere 
import {app}  from "./app.js"

import mongoose, { connect } from "mongoose";
import connectDB from "./db1/dbConnect.js";
 
   dotenv.config({
      path:'./env'
   })




   
connectDB()
 // APP IS LISTENING TO THE DATABASE
 .then(()=>{
   app.listen(process.env.PORT || 8000 , ()=>{
      console.log(`server is running at port : ${process.env.PORT}`);
   })
 })
 .catch((err) =>{
           console.log("MONGO DB CONNECTION FAILED !!" ,err)
 
 })

//  import express from "express"
//  const app =express()

// // better approach to connect to database 
// // ; for cleaning purposes 

// ;( async()=>{

//     try{
//    await mongoose.connect(`${process.env.MONGODB_URI}`)
//      app.on("error" , ()=>{
//         console.log("ERR" , error);
//         throw error
       
//      })

//       app.listen(process.env.PORT,()=>{
//          console.log(`App is listening on port ${process.env.PORT}`)
         
//       })
//     }catch(error)
//     {
//       console.error("ERROR" , error)
//       throw error
//     }
// })()





