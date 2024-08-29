import * as React from "react";

import RootLayout from "./layout";
import AddPostEditor from "./AddPostEditor";




export default function Page() {
  return (
    <>
  <title>Pensook Healthcare</title>
  <RootLayout>
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
      {/* <HeroSlideImage />
      <ArticleDetail />
      <RecommendArticle /> */}
         <AddPostEditor />    
       {/* <TestSwap /> */}
       {/* <DetailEditor />  */} 
      {/*  <AddPostEditor /> */}
      
       </RootLayout>
     
    </>
  );
}


Page.getLayout = function getLayout(page) {
  return (
 
      <RootLayout>{page}</RootLayout>
   
  )
}