import { registerUser, loginUser, userCredits, paymentRazorpay, verifyRazorpay } from "../controllers/userController.js";
import userAuth from "../middlewares/auth.js";
import express from 'express';

const userRouter = express.Router();

userRouter.post('/login',loginUser);
userRouter.post('/register',registerUser);
userRouter.get('/credits',userAuth,userCredits);
userRouter.post('/pay-razor',userAuth,paymentRazorpay);
userRouter.post('/verify-razor',userAuth,verifyRazorpay);

export default userRouter;