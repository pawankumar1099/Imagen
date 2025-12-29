import userModel from "../models/userModel.js";
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import validator from 'validator';
import transactionModel from "../models/transactionModel.js";
import Razorpay from "razorpay";

export const registerUser = async (req, res) => {
    try {
        const {email , name , password } = req.body;

        if(!name || !email || !password){
            return res.json({success:false, message:"empty fields"})
        }
        if(!validator.isEmail(email)){
            return res.json({success:false, message:"Invalid Email"})
        }
        if (!validator.isStrongPassword(password)) {
            return res.json({
            message: "Use 8+ characters with a mix of A-Z, a-z, 0-9, and symbols"
            });
        }

        const alreadyExists = await userModel.findOne({email:email})

        if(alreadyExists){
            return res.json({success:false, message:"User Already Exists. Please Login"})
        }
        const saltRounds = 10;
        const salt = await bcrypt.genSalt(saltRounds);
        const hashedPassword = await  bcrypt.hash(password,salt)

        const userData = {
            name,
            email,
            password:hashedPassword
        }

         const newUser = new userModel(userData);

         const user = await  newUser.save()

         const token = jwt.sign({id:user._id},process.env.JWT_SECRET);

         res.json({success:true, token, user:{ name: user.name}})


        
    } catch (error) {
        

        res.json({success:false,message:error.message})

        
    }
}

export const loginUser = async (req,res) => {
    try {
        const { email, password} = req.body;
        if(!email || !password){
            return res.json({success:false, message:"missing details"})
        }
        if(!validator.isEmail(email)){
            return res.json({success:false, message:"Invalid Email"})
        }
        if (!validator.isStrongPassword(password)) {
            return res.json({
            message: "minLength: 8, minLowercase: 1, minUppercase: 1, minNumbers: 1, minSymbols: 1"
            });
        }

        const user = await userModel.findOne({email});
        if(!user){
            return res.json({success:false, message:"user doesn't exist"})
        }

        const isMatch = await bcrypt.compare(password,user.password)

        if(isMatch){
            const token = jwt.sign({id:user._id},process.env.JWT_SECRET);
             res.json({success:true,token, user:{name:user.name}})
        }else{
            res.json({success:false, message:"Invalid Details"})
        }
         
    } catch (error) {
        
        

        res.json({success:false,message:error.message})

    }
}


export const userCredits = async (req,res) => {
    try {
        
        const {userId} = req.body
        const user = await userModel.findById({ _id: userId })

       
        res.json({success:true,credits:user.creditBalance, user:{name:user.name}})
        
    } catch (error) {
        
        res.json({success:false,message:error.message})
    }
}

const razorpayInstance = new Razorpay({
    key_id: process.env.RAZORPAY_KEY_ID,
    key_secret: process.env.RAZORPAY_KEY_SECRET,
})

export const paymentRazorpay = async(req, res)=>{
    try {
        const {userId,planId} = req.body;

        if(!userId || !planId){
            res.json({success:false,message:"Missing Details"})
        }
        const userData = await userModel.findById(userId);
        
        let credits,plan, amount, date;

        switch (planId) {
            case 'Basic':
                plan = 'Basic'
                credits = 100
                amount = 799  
                break;
            case 'Advanced':
                plan = 'Advanced'
                credits = 500
                amount = 3999  
                break;
            case 'Business':
                plan = 'Business'
                credits = 5000
                amount = 19999  
                break;
        
            default:
                return res.json({success:false,message:"Plan Not found"})
        }
        date=Date.now()
        const transactionData ={
            userId,plan,amount, credits,date
        }
        const newTransaction = await transactionModel.create(transactionData)
        const options = {
            amount:amount*100,
            currency:process.env.CURRENCY,
            receipt:newTransaction._id,
        }
        await razorpayInstance.orders.create(options,(error,order)=>{
            if(error){
                
                return res.json({success:false,message:error})   
            }
             return res.json({success:true,message:order})
        })

    } catch (error) {
        return res.json({success:true,message:error.message})
    }
}

export const verifyRazorpay = async (req, res) => {
    try {
        const {razorpay_order_id} = req.body;

        const orderInfo = await razorpayInstance.orders.fetch(razorpay_order_id)
        if(orderInfo.status === 'paid'){
            const transactionData = await transactionModel.findById(orderInfo.receipt)
             if(transactionData.payment){
            return(res.json({success:false,message:'Payment Failed'}))
        }

        const userData = await userModel.findById(transactionData.userId)

        const creditBalance = userData.creditBalance + transactionData.credits
        await userModel.findByIdAndUpdate(userData._id,{creditBalance})
        await transactionModel.findByIdAndUpdate(transactionData._id,{payment:true})
        return res.json({success:true,message:'Credits Added'})
        }else{
            return res.json({success:true,message:'Payment Failed'})
        }
       
        
    } catch (error) {
         return res.json({success:true,message:error.message})
    }
}