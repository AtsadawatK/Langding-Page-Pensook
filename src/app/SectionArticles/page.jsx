import * as React from "react";
import HeroSlideImage from "./component/HeroSlideImage";
import ArticleDetail from "./component/ArticleDetail";
import RecommendArticle from "./component/RecommendArticle";


export default function Page() {
  return (
    <>
      <title>Pensook Healthcare</title>
      {/* <Hero />
      <Healthcare />
      <Company />
      <Product />

      <Partner />
      <Article />
      <Contact /> */}
      {/* <SlideImageProduct />
      <ProductDetail />
      <ProductSoftware />
      <ProductGuide />
      <ProductList /> */}
       <HeroSlideImage />
        <ArticleDetail />
        <RecommendArticle /> 
      {/* <UpdateArticle /> */}
    </>
  );
}
