"use client";
import Image from "next/image";
import React from "react";
import { ArrowRight, Star, StarFull } from "../icons/icon";
// import Loader from "../common/Loader";
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination } from 'swiper/modules';

const ProductItemHero = ({ id }) => {
  // if (loading) {
  //   return (
  //     <div className="flex items-center justify-center h-screen">
  //       <Loader />
  //     </div>
  //   );
  // }

  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="block size-2.5 lg:!size-4 rounded-full !bg-brand-yellow-100 '+ className +'"></span>';
    },
  };

  return (
    <section className="relative bg-brand-yellow pt-40 pb-28 xl:pt-60 md:pb-40 px-4">
      <div className="hidden lg:block absolute w-[134px] left-0 top-52">   
        <Image src={"/sections/hero-1.png"} alt="" width={134} height={367} />
      </div>
      {/* content */}
      <div className="relative z-20 max-w-[1790px] w-full mx-auto grid grid-cols-1 xl:grid-cols-2 gap-6 md:gap-10 xl:gap-36 xl:!pl-40">
        <div className="max-w-3xl order-2 xl:order-1 mx-auto xl:mx-0 w-full space-y-3 md:space-y-5 sm:pr-1.5">
          <p className="lg:text-2xl font-semibold text-brand-main uppercase">
            Parfums de Marly
          </p>
          <h1 className="text-32 md:text-40 lg:text-6xl font-semibold uppercase text-brand-main">
            LAYTON
          </h1>
          <div className='flex items-center gap-2.5'>
            {Array.from({ length: 5 }).map((_, i) => (
              i < 4 ? <StarFull key={i} /> : <Star key={i} />
            ))}
            <p>4.1 (200)</p>
          </div>
          <p className="text-brand-balck-100 leading-6">
          Midniht Sail is a Floral Fruity Gourmand fragrance for women. Far Away Rebel was launched in 2018. The nose behind this fragrance is Jean-Marc Chaillan. Top notes are Whipped Cream, Black Currant, Dried Plum and Red Fruits; middle notes are Orange Blossom, Madagascar Vanilla and Jasmine Sambac; base notes are Chocolate, Caramel, Salt, Patchouli and Ambertonic.
          </p>
          <div className="flex items-center gap-6 text-sm md:text-base">
            <h4 className="max-w-40 lg:max-w-80 flex-1 w-full font-semibold text-brand-balck leading-6">Brand</h4>
            <ArrowRight />
            <p className="ml-auto text-brand-balck-100 text-right">Jolly Smells</p>
          </div>
          <div className="flex items-center gap-6 text-sm md:text-base">
            <h4 className="max-w-40 lg:max-w-80 flex-1 w-full font-semibold text-brand-balck leading-6">Parent Brand</h4>
            <ArrowRight />
            <p className="ml-auto text-brand-balck-100 text-right">SMith’s Fregrances</p>
          </div>
          <div className="flex items-center gap-6 text-sm md:text-base">
            <h4 className="max-w-40 lg:max-w-80 flex-1 w-full font-semibold text-brand-balck leading-6">Concentration</h4>
            <ArrowRight />
            <p className="ml-auto text-brand-balck-100 text-right">30% Perfume</p>
          </div>
          <div className="flex items-center gap-6 text-sm md:text-base">
            <h4 className="max-w-40 lg:max-w-80 flex-1 w-full font-semibold text-brand-balck leading-6">Overall Rating</h4>
            <ArrowRight />
            <p className="ml-auto text-brand-balck-100 text-right">⭐ 4.1 out of 5 (200 reviews)</p>
          </div>
          <div className="flex items-center gap-6 text-sm md:text-base">
            <h4 className="max-w-40 lg:max-w-80 flex-1 w-full font-semibold text-brand-balck leading-6">Logitivity</h4>
            <ArrowRight />
            <p className="ml-auto text-brand-balck-100 text-right">⭐ 4.1 out of 5 (200 reviews)</p>
          </div>
          <div className="flex items-center gap-6 text-sm md:text-base">
            <h4 className="max-w-40 lg:max-w-80 flex-1 w-full font-semibold text-brand-balck leading-6">Sillage</h4>
            <ArrowRight />
            <p className="ml-auto text-brand-balck-100 text-right">⭐ 4.1 out of 5 (200 reviews)</p>
          </div>
          <div className="flex items-center gap-6 text-sm md:text-base">
            <h4 className="max-w-40 lg:max-w-80 flex-1 w-full font-semibold text-brand-balck leading-6">Price Value</h4>
            <ArrowRight />
            <p className="ml-auto text-brand-balck-100 text-right">⭐ 4.1 out of 5 (200 reviews)</p>
          </div>
        </div>
        <div className="md:max-w-[721px] order-1 mx-auto h-full w-full">
          <Swiper pagination={pagination} modules={[Pagination]} className="product-swiper h-[420px] xl:h-full pb-12">
            <SwiperSlide className="">
              <div className="flex items-center justify-center bg-white p-8 border border-brand-gray-100 rounded h-96 xl:h-[90%]">
                <div className="relative size-4/5">
                  <Image className="mx-auto object-contain" src={"/products/product-7.png"} alt="" fill  />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="">
              <div className="flex items-center justify-center bg-white p-8 border border-brand-gray-100 rounded h-96 xl:h-[90%]">
                <div className="relative size-4/5">
                  <Image className="mx-auto object-contain" src={"/products/product-5.png"} alt="" fill  />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="">
              <div className="flex items-center justify-center bg-white p-8 border border-brand-gray-100 rounded h-96 xl:h-[90%]">
                <div className="relative size-4/5">
                  <Image className="mx-auto object-contain" src={"/products/product-1.png"} alt="" fill  />
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>  
    </section>
  );
};

export default ProductItemHero;
