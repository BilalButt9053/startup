import React from 'react'
import NavLogo from '../images/logo.svg';
import FacebookIcon from "../images/facebook-f-brands.svg";
import TwitterIcon from "../images/twitter-brands.svg";
import YoutubeIcon from "../images/youtube-brands.svg";
import LinkedInIcon from "../images/linkedin-brands.svg";
import FooterList from './FooterList';
import {ReactComponent as FooterLeftBg} from '../images/footer-bg.svg';
import {ReactComponent as FooterRightBg } from '../images/footer-right-bg.svg';



const Footer = () => {
  return (
    <div>
<div className='relative bg-[#4A6CF7] bg-opacity-5 flex py-24 items-center justify-center mt-20'>
        <div className='w-1/5 px-5'>
            <div className=''>
                <img src={NavLogo} alt="NavLogo" className='w-32 h-7'   />
            </div>
            <p className='text-[#959cb1] text-base py-10 font-semibold'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer lobortis.</p>
            <div className='flex gap-5'>
                <img src={FacebookIcon} alt="FacebookIcon" className='w-5 h-5' />
                <img src={TwitterIcon} alt="TwitterIcon" className='w-5 h-5'/>
                <img src={YoutubeIcon} alt="YoutubeIcon" className='w-5 h-5'/>
                <img src={LinkedInIcon} alt="LinkedInIcon" className='w-5 h-5'/>
            </div>
        </div>
        <div className='flex items-center gap-5 w-2/5 justify-between pl-20'>
            <FooterList
                hd="Useful Links"  
                ls1="Blog"
                ls2="Pricing"
                ls3="About"
            />
            <FooterList
                hd="Terms"  
                ls1="TOS"
                ls2="Privacy Policy"
                ls3="Refund Policy"
            />
            <FooterList
                hd="Support & Help"  
                ls1="Open Support Ticket"
                ls2="Term of Use"
                ls3="About"
            />
        </div>
        <div className='absolute left-0 bottom-2'>
            <FooterLeftBg />
        </div>
        <div className='absolute right-0 top-8'>
            <FooterRightBg />
        </div>
        
    </div>
    <div className="bg-[#4A6CF7] bg-opacity-10 py-8 text-center">
        <h1 className='text-white text-xl font-semibold'>© Crafted by UIdeck for You!</h1>
    </div>
    </div>
    
  )
}

export default Footer