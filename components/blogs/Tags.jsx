"use client"
import React, { useState } from 'react'

const tags = [
  "All Blogs",
  "#Notes",
  "#Composition",
  "#Feelthevibe",
  "#Pulsepoints",
  "#Performancebeasts",
  "#Flowerysmells",
];

const Tags = () => {
  const [activeTag, setActiveTag] = useState("All Blogs");

  return (
    <section className='bg-brand-yellow-100 py-6'>
      <div className='max-w-[1392px] w-full mx-auto overflow-auto px-4 lg:px-0 tags'>
        <div className='flex lg:justify-center gap-2 flex-nowrap min-w-[1392px]'>
          {tags.map((tag) => (
            <button
              key={tag}
              onClick={() => setActiveTag(tag)}
              className={`px-6 h-11 rounded-md sm:text-lg lg:text-xl font-semibold ${
                activeTag === tag
                  ? "bg-brand-main text-white"
                  : "bg-brand-yellow-200 text-brand-gray-100"
              } hover:bg-brand-main hover:text-white transition`}
            >
              {tag}
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Tags