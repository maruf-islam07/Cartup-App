import React from "react";
import Hero from "../Hero/Hero";
import Category from "../Category/Category";
import ProductList from "../ProductList/ProductList";

function Home() {
  return (
    <div>
      <Hero />
      <Category />
      <ProductList />
    </div>
  );
}

export default Home;
