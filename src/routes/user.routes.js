import { Router } from "express";
import { registerUser } from "../controllers/user.controller.js";

import {upload} from    "../middlewares/multer.middleware.js"

const router = Router()

router.route("/register").get(
     upload.fields(
        [
          {
            name:"avatar",
            maxcount:1
          }
        ]
     ),
    
    registerUser)


export  default router 
