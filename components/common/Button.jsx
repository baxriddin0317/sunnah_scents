import React from 'react'

const CustomButton = ({className, content}) => {
  return (
    <button className={`flex items-center justify-center h-[50px] bg-brand-main text-white text-sm uppercase text-center rounded-full ${className}`}>{content}</button>
  )
}

export default CustomButton