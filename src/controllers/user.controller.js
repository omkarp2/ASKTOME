import {asynchandler} from "../util/asynchandler.js"
import { ApiError } from "../util/ApiError.js";
import { ApiResponse } from "../util/ApiResponse.js";

import { User } from "../models/user.model.js"

const registerUser = asynchandler(async (req,res)=>{

              // get the user details from frontend 
              // do your validation -- not empty email
              // check if user already exists: username  , email
               // check for images , check for avatar 
               // upload them to cloudnary  , avatar 
               // create user object  - create entry in db 
               //check for user  creation 
               // return response

                // con-1
               const {fullName,email,username,password}=req.body
               console.log("email:" ,email);
               
            //    if(fullname===""){
            //     throw new  ApiError(400 , "Full name is required")
            //    }

            if(

                // checking con-2
                [fullName,email,username,password].some((field)=>field?.trim()==="")
            ){
                         throw new ApiError(400,"All fields are required")
            }

                 //con-3
           const existedUser= await User.findOne({
                $or:[{username},{email}]
            })

            if (existedUser) {
                throw new ApiError(409, "User with email or username already exists")
            }
            //console.log(req.files);
             

         const user= await User.create({
                fullName:fullName,
                email,
                password,
                username:username.toLowerCase()
            });
                   
            // finding user 
          const createduser = await User.findById(user._id).select(
            "-password -refreshToken"
          )

          if(!createduser){
                     
            throw new ApiError(500,"Something went wrong while rejistering")
          }

          return res.status(201).json(
            new ApiResponse(200,createduser ,"User Registered")
          )

})

export {registerUser};

