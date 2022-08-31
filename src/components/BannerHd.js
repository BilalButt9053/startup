import React from 'react'

function BannerHd({title,description}) {
  return (
    <div className=''>
        <h1 className='text-5xl font-bold text-white'>{title}</h1>
        <p className='text-[#959cb1] text-lg mt-5 font-semibold'>{description}</p>
    </div>
  )
}

export default BannerHd