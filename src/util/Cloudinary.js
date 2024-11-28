    import {v2 as cloudinary} from "cloudinary"
    import { LOADIPHLPAPI } from "dns";
    import fs from "fs"

    // Configuration
    cloudinary.config({ 
        cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
        api_key: process.env.CLOUDINARY_API_KEY, 
        api_secret: process.env.CLOUDINARY_API_SECRET// Click 'View API Keys' above to copy your API secret
    });

    const uploadtocloudinary = async (localfilePath)=>{

        try{
            if(!localfilePath)  return null 
            // upload to cloudianrrry
        const response = await cloudinary.uploader.upload (localfilePath,{
                resource_type:"auto"
            })
            // file has been successfully uploaded 
            console.log("file has been uploaded to cloudinary", response.url);
            return response 
            
        }   catch(error){
                  fs.unlink(localfilePath) // remove the locally uploaded file as the upload operation got failed
                  return numm;
        }
    }
