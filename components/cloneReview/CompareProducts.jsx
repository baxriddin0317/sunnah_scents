"use client"
import React from 'react'
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "../ui/pagination";

import CompareCard from './CompareCard'
import ReviewCard from './ReviewCard'
import ModalClone from './ModalClone';

const CompareProducts = () => {
  
  return (
    <section className='pt-32 pb-3 md:pb-10 md:pt-40 lg:pt-52'>
      <div className='max-w-[1516px] mx-auto px-4'>
        <div className='grid lg:grid-cols-2 md:py-8 border-b-0 lg:border-b'>
          <CompareCard isOriginal={true} />         
          <CompareCard isOriginal={false} />         
        </div>
        <div className="flex items-center justify-between flex-col md:flex-row gap-6 md:mt-10 py-4">
          <p className="inline-block bg-brand-yellow-300 text-brand-main text-2xl lg:text-32 uppercase px-12">85% Closeness</p>
          <ModalClone />
        </div>
        <div className='space-y-3 mt-3'>
          <ReviewCard title="Marry Jane" />
          <ReviewCard title="Jennifer Evans" />
          <ReviewCard title="Jules Jenner" />
          <ReviewCard title="Stephany Mock" />
        </div>
        <Pagination className="mt-6 md:mt-12 justify-end">
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
    </section>
  )
}

export default CompareProducts