
"use client";
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Hero from "../app/SectionMain/Hero/Hero";
import Healthcare from "../app/SectionMain/HealthCareCommunity/Healthcare";
import Company from "../app/SectionMain/CompanyExpertise/Company";
import Partner from "../app/SectionMain/Partner/Partner";
import Article from "../app/SectionMain/Articles/Article";
import Contact from "../app/SectionMain/ContactUs/Contact";
import Product from "../app/SectionMain/Products/Product";

import Box from "@mui/material/Box";
import HeroMobile from "../app/SectionMain/Mobile/HeroMobile/HeroMobile";
import CompanyMobile from "../app/SectionMain/Mobile/CompanyMobile/CompanyMobile";
import ProductTablet from "../app/SectionMain/Tablet/ProductTablet/ProductTablet";
import ProductMobile from "../app/SectionMain/Mobile/ProductMobile/ProductMobile";
import ContactMobile from "../app/SectionMain/Mobile/ContactUS/ContactMobile";
import PartnerMobile from "../app/SectionMain/Mobile/Partner/PartnerMobile";
import PartnerMobile500px from "../app/SectionMain/Mobile/Partner/PartnerMobile500px";
import PartnerMobile420px from "../app/SectionMain/Mobile/Partner/PartnerMobile420px";
import PartnerTablet from "../app/SectionMain/Tablet/PartnerTablet/PartnerTablet"





export default function Home() {
  const router = useRouter();

  useEffect(() => {
   
    router.push('/SectionMain');
  }, []);

  return (
    <>
    
 {/*    <Hero />  */}
        {/*  <HeroMobile />  


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
     <ContactMobile />  <Contact/>    */}
      
    </>
  );
}
