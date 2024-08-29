"use client";

import { Box, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import Image from "next/image";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import CardArticleEdit from "./CardArticleEdit";
import CardArticleEditMobile from "./CardArticleEiditMobile"
import AddIcon from '@mui/icons-material/Add';
import Vector from "../../../assets/Vector_Articles.png"
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Noto_Sans_Thai } from 'next/font/google'

const noto_Sans_Thai = Noto_Sans_Thai({
  weight: ['400', '500' , '600' , '700'],
  subsets: ['latin'],
  display: 'swap',
})

export default function UpdateArticle(onClick) {
  const [isEditChanged, setEditChanged] = useState(false);
  const maxItems = 1;
  const [dataArrayLength, setDataArrayLength] = useState(0);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const Responsive = createTheme({
    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 820,
        lg: 1250,
        xl: 1500,
        xxl: 1800,
      },
    },
    
    
  });
  const handleDataArrayLengthChange = (newLength) => {
    setDataArrayLength(newLength);
    console.log('New Data Array Length:', newLength);
  };
  const handleEditChange = (changed) => {
    setEditChanged(changed);
  };


  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);



  return (
    <>
  
  <ThemeProvider theme={Responsive}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          width: "100vw",
          height: "100%",
          pt: 10,
          flexDirection: "column",
          bgcolor:"#FFFFFF",
          pb:20,
          overflow:"hidden"
        }}
      >
        <Typography sx={{ fontSize: {xs:24,md:30,lg:40,xl:50}, fontWeight: 600, color: "#007DFC" ,textAlign:"center"}}className={noto_Sans_Thai.className}>
          บทความที่น่าสนใจ
        </Typography>
        <Typography sx={{ fontSize:  {xs:16,md:18,lg:30,xl:40}, fontWeight: 300, color: "#915BD7",textAlign:"center" ,px:{xs:8,sm:0},mt:2}}className={noto_Sans_Thai.className}>
          บทความเกี่ยวกับนวัตกรรมในด้านการแพทย์ และการดูแลสุขภาพ
        </Typography>
        <Box sx={{display:"flex" ,  justifyContent:"center",textAlign:"center",border:"1px solid black",}}>

        <Box
        sx={{
          
          position: "relative",
          
          zIndex:1
        }}
      >
        <Box sx={{ position: "absolute",  left: "-50vw", top: "90vh" }}>
          <Image src={Vector} alt="vector"/>
        </Box>
        <Box sx={{ position: "absolute",  top: "40vh", right: "-50vw" ,zIndex:2}}>
          <Image src={Vector} alt="vector"/>
        </Box>
      </Box>
        
        
        
        </Box>

        <Box
      sx={{
        display: {xs:"none",lg:"flex"},
        flexDirection: "column",
        position: "relative",
        px:{xs:10,md:20},
        zIndex:2,
        width:"100%"
        
      }}
    >
      {Array.from({ length: Math.ceil(maxItems / 3) }).map((_, rowIndex) => (
          <Box
            key={rowIndex}
            sx={{
              display: "flex",
              justifyContent:windowWidth < 1320 ? "center" : "space-between",
              marginBottom: "16px",
              flexWrap: "wrap",
              width:"100%",
              
            }}
          >
            {Array.from({ length: 3 }).map((_, colIndex) => {
              const itemIndex = rowIndex * 3 + colIndex;
              return itemIndex < maxItems ? (
                <CardArticleEdit key={itemIndex} onDataArrayLengthChange={handleDataArrayLengthChange} onEditChange={handleEditChange}/>
              ) : null;
            })}
          </Box>
      ))}
    
      

      
    </Box>
        

    <Box
      sx={{
        display: {xs:"flex",lg:"none"},
        flexDirection: "column",
        position: "relative",
        px:{xs:windowWidth < 730 ? 5 : 10,md:windowWidth < 900 ? 15 : 20},
        zIndex:2,
        width:"100%"
        
      }}
    >
      {Array.from({ length: Math.ceil(maxItems / 3) }).map((_, rowIndex) => (
          <Box
            key={rowIndex}
            sx={{
              display: "flex",
              justifyContent:windowWidth < 1320 ? "center" : "space-between",
              marginBottom: "16px",
              flexWrap: "wrap",
              width:"100%",
              
            }}
          >
            {Array.from({ length: 3 }).map((_, colIndex) => {
              const itemIndex = rowIndex * 3 + colIndex;
              return itemIndex < maxItems ? (
                <CardArticleEditMobile key={itemIndex} onDataArrayLengthChange={handleDataArrayLengthChange} onEditChange={handleEditChange}/>
              ) : null;
            })}
          </Box>
      ))}
    
      

      
    </Box>
        



   
      </Box>
      </ThemeProvider>
    </>
  );
}
