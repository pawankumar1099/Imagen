import React, { useContext } from 'react'
import { assets } from '../assets/assets'
import { motion, scale } from "motion/react"
import AppContext from '../contexts/AppContext'
import { useNavigate } from 'react-router-dom'
import Prism from './Prism'

const Head = () => {
  const {user ,setShowLogin} = useContext(AppContext);
  const navigate = useNavigate()

  const clickHandle = ()=>{
    if(user){
      navigate('/result')
    }else{
      setShowLogin(true)
    }
  }

  return (
    

    <div style={{position:'relative', overflow: 'hidden',backgroundColor:'#06000F',width:'100%',height:'100vh'}}>
      <div style={{position: 'absolute', inset: 0, zIndex: 0,}}>
        <Prism />
      </div>
      <motion.div 
      initial={{opacity:0.2, y:100}} 
      whileInView={{ opacity: 1,y:0 }} 
      transition={{duration:1}} 
      viewport={{once: true}} 
      style={{position: 'relative', zIndex: 1}}
      className='flex flex-col justify-center items-center gap-2 mt-46'>


        <motion.div
  initial={{ opacity: 0, y: -20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, delay: 0.2 }}
  className="relative overflow-hidden inline-flex items-center gap-2 px-6 py-1.5 
             rounded-full border border-white/10 
             bg-white/5 backdrop-blur-md cursor-default group"
>
  {/* The Shimmering Light Streak */}
  <div className="absolute inset-0 -translate-x-full 
                  bg-gradient-to-r from-transparent via-white/10 to-transparent pointer-events-none" />

  {/* Content */}
  <p className="text-white text-xs tracking-widest uppercase font-mono relative z-10">
    Better text to Image
  </p>
  
  <img 
    src={assets.star_icon} 
    alt="" 
    className="w-3.5 h-3.5 opacity-60  relative z-10 group-hover:scale-110 transition-transform" 
  />
</motion.div>
        <motion.h1 
        initial={{opacity:0, y:80}} 
        animate={{ opacity: 1,y:0 }} 
        transition={{duration:0.8, delay:0.4}}
        className='text-white heading text-4xl max-w-[300px] sm:text-7xl sm:max-w-[590px] mt-10 text-center mx-auto '>
            Turn text to <span className='subheading text-amber-300'>image</span>, in seconds
        </motion.h1>
        <motion.p 
        initial={{opacity:0, y:70}} 
        animate={{ opacity: 1,y:0 }} 
        transition={{duration:0.8, delay:0.6}}
        className='text-center mx-auto max-w-xl mt-5 text-gray-300'>Unleash your creativity with AI.</motion.p>
        {/* <motion.button 
        whileHover={{
        scale: 1.1,
        transition: { duration: 0.2 },
        }}
        
        initial={{opacity:0, y:60}} 
        animate={{ opacity: 1,y:0 }} 
        transition={{duration:0.8, delay:0.8}}
        onClick={clickHandle} 
        className='sm:text-lg text-white bg-black w-auto mt-8 px-12 py-2.5 flex items-center gap-2 rounded-full'>
            Generate Images
            <img src={assets.star_group} className='h-6' alt="" />
        </motion.button> */}

        <motion.button
         whileHover={{
        scale: 1.1,
        transition: { duration: 0.2 },
        }}
        
        initial={{opacity:0, y:60}} 
        animate={{ opacity: 1,y:0 }} 
        transition={{duration:0.8, delay:0.8}}
        onClick={clickHandle} 
        className="relative inline-flex h-12 w-46  overflow-hidden rounded-full p-[2px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 mt-10">
        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
        <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-black px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
    Generate Images
            <img src={assets.star_group} className='h-5 px-2' alt="" />
  </span>
</motion.button>
        {/* <motion.div 
        initial={{opacity:0, y:50}} 
        animate={{ opacity: 1,y:0, }} 
        
        transition={{duration:0.8, delay:0.6}}
        className=' flex gap-3 flex-wrap mt-16 justify-center items-center'>
          {
            Array(6).fill('').map((item ,index) => (
              <img className='rounded-lg max-sm:w-40 transition-all duration-300 hover:scale-105' src={assets.sample_img_1} alt=""  key={index} width={70}/>
            ))
          }
        </motion.div> */}
        {/* <p className='text-neutral-600'>Generated Images using ImaGEN</p> */}
      </motion.div>
    </div>
  )
}

export default Head
