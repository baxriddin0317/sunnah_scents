import React from 'react'
import { Input } from '../ui/input'
import CustomButton from '../common/Button'

export const FragrancesHero = () => {
  return (
    <section className='bg-brand-yellow pt-40 pb-28 md:pt-60 md:pb-40'>
      <div className='relative z-10 max-w-7xl mx-auto px-4 xl:px-0.5 text-left lg:text-center space-y-5'>
        <h1 className='text-32 md:text-40 lg:text-6xl font-semibold uppercase text-brand-main'>
        Fragrances
        </h1>
        <p className='text-sm lg:text-base text-brand-balck-100'>
        Nunc quis eleifend lectus. Donec id semper ligula, ut laoreet orci. Donec tempor vestibulum quam non gravida. Sed eleifend, erat at pulvinar hendrerit, diam dui dignissim diam, non congue nibh sem eget sapien.
        </p>
        <div className='flex flex-col md:flex-row items-center gap-2.5 py-6'>
          <Input className="w-full] bg-white shadow-none h-12 md:h-[74px] rounded-full px-6 border-none focus-visible:ring-brand-main" type="email" placeholder="Enter your email Address " />
          <CustomButton className="md:max-w-56 h-12 md:h-[74px] w-full" content="Search" />
        </div>
      </div>
    </section>
  )
}
