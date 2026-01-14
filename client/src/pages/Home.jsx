import React from "react";
import Hero from "../components/home/Hero";
import CategoryCards from "../components/home/Categories";
import WhyRiderLens from "../components/home/WhyRiderLens";
import FeaturedProducts from "../components/home/FeaturedProducts";
import SeeItInAction from "../components/home/SeeItInAction";

const Home = () => {
  return (
    <div className="bg-light-gray">
      <Hero />
      <CategoryCards />
      <WhyRiderLens />
      <FeaturedProducts />
      <SeeItInAction />
    </div>
  );
};

export default Home;
