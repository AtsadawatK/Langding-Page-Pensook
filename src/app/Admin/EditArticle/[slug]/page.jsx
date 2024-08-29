"use client";

import React ,{ useState , useEffect} from "react";

import RootLayout from "../../layout";
import DetailEditor from "../[slug]/component/DetailEditor";


async function getPostsFromID( slug ) {
  const response = await fetch(`http://203.150.243.197:4000/landingPage/getArticle?articleId=${slug}`);

  if (!response.ok) {
    throw new Error('Error');
  }

  return response.json();
}

export default  function Page({params}) {
  const [resultState , setResultState] = useState ([]);
  const initResult = async () =>{
    try{
      const result = await getPostsFromID (params.slug)
      setResultState(result)
    } catch (error){}
  }
  useEffect(()=> {
    initResult()

  },[])

  return (
    <>

    
  <RootLayout>
      
  <DetailEditor params={params}/>
      
       </RootLayout>
     
    </>
  );
}


Page.getLayout = function getLayout(page) {
  return (
 
      <RootLayout>{page}</RootLayout>
   
  )
}