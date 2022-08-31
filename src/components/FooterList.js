import React from 'react'

const FooterList = ({hd,ls1,ls2,ls3}) => {
  return (
    <div>
        <h1 className='text-white text-xl font-bold mb-5'>{hd}</h1>
        <p className='text-[#959cb1] font-semibold mb-3 pt-5'>{ls1}</p>
        <p className='text-[#959cb1] font-semibold my-3'>{ls2}</p>
        <p className='text-[#959cb1] font-semibold my-3'>{ls3}</p>
    </div>
  )
}

export default FooterList