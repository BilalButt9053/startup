import React from 'react'

function Button({bg_color,width,txt_color,title,hover_color,hover_opacity,bg_opacity}) {
  return (
    <button className={`border-none rounded-md text-center bg-[${bg_color}] w-${width} h-12 text-${txt_color} bg-opacity-${bg_opacity} font-bold text-base  hover:text-[${hover_color}] hover:bg-opacity-${hover_opacity}`}>{title}</button>
  )
}

export default Button