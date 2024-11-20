import Brands from '@/components/Brands'
import { FragrancesHero } from '@/components/fragrances/FragrancesHero'
import Products from '@/components/fragrances/Products'
import Posts from '@/components/Posts'
import Image from 'next/image'
import React from 'react'

const FragrancesContent = () => {
  return (
    <main className='relative'>
      <Image className='absolute top-40 -left-36 lg:-left-20 2xl:left-0 z-10' src={'/sections/fragrances-left.png'} alt='' width={250} height={503}  />
      <div className='absolute top-40 right-0 w-[250px] h-[503px] overflow-x-hidden'>  
        <Image className='absolute -right-36 lg:-right-20 2xl:right-0 z-10' src={'/sections/fragrances-right.png'} alt='' width={250} height={503}  />
      </div>

      <FragrancesHero />
      <Products />
      <Brands />
      <Posts />
    </main>
  )
}

export default FragrancesContent