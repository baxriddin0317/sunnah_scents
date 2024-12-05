import { getAllBlogs } from "@/lib/api";
import React from "react";
import Blogs from "./Blogs";

const AllBlogs = () => {
  const allBlogs = getAllBlogs();
  return (
    <section className="relative">
      <div className="max-w-[1582px] mx-auto px-4 py-6 lg:py-12">
        <Blogs allBlogs={allBlogs} />
      </div>
    </section>
  );
};

export default AllBlogs;
