"use client"
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import CustomButton from './common/Button'
import { links } from '@/lib/data'
import Humburger from './icons/Humburger'
import { Sheet, SheetClose, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from './ui/sheet'
import { usePathname } from 'next/navigation'

const Header = () => {
  const [fixed, setFixed] = useState(false);
  const pathname = usePathname();
  
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (document.documentElement.scrollTop > 50) {
        setFixed(true);
      } else {
        setFixed(false);
      }

      return () => {
        window.removeEventListener("scroll");
      };
    });
  }, []);

  return (
    <header className={`fixed ${fixed ? "py-2 bg-brand-yellow" : "bg-transparent py-8 md:py-9"} z-50 w-full top-0 px-4 xl:pl-8 xl:pr-12 transition-all duration-300 ease-in-out`}>
      <div className='max-w-8xl w-full mx-auto flex items-center justify-between xl:px-4'>
        {/* logo */}
        <Link className='relative' href={'/'}>
          <Image className='hidden xl:block' src={'/logo.png'} width={290} height={60} alt='' />
          <Image className='xl:hidden' src={'/mini-logo.png'} width={290} height={60} alt='' />
        </Link>
        {/* links */}
        <div className='hidden lg:flex items-center gap-6 xl:gap-12'>
          {links.map(link => (
            <Link className={`${pathname == link.href ? 'active-link' : ''} text-brand-balck hover:text-brand-main capitalize`} key={link.id} href={link.href}>
              {link.name}
            </Link>
          ))}
          <CustomButton className="w-44" content="Login/Signup" />
        </div>
        <div className='lg:hidden'>
          <MobileMenu />
        </div>
      </div>
    </header>
  )
}

const MobileMenu = () => {
  const pathname = usePathname();

  return (
    <Sheet>
      <SheetTrigger>
        <Humburger />
      </SheetTrigger>
      <SheetContent className="bg-brand-yellow py-6 px-0" side="top" >
        <SheetTitle className="sr-only"></SheetTitle>
        <SheetDescription className="flex flex-col gap-1 px-6">
          {links.map(link => (
            <SheetClose className='text-left py-4' key={link.id} asChild >
              <Link className={`${pathname == link.href ? 'active-link' : ''} text-xl text-brand-balck hover:text-brand-main capitalize`} href={link.href}>
                {link.name}
              </Link>
            </SheetClose>
          ))}
          <CustomButton className="w-full" content="Login/Signup" />
        </SheetDescription>
      </SheetContent>
    </Sheet>
  )
}

export default Header