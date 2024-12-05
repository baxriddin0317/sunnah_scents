"use client"
import {Dialog,DialogClose,DialogContent,DialogFooter,DialogHeader,DialogTitle,DialogTrigger,} from "../ui/dialog"
import { CloseIcon } from "../icons/icon";
import { Textarea } from "../ui/textarea";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import React, { useState } from "react";
import Image from "next/image";
import { Slider } from "../ui/slider";

const ModalClone = () => {
  
  return (
    <Dialog>
      <DialogTrigger className="w-full md:w-44 h-[50px] bg-brand-main text-white text-sm uppercase text-center rounded-full">Leave a Review</DialogTrigger>
      <DialogContent className="max-w-[1530px] w-[98%] h-[90%] mx-auto flex flex-col items-center bg-brand-yellow py-2 px-6 lg:px-10 lg:pt-6 rounded-lg">
        <DialogHeader className="flex flex-row items-center w-full justify-between border-b border-[#D4D7CE] py-4 px-6">
          <DialogTitle className="text-xl text-brand-main font-semibold uppercase">Leave review for clone</DialogTitle>
          <DialogClose >
            <CloseIcon />
          </DialogClose>
        </DialogHeader>
        <div className='flex flex-col lg:flex-row gap-3 lg:gap-10 max-h-[80%] w-full overflow-y-auto py-3 lg:py-10 dialog pr-4'>
          {/* content1 */}
          <div className="flex-1 w-full pl-6 xl:pl-20">
            <div className="border-b-2 pb-3 lg:pb-10">
              <p className="text-brand-balck mb-4 font-semibold uppercase font-feature-off">Original Fragrance</p>
              <div className='flex items-center gap-5 py-4 px-6 lg:p-0'>
                <div className="relative bg-white p-2 lg:p-6 border border-brand-gray-100 rounded lg:w-[206px] lg:h-[267px] w-20 h-24">
                  <Image className="absolute inset-0 size-4/5 m-auto object-cover" src={"/products/product-2.png"} alt="" width={500} height={674}  />
                </div>
                <div className='space-y-2 flex-1'>
                  <p className='font-semibold text-brand-main'>Perfume De Marly</p>
                  <h3 className='text-2xl text-brand-main uppercase font-semibold'>LAYTON</h3>
                </div>
              </div>
            </div>

            <div className="border-b-2 lg:border-b-0 pb-3 lg:pt-10">
              <p className="text-brand-balck mb-4 font-semibold uppercase font-feature-off">Clone Fragrance</p>
              <div className='flex items-center gap-5 py-4 px-6 lg:p-0'>
                <div className="relative bg-white p-2 lg:p-6 border border-brand-gray-100 rounded lg:w-[206px] lg:h-[267px] w-20 h-24">
                  <Image className="absolute inset-0 size-4/5 m-auto object-cover" src={"/products/product-2.png"} alt="" width={500} height={674}  />
                </div>
                <div className='space-y-2 flex-1'>
                  <p className='font-semibold text-brand-main'>Avon</p>
                  <h3 className='text-2xl text-brand-main uppercase font-semibold'>Black Suede Real Intense</h3>
                </div>
              </div>
            </div>
            
          </div>
          <div className='block w-full h-px lg:w-px lg:h-full bg-brand-gray-100'></div>
          {/* content2 */}
          <div className='flex flex-col gap-3 w-full lg:max-w-[800px]'>
            <h3 className="text-brand-balck font-semibold uppercase font-feature-off">Tell your thoughts</h3>
            <div className='flex flex-col md:flex-row gap-3 w-full mx-auto'>
              <Input className="w-full bg-white shadow-none h-[50px] rounded-full px-6 border-none focus-visible:ring-brand-main" type="email" placeholder="Type your email" />
              <Input className="w-full bg-white shadow-none h-[50px] rounded-full px-6 border-none focus-visible:ring-brand-main" type="text" placeholder="Type your name to display" />
            </div>
            <Textarea className="w-full bg-white shadow-none h-36 rounded-[32px] px-6 border-none focus-visible:ring-brand-main" placeholder="Write your thoughts about perfume" />
            <SliderPart label={'Scent Closeness'} />
            <SliderPart label={'Lengetivity Closeness'} />
            <SliderPart label={'Silage Closeness'} />
            <SliderPart label={'Overall Closeness'} />
          </div>
        </div>
        <DialogFooter className="flex w-full !justify-between items-center gap-3 flex-col-reverse lg:flex-row border-t py-6 mt-auto">
          <DialogClose className='h-12 rounded-full border border-brand-main bg-transparent text-brand-main text-center text-sm uppercase max-w-96 w-full' >
            Cancel
          </DialogClose>
          <Button className='h-12 rounded-full border border-brand-main bg-brand-main text-white text-center text-sm uppercase max-w-96 w-full' >
          Submit
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

const SliderPart = ({
  label
}) => {
  const [value, setValue] = useState(5);

  const handleChange = (newValue) => {
    setValue(newValue[0]);
  };

  return (
  <div className='flex flex-col sm:flex-row sm:items-center justify-between w-full flex-wrap lg:gap-2.5 p-4'>
    <p className='font-medium text-brand-balck capitalize'>{label}</p>
    <div className="flex flex-col items-center w-full max-w-52">
      <Slider
        value={[value]} 
        onValueChange={handleChange} 
        min={0}
        max={10}
        step={1}
        className="relative flex items-center w-full h-6"
      />
      <div className="flex justify-between w-full mt-1">
        {Array.from({ length: 11 }).map((_, i) => (
          <span
            key={i}
            className={`relative text-[8px] text-[#575757] ${
              i === value ? "font-bold !text-xs text-green-700" : ""
            }`}
          >
            <span className={`absolute left-1/2 -translate-x-1/2 -top-1.5 w-px h-1 rounded-sm ${i===value ? 'bg-brand-main' : 'bg-[#575757]'}`}></span>
            {i}
          </span>
        ))}
      </div>
    </div>
  </div>
  )
}

export default ModalClone