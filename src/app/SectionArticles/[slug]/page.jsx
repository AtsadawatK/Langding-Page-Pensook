import * as React from "react";
import HeroSlideImage from "./component/HeroSlideImage";
import ArticleDetail from "./component/ArticleDetail";
import RecommendArticle from "./component/RecommendArticle";
import { NextRequest, NextResponse } from "next/server";


async function getPostsFromID(slug) {
  const response = await fetch(`http://203.150.243.197:4000/landingPage/getArticle?articleId=${slug}`);

  if (!response.ok) {
    throw new Error('Error');
  }

  return response.json();
}

export default async function Page({params}) {

  const result = await getPostsFromID(params.slug);
  console.log('result ', result.response);

  

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
            <ArticleDetail params={params}/> 
         <RecommendArticle />   
      {/* <UpdateArticle /> */}
    
    </>
  );
}
