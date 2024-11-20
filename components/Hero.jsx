import React from 'react'
import CustomButton from './common/Button'
import { Input } from './ui/input'
import Image from 'next/image'

const Hero = () => {
  return (
    <section className='relative h-full w-full bg-brand-yellow pt-12 lg:pt-28'>
      <div className='absolute -bottom-36 lg:bottom-0 lg:top-72 left-0 w-[166px] h-[300px] overflow-hidden'>
        <Image className="absolute -left-10 lg:left-0 z-0" src={'/sections/hero-1.png'} width={166} height={300} alt="" />
      </div>

      <div className='relative max-w-[1920px] mx-auto z-10 flex flex-col-reverse lg:flex-row items-center justify-center h-full px-4'>
        <div className='flex-1 space-y-5 max-w-[762px] w-full lg:translate-x-11 2xl:translate-x-40'>
          <h1 className='text-32 md:text-40 xl:text-6xl font-semibold uppercase text-brand-main'>
            Fragrances Those
            Touches Souls
          </h1>
          <p className='italic text-brand-balck-100'>
          “Go On – Treat Yourself”
          </p>
          <p className='text-sm lg:text-base text-brand-balck-100'>
          Nunc quis eleifend lectus. Donec id semper ligula, ut laoreet orci. Donec tempor vestibulum quam non gravida. Sed eleifend, erat at pulvinar hendrerit, diam dui dignissim diam, non congue nibh sem eget sapien.
          </p>
          <div className='hidden md:flex items-center gap-2.5 py-6'>
            <Input className="max-w-[405px] bg-white shadow-none h-[50px] rounded-full px-6 border-none focus-visible:ring-brand-main" type="email" placeholder="Enter your email Address " />
            <CustomButton className="max-w-56 w-full" content="Signup Now" />
          </div>
          <CustomButton className="md:hidden w-full" content="Email Signup" />

        </div>
        <div className='relative flex-1'>
          <Image className='' src={"/sections/hero.png"} alt='hreo' width={1112} height={1031} />
        </div>
      </div>
    </section>
  )
}

export default Hero