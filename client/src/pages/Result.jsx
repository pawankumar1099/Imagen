import React, { useState } from 'react'
import { assets } from '../assets/assets'
import { useContext } from 'react';
import AppContext from '../contexts/AppContext';
import { toast } from 'react-toastify';


const Result = () => {
  const [image, setImage] = useState(assets.sample_img_1);
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const [loading, setLoading ] = useState(false);
  const [input, setInput ] = useState('');
  const [disableGenerateButton,setDisableGenerateButton] = useState(false);
  const {generateImage} = useContext(AppContext);

  const onSubmitHandler = async (e) =>{
    e.preventDefault()
    setDisableGenerateButton(true)
    setLoading(true)
    if(input){
      
      const image = await generateImage(input);
      
      if(image){
        setIsImageLoaded(true)
        setLoading(false)
        setImage(image)
        setDisableGenerateButton(false)
      }
    }else{
      toast.error("Missing Prompt")
    }
    
  }

  
  return (

    <form onSubmit={onSubmitHandler} className='flex flex-col min-h-[90vh] justify-center items-center'>

      <div>
        <div className='relative flex  justify-center'>
          <img src={image} alt="" className='w-[90%] rounded' />
          <span className={`absolute bottom-0 left-0 h-1 bg-blue-500 ${loading? 'w-full transition-all duration-[10s]': 'w-0'}`} />

        </div>
          <p className={loading ? 'text-white' : 'hidden'}>Loading......</p>
        
      </div>


      {
        isImageLoaded 

        ? <div className='flex gap-2 flex-wrap justify-center text-whitetext-sm p-5.5 mt-10 rounded-full' >
          <p onClick={()=>{setIsImageLoaded(false)}} className='bg-white border border-zinc-900 text-black px-8 py-3 rounded-full cursor-pointer'>Generate Another</p>
          <a href={image} download className='bg-zinc-900 border-2 border-white text-white px-12 py-3 rounded-full cursor-pointer'>Download</a>
        </div> 


        : <div className='flex md:w-full w-[90%] relative max-w-xl  text-white text-sm p-0.5 mt-10 rounded-full'>
          <input onChange={ (e) =>{ setInput(e.target.value);}} value={input}  type="text" placeholder='Describe what you want to generate' className='flex-1  bg-zinc-500 border-2 border-amber-50 outline-none py-4 px-2 md:px-8 rounded-full md:text-xl text-xs  max-sm:w-20 placeholder-color placeholder:pl-5 '></input>
          <button type='submit' disabled={disableGenerateButton}   className={`${disableGenerateButton ? 'opacity-60 cursor-not-allowed' : ''} md:py-5 py-4 absolute right-0 bg-black border-2 border-amber-50 px-10 sm:px-16 z-5 rounded-full cursor-pointer`}>Generate </button>
        </div>
        
        }

    </form>
  )
}

export default Result
