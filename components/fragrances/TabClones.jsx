"use client";
import React, { useEffect, useState } from "react";
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious,} from "../ui/pagination";
import CloneCard from "./CloneCard";
import ModalDialog from "./ModalDialog";


const frameworks = [
  {
    value: "next.js",
    label: "Next.js",
  },
  {
    value: "sveltekit",
    label: "SvelteKit",
  },
  {
    value: "nuxt.js",
    label: "Nuxt.js",
  },
  {
    value: "remix",
    label: "Remix",
  },
  {
    value: "astro",
    label: "Astro",
  },
]

const TabClones = () => {
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
    <div className="max-w-[1530px] mx-auto w-full">
      <div className="flex items-center justify-between flex-col md:flex-row gap-6 mb-10">
        <h3 className="text-brand-main text-2xl lg:text-32 uppercase">explore Layton Clones</h3>
        <ModalDialog products={products} />
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 mx-auto w-full gap-4 ">
        {products.map((product) => (
          <CloneCard key={product.id} product={product} />
        ))}
      </div>
      <Pagination className="mt-6 md:mt-12">
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious href="#" />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#" isActive>
              1
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">2</PaginationLink>
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
  );
};

export default TabClones;
