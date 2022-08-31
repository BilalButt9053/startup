import React from 'react'

const Avatar = ({img,hd,founder}) => {
  return (
    <div className='flex items-center mt-5'>
        <div>
            <img src={img} alt={hd} className="mr-4" />
        </div>
        <div>
            <h2 className='font-bold text-white text-xl'>{hd}</h2>
            <p className='text-[#959cb1] '>{founder}</p>
        </div>
    </div>
  )
}

export default Avatar