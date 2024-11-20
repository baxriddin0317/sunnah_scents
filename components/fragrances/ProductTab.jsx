import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs"
import { TabAccords } from './TabAccords'
import TabNotes from './TabNotes'
import { TabReview } from './TabReview'

const ProductTab = () => {
  return (
    <section className='bg-brand-yellow-100'>
      <Tabs defaultValue="accords" className="max-w-[1532px] mx-auto px-4">
        <div className='w-full flex justify-center pb-2 pt-8 lg:py-6 border-b border-b-[#D7D7A1]'>
          <TabsList className="bg-transparent gap-2.5">
            <TabsTrigger className="px-3.5 lg:px-6 py-2.5 rounded-md bg-brand-yellow-200 text-brand-gray lg:text-xl font-semibold " value="accords">Account</TabsTrigger>
            <TabsTrigger className="px-3.5 lg:px-6 py-2.5 rounded-md bg-brand-yellow-200 text-brand-gray lg:text-xl font-semibold " value="notes">Notes</TabsTrigger>
            <TabsTrigger className="px-3.5 lg:px-6 py-2.5 rounded-md bg-brand-yellow-200 text-brand-gray lg:text-xl font-semibold " value="reviews">Reviews</TabsTrigger>
          </TabsList>
        </div>
        <TabsContent className="py-8 lg:pt-14 lg:pb-28" value="accords">
          <TabAccords />
        </TabsContent>
        <TabsContent className="py-8 lg:pt-14 lg:pb-24" value="notes">
          <TabNotes />
        </TabsContent>
        <TabsContent className="py-8 lg:pt-14 lg:pb-24" value="reviews">
          <TabReview />
        </TabsContent>
      </Tabs>
    </section>
  )
}

export default ProductTab