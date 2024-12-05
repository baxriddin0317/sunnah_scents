import AllBlogs from '@/components/blogs/AllBlogs'
import BlogHero from '@/components/blogs/BlogHero'
import Tags from '@/components/blogs/Tags'
import Confidence from '@/components/Confidence'
import Spray from '@/components/Spray'
import React from 'react'

const BlogsContent = () => {
  return (
    <main className='relative'>
      <BlogHero />
      <Tags />
      <AllBlogs />
      <Confidence />
      <Spray />
    </main>
  )
}

export default BlogsContent