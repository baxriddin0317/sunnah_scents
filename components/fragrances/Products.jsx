"use client";
import React, { useEffect, useState } from "react";
import Card from "../Card";
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "../ui/pagination";
import { ArrowDown, Filter, Star, StarFull } from "../icons/icon";
import { Checkbox } from "../ui/checkbox";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Brands, reviews, SortBy } from "@/lib/data";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../ui/accordion";
import CustomButton from "../common/Button";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/cards.json");
      const data = await response.json();
      setProducts(data);
    };
    fetchData();
  }, []);
  return (
    <section className="bg-brand-yellow pb-8 md:pb-16 lg:pb-28">
      <div className="relative z-20 max-w-[1484px] mx-auto px-4 2xl:px-0">
        <div className="lg:hidden flex items-center justify-between mb-6">
          <p className="text-brand-balck capitalize text-xl">Filters</p>
          <MobileFilter />
        </div>
        <Selects />
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 mx-auto w-full gap-4 ">
          {products.map((product) => (
            <Card key={product.id} product={product} />
          ))}
        </div>
        <Pagination className="mt-6 md:mt-12">
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious href="#" />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#" isActive>1</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">
                2
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">3</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">4</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationNext href="#" />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </section>
  );
};

const Selects = () => {
  return (
    <div className="hidden lg:grid grid-cols-4 gap-8 mb-6 lg:mb-10">
      <Popover>
        <PopoverTrigger className="flex justify-center items-center border border-brand-main h-12 gap-2 " >
          <span>Select Gender</span>
          <ArrowDown />
        </PopoverTrigger>
        <PopoverContent className="bg-brand-yellow min-w-full py-6 px-0 space-y-1 shadow-3xl">
          <div className="flex items-center justify-start space-x-2 px-10 py-4 w-full hover:bg-brand-main/10">
            <Checkbox className="peer" id="male" />
            <label
              htmlFor="male"
              className="font-medium peer-checked:text-brand-main peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Male
            </label>
          </div>
          <div className="flex items-center justify-start space-x-2 px-10 py-4 w-full hover:bg-brand-main/10">
            <Checkbox id="female" />
            <label
              htmlFor="female"
              className="font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Female
            </label>
          </div>
        </PopoverContent>
      </Popover>
      <Popover>
        <PopoverTrigger className="flex justify-center items-center border border-brand-main h-12 gap-2 " >
          <span>Select Brand</span>
          <ArrowDown />
        </PopoverTrigger>
        <PopoverContent className="bg-brand-yellow min-w-full py-6 px-0 space-y-1 shadow-3xl">
          {Brands.map((brand,id) => (
            <div key={id} className="flex items-center justify-start space-x-2 px-10 py-4 w-full hover:bg-brand-main/10">
              <Checkbox className="peer" id={brand.label} />
              <label
                htmlFor={brand.label}
                className="font-medium peer-checked:text-brand-main peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                {brand.name}
              </label>
            </div>
          ))}
        </PopoverContent>
      </Popover>
      <Popover>
        <PopoverTrigger className="flex justify-center items-center border border-brand-main h-12 gap-2 " >
          <span>Reviews</span>
          <ArrowDown />
        </PopoverTrigger>
        <PopoverContent className="bg-brand-yellow min-w-full py-6 px-0 space-y-1 shadow-3xl">
          {reviews.map(review => (
            <div key={review.stars} className="flex items-center justify-start space-x-2 px-10 py-4 w-full hover:bg-brand-main/10">
              <Checkbox className="peer" id={`review${review.stars}`} />
              <label
                htmlFor={`review${review.stars}`}
                className="flex items-center space-x-1"
              >
                {Array.from({ length: 5 }).map((_, i) => (
                  i < review.stars ? <StarFull key={i} /> : <Star key={i} />
                ))}
                <p className="text-xl text-brand-balck">{review.rating}.0</p>
              </label>
            </div>
          ))}
        </PopoverContent>
      </Popover>
      <Popover>
        <PopoverTrigger className="flex justify-center items-center border border-brand-main h-12 gap-2 " >
          <span>Sort By</span>
          <ArrowDown />
        </PopoverTrigger>
        <PopoverContent className="bg-brand-yellow min-w-full py-6 px-0 space-y-1 shadow-3xl">
          {SortBy.map((brand,id) => (
            <div key={id} className="flex items-center justify-start space-x-2 px-10 py-4 w-full hover:bg-brand-main/10">
              <Checkbox className="peer" id={brand.label} />
              <label
                htmlFor={brand.label}
                className="font-medium peer-checked:text-brand-main peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                {brand.name}
              </label>
            </div>
          ))}
        </PopoverContent>
      </Popover>
    </div>
  )
}

const MobileFilter = () => {
  return (
    <Popover>
      <PopoverTrigger className="" >
        <Filter />
      </PopoverTrigger>
      <PopoverContent className="bg-brand-yellow w-80 sm:w-[440px] left-0 p-6 space-y-1 shadow-3xl">
        <Accordion type="single" collapsible>
          <AccordionItem className="py-4" value="gender">
            <AccordionTrigger className="py-0">Select Gender</AccordionTrigger>
            <AccordionContent>
              <div className="flex items-center justify-start space-x-2 p-4 w-full hover:bg-brand-main/10">
                <Checkbox className="peer" id="male" />
                <label
                  htmlFor="male"
                  className="font-medium peer-checked:text-brand-main peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Male
                </label>
              </div>
              <div className="flex items-center justify-start space-x-2 p-4 w-full hover:bg-brand-main/10">
                <Checkbox id="female" />
                <label
                  htmlFor="female"
                  className="font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Female
                </label>
              </div>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem className="py-4" value="brend">
            <AccordionTrigger className="py-0">Select Brand</AccordionTrigger>
            <AccordionContent>
              {Brands.map((brand,id) => (
                <div key={id} className="flex items-center justify-start space-x-2 p-4 w-full hover:bg-brand-main/10">
                  <Checkbox className="peer" id={brand.label} />
                  <label
                    htmlFor={brand.label}
                    className="font-medium peer-checked:text-brand-main peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    {brand.name}
                  </label>
                </div>
              ))}
            </AccordionContent>
          </AccordionItem>
          <AccordionItem className="py-4" value="reviews">
            <AccordionTrigger className="py-0">Reviews</AccordionTrigger>
            <AccordionContent>
              {reviews.map(review => (
                <div key={review.stars} className="flex items-center justify-start space-x-2 p-4 w-full hover:bg-brand-main/10">
                  <Checkbox className="peer" id={`review${review.stars}`} />
                  <label
                    htmlFor={`review${review.stars}`}
                    className="flex items-center space-x-1"
                  >
                    {Array.from({ length: 5 }).map((_, i) => (
                      i < review.stars ? <StarFull key={i} /> : <Star key={i} />
                    ))}
                    <p className="text-xl text-brand-balck">{review.rating}.0</p>
                  </label>
                </div>
              ))}
            </AccordionContent>
          </AccordionItem>
          <AccordionItem className="py-4" value="sort-by">
            <AccordionTrigger className="py-0">Sort By</AccordionTrigger>
            <AccordionContent>
              {SortBy.map((brand,id) => (
                <div key={id} className="flex items-center justify-start space-x-2 p-4 w-full hover:bg-brand-main/10">
                  <Checkbox className="peer" id={brand.label} />
                  <label
                    htmlFor={brand.label}
                    className="font-medium peer-checked:text-brand-main peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    {brand.name}
                  </label>
                </div>
              ))}
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <CustomButton className="w-full" content="Apply Filter" />
      </PopoverContent>
    </Popover>
  )
}

export default Products;
