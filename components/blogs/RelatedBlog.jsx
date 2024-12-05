import React from "react";
import BlogCard from "./BlogCard";

const RelatedBlog = ({allBlogs}) => {
  return (
    <section className="max-w-[1582px] mx-auto px-4 pt-8 pb-14">
      <h2 className="text-2xl md:text-32 text-brand-main font-medium uppercase mb-8">
        Read related blogs
      </h2>
      <div className="flex items-center justify-center xl:justify-between flex-wrap gap-6 lg:gap-10">
        {allBlogs.slice(0, 3).map((item, idx) => (
          <BlogCard blog={item} key={idx} />
        ))}
      </div>
    </section>
  );
};

export default RelatedBlog;
