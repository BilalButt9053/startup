import React from 'react'


function FeatureCard(props) {
    const Image=props.image
  return (
    <div className='w-96'>
        <div>
            <div className='flex items-center justify-center bg-[#808080] bg-opacity-10 w-16 h-16 rounded-md '>
                <div className='w-10 h-10'>
                    <Image/>
                </div>
            </div>
        </div>
        <div>
            <h1 className='text-white font-bold text-2xl mt-8'>{props.title}</h1>
            <p className='text-[#959cb1] text-lg font-semibold mt-8'>{props.description}</p>
        </div>
    </div>
  )
}

export default FeatureCard