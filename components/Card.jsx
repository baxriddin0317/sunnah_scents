import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Card = ({product}) => {
  return (
    <div className='max-w-52 sm:max-w-72 mx-auto w-full bg-white border border-brand-gray min-h-full h-full'>
      <div className='px-4 py-8'> 
        <Image src={`/products/product-${product.id}.png`} width={252} height={198} alt={product.name} />
        <div className='mt-6 space-y-2 text-left'>
          <p className='text-brand-main text-lg font-medium'>{product.brand}</p>
          <Link href={`/fragrances/${product.id}`} className='text-xl xl:text-2xl font-semibold text-brand-balck capitalize line-clamp-2 h-14 mt-0'>{product.name}</Link>
          <div className='flex items-center gap-2.5'>
            <svg xmlns="http://www.w3.org/2000/svg" width={26} height={26} viewBox="0 0 26 26" fill="none">
              <path d="M5.86995 25.0944C5.24198 25.4172 4.53094 24.8531 4.65736 24.1325L6.00567 16.4471L0.281882 10.9925C-0.253037 10.4828 0.0238633 9.55072 0.740471 9.44892L8.70049 8.31813L12.2497 1.2875C12.5694 0.654168 13.4355 0.654168 13.7552 1.2875L17.3044 8.31813L25.2644 9.44892C25.981 9.55072 26.2579 10.4828 25.723 10.9925L19.9992 16.4471L21.3475 24.1325C21.4739 24.8531 20.7629 25.4172 20.1349 25.0944L13.0024 21.4285L5.86995 25.0944Z" fill="#507061" />
            </svg>
            <p>{product.rating} ({product.reviews})</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card