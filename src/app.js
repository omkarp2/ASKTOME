import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"


const app = express();
 
app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials:true
}) )

// form res
app.use(express.json({limit:"16kb"}))

// url data res

app.use(express.urlencoded({extended: true, limit:"16kb"}))

// to store files , pdf & images
app.use(express.static("public1"))

// to read user browser cookies 
app.use(cookieParser())

// Routes import 

import router from './routes/user.routes.js'

// routes declaration 

app.use("/users" , router)


export {app}