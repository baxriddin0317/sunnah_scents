"use client"
import React, { useEffect, useState } from 'react'
import Image from 'next/image';
import Card from './Card';
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper/modules";
import { MoveLeft, MoveRight } from 'lucide-react';

const Brands = ({color}) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/cards.json");
      const data = await response.json();
      setProducts(data);
    };
    fetchData();
  }, []);
  return (
    <section className={`relative ${color ? 'bg-brand-yellow' : 'bg-brand-yellow-100'} py-8 px-4 lg:px-0 lg:pt-24 lg:pb-16 overflow-clip overflow-x-hidden`}>
      <div className='absolute z-0 top-0 left-0 overflow-hidden w-[800px] h-[650px]'>
        <Image className='-translate-y-10 -translate-x-32' src={'/sections/brends.png'} alt='brends' fill />
      </div>
      <div className={`absolute z-10 ${color ? 'bg-brand-yellow/30' : 'bg-brand-yellow-100/70'} blur-sm inset-0 size-full`}></div>
      <div className='max-w-7xl w-full mx-auto xl:max-w-full relative z-20 flex flex-col lg:flex-row items-center justify-between gap-6 md:pl-10 xl:pl-48'>
        <div className='relative lg:min-w-[413px] w-full z-20'>
          <div className='flex flex-col text-brand-balck-100 leading-6 gap-2 md:gap-5'>
            <p className=''>Top Brands</p>
            <h3 className='text-brand-main text-32 lg:text-40 font-medium uppercase'>Best Fragrances of Top Brands </h3>
            <p>Nunc quis eleifend lectus. Donec id semper ligula, ut laoreet orci. Donec tempor vestibulum quam non gravida.</p>
            <div className='flex items-center gap-5'>
              <button>
                <MoveLeft className='text-brand-main left-button' />
              </button>
              <button>
                <MoveRight className='text-brand-main right-button' />
              </button>
            </div>
          </div>
        </div>
        {/* carousel */}
        <div className='w-full lg:w-4/5'>
          <Swiper
            slidesPerView={2}
            navigation={{
              nextEl: ".right-button",
              prevEl: ".left-button"
            }}
            spaceBetween={10}
            grabCursor={true}
            loop={true}
            breakpoints={{
              1024: {
                slidesPerView: 2.5,
                spaceBetween: 10,
              },
              1280: {
                slidesPerView: 3,
                spaceBetween: 10,
              },
              1530: {
                slidesPerView: 4.5,
                spaceBetween: 10,
              },
            }}
            modules={[Navigation]}
            className="mySwiper items-stretch"
          >
            {products.slice(0, 8).map((product) => (
              <SwiperSlide className='h-full' key={product.id}>
                <Card product={product} />
              </SwiperSlide>
          ))}
          </Swiper>
        </div>
      </div>
    </section>
  )
}

export default Brands