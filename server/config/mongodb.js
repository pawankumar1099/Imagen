import mongoose from "mongoose";

const connectDB = async (req,res) => {
    try{
        mongoose.connection.on('connected', ()=>{
        console.log("Database Connected");
        
    })
    await mongoose.connect(`${process.env.MONGODB_URI}/imagen`)
    }catch(err){
        return res.json({status:"unsuccessfull",message:err.msg})
    }
}

export default connectDB