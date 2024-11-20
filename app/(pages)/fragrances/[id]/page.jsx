import Brands from '@/components/Brands'
import ProductItemHero from '@/components/fragrances/ProductItemHero'
import ProductTab from '@/components/fragrances/ProductTab'
import Posts from '@/components/Posts'
import React from 'react'

const page = () => {
  return (
    <main>
      <ProductItemHero />
      <ProductTab />
      <Brands color={true} />
      <Posts />
    </main>
  )
}

export default page