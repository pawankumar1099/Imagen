import React from 'react'
import { stepsData } from '../assets/assets'
import { motion } from "motion/react"

const Steps = () => {
  const bentoCards = [
    {
      id: 1,
      icon: stepsData[0]?.icon,
      title: "Describe Your Vision",
      description: "Type a phrase, sentence, or paragraph that describes the image you want to create.",
      colSpan: "lg:col-span-2",
      rowSpan: "lg:row-span-1",
      bgGradient: "from-neutral-900 via-neutral-800 to-neutral-900",
      accentColor: "from-purple-500/20 to-pink-500/20",
      dots: true
    },
    {
      id: 2,
      icon: stepsData[1]?.icon,
      title: "Pixel Perfect",
      description: "Obsessive attention to the smallest detail. Every sub-pixel rendered with intent.",
      colSpan: "lg:col-span-1",
      rowSpan: "lg:row-span-1",
      bgGradient: "from-neutral-900 via-neutral-800 to-neutral-900",
      accentColor: "from-blue-500/20 to-cyan-500/20",
      dots: false
    },
    {
      id: 3,
      icon: stepsData[2]?.icon,
      title: "Watch the Magic",
      description: "Our AI-powered engine will transform your text into a high-quality, unique image in seconds.",
      colSpan: "lg:col-span-1",
      rowSpan: "lg:row-span-1",
      bgGradient: "from-neutral-900 via-neutral-800 to-neutral-900",
      accentColor: "from-violet-500/20 to-purple-500/20",
      dots: false
    },
    {
      id: 4,
      title: "IMAGEN",
      description: "",
      colSpan: "lg:col-span-2",
      rowSpan: "lg:row-span-1",
      bgGradient: "from-neutral-900 via-neutral-800 to-neutral-900",
      accentColor: "from-slate-500/10 to-slate-600/10",
      isIMAGEN: true,
      dots: false
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const cardVariants = {
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
      {/* Header */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className='text-center mb-16'
      >
        <h2 className='text-4xl md:text-5xl font-bold text-white'>
          The <span className='the-standard bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent'>Standard</span>
        </h2>
      </motion.div>

      {/* Bento Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 max-w-7xl mx-auto'
      >
        {bentoCards.map((card) => (
          <motion.div
            key={card.id}
            variants={cardVariants}
            className={`${card.colSpan} ${card.rowSpan} group relative h-64 md:h-72 lg:h-96 rounded-lg overflow-hidden border border-white/10 hover:border-white/20 transition-all duration-300 cursor-pointer`}
          >
            {/* Background Gradient */}
            <div className={`absolute inset-0 bg-gradient-to-br ${card.bgGradient}`} />
            
            {/* Accent Gradient Overlay */}
            <div className={`absolute inset-0 bg-gradient-to-br ${card.accentColor} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
            
            {/* Glow Effect */}
            <div className='absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
              <div className='absolute -inset-px bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 rounded-lg blur-lg opacity-20' />
            </div>

            {/* Content */}
            <div className='relative h-full flex flex-col justify-between p-8 md:p-10 z-10 '>
              {card.isIMAGEN ? (
                // IMAGEN Card
                <div className='h-full flex items-center justify-center '>
                  <motion.h3
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 0.3, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className='text-6xl md:text-8xl font-bold text-white/30 text-center'
                  >
                    IMAGEN
                  </motion.h3>
                </div>
              ) : (
                // Regular Cards
                <>
                  <div>
                    {card.icon && (
                      <motion.img
                        initial={{ opacity: 0, y: -10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        src={card.icon}
                        alt={card.title}
                        className='w-10 h-10 md:w-12 md:h-12 mb-6 opacity-80 group-hover:opacity-100 transition-opacity'
                      />
                    )}
                    <h3 className='text-xl md:text-2xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-600 group-hover:bg-clip-text transition-all duration-300'>
                      {card.title}
                    </h3>
                    <p className='text-sm md:text-base text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors'>
                      {card.description}
                    </p>
                  </div>

                  {/* Colored Dots */}
                  {card.dots && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ duration: 0.6, delay: 0.3 }}
                      viewport={{ once: true }}
                      className='flex gap-2'
                    >
                      <div className='w-3 h-3 rounded-full bg-red-500 group-hover:scale-110 transition-transform' />
                      <div className='w-3 h-3 rounded-full bg-yellow-500 group-hover:scale-110 transition-transform' />
                    </motion.div>
                  )}
                </>
              )}
            </div>

            {/* Border Gradient on Hover */}
            <div className='absolute inset-0 rounded-lg pointer-events-none'>
              <div className='absolute inset-0 rounded-lg border border-gradient opacity-0 group-hover:opacity-100 transition-opacity duration-300'
                style={{
                  borderImage: 'linear-gradient(135deg, #a78bfa, #ec4899, #3b82f6) 1',
                }}
              />
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}

export default Steps