

import { useRouter } from "next/navigation";
import SlideImageProduct1 from "./SmartMedical/Hero/SlideImageProduct";
import ProductDetail1 from "./SmartMedical/ProductDetail/ProductDetail";
import ProductSoftware1 from "./SmartMedical/ProductSoftware/ProductSoftware";
import ProductGuide1 from "./SmartMedical/ProductGuide/ProductGuide";
import ProductList1 from "./SmartMedical/ProductList/ProductList";
import ProductList3 from "./Pharmacy/ProductList/ProductList";
import SlideImageProduct2 from "./Dispensing/Hero/SlideImageProduct";
import ProductDetail2 from "./Dispensing/ProductDetail/ProductDetail";
import ProductSoftware2 from "./Dispensing/ProductSoftware/ProductSoftware";
import ProductGuide2 from "./Dispensing/ProductGuide/ProductGuide";
import ProductList2 from "./Dispensing/ProductList/ProductList";
import SlideImageProduct3 from "./Pharmacy/Hero/SlideImageProduct";
import ProductDetail3 from "./Pharmacy/ProductDetail/ProductDetail";
import ProductSoftware3 from "./Pharmacy/ProductSoftware/ProductSoftware";
import ProductGuide3 from "./Pharmacy/ProductGuide/ProductGuide";
import HeroProduct from "./HeroProduct";
import TestWidth from "./TestWidth";
import HeroProductMobile from "./HeroProductMobile/HeroProductMobile";
import ProductDetail1Mobile from "./SmartMedical/Mobile/ProductDetail1Mobile";
import ProductSoftware1Mobile from "./SmartMedical/Mobile/ProductSoftWare1Mobile";
import ProductGuide1Mobile from "./SmartMedical/Mobile/ProductGuide1Mobile";
import ProductList1Mobile from "./SmartMedical/Mobile/ProductList1Mobile";

import ProductDetail2Mobile from "./Dispensing/Mobile/ProductDetail2Mobile";
import ProductSoftware2Mobile from "./Dispensing/Mobile/ProductSoftWare2Mobile";
import ProductGuide2Mobile from "./Dispensing/Mobile/ProductGuide2Mobile";
import ProductList2Mobile from "./Dispensing/Mobile/ProductList2Mobile";


import ProductDetail3Mobile from "./Pharmacy/Mobile/ProductDetail3Mobile";
import ProductSoftware3Mobile from "./Pharmacy/Mobile/ProductSoftWare3Mobile";
import ProductGuide3Mobile from "./Pharmacy/Mobile/ProductGuide3Mobile";
import ProductList3Mobile from "./Pharmacy/Mobile/ProductList3Mobile";
export const metadata = {
  title: 'Pensook Healthcare',
  
}
export default function Page({ params }) {
  const productId = params.productId;


 

  return (
    <>
      <title>Pensook Healthcare</title>
  
      <HeroProductMobile />  <HeroProduct />
       {productId === "1" && (
        <>
          
           <ProductDetail1Mobile />  <ProductDetail1 />  
          
           <ProductSoftware1Mobile />  <ProductSoftware1 />   
          
         <ProductGuide1Mobile />  <ProductGuide1 />   
        
       <ProductList1Mobile />   <ProductList1 />        
        </>
      )}  

       {productId === "2" && (
        <>
         
         <ProductDetail2Mobile />  <ProductDetail2 />   
          
           <ProductSoftware2Mobile /> <ProductSoftware2 />   
           
         <ProductGuide2Mobile />  <ProductGuide2 />    
        
        <ProductList2Mobile />   <ProductList2 />    
        </>
      )} 

        {productId === "3" && (
        <>
         
         <ProductDetail3Mobile />  <ProductDetail3 />     
          
           <ProductSoftware3Mobile />  <ProductSoftware3 />   
           
          <ProductGuide3Mobile />  <ProductGuide3 />   
        
          <ProductList3Mobile />   <ProductList3 />    
        </>
      )} 
    
    </>
  );
}
