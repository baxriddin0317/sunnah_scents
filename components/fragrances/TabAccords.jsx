import { accordsData } from '@/lib/data'
import React from 'react'

export const TabAccords = () => {
  return (
    <>  
      <h2 className='text-2xl lg:text-40 font-medium text-brand-main uppercase text-center'>Main Accords</h2>
      <div className='flex flex-col gap-0.5 w-full px-0 lg:px-4 py-4 mt-2.5'>
        {accordsData.map((accord,id) => (
          <div key={id} className='relative w-full h-10 p-2 rounded-r-full bg-brand-yellow-300'>
            <div className='absolute h-full left-0 top-0 rounded-r-full z-10' style={{width: `${accord.length}%`, background: `${accord.color}`}}></div>
            <p className='absolute z-20 left-2 md:text-xl font-medium capitalize'>{accord.name}</p>
          </div>
        ))}
      </div>
    </>
  )
}
