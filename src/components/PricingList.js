import React from 'react'

const PricingList = ({image_1,image_2,image_3,image_4,image_5,image_6,detail_1,detail_2,detail_3,detail_4,detail_5,detail_6}) => {

    const SrcImg1 = image_1;
    const SrcImg2 = image_2;
    const SrcImg3 = image_3;
    const SrcImg4 = image_4;
    const SrcImg5 = image_5;
    const SrcImg6 = image_6;
  return (
    <ul className='list-none my-5'>
        <li className='flex items-center my-3'>
            <div className='bg-[#808080] bg-opacity-10 p-2 rounded-full'>
                <SrcImg1 className="w-2 h-2"  />
            </div>
            <p className='text-[#959cb1] font-semibold ml-3'>{detail_1}</p>
        </li>
        <li className='flex items-center my-3'>
            <div className='bg-[#808080] bg-opacity-10 p-2 rounded-full'>
                <SrcImg2 className="w-2 h-2"  />
            </div>
            <p className='text-[#959cb1] font-semibold ml-3'>{detail_2}</p>
        </li>
        <li className='flex items-center my-3'>
            <div className='bg-[#808080] bg-opacity-10 p-2 rounded-full'>
                <SrcImg3 className="w-2 h-2"  />
            </div>
            <p className='text-[#959cb1] font-semibold ml-3'>{detail_3}</p>
        </li>
        <li className='flex items-center my-3'>
            <div className='bg-[#808080] bg-opacity-10 p-2 rounded-full'>
                <SrcImg4 className="w-2 h-2"  />
            </div>
            <p className='text-[#959cb1] font-semibold ml-3'>{detail_4}</p>
        </li>
        <li className='flex items-center my-3'>
            <div className='bg-[#808080] bg-opacity-10 p-2 rounded-full'>
                <SrcImg5 className="w-2 h-2"  />
            </div>
            <p className='text-[#959cb1] font-semibold ml-3'>{detail_5}</p>
        </li>
        <li className='flex items-center my-3'>
            <div className='bg-[#808080] bg-opacity-10 p-2 rounded-full'>
                <SrcImg6 className="w-2 h-2"  />
            </div>
            <p className='text-[#959cb1] font-semibold ml-3'>{detail_6}</p>
        </li>
    </ul>
  )
}

export default PricingList