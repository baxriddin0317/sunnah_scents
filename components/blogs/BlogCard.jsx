import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

const BlogCard = ({blog}) => {
  const  {date, title, description, image, readingTime, slug} = blog;
  
  return (
    <div className='flex flex-col gap-3 max-w-[362px] w-full'>
      <div className='relative w-full md:w-[362px] h-52 md:h-[364px]'>
        <Image src={image} fill alt='' />
      </div>
      <div className='flex items-center justify-between'>
        <p className='italic leading-6 text-brand-balck-100'>{date}</p>
        <p className='italic leading-6 text-brand-balck-100'>{readingTime}</p>
      </div>
      <h3 className='text-2xl font-medium text-brand-main capitalize'>{title}</h3>
      <p className='text-brand-balck capitalize md:pb-2'>{description}</p>
      <Link className='mt-0.5 md:mt-2.5 flex items-center gap-5' href={`/blogs/${slug}`}>
        <span className='text-brand-main text-lg font-medium capitalize'>Explore</span>
        <svg xmlns="http://www.w3.org/2000/svg" width={8} height={17} viewBox="0 0 8 17" fill="none">
          <path fillRule="evenodd" clipRule="evenodd" d="M0.167368 0.765935C0.390524 0.525613 0.752333 0.525613 0.97549 0.765935L7.83263 8.15055C8.05579 8.39087 8.05579 8.78051 7.83263 9.02084L0.97549 16.4055C0.752333 16.6458 0.390524 16.6458 0.167368 16.4055C-0.0557892 16.1651 -0.0557892 15.7755 0.167368 15.5352L6.62045 8.58569L0.167368 1.63622C-0.0557892 1.3959 -0.0557892 1.00626 0.167368 0.765935Z" fill="#507061" />
        </svg>
      </Link>
    </div>
  )
}

export default BlogCard