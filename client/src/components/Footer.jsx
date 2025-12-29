import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='flex item-cente justify-between gap-4 py-3 px-6 md:px-20 mt-20'>
      <img src={assets.logo} alt="" width={150} />
      <p className='flex-1 border-l border-gray-400 pl-4 text-sm text-gray-500 max-sm:hidden'> Copyright @Pawan Kumar | All right reserved.</p>
      <div className='flex gap-2.5'>
        <a href='https://www.linkedin.com/in/pawankumar9aa/' target='_blank'><img src={assets.linkedin_icon} width={30} alt="" /></a>
        <a href='https://github.com/pawankumar1099/' target='_blank'><img src={assets.github_icon} width={30} alt="" /></a>
      </div>
    </div>
  )
}

export default Footer
