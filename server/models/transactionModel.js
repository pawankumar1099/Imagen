import mongoose from "mongoose";

const transactionSchema = new mongoose.Schema(
    {
        userId:{type:String,required:true},
        plan:{type:String,reqired:true,unique:true},
        amount:{type:Number, required: true},
        credits: {type:Number,default:2},
        payment:{type:Boolean, required: true, default:false},
        date:{type:Number},

    }
)

const transactionModel = mongoose.models.transaction || mongoose.model("transaction", transactionSchema)

export default transactionModel;