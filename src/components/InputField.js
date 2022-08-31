import React from 'react'

const InputField = ({lable,placeHolder,width,height}) => {
  return (
    <div className='flex flex-col'>
        <label htmlFor='input' className='text-white font-semibold'>{lable}</label>
        <input type="text" placeholder={placeHolder} className={`outline-none border-none mt-2 bg-[#808080] bg-opacity-10 w-${width} h-${height} px-10 py-3 rounded-md placeholder:text-[#959cb1] shadow-md`}/> 
    </div>
  )
}

export default InputField