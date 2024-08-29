import * as React from "react";
import SlideImageProduct from "./Hero/SlideImageProduct";
import ProductDetail from "./ProductDetail/ProductDetail";
import ProductSoftware from "./ProductSoftware/ProductSoftware";
import ProductGuide from "./ProductGuide/ProductGuide";
import ProductList from "./ProductList/ProductList";

export default function Page() {
  return (
    <>
      {/* <Hero />
      <Healthcare />
      <Company />
      <Product />

      <Partner />
      <Article />
      <Contact /> */}
      <SlideImageProduct />
      <ProductDetail />
      <ProductSoftware />
      <ProductGuide />
      <ProductList />
      {/* <HeroSlideImage />
        <ArticleDetail />
        <RecommendArticle /> */}
      {/* <UpdateArticle /> */}
    </>
  );
}
