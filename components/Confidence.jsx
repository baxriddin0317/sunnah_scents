import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Confidence = () => {
  return (
    <section className='bg-brand-yellow relative pt-28 pb-20 lg:pt-48 lg:pb-36'>
      {/* content */}
      <div className='relative z-10 flex flex-col xl:flex-row items-center justify-center gap-2 xl:gap-32 px-4'>
        <div className='relative size-96 md:size-[400px] lg:w-[700px] lg:h-[700px]'>
          <Image className='object-contain -translate-x-10 lg:-translate-x-20 xl:translate-x-0' src={'/sections/confidence.png'} fill alt='confidence' />
        </div>
        <div className='max-w-[475px] flex-1 space-y-5 text-brand-balck-100 leading-6'>
          <p className=''>Top Blog</p>
          <h3 className='text-32 lg:text-40 text-brand-main font-medium uppercase'>
          Good Fragrance Can elevate your Confidence
          </h3>
          <i className='block '>“Go On – Treat Yourself”</i>
          <p className=''>
          Nunc quis eleifend lectus. Donec id semper ligula, ut laoreet orci. Donec tempor vestibulum quam non gravida. Sed eleifend, erat at pulvinar hendrerit, diam dui dignissim diam, non congue nibh sem eget sapien.
          </p>
          <Link className='flex max-w-44 items-center justify-center h-[50px] bg-brand-main text-white text-sm uppercase text-center rounded-full' href={'#'}>Read More</Link>
        </div>
      </div>

      {/* imgs */}
      <div className='absolute top-0 right-0 w-40 h-52 lg:w-[250px] lg:h-[479px] overflow-hidden'>  
        <Image className='absolute -right-10 z-0' src={'/sections/fragrances-right.png'} alt='' width={250} height={503}  />
      </div>
      <div className='absolute top-1/2 -translate-y-1/2 left-0 w-40 h-52 lg:w-[250px] lg:h-[479px] overflow-hidden'>  
        <Image className='absolute -left-20 md:-left-10 z-0' src={'/sections/fragrances-left.png'} alt='' width={250} height={503}  />
      </div>
    </section>
  )
}

export default Confidence