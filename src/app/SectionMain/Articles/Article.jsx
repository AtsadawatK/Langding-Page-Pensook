"use client"

import { Box, Typography } from "@mui/material";
import React , { useState , useEffect} from "react";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import Image from "next/image";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import CardArticle from "./components/CardArticle";
export default function Article() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);
  const [cardCount, setCardCount] = useState(3); 

  const handleShowMore = () => {
    setCardCount(cardCount + 3); 
  };




  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      setWindowHeight(window.innerHeight);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  

 
  return (
    <>

     <Box id="Article-section" sx={{marginTop:"auto" ,height:"30px", }}></Box>
      <Box
        
        sx={{
          display: "flex",
          alignItems: "center",
          width: "100vw",
          height: "100%",
          pt:3.5,
          flexDirection: "column",
          overflow:"hidden",
          pb:1,
          
        }}
      >
        <Typography sx={{ fontSize: {xs:24,sm:30,lg:35,xl:50,},fontWeight: 600, color: "#007DFC" ,textAlign:"center"}}>
          บทความที่น่าสนใจ
        </Typography>
        <Typography sx={{ fontSize: {xs:16,md:20,lg:25,xl:40,"&.MuiTypography-root":{
fontWeight: 550,
        }},  color: "#915BD7" ,textAlign:"center",px:6}}>
          บทความเกี่ยวกับนวัตกรรมในด้านการแพทย์ และการดูแลสุขภาพ
        </Typography>
        <Box
          sx={{
            display: "flex",
            position: "relative",
            justifyContent: windowWidth < 1250 ? "center" : "space-between",
            flexWrap: "wrap",
            width:"82%"
          }}
        >
          {[0].map((_, index) => (
    <CardArticle key={index} />
  ))}
         

          <Box sx={{ position: "absolute", zIndex: -1, right: -200, top: 430 }}>
            <Image src={require("../../../assets/Vector_Articles.png")} alt="vector"/>
          </Box>
          <Box sx={{ position: "absolute", zIndex: -1, top: 900, left: -150 }}>
            <Image src={require("../../../assets/Vector_Articles.png")} alt="vector"/>
          </Box>
        </Box>
        
        {/*  <Button
          variant="contained"
          endIcon={<ArrowDownwardIcon sx={{ color: "#6941C6" }} />}
          sx={{
            width: 168,
            height: 56,
            bgcolor: "#F9F5FF",
            mt: 7,
            "&:hover": {
              bgcolor: "#F2EAFF",
            },
            "&.MuiButton-root": {
              boxShadow: "none !important",
              borderRadius: "8px !important",
            },
          }}
        >
          <Typography sx={{ fontSize: 18, fontWeight: 500, color: "#6941C6" }}>
            แสดงเพิ่มเติม
          </Typography>
        </Button>  */}
      </Box>
     
    </>
  );
}
