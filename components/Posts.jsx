import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { getAllBlogs } from '@/lib/api';

const Posts = () => {
  return (
    <section className='relative bg-brand-yellow pt-36 pb-16'>
      <div className='max-w-[1582px] mx-auto px-4'>
        {/* head */}
        <div className='flex flex-col lg:flex-row gap-2 lg:items-center justify-between lg:pr-12'>
          <div className='flex flex-col gap-2 items-start'>
            <p className='text-brand-balck-100'>Blogs</p>
            <h3 className='text-brand-main font-medium uppercase text-32 lg:text-40'>explore our Blog posts</h3>
          </div>
          <Link href={'/blogs'} className='w-full sm:w-44 flex items-center justify-center h-[50px] bg-brand-main text-white text-sm uppercase text-center rounded-full'>view more</Link>
        </div>
        {/* posts */}
        <div className='flex items-center justify-center xl:justify-between flex-wrap gap-6 lg:gap-10 mt-6 lg:mt-16'>
          <Post />
        </div>
      </div>
    </section>
  )
}

const Post = () => {
  const allBlogs = getAllBlogs();
  
  return allBlogs.length > 0 && allBlogs.slice(0,3).map((blog, idx) => (
    <div key={idx} className='flex flex-col gap-3 max-w-[362px] w-full'>
      <div className='order-2 md:order-1 relative w-full md:w-[362px] h-52 md:h-[364px]'>
        <Image src={blog.image} fill alt='' />
      </div>
      <p className='order-1 italic leading-6 text-brand-balck-'>{blog.date}</p>
      <h3 className='order-3 text-2xl font-medium text-brand-main capitalize'>{blog.title}</h3>
      <p className='order-4 text-brand-balck capitalize md:pb-2'>{blog.description}</p>
      <Link className='order-5 mt-0.5 md:mt-2.5 flex items-center gap-5' href={`/blogs/${blog.slug}`}>
        <span className='text-brand-main text-lg font-medium capitalize'>Explore</span>
        <svg xmlns="http://www.w3.org/2000/svg" width={8} height={17} viewBox="0 0 8 17" fill="none">
          <path fillRule="evenodd" clipRule="evenodd" d="M0.167368 0.765935C0.390524 0.525613 0.752333 0.525613 0.97549 0.765935L7.83263 8.15055C8.05579 8.39087 8.05579 8.78051 7.83263 9.02084L0.97549 16.4055C0.752333 16.6458 0.390524 16.6458 0.167368 16.4055C-0.0557892 16.1651 -0.0557892 15.7755 0.167368 15.5352L6.62045 8.58569L0.167368 1.63622C-0.0557892 1.3959 -0.0557892 1.00626 0.167368 0.765935Z" fill="#507061" />
        </svg>
      </Link>
    </div>
  ))
}

export default Posts