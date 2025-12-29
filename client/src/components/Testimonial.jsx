import React from 'react'
import { assets, testimonialsData } from '../assets/assets'
import { motion } from "motion/react"

const Testimonial = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    }
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
  }

  return (
    <motion.div
      initial={{ opacity: 0.2, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className='w-full my-20 px-4 md:px-8 lg:px-16'
    >
      {/* Header */}
      <div className='text-left md:text-center mb-10'>
        <h1 className='text-3xl md:text-4xl font-light text-white'>
          Customer <span className='the-standard bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent'>Testimonials</span>
        </h1>
        <p className='text-gray-400 mt-2'>What our users are saying</p>
      </div>

      {/* Cards Grid */}
      <motion.div
        variants={containerVariants}
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true, margin: '-100px' }}
        className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto'
      >
        {testimonialsData.map((t, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            className='group relative rounded-2xl overflow-hidden p-8 bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900 border border-white/10 hover:border-white/20 transition-all duration-300'
          >
            {/* Accent glow on hover */}
            <div className='absolute -inset-px rounded-2xl bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300' />

            {/* Badge */}
            <div className='flex items-center gap-4'>
              <div className='w-14 h-14 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center overflow-hidden'>
                <img src={t.image} alt={t.name} className='w-12 h-12 object-cover rounded-lg' />
              </div>
              <div>
                <h2 className='text-2xl font-bold text-white'>{t.name}</h2>
                <p className='text-gray-400'>{t.role}</p>
              </div>
            </div>

            {/* Stars */}
            <div className='flex mt-4 mb-4'>
              {Array(t.stars).fill().map((_, i) => (
                <img key={i} src={assets.rating_star} alt='star' className='w-5 h-5' />
              ))}
            </div>

            {/* Text */}
            <p className='text-gray-300 leading-relaxed'>
              {t.text}
            </p>

            {/* Shining border on hover */}
            <div className='absolute inset-0 rounded-2xl pointer-events-none'>
              <div
                className='absolute inset-0 rounded-2xl border opacity-0 group-hover:opacity-100 transition-opacity duration-300'
                style={{ borderImage: 'linear-gradient(135deg, #a78bfa, #ec4899, #3b82f6) 1' }}
              />
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  )
}

export default Testimonial