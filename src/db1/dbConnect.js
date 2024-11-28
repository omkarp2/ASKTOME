import mongoose from "mongoose";

const connectdb  = async ()=>{  
    try {
     const connectionInstance = await  mongoose.connect(`mongodb+srv://OMKAR:imomkar24@cluster0.qo967.mongodb.net/DB_NAME`)
     console.log(`\n MongoDB connected !! DB HOST : ${connectionInstance.connection.host}`);
     
    } catch (error) {
       
        console.log("Mongodb connection error: " + error);
        throw error;
        process.exit(1);
    }
}

export default connectdb

