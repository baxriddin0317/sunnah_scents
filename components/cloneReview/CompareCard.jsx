import React from 'react'
import { Star, StarFull } from '../icons/icon';
import Image from 'next/image';

const CompareCard = ({isOriginal}) => {
  return (
    <div className={`${isOriginal ? 'lg:pr-10' : 'lg:pl-10'} px-2 lg:px-0 py-4 lg:py-0 border-b lg:border-b-0`}>
      <p className="text-brand-balck mb-4 font-semibold uppercase font-feature-off">{isOriginal ? 'Original': 'Clone'} Fragrance</p>
      <div className='flex items-start gap-5'>
        <div className="flex items-center justify-center bg-white border border-brand-gray-100 rounded min-w-20 max-w-24 sm:max-w-[206px] w-full h-24 md:h-[267px] py-4">
          <div className="relative size-full lg:size-4/5">
            <Image className="mx-auto object-cover sm:object-contain" src={"/products/product-5.png"} alt="" fill  />
          </div>
        </div>
        <div className='flex-1 space-y-2'>
          <div className='space-y-2'>
            <p className='font-semibold text-brand-main'>Perfume De Marly</p>
            <h3 className='text-2xl text-brand-main uppercase font-semibold'>LAYTON</h3>
          </div>
          <div className='flex items-center gap-2.5'>
            {Array.from({ length: 5 }).map((_, i) => (
              i < 4 ? <StarFull key={i} /> : <Star key={i} />
            ))}
            <p className='text-sm md:text-base text-brand-balck text-nowrap'>4.1 (200)</p>
          </div>
          <p className="text-brand-balck-100 text-sm">
          Midniht Sail is a Floral Fruity Gourmand fragrance for women. Far Away Rebel was launched in 2018. The nose behind this fragrance is Jean-Marc Chaillan. Top notes are Whipped Cream, Black Currant, Dried Plum and Red Fruits; middle notes are Orange Blossom, Madagascar Vanilla and Jasmine Sambac; base notes are Chocolate, Caramel, Salt, Patchouli and Ambertonic.
          </p>
        </div>
      </div>
    </div>
  )
}

export default CompareCard