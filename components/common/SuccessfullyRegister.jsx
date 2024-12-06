import Link from "next/link"
import { CloseIcon } from "../icons/icon"
import { Button } from "../ui/button"
import {Dialog,DialogClose,DialogContent,DialogFooter,DialogHeader,DialogTitle,DialogTrigger,} from "../ui/dialog"
import React from 'react'
import Image from "next/image"

const SuccessfullyRegister = () => {
  return (
    <Dialog>
      <DialogTrigger className="w-full md:w-44 h-[50px] bg-brand-main text-white text-sm uppercase text-center rounded-full">Signup Now</DialogTrigger>
      <DialogContent className="max-w-[1530px] w-[98%] mx-auto flex flex-col items-center bg-brand-yellow py-2 px-6 lg:px-10 lg:pt-6 rounded-lg">
        <div className="hidden lg:inline-block absolute left-0 bottom-0 w-[240px] h-[250px]">
          <Image className="absolute" src={'/toast-left.png'} fill alt="left img" />
        </div>
        <div className="hidden lg:inline-block absolute right-0 bottom-0 w-[180px] h-[270px]">
          <Image className="absolute" src={'/toast-right.png'} fill alt="left img" />
        </div>
        <DialogHeader className="flex flex-row items-center w-full justify-between border-b border-[#D4D7CE] py-4 px-6">
          <DialogTitle className="text-xl text-brand-main font-semibold uppercase">Signed up successfully</DialogTitle>
          <DialogClose >
            <CloseIcon />
          </DialogClose>
        </DialogHeader>
        <div className="py-3 md:py-6 lg:py-10 text-center">
          <h3 className="text-32 lg:text-40 font-medium uppercase text-brand-main">
          You have signed up <br /> successfully
          </h3>
          <p className="max-w-3xl mx-auto text-center mt-5 text-sm lg:text-base text-brand-balck-100">
          We’ll send blog posts, news & updates at <Link className="text-brand-main" href={'#'}>emailname@server.com</Link> We’ll send blog post to you. If you subscribed by mistake. Click <Link className="text-brand-main underline" href={'#'}>unsubscribe.</Link>
          </p>
        </div>
        <DialogFooter className="flex w-full justify-center !border-t border-[#D4D7CE] py-6 mt-auto">
          <DialogClose className='h-12 rounded-full border border-brand-main bg-brand-main text-white text-center text-sm uppercase max-w-96 w-full mx-auto' >
          Close
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

export default SuccessfullyRegister