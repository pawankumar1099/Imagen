import React, { useContext } from 'react'
import { assets, plans } from '../assets/assets'
import AppContext from '../contexts/AppContext'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
import { motion } from 'motion/react'


const BuyCredit = () => {
  const {user, backendUrl, loadCreditsData, token , setShowLogin} = useContext(AppContext);
  const navigate = useNavigate()

  const initPay = async (order)=>{
    const options = {
      key: import.meta.env.VITE_RAZORPAY_KEY_ID,
      amount:order.amount,
      currency:order.currency,
      name:'Credits Payment',
      order_id:order.id,
      receipt:order.receipt,
      handler:async(response)=>{
        try {
          const {data} = await axios.post(backendUrl+'/api/user/verify-razor',response,{headers:{token}})
          if(data.success){
            loadCreditsData()
            navigate('/')
            toast.success("Credits Added")
          }
        
        } catch (error) {
          toast.error(error.message)
        }
        
      }

    }

    const rzp = new window.Razorpay(options)
    rzp.open()
  }

  const paymentRazorpay = async (planId) => {
    try {
      if(!user){
        setShowLogin(true)
      }
      const {data} = await axios.post(backendUrl+"/api/user/pay-razor",{planId},{headers:{token}});
      
      if(data.success){
          initPay(data.message)
      }
    } catch (error) {
        toast.error(error.message)
    }
  }


  return (
    <div className='min-h-[100vh] text-center pt-30 mb-10 '>
      {/* Header */}
      <button className='border border-white/20 px-6 md:px-10 py-2 rounded-full mb-6 text-white/80'>
        Our Plans
      </button>
      <h1 className='text-center text-3xl md:text-4xl font-semibold mb-6 sm:mb-10 text-white'>
        Choose the plan
      </h1>

      {/* Pricing Grid */}
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto px-4'>
        {plans.map((items, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className='group relative rounded-md overflow-hidden p-8 md:p-10 text-left bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900 border border-white/10 hover:border-white/20 transition-all duration-300'
          >
            {/* Accent gradient for middle card */}
            {index === 1 && (
              <div className='absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_top_right,rgba(234,179,8,0.35),rgba(0,0,0,0)_60%)]' />
            )}

            {/* Shining border on hover */}
            <div className='absolute inset-0 rounded-md pointer-events-none'>
              <div
                className='absolute inset-0 rounded-md border opacity-0 group-hover:opacity-100 transition-opacity duration-300'
                style={{ borderImage: 'linear-gradient(135deg, #a78bfa, #ec4899, #f59e0b) 1' }}
              />
            </div>

            {/* Top: Plan name and subtitle */}
            <div className='flex items-center gap-4'>
              <div className='w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center'>
                <img src={assets.logo_icon} alt='logo' className='w-6 h-6 opacity-80' />
              </div>
              <div>
                <h3 className='text-2xl font-bold text-white'>{items.id}</h3>
                <p className='text-sm text-gray-400'>{items.desc}</p>
              </div>
            </div>

            {/* Price */}
            <div className='mt-10 mb-6'>
              <span className='text-5xl md:text-6xl font-extrabold tracking-tight text-white'>${items.price}</span>
              <span className='ml-2 text-gray-400'>/ {items.credits} credits</span>
            </div>

            {/* Divider */}
            <div className='border-t border-white/10 my-6' />

            {/* Purchase Button */}
            <div className='mt-4'>
              {index === 1 ? (
                <button
                  onClick={() => paymentRazorpay(items.id)}
                  className='w-full bg-white text-black font-semibold rounded-xl py-3 hover:bg-white/90 transition-all duration-200'
                >
                  {user ? 'Purchase Plan' : 'Get Started'}
                </button>
              ) : (
                <button
                  onClick={() => paymentRazorpay(items.id)}
                  className='w-full border border-white/20 text-white font-semibold rounded-xl py-3 hover:border-white/30 transition-all duration-200'
                >
                  {user ? 'Purchase Plan' : 'Get Started'}
                </button>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default BuyCredit
