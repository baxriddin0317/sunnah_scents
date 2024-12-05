import React from 'react'

const ReviewCard = ({title}) => {
  return (
    <div className='w-full bg-brand-yellow-300 p-6 text-[#333]'>
      <div className='flex items-center justify-between'>
        <h3 className='text-brand-main text-2xl'>{title}</h3>
        <p className='hidden md:inline-block text-lg text-right'>July 12, 2023</p>
      </div>
      <p className='text-lg leading-7 py-3'>
      “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed odio massa, ultricies ut lobortis ac, egestas sit amet urna. Aenean vitae dapibus ligula, quis porttitor erat.”
      </p>
      <div className=' space-y-2.5'>
        <p className='inline-block bg-brand-main px-2 h-8 text-white text-lg capitalize'>16% Overall Closeness</p> <br className='md:hidden' />
        <p className='inline-block bg-brand-main px-2 h-8 text-white text-lg capitalize md:ml-2.5'>16% Longetivity Closeness</p> <br />
        <p className='inline-block bg-brand-main px-2 h-8 text-white text-lg capitalize'>16% Overall Closeness</p> <br className='md:hidden' />
        <p className='inline-block bg-brand-main px-2 h-8 text-white text-lg capitalize md:ml-2.5'>16% Overall Closeness</p>
      </div>
    </div>
  )
}

export default ReviewCard