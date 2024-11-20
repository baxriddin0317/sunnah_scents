import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Facebook, Instagram, Medium, TikTok, Twitter, Youtube } from './icons/icon'
import { links } from '@/lib/data'
import { Input } from './ui/input'

const Footer = () => {
  return (
    <footer className='relative pt-5 md:pt-36 pb-9'>
      <Image className='absolute object-cover z-10' src={'/footer.png'} alt='' fill />
      <div className='hidden md:block absolute right-4 bottom-0 w-[133px] h-[190px] z-10'>
        <Image className='absolute object-contain' src={'/footer-1.png'} alt='' fill />
      </div>
      <div className='absolute top-0 left-0 w-full md:w-[500px] h-[380px] overflow-hidden'>
        <Image className='absolute object-cover -translate-y-20' src={'/footer-2.png'} alt='' fill />
      </div>
      <div className='hidden md:block absolute bottom-0 right-0 w-[500px] h-[490px] overflow-hidden'>
        <Image className='absolute object-cover' src={'/footer-3.png'} alt='' fill />
      </div>
      <div className='relative z-10 max-w-[1582px] mx-auto px-4'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-32'>
          <div className='flex flex-col justify-between '>
            <div className='text-brand-main'>
              <h2 className='text-32 lg:text-5xl font-medium lg:leading-[60px]'>
              — Sunnah Scents
              </h2>
              <p className='lg:text-lg font-medium leading-8 lg:leading-[44px]'>
              We offer to quality & long lasting fragrances.
              </p>
            </div>
            {/* icons */}
            <div className='flex items-center gap-10 mt-6 lg:mt-28'>
              <Link href={'#'}>
                <Facebook />
              </Link>
              <Link href={'#'}>
                <Twitter />
              </Link>
              <Link href={'#'}>
                <Instagram />
              </Link>
              <Link href={'#'}>
                <TikTok />
              </Link>
              <Link href={'#'}>
                <Medium />
              </Link>
              <Link href={'#'}>
                <Youtube />
              </Link>
            </div>
          </div>
          <div className='flex flex-col-reverse lg:flex-col gap-6'>
            {/* links */}
            <div className='flex items-start justify-between'>
              <div>
                <h4 className='text-brand-main text-lg font-medium capitalize'>Sitemap</h4>
                <div className='flex flex-col md:flex-row lg:items-center gap-6 xl:gap-16 mt-6'>
                  {links.map(link => (
                    <Link className='text-brand-balck hover:text-brand-main capitalize' key={link.id} href={link.href}>
                      {link.name}
                    </Link>
                  ))}
                </div>
              </div>
              <div className='md:hidden'>
                <h4 className='text-brand-main text-lg font-medium capitalize'>Legal</h4>
                <div className='flex flex-col md:flex-row lg:items-center gap-6 xl:gap-16 mt-6'>
                  <Link className='text-brand-balck hover:text-brand-main capitalize' href={'#'}>Terms of Use</Link>
                  <Link className='text-brand-balck hover:text-brand-main capitalize' href={'#'}>Privacy Policy</Link>
                </div>
              </div>
            </div>
            {/* newsletter */}
            <div className='space-y-6 mt-auto'>
              <h4 className='text-brand-main text-lg font-medium capitalize'>newsletter</h4>
              <div className='flex items-center justify-between gap-1 bg-transparent border-b border-brand-balck'>
                <Input className="max-w-[405px] bg-transparent border-none focus-visible:ring-0 px-0 py-0" type="email" placeholder="Enter your email Address " />
                <button className='flex items-center gap-3.5'>
                  <span>subscribe</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width={22} height={10} viewBox="0 0 22 10" fill="none">
                    <path fillRule="evenodd" clipRule="evenodd" d="M22 4.82425V5.20312C19.8522 5.66957 18.2929 7.84191 17.6519 9.99998C17.6515 10.0014 17.3876 9.91118 17.3798 9.90853C17.3719 9.90587 17.3885 9.90987 17.389 9.90823C17.8747 8.25732 18.4082 6.42857 19.7551 5.2381C16.3174 5.31835 13.9616 5.44599 11.1196 5.46045L11.1189 5.46045C7.81789 5.47724 4.51954 5.49403 0.292564 5.61373L0 5.62201V4.38272L19.7551 4.7619C18.4082 3.57143 17.8787 1.76085 17.389 0.091782C17.389 0.091782 17.1078 0.184079 17.3797 0.0920831C17.6517 8.67744e-05 17.6516 0 17.6516 0C18.287 2.16232 19.8518 4.35771 22 4.82425Z" fill="#272727" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* bottom */}
        <div className='flex items-center justify-between mt-6 lg:mt-16 border-t border-[#333] pt-4 lg:pt-9 pr-6'>
          <p className='text-sm md:text-base text-brand-balck leading-6'>Copyright Sunnah Scents</p>
          <Link className='hidden md:block text-brand-balck leading-6' href={'#'}>Terms of Use</Link>
          <Link className='hidden md:block text-brand-balck leading-6' href={'#'}>Privacy Policy</Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer