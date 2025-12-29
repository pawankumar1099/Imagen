import React, { useContext, useEffect } from 'react'
import { assets } from '../assets/assets'
import { useState } from 'react';
import AppContext from '../contexts/AppContext';
import axios from 'axios'
import { toast } from 'react-toastify';
import { motion } from 'motion/react';

const Login = () => {
  const [state, setState] = useState('Login');
  const { setShowLogin, backendUrl, setToken, setUser } = useContext(AppContext);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  useEffect(() => {
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = 'unset';
    }
  }, [])

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    try {
      if (state === 'Login') {
        const { data } = await axios.post(backendUrl + '/api/user/login', { email, password })

        if (data.success) {
          setToken(data.token)
          setUser(data.user)
          localStorage.setItem('token', data.token)
          setShowLogin(false)
        } else {
          toast.error(data.message)
        }
      } else {

        const { data } = await axios.post(backendUrl + '/api/user/register', { name, email, password })

        if (data.success) {
          setToken(data.token)
          setUser(data.user)
          localStorage.setItem('token', data.token)
          setShowLogin(false)
        } else {
          toast.error(data.message)
        }

      }
    } catch (error) {
      toast.error(error.message)
    }

  }


  return (
    <div className='fixed top-0 left-0 right-0 bottom-0 z-10 backdrop-blur-md bg-black/50 flex justify-center items-center p-4'>
      <motion.form
        onSubmit={onSubmitHandler}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.3 }}
        className='relative w-full max-w-md rounded-2xl overflow-hidden bg-gradient-to-br from-neutral-900 via-neutral-900 to-black border border-white/10 p-8 md:p-10 shadow-2xl'
      >
        {/* Close Button */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          type='button'
          onClick={() => { setShowLogin(false) }}
          className='absolute top-5 right-5 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors'
        >
          <img src={assets.cross_icon} alt="close" className='w-5 h-5' />
        </motion.button>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className='mb-8'
        >
          <h1 className='text-3xl md:text-4xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mb-2'>
            {state === 'Login' ? 'Welcome Back' : 'Create Account'}
          </h1>
          <p className='text-sm text-gray-400'>
            {state === 'Login' ? 'Sign in to continue creating' : 'Join us to start creating amazing images'}
          </p>
        </motion.div>

        {/* Form Fields */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className='space-y-4'
        >
          {/* Name Field (Sign Up only) */}
          {state !== 'Login' && (
            <motion.div
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.4 }}
              className='group'
            >
              <div className='flex items-center gap-3 px-5 py-3 rounded-xl bg-white/5 border border-white/10 hover:border-white/20 focus-within:border-purple-500/50 transition-all'>
                <img src={assets.profile_icon} alt="name" className='w-5 h-5 opacity-60' />
                <input
                  onChange={e => setName(e.target.value)}
                  value={name}
                  type="text"
                  placeholder='Full Name'
                  required
                  className='flex-1 bg-transparent outline-none text-white placeholder-gray-500 text-sm'
                />
              </div>
            </motion.div>
          )}

          {/* Email Field */}
          <motion.div
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.4, delay: state !== 'Login' ? 0.1 : 0 }}
            className='group'
          >
            <div className='flex items-center gap-3 px-5 py-3 rounded-xl bg-white/5 border border-white/10 hover:border-white/20 focus-within:border-purple-500/50 transition-all'>
              <img src={assets.email_icon} alt="email" className='w-5 h-5 opacity-60' />
              <input
                onChange={e => setEmail(e.target.value)}
                value={email}
                type="email"
                placeholder='Email Address'
                required
                className='flex-1 bg-transparent outline-none text-white placeholder-gray-500 text-sm'
              />
            </div>
          </motion.div>

          {/* Password Field */}
          <motion.div
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.4, delay: state !== 'Login' ? 0.2 : 0.1 }}
            className='group'
          >
            <div className='flex items-center gap-3 px-5 py-3 rounded-xl bg-white/5 border border-white/10 hover:border-white/20 focus-within:border-purple-500/50 transition-all'>
              <img src={assets.lock_icon} alt="password" className='w-5 h-5 opacity-60' />
              <input
                onChange={e => setPassword(e.target.value)}
                value={password}
                type="password"
                placeholder='Password'
                required
                className='flex-1 bg-transparent outline-none text-white placeholder-gray-500 text-sm'
              />
            </div>
          </motion.div>
        </motion.div>

        {/* Forgot Password */}
        {state === 'Login' && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className='text-sm text-purple-400 hover:text-purple-300 mt-4 cursor-pointer transition-colors'
          >
            Forgot Password?
          </motion.p>
        )}

        {/* Submit Button */}
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          type='submit'
          className='w-full mt-8 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white font-semibold transition-all duration-300 shadow-lg hover:shadow-purple-500/50'
        >
          {state === 'Login' ? 'Sign In' : 'Create Account'}
        </motion.button>

        {/* Toggle Between Login and Signup */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className='mt-6 text-center text-sm'
        >
          {state === 'Login' ? (
            <p className='text-gray-400'>
              Don't have an account?{' '}
              <span
                onClick={() => { setState('Sign Up') }}
                className='text-purple-400 hover:text-purple-300 cursor-pointer font-semibold transition-colors'
              >
                Sign up
              </span>
            </p>
          ) : (
            <p className='text-gray-400'>
              Already have an account?{' '}
              <span
                onClick={() => { setState('Login') }}
                className='text-purple-400 hover:text-purple-300 cursor-pointer font-semibold transition-colors'
              >
                Sign in
              </span>
            </p>
          )}
        </motion.div>

        {/* Decorative Elements */}
        <div className='absolute inset-0 pointer-events-none rounded-2xl border border-gradient opacity-0 hover:opacity-100 transition-opacity duration-300'
          style={{
            borderImage: 'linear-gradient(135deg, #a78bfa, #ec4899) 1',
          }}
        />
      </motion.form>
    </div>
  )
}

export default Login
