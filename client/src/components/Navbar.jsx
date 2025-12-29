import React, { useContext } from 'react'
import { assets } from '../assets/assets'
import { Link, useNavigate } from 'react-router-dom'
import AppContext from '../contexts/AppContext';

const Navbar = () => {
    const navigate = useNavigate();
    const { user, setShowLogin, credits, logout } = useContext(AppContext);

    return (
        // 1. Floating Wrapper Container
        <div className='fixed top-6 left-0 right-0 z-100 flex justify-center px-4'>
            
            {/* 2. The Glassmorphic Pill */}
            <nav className='flex items-center justify-between w-full max-w-5xl px-6 py-3 
                            rounded-full border border-white/10 bg-black/20 backdrop-blur-xl 
                            shadow-[0_8px_32px_0_rgba(0,0,0,0.3)]'>
                
                {/* Logo Section */}
                <Link to={"/"} className='flex items-center hover:opacity-80 transition-opacity'>
                    <img src={assets.logo} alt="logo" className='w-20 sm:w-24 md:w-38 lg:w-32 invert' />
                </Link>

                {/* Navigation Links & User Actions */}
                <div className='flex items-center gap-4 sm:gap-8'>
                    
                    {user ? (
                        <div className='flex items-center gap-4 sm:gap-6'>
                            {/* Credits Badge - Styled as a Mini-Pill */}
                            <button 
                                onClick={() => navigate('/buy')}
                                className='hidden sm:flex items-center gap-2 px-4 py-1.5 
                                           bg-white/5 border border-white/10 rounded-full 
                                           hover:bg-white/10 transition-all cursor-pointer'>
                                <img src={assets.credit_star} alt="" className='w-4 invert opacity-70' />
                                <p className='text-[11px] font-mono tracking-wider text-gray-300'>
                                    CREDITS: {credits}
                                </p>
                            </button>
                            
                            {/* User Profile Dropdown */}
                            <div className='relative group flex items-center gap-3 cursor-pointer'>
                                <p className='text-xs font-medium text-gray-300 hidden md:block'>
                                    {user.name}
                                </p>
                                <div className='w-8 h-8 rounded-full border border-white/20 overflow-hidden bg-zinc-800'>
                                    <img src={assets.profile_icon} alt="profile" className='w-full h-full object-cover' />
                                </div>
                                
                                {/* Dropdown Menu */}
                                <div className='absolute hidden group-hover:block top-full right-0 pt-3 transition-all'>
                                    <ul className='bg-zinc-900/90 backdrop-blur-md border border-white/10 
                                                   rounded-2xl py-2 min-w-[140px] shadow-2xl overflow-hidden'>
                                        <li onClick={logout} 
                                            className='px-5 py-2 text-xs text-red-400 hover:bg-white/5 transition-colors cursor-pointer font-medium'>
                                            Logout
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div className='flex gap-6 items-center'>
                            <p className='text-xs font-mono uppercase tracking-[0.2em] text-gray-400 
                                          cursor-pointer hover:text-white transition-colors' 
                               onClick={() => navigate('/buy')}>
                                Pricing
                            </p>
                            <button 
                                onClick={() => setShowLogin(true)} 
                                className='px-6 py-2 bg-white text-black text-xs font-bold 
                                           rounded-full hover:bg-gray-200 transition-all cursor-pointer uppercase tracking-tight'>
                                Login
                            </button>
                        </div>
                    )}
                </div>
            </nav>
        </div>
    )
}

export default Navbar