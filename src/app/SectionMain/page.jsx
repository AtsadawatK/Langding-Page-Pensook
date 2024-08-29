
import Head from 'next/head';

import Hero from "./Hero/Hero";
import Healthcare from "./HealthCareCommunity/Healthcare";
import Company from "./CompanyExpertise/Company";
import Partner from "./Partner/Partner";
import Article from "./Articles/Article";
import Contact from "./ContactUs/Contact";
import Product from "./Products/Product";
import Layout from "../layout";
import Box from "@mui/material/Box";
import HeroMobile from "./Mobile/HeroMobile/HeroMobile";
import CompanyMobile from "./Mobile/CompanyMobile/CompanyMobile";
import ProductTablet from "./Tablet/ProductTablet/ProductTablet";
import ProductMobile from "./Mobile/ProductMobile/ProductMobile";
import ContactMobile from "./Mobile/ContactUS/ContactMobile";
import PartnerMobile from "./Mobile/Partner/PartnerMobile";
import PartnerMobile500px from "./Mobile/Partner/PartnerMobile500px";
import PartnerMobile420px from "./Mobile/Partner/PartnerMobile420px";
import PartnerTablet from "./Tablet/PartnerTablet/PartnerTablet"

export const metadata = {
  title: 'Pensook Healthcare',
  
}

export default function Home() {




  return (
    <> 
    
    
          <Hero /> 
         <HeroMobile />  


         <Healthcare />  


       <CompanyMobile />  <Company /> 
        
        
        
   
  <ProductMobile />

  <ProductTablet />

  <Product />  

   <Partner /> 
   <PartnerTablet /> 
 <PartnerMobile /> 
 <PartnerMobile500px />  
 <PartnerMobile420px />    
          <Article />   
     <ContactMobile />  <Contact/>   
        
    </>
  );
}





{/* <SlideImageProduct /> 
       <ProductDetail />
       <ProductSoftware />
       <ProductGuide />
       <ProductList /> */}
      {/* <HeroSlideImage />
        <ArticleDetail />
        <RecommendArticle /> */}
      {/* <UpdateArticle /> */}