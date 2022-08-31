import React from 'react'
import PricingList from './PricingList'
import Button from './Button';
import {ReactComponent as BgImg} from "../images/pricing-bg.svg";

const   PricingCard = ({price,tag,img_1,img_2,img_3,img_4,img_5,img_6,description,}) => {
  return (
    <div className='relative bg-[#808080] bg-opacity-20 w-1/5 p-8'>
        <div className='flex items-center justify-between'>
            <h1 className='flex text-white text-3xl font-bold'>{price}<span className='text-[#959cb1]'>/mo</span></h1>
            <p className=' text-white text-xl font-bold'>{tag}</p>
        </div>
        <p className='text-[#959cb1] text-lg mt-5 '>{description}</p>
        <div className='border-b border-[#808080] bg-opacity-25 py-7'>
        <Button 
            title="Start Free Trial"
            bg_color="#4A6CF7"
            width="full"
            hover_color="white"
            txt_color="white"
            hover_opacity="90"
        />
        </div>
        <div>
            <PricingList 
                image_1={img_1}
                image_2={img_2}
                image_3={img_3}
                image_4={img_4}
                image_5={img_5}
                image_6={img_6}
                detail_1="All UI Components"
                detail_2="Use with Unlimited Projects"
                detail_3="Commercial Use"
                detail_4="Email Support"
                detail_5="Free Lifetime Updates"
                detail_6="Lifetime Access"
            />
        </div>
        <div className='absolute bottom-0 right-0'>
            <BgImg />
        </div>
    </div>
  )
}

export default PricingCard