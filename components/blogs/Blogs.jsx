"use client"
import React, { useState } from 'react'
import BlogCard from './BlogCard'
import { MoveLeft, MoveRight } from 'lucide-react';

const ITEMS_PER_PAGE = 6;

const Blogs = ({allBlogs}) => {
  const [currentPage, setCurrentPage] = useState(1);
  
  // Calculate the total number of pages
  const totalPages = Math.ceil(allBlogs.length / ITEMS_PER_PAGE);

  // Get the current items to display
  const currentItems = allBlogs.slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE);

  const handleNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  const handlePreviousPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const handlePageClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  return (
    <>
    <div className="flex items-center justify-center xl:justify-between flex-wrap gap-6 lg:gap-10">
      {currentItems.length > 0 &&
        currentItems.map((item, idx) => <BlogCard blog={item} key={idx} />)
      }
    </div>
    <div className="flex items-center justify-center gap-5 my-12">
      <button
        onClick={handlePreviousPage}
        className={`prevEl ${currentPage === 1 ? 'hidden' : ''}`}>
          <MoveLeft className="h-4 w-4" />
      </button>
      <div className="flex space-x-7">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            onClick={() => handlePageClick(index + 1)}
            className={`text-xl text-brand-balck ${
              currentPage === index + 1
                ? "bg-transparent border-b border-brand-main text-brand-main"
                : "text-brand-main border-b border-transparent"
            }`}>
            {index + 1}
          </button>
        ))}
      </div>
      <button
        onClick={handleNextPage}
        disabled={currentPage === totalPages}
        className={`prevEl ${currentPage === totalPages ? 'hidden' : ''}`}>
          <MoveRight className="h-4 w-4" />
      </button>
    </div>
    </>
  )
}

export default Blogs