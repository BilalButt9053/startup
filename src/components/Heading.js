import React from 'react'

const Heading = ({title,description}) => {
  return (
    <div >
        <h1 className='text-white font-bold text-2xl'>{title}</h1>
        <p className='text-[#959cb1] text-lg mt-3 font-semibold'>{description}</p>
    </div>
  )
}

export default Heading