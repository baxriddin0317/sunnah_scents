"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from '../ui/pagination'
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog"
import { CloseIcon, Star, StarFull } from '../icons/icon'
import { Button } from '../ui/button'
import { Input } from '../ui/input'
import { Textarea } from '../ui/textarea'

export const TabReview = () => {
  const [ratings, setRatings] = useState({
    scent: 0,
    longevity: 0,
    silage: 0,
    value: 0,
    overall: 0,
  });

  const handleRatingChange = (key, value) => {
    setRatings((prev) => ({ ...prev, [key]: value }));
  };
  return (
    <div className='max-w-[1530px] mx-auto w-full'>
      <div className='text-center space-y-5'>
        <h2 className='text-2xl lg:text-40 font-medium text-brand-main uppercase'>Fregrance reviews</h2>
        <p className='mx-auto text-center text-sm lg:text-lg'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br/> Vestibulum ullamcorper convallis fermentum.</p>
        <Dialog>
          <DialogTrigger className="flex items-center justify-center w-full md:w-44 mx-auto h-[50px] bg-brand-main text-white text-sm uppercase text-center rounded-full">Leave a Review</DialogTrigger>
          <DialogContent className="max-w-[1530px] w-[98%] h-[90%] mx-auto flex flex-col items-center bg-brand-yellow py-2 px-6 lg:px-10 lg:pt-6 rounded-lg">
            <DialogHeader className="flex flex-row items-center w-full justify-between border-b border-[#D4D7CE] py-4 px-6">
              <DialogTitle className="text-xl text-brand-main font-semibold uppercase">Write a review for</DialogTitle>
              <DialogClose >
                <CloseIcon />
              </DialogClose>
            </DialogHeader>
            <div className='flex flex-col lg:flex-row gap-3 lg:gap-10 max-h-[80%] w-full overflow-y-auto py-3 lg:py-10'>
              {/* content1 */}
              <div className='flex flex-1 lg:flex-col-reverse items-center lg:items-start gap-5 pl-6 xl:pl-20'>
                <div className="relative bg-white p-2 lg:p-6 border border-brand-gray-100 rounded lg:w-[475px] lg:h-[615px] w-[70px] h-[85px]">
                  <Image className="absolute inset-0 size-4/5 m-auto object-cover" src={"/products/product-2.png"} alt="" width={500} height={674}  />
                </div>
                <div className='space-y-2'>
                  <p className='font-semibold text-brand-main'>Perfume De Marly</p>
                  <h3 className='text-2xl text-brand-main uppercase font-semibold'>LAYTON</h3>
                </div>
              </div>
              <div className='hidden lg:block w-px h-full bg-brand-gray-100'></div>
              {/* content2 */}
              <div className='flex flex-col gap-3 w-full items-center'>
                <div className='flex flex-col md:flex-row gap-3 w-full mx-auto'>
                  <Input className="w-full bg-white shadow-none h-[50px] rounded-full px-6 border-none focus-visible:ring-brand-main" type="email" placeholder="Type your email" />
                  <Input className="w-full bg-white shadow-none h-[50px] rounded-full px-6 border-none focus-visible:ring-brand-main" type="text" placeholder="Type your name to display" />
                </div>
                <Textarea className="w-full bg-white shadow-none h-36 rounded-[32px] px-6 border-none focus-visible:ring-brand-main" placeholder="Write your thoughts about perfume" />
                <StarRating
                  label="Rate Scent"
                  value={ratings.scent}
                  onChange={(value) => handleRatingChange("scent", value)}
                />
                <StarRating
                  label="Rate Longitivity"
                  value={ratings.longevity}
                  onChange={(value) => handleRatingChange("longevity", value)}
                />
                <StarRating
                  label="Rate Silage"
                  value={ratings.silage}
                  onChange={(value) => handleRatingChange("silage", value)}
                />
                <StarRating
                  label="Rate Value to money"
                  value={ratings.value}
                  onChange={(value) => handleRatingChange("value", value)}
                />
                <StarRating
                  label="Overall Rating"
                  value={ratings.overall}
                  onChange={(value) => handleRatingChange("overall", value)}
                />
              </div>
            </div>
            <DialogFooter className="flex w-full !justify-between items-center gap-3 flex-col-reverse lg:flex-row border-t py-6 mt-auto">
              <DialogClose className='h-12 rounded-full border border-brand-main bg-transparent text-brand-main text-center text-sm uppercase max-w-96 w-full' >
                Cancel
              </DialogClose>
              <Button className='h-12 rounded-full border border-brand-main bg-brand-main text-white text-center text-sm uppercase max-w-96 w-full' >
              Leave Review
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
      <div className='flex flex-col gap-20 lg:gap-2 mt-16 z'>
        <div className='relative flex flex-col lg:flex-row bg-brand-yellow-300 items-center gap-8 p-6 pt-24 lg:pt-6'>
          {/* img */}
          <div className='absolute lg:relative -top-10 lg:top-0 rounded-full overflow-hidden size-[120px]'>
            <Image className='absolute' src={`/members/img-1.jpg`} width={120} height={120} alt='' />
          </div>
          {/* text */}
          <div className='flex flex-col gap-4 lg:gap-2.5 flex-1'>
            <div className='order-4 lg:order-1 flex items-center gap-2.5 justify-center lg:justify-start'>
              {Array.from({ length: 5 }).map((_, i) => (
                i < 4 ? <svg key={i} xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
                  <path d="M5.41812 23.1641C4.83845 23.462 4.18211 22.9413 4.2988 22.2761L5.5434 15.1819L0.259898 10.1469C-0.233873 9.67639 0.0217272 8.81605 0.683211 8.72208L8.03092 7.67827L11.3071 1.18846C11.6022 0.603848 12.4017 0.603848 12.6968 1.18846L15.973 7.67827L23.3207 8.72208C23.9822 8.81605 24.2378 9.67639 23.744 10.1469L18.4605 15.1819L19.7051 22.2761C19.8218 22.9413 19.1655 23.462 18.5858 23.1641L12.002 19.7802L5.41812 23.1641Z" fill="#8FB339" />
                </svg> : <svg key={i} xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
                  <path fillRule="evenodd" clipRule="evenodd" d="M4.2988 22.2761C4.18211 22.9413 4.83845 23.462 5.41812 23.1641L12.002 19.7802L18.5858 23.1641C19.1655 23.462 19.8218 22.9413 19.7051 22.2761L18.4605 15.1819L23.744 10.1469C24.2378 9.67639 23.9822 8.81605 23.3207 8.72208L15.973 7.67827L12.6968 1.18846C12.4017 0.603848 11.6022 0.603848 11.3071 1.18846L8.03092 7.67827L0.683211 8.72208C0.0217272 8.81605 -0.233873 9.67639 0.259898 10.1469L5.5434 15.1819L4.2988 22.2761ZM11.6557 18.1239L6.12708 20.9655L7.16846 15.0296C7.21755 14.7497 7.12525 14.4632 6.92434 14.2718L2.56409 10.1166L8.64254 9.2531C8.89382 9.21741 9.11322 9.05692 9.23176 8.82211L12.002 3.33461L14.7721 8.82211C14.8907 9.05692 15.1101 9.21741 15.3614 9.2531L21.4398 10.1166L17.0796 14.2718C16.8787 14.4632 16.7864 14.7497 16.8354 15.0296L17.8768 20.9655L12.3482 18.1239C12.1298 18.0117 11.8741 18.0117 11.6557 18.1239Z" fill="#8FB339" />
                </svg>))}
            </div>
            <h3 className='order-2 text-2xl font-medium text-brand-main text-center lg:text-left'>
            Marry Jane
            </h3>
            <p className=' order-3 text-sm lg:text-lg text-center lg:text-left'>
            “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed odio massa, ultricies ut lobortis ac, egestas sit amet urna. Aenean vitae dapibus ligula, quis porttitor erat.”
            </p>
          </div>
        </div>
        <div className='relative flex flex-col lg:flex-row bg-brand-yellow-300 items-center gap-8 p-6 pt-24 lg:pt-6'>
          {/* img */}
          <div className='absolute lg:relative -top-10 lg:top-0 rounded-full overflow-hidden size-[120px]'>
            <Image className='absolute' src={`/members/img-2.jpg`} width={120} height={120} alt='' />
          </div>
          {/* text */}
          <div className='flex flex-col gap-4 lg:gap-2.5 flex-1'>
            <div className='order-4 lg:order-1 flex items-center gap-2.5 justify-center lg:justify-start'>
              {Array.from({ length: 5 }).map((_, i) => (
                i < 4 ? <svg key={i} xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
                  <path d="M5.41812 23.1641C4.83845 23.462 4.18211 22.9413 4.2988 22.2761L5.5434 15.1819L0.259898 10.1469C-0.233873 9.67639 0.0217272 8.81605 0.683211 8.72208L8.03092 7.67827L11.3071 1.18846C11.6022 0.603848 12.4017 0.603848 12.6968 1.18846L15.973 7.67827L23.3207 8.72208C23.9822 8.81605 24.2378 9.67639 23.744 10.1469L18.4605 15.1819L19.7051 22.2761C19.8218 22.9413 19.1655 23.462 18.5858 23.1641L12.002 19.7802L5.41812 23.1641Z" fill="#8FB339" />
                </svg> : <svg key={i} xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
                  <path fillRule="evenodd" clipRule="evenodd" d="M4.2988 22.2761C4.18211 22.9413 4.83845 23.462 5.41812 23.1641L12.002 19.7802L18.5858 23.1641C19.1655 23.462 19.8218 22.9413 19.7051 22.2761L18.4605 15.1819L23.744 10.1469C24.2378 9.67639 23.9822 8.81605 23.3207 8.72208L15.973 7.67827L12.6968 1.18846C12.4017 0.603848 11.6022 0.603848 11.3071 1.18846L8.03092 7.67827L0.683211 8.72208C0.0217272 8.81605 -0.233873 9.67639 0.259898 10.1469L5.5434 15.1819L4.2988 22.2761ZM11.6557 18.1239L6.12708 20.9655L7.16846 15.0296C7.21755 14.7497 7.12525 14.4632 6.92434 14.2718L2.56409 10.1166L8.64254 9.2531C8.89382 9.21741 9.11322 9.05692 9.23176 8.82211L12.002 3.33461L14.7721 8.82211C14.8907 9.05692 15.1101 9.21741 15.3614 9.2531L21.4398 10.1166L17.0796 14.2718C16.8787 14.4632 16.7864 14.7497 16.8354 15.0296L17.8768 20.9655L12.3482 18.1239C12.1298 18.0117 11.8741 18.0117 11.6557 18.1239Z" fill="#8FB339" />
                </svg>))}
            </div>
            <h3 className='order-2 text-2xl font-medium text-brand-main text-center lg:text-left'>
            Jennifer Evans
            </h3>
            <p className=' order-3 text-sm lg:text-lg text-center lg:text-left'>
            “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed odio massa, ultricies ut lobortis ac, egestas sit amet urna. Aenean vitae dapibus ligula, quis porttitor erat.”
            </p>
          </div>
        </div>
        <div className='relative flex flex-col lg:flex-row bg-brand-yellow-300 items-center gap-8 p-6 pt-24 lg:pt-6'>
          {/* img */}
          <div className='absolute lg:relative -top-10 lg:top-0 rounded-full overflow-hidden size-[120px]'>
            <Image className='absolute' src={`/members/img-3.jpg`} width={120} height={120} alt='' />
          </div>
          {/* text */}
          <div className='flex flex-col gap-4 lg:gap-2.5 flex-1'>
            <div className='order-4 lg:order-1 flex items-center gap-2.5 justify-center lg:justify-start'>
              {Array.from({ length: 5 }).map((_, i) => (
                i < 5 ? <svg key={i} xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
                  <path d="M5.41812 23.1641C4.83845 23.462 4.18211 22.9413 4.2988 22.2761L5.5434 15.1819L0.259898 10.1469C-0.233873 9.67639 0.0217272 8.81605 0.683211 8.72208L8.03092 7.67827L11.3071 1.18846C11.6022 0.603848 12.4017 0.603848 12.6968 1.18846L15.973 7.67827L23.3207 8.72208C23.9822 8.81605 24.2378 9.67639 23.744 10.1469L18.4605 15.1819L19.7051 22.2761C19.8218 22.9413 19.1655 23.462 18.5858 23.1641L12.002 19.7802L5.41812 23.1641Z" fill="#8FB339" />
                </svg> : <svg key={i} xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
                  <path fillRule="evenodd" clipRule="evenodd" d="M4.2988 22.2761C4.18211 22.9413 4.83845 23.462 5.41812 23.1641L12.002 19.7802L18.5858 23.1641C19.1655 23.462 19.8218 22.9413 19.7051 22.2761L18.4605 15.1819L23.744 10.1469C24.2378 9.67639 23.9822 8.81605 23.3207 8.72208L15.973 7.67827L12.6968 1.18846C12.4017 0.603848 11.6022 0.603848 11.3071 1.18846L8.03092 7.67827L0.683211 8.72208C0.0217272 8.81605 -0.233873 9.67639 0.259898 10.1469L5.5434 15.1819L4.2988 22.2761ZM11.6557 18.1239L6.12708 20.9655L7.16846 15.0296C7.21755 14.7497 7.12525 14.4632 6.92434 14.2718L2.56409 10.1166L8.64254 9.2531C8.89382 9.21741 9.11322 9.05692 9.23176 8.82211L12.002 3.33461L14.7721 8.82211C14.8907 9.05692 15.1101 9.21741 15.3614 9.2531L21.4398 10.1166L17.0796 14.2718C16.8787 14.4632 16.7864 14.7497 16.8354 15.0296L17.8768 20.9655L12.3482 18.1239C12.1298 18.0117 11.8741 18.0117 11.6557 18.1239Z" fill="#8FB339" />
                </svg>))}
            </div>
            <h3 className='order-2 text-2xl font-medium text-brand-main text-center lg:text-left'>
            William Thomas
            </h3>
            <p className=' order-3 text-sm lg:text-lg text-center lg:text-left'>
            “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed odio massa, ultricies ut lobortis ac, egestas sit amet urna. Aenean vitae dapibus ligula, quis porttitor erat.”
            </p>
          </div>
        </div>
      </div>
      <Pagination className="mt-8">
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious href="#" />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#" isActive>1</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">
                2
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">3</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">4</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationNext href="#" />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
    </div>
  )
}

const StarRating = ({
  label,
  value,
  onChange,
}) => {
  return (
  <div className='flex flex-col sm:flex-row sm:items-center justify-between w-full flex-wrap lg:gap-2.5 p-4'>
    <p className='font-medium text-brand-balck capitalize'>{label}</p>
    <div className='flex items-center gap-2.5'>
      {Array.from({ length: 5 }).map((_, i) => (
        <button
        key={i}
        onClick={() => onChange(i + 1)}
        className=""
      >
       { i < value ? <StarFull key={i} /> : <Star key={i} />}
      </button>
      ))}
    </div>
  </div>
  )
}
