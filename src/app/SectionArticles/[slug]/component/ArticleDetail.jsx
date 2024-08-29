

import parse from 'html-react-parser';
import { Box, Typography } from "@mui/material";
import React from "react";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import "./style.css";


async function getPostsFromID( slug ) {
  const response = await fetch(`http://203.150.243.197:4000/landingPage/getArticle?articleId=${slug}`);

  if (!response.ok) {
    throw new Error('Error');
  }

  return response.json();
}

function formatDate(dateString) {
  const date = new Date(dateString);
  const options = {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  };
  return date.toLocaleDateString('en-GB', options); 
}


export default async function ArticleDetail({params}) {


  const result = await getPostsFromID(params.slug);
  console.log('result ', result.response);


  
  return (
    <>
    

      <Box
        sx={{
          position: "relative",
          width: "100vw",
          height:"100%",
          display: "flex",
          justifyContent: "start",
          overflow:"hidden",
          flexDirection: "column",
          pb:2,
          px: {xs:3,sm:5,md:8},
          pt:"50px"
        }}
      >
        <Box sx={{ position: "absolute", left: 10, top: 350 ,display:{xs:"none",xl:"flex"}}}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="168"
            height="310"
            fill="none"
            viewBox="0 0 168 310"
          >
            <path
              fill="#E5F8FE"
              fillOpacity="0.74"
              fillRule="evenodd"
              d="M-72.62 50.367c81.373-61.551 157.578-71.203 206.085 0 35.379 51.933 52.185 145.222 7.959 200.041-4.545 5.635-92.503 90.604-183.087 47.125-98.177-47.125-81.395-209.014-30.957-247.166z"
              clipRule="evenodd"
            ></path>
          </svg>
        </Box>
        <Box sx={{ position: "absolute", right: 0, top: 50,display:{xs:"none",xl:"flex"} }}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="249"
            height="357"
            fill="none"
            viewBox="0 0 249 357"
          >
            <path
              fill="#E5F8FE"
              fillOpacity="0.74"
              fillRule="evenodd"
              d="M51.302 57.526c103.38-71.031 200.196-82.17 261.823 0 44.948 59.933 66.299 167.591 10.112 230.852-5.775 6.504-117.522 104.561-232.606 54.384-124.73-54.384-103.409-241.208-39.33-285.236z"
              clipRule="evenodd"
            ></path>
          </svg>
        </Box>


        <Box
          sx={{
            display: "flex",
            justifyContent: "start",
            alignItems: "center",
            pl:{md:0,lg:7},
            
          }}
        >
          <svg
      xmlns="http://www.w3.org/2000/svg"
      width="27"
      height="27"
      fill="none"
      viewBox="0 0 27 27"
    >
      <rect
        width="20.25"
        height="16.875"
        x="3.375"
        y="6.75"
        stroke="gray"
        strokeWidth="2"
        rx="2"
      ></rect>
      <path
        fill="gray"
        d="M3.375 10.75c0-1.886 0-2.828.586-3.414.586-.586 1.528-.586 3.414-.586h12.25c1.886 0 2.828 0 3.414.586.586.586.586 1.528.586 3.414v.5H3.375v-.5z"
      ></path>
      <path
        stroke="gray"
        strokeLinecap="round"
        strokeWidth="2"
        d="M7.875 3.375V6.75M19.125 3.375V6.75"
      ></path>
      <rect
        width="4.5"
        height="2.25"
        x="7.875"
        y="13.5"
        fill="gray"
        rx="0.5"
      ></rect>
      <rect
        width="4.5"
        height="2.25"
        x="7.875"
        y="18"
        fill="gray"
        rx="0.5"
      ></rect>
      <rect
        width="4.5"
        height="2.25"
        x="14.625"
        y="13.5"
        fill="gray"
        rx="0.5"
      ></rect>
      <rect
        width="4.5"
        height="2.25"
        x="14.625"
        y="18"
        fill="gray"
        rx="0.5"
      ></rect>
    </svg>
          <Typography
            sx={{
              fontSize: 22,
              fontWeight: 400,
              color: "#667085",
              ml: 0.5,
              mt:0.7            }}
          >
            {formatDate(result.response.result.createTime)}
          </Typography>
        </Box>



        <Typography sx={{ fontSize: {xs:20,md:30,lg:35,xl:45,xxl:50}, fontWeight: 700, color: "#007DFC" ,mt:"5px",px:{lg:7},zIndex:5}}>
        
        {result.response.result.label}
    
        </Typography>

       
          

          <Typography
          
            sx={{ fontSize: {xs:16,md:18,lg:20,xl:25,xxl:30}, fontWeight: 400, color: "#686868", mt: {md:"50px",lg:"69px"},
            overflowWrap: 'break-word', px:{xs:3,sm:5,md:6,lg:10,xl:13},zIndex:5}} className="content"
          >
             {parse(result.response.result.content)}  
          </Typography>
       
      </Box>
    </>
  );
}
