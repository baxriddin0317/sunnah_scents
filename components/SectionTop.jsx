import React from 'react'
import CustomButton from './common/Button'

const SectionTop = ({title, text}) => {
  return (
    <div className='relative flex flex-col max-w-[554px] mx-auto items-center gap-2 lg:gap-5 text-center z-20'>
      <h2 className='text-32 lg:text-40 text-brand-main font-medium uppercase text-brand-mai'>
        {title}
      </h2>
      <p className='text-brand-balck text-sm lg:text-lg leading-8'>{text}</p>
      <CustomButton className='w-full lg:w-44' content="View all" />
    </div>
  )
}

export default SectionTop