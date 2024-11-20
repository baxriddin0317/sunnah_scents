import React from 'react'
import { Input } from './ui/input'
import CustomButton from './common/Button'
import Image from 'next/image'

const Spray = () => {
  return (
    <section className='relative bg-brand-yellow-100  py-20'>
      <div className='absolute bottom-0'>
      <Image className='size-full object-cover bottom-0 z-0' src={"/sections/spray-bg2.png"} width={1920} height={1165} alt='' />
      </div>
      <div className='relative z-10 flex flex-col lg:flex-row gap-6 max-w-[1484px] mx-auto items-center h-full px-4'>
        <div className='max-w-[653px]'>
          <h2 className='text-32 md:text-40 xl:text-6xl font-medium text-brand-main uppercase'>
          Just One spray and it’s heaven near you.
          </h2>
          <div className='flex flex-col md:flex-row items-center gap-2.5 mt-6'>
            <Input className="md:max-w-[405px] bg-white shadow-none h-[50px] rounded-full px-6 border-none focus-visible:ring-brand-main" type="email" placeholder="Enter your email Address " />
            <CustomButton className="md:max-w-56 w-full" content="Signup Now" />
          </div>
        </div>
        <div className='relative w-4/5 h-auto xl:w-[800px] xl:h-[900px]'>
          <Image className=' object-contain' src={"/sections/spray.png"} width={800} height={900} alt='' />
        </div>
      </div>
    </section>
  )
}

export default Spray