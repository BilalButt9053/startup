import React from 'react'
import { ReactComponent as Star } from '../images/star.svg';
import Avatar from './Avatar';


const AboutCard = ({description,image,title,author}) => {
  return (
    <div className='w-1/4 bg-[#808080] bg-opacity-20 py-10 px-10 rounded-md'>
        <div className='flex'>
            <div className='mr-2'>
                <Star/>
            </div>
            <div className='mr-2'>
                <Star/>
            </div>
            <div className='mr-2'>
                <Star/>
            </div>
            <div className='mr-2'>
                <Star/>
            </div >
            <Star />
        </div>
        <div className='border-b border-solid border-[#808080] border-opacity-20'>
            <p className='text-white text-base my-5 font-semibold'>{description}</p>
        </div>
        <div>
            <Avatar
                img={image}
                hd={title}
                founder={author}
            />
        </div>
    </div>
  )
}

export default AboutCard