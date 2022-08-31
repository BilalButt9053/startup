import React from 'react'
import { ReactComponent as TickIcon } from "../images/check.svg";

const List = ({title}) => {
  return (
    <ul className='list-none my-4'>
        <li className='flex items-center'> 
            <TickIcon  className="bg-[#808080] bg-opacity-20 w-8 h-8 p-2 rounded-md"/>
            <p className='text-[#959cb1] font-semibold text-xl ml-5'>{title}</p>
        </li>
    </ul>
  )
}

export default List