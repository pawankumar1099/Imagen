import React from 'react'
import { assets } from '../assets/assets'
import { motion } from "motion/react"

const Description = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  }

  return (
    <div className='w-full py-20 px-4 md:px-8 lg:px-16'>
      {/* Header Section */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className='text-center mb-20 max-w-4xl mx-auto font-light'
      >
        <motion.h1
          variants={itemVariants}
          className='font-light text-3xl md:text-4xl lg:text-5xl  text-white mb-6'
        >
          Create{' '}
          <span className='the-standard bg-gradient-to-r from-purple-400 via-pink-500 to-blue-500 bg-clip-text text-transparent'>
            AI Images
          </span>
        </motion.h1>
        <motion.p
          variants={itemVariants}
          className='text-lg md:text-lg text-gray-400 leading-relaxed'
        >
          Turn your imagination into stunning visuals with our cutting-edge AI technology
        </motion.p>
      </motion.div>

      {/* Main Content Section */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className='max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center'
      >
        {/* Image Section */}
        <motion.div
          variants={itemVariants}
          className='group relative h-80 md:h-96 lg:h-[500px] rounded-3xl overflow-hidden'
        >
          {/* Background Gradient */}
          <div className='absolute inset-0 bg-gradient-to-br from-purple-600/20 via-pink-600/20 to-blue-600/20 rounded-3xl' />
          
          {/* Glow Effect */}
          <div className='absolute -inset-1 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 rounded-3xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-300' />

          {/* Image */}
          <motion.img
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            src={assets.sample_img_1}
            alt="AI Generated Image"
            className='relative w-full h-full object-cover rounded-3xl border border-white/10 group-hover:border-white/20 transition-all duration-300'
          />

          {/* Border Highlight on Hover */}
          <div className='absolute inset-0 rounded-3xl border border-gradient opacity-0 group-hover:opacity-100 transition-opacity duration-300'
            style={{
              background: 'linear-gradient(135deg, rgba(168, 85, 247, 0.2) 0%, rgba(236, 72, 153, 0.2) 50%, rgba(59, 130, 246, 0.2) 100%)',
            }}
          />
        </motion.div>

        {/* Text Content Section */}
        <motion.div
          variants={itemVariants}
          className='space-y-6 lg:space-y-8'
        >
          {/* Main Title */}
          <motion.h2
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className='text-xl md:text-2xl lg:text-3xl  text-white leading-tight font-light'
          >
            Introducing the{' '}
            <span className='bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent'>
              AI-Powered Text to Image
            </span>
            {' '}Generator
          </motion.h2>

          {/* Feature Card 1 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className='group p-6 md:p-8 rounded-2xl border border-white/10 hover:border-white/20 bg-gradient-to-br from-purple-900/20 via-neutral-900/40 to-pink-900/20 hover:from-purple-900/40 hover:via-neutral-900/50 hover:to-pink-900/40 transition-all duration-300 backdrop-blur-sm'
          >
            <div className='flex items-start gap-4'>
              <div className='w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform'>
                <span className='text-xl'>✨</span>
              </div>
              <div>
                <h3 className='text-xl font-semibold text-white mb-2'>Instant Creation</h3>
                <p className='text-gray-400 leading-relaxed'>
                  Simply type in a text prompt, and our cutting-edge AI will generate high-quality images in seconds. From product visuals to character designs and portraits—watch your imagination come to life instantly.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Feature Card 2 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className='group p-6 md:p-8 rounded-2xl border border-white/10 hover:border-white/20 bg-gradient-to-br from-blue-900/20 via-neutral-900/40 to-cyan-900/20 hover:from-blue-900/40 hover:via-neutral-900/50 hover:to-cyan-900/40 transition-all duration-300 backdrop-blur-sm'
          >
            <div className='flex items-start gap-4'>
              <div className='w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform'>
                <span className='text-xl'>🎨</span>
              </div>
              <div>
                <h3 className='text-xl font-semibold text-white mb-2'>Limitless Possibilities</h3>
                <p className='text-gray-400 leading-relaxed'>
                  Even concepts that don't yet exist can be visualized effortlessly. Our free AI image generator brings your ideas to life with stunning visuals and unique imagery—making the impossible possible.
                </p>
              </div>
            </div>
          </motion.div>

          
        </motion.div>
      </motion.div>

      {/* Decorative Elements */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        viewport={{ once: true }}
        className='mt-20 flex justify-center gap-4'
      >
        <div className='w-2 h-2 rounded-full bg-purple-500 opacity-60' />
        <div className='w-2 h-2 rounded-full bg-pink-500 opacity-60' />
        <div className='w-2 h-2 rounded-full bg-blue-500 opacity-60' />
      </motion.div>
    </div>
  )
}

export default Description