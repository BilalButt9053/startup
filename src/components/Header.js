import React from 'react';
import NavLogo from '../images/logo.svg';
import DropDown from '../images/angle-down-solid.svg';
import Button from './Button'
import SunIcon from '../images/sun.svg';

function Header() {
  return (
    <div className='w-full flex items-center justify-center py-5 top-0 sticky z-20 bg-[#4A6CF7] bg-opacity-10'>
        <div className='cursor-pointer px-8'>
            <img className='w-44 h-8' src={NavLogo} alt="NavLogo" />
        </div>
        <div className="flex items-center justify-between max-w-6xl w-full">
            <ul className='flex items-center list-none py-4 px-8'>
                <li className='cursor-pointer text-white text-base font-semibold mx-6 hover:text-[#808080]'>Home</li>
                <li className='cursor-pointer text-white text-base font-semibold mx-6 hover:text-[#808080]'>About</li>
                <li className='cursor-pointer text-white text-base font-semibold mx-6 hover:text-[#808080]'>Pricing</li> 
                <li className='cursor-pointer text-white text-base font-semibold mx-6 hover:text-[#808080]'>Support</li>
                <li className='flex items-center cursor-pointer text-white mx-6 text-base font-semibold hover:text-[#808080]'>Pages
                    <img className='w-4 h-4 ml-1' src={DropDown} alt="DropDown" />
                </li>
            </ul>
            <div className='flex items-center '>
                <Button 
                    title="Sign In"
                    bg_color="none"
                    width="28"
                    txt_color="white"
                    hover_color="#808080"
                    hover_opacity="90"
                />
                <Button 
                    title="Sign Up"
                    bg_color="#4A6CF7"
                    width="32"
                    hover_color="white"
                    txt_color="white"
                    hover_opacity="90"
                    bg_opacity="100"
                />
                <img className='w-6 h-6 ml-3' src={SunIcon} alt="SunIcon" />
            </div>
        </div>
    </div>
  )
}

export default Header