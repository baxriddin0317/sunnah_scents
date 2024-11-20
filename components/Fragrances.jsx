"use client";
import React, { useEffect, useState } from "react";
import SectionTop from "./SectionTop";
import Card from "./Card";
import Image from "next/image";

const Fragrances = () => {
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
    <div className="relative bg-brand-yellow pt-32 overflow-x-hidden">
      <div className="absolute inset-0 size-full bg-brand-yellow/40 z-10"></div>
      <div className="absolute -top-10 -right-32 z-0">
        <Image className="mix-blend-multiply" src={'/sections/bg-right.png'} width={591} height={300} alt="" />
      </div>
      <Image className="absolute -bottom-0 -left-32 z-0" src={'/sections/bg-left.png'} width={591} height={500} alt="" />
      <section className="pb-28 px-4">
        <SectionTop
          title="Top Fragrances"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ullamcorper convallis fermentum."
        />
        <div className="relative max-w-[1484px] grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 mx-auto w-full text-center mt-6 lg:mt-16 gap-4 z-20">
          {products.slice(0, 5).map((product) => (
            <Card key={product.id} product={product} />
          ))}
        </div>
      </section>
      <section className="pb-28 px-4">
        <SectionTop
          title="Latest Fragrances"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ullamcorper convallis fermentum."
        />
        <div className="relative max-w-[1484px] grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 mx-auto w-full text-center mt-6 lg:mt-16 gap-4 z-20">
          {products.slice(5, 10).map((product) => (
            <Card key={product.id} product={product} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Fragrances;
