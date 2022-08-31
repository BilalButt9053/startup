import React from 'react';

const Switch = () => {
  return (
    <div className='relative w-14 h-5'>
      <input id='switch' type='checkbox' className='opacity-0 w-0 h-0  '/>
      <span className='slider absolute cursor-pointer top-0 left-0 right-0 bottom-0 bg-[#808080] bg-opacity-20 rounded-2xl before:absolute before:content-[""] before:w-4 before:z-30 before:h-4 before:bg-white before:top-px before:left-px  before:rounded-full after:absolute after:w-7 after:h-7 after:bg-[#4A6CF7] after:rounded-full after:-left-1 after:-top-1 ' />
    </div>
  )
}

export default Switch