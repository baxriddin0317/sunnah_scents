import Brands from "@/components/Brands";
import Confidence from "@/components/Confidence";
import Fragrances from "@/components/Fragrances";
import Hero from "@/components/Hero";
import Posts from "@/components/Posts";
import Spray from "@/components/Spray";
import React from "react";

const HomeContent = () => {
  
  return (
    <main>
      <Hero />
      <Fragrances />
      <Spray />
      <Confidence />
      <Brands />
      <Posts />
    </main>
  );
};

export default HomeContent;
