import React from 'react'
import Avatar from './Avatar';
import Heading from './Heading';
import Button from './Button';

const BlogCard = ({BlogImg,hd,detail,AuthorImg,AuthorName,AthorWork,btn}) => {
  return (
    <div className='relative rounded-lg bg-[#808080] bg-opacity-20 w-96'>
        <div>
            <img className='w-full rounded-md' src={BlogImg} alt="BlogImg" />
        </div>
        <div className='p-5'>
            <div className="border-b border-[#808080] border-opacity-20 py-5" >
                <Heading 
                    title={hd}
                    description={detail}
                />
            </div>
            <div className='flex items-center'>
                <div className='border-r border-[#808080] border-opacity-20 pr-2'>
                    <Avatar
                        img={AuthorImg}
                        hd={AuthorName}
                        founder={AthorWork}
                    />
                </div>
                <div className='pl-4 pt-5'>
                    <h4 className='text-white font-semibold'>Date</h4>
                    <p className='text-[#959cb1] w-'>15 Dec, 2023</p>
                </div>
            </div>
        </div>
        <div className='absolute top-6 right-6'>
        <Button 
            title={btn}
            bg_color="#4A6CF7"
            width="28"
            hover_color="white"
            txt_color="white"
            hover_opacity="90"
        />
        </div>
    </div>
  )
}

export default BlogCard