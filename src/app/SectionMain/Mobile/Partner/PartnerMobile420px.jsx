"use client";
import Switch from '@mui/material/Switch';
import Paper from '@mui/material/Paper';
import Slide from '@mui/material/Slide';
import FormControlLabel from '@mui/material/FormControlLabel';

import { Box, Grid, Typography } from "@mui/material";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import Wecan from "./components/Wecan";
import Bighit from "./components/Bighit";
import Sm from "./components/Sm";
import Ap from "./components/Ap";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import WecanPartner from "../../../../assets/Wecan_Partner.png"
import SmPartner from "../../../../assets/SM_Partner.png"
import BighitPartner from "../../../../assets/BigHit_Partner.png"
import ApPartner from "../../../../assets/AP_Partner.png"


export default function PartnerMobile420px() {
  const [tabBighit, setTabBighit] = useState(false);
  const [tabSM, setTabSM] = useState(false);
  const [tabWecan, setTabWecan] = useState(false);
  const [tabAP, setTabAP] = useState(true);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [partner1, setPartner1] = useState(true);
  const [partner2, setPartner2] = useState(false);
  const [partner3, setPartner3] = useState(false);
  const [partner4, setPartner4] = useState(false);





  const handleClickPartner1 = () => {
    setPartner1(true);
    setPartner2(false);
    setPartner3(false);
    setPartner4(false);
  }
  
  const handleClickPartner2 = () => {
    setPartner1(false);
    setPartner2(true);
    setPartner3(false);
    setPartner4(false);
  }
  
  const handleClickPartner3 = () => {
    setPartner1(false);
    setPartner2(false);
    setPartner3(true);
    setPartner4(false);
  }
  
  const handleClickPartner4 = () => {
    setPartner1(false);
    setPartner2(false);
    setPartner3(false);
    setPartner4(true);
  }



  const handleButtonClickNext = () => {
    if (partner1 == true ) {
        setPartner1(false);
        setPartner2(true);
        setPartner3(false);
        setPartner4(false);
    }
    else if (partner2 == true){
        setPartner1(false);
        setPartner2(false);
        setPartner3(true);
        setPartner4(false);
    }
    else if (partner3 == true){
        setPartner1(false);
        setPartner2(false);
        setPartner3(false);
        setPartner4(true);
    }
    else if (partner4 == true){
        setPartner1(true);
        setPartner2(false);
        setPartner3(false);
        setPartner4(false);
    }
  };

  const handleButtonClickPrev = () => {
    if (partner1 == true ) {
        setPartner1(false);
        setPartner2(false);
        setPartner3(false);
        setPartner4(true);
    }
    else if (partner2 == true){
        setPartner1(true);
        setPartner2(false);
        setPartner3(false);
        setPartner4(false);
    }
    else if (partner3 == true){
        setPartner1(false);
        setPartner2(true);
        setPartner3(false);
        setPartner4(false);
    }
    else if (partner4 == true){
        setPartner1(false);
        setPartner2(false);
        setPartner3(true);
        setPartner4(false);
    }
  };


  const handleChange = () => {
    setChecked((prev) => !prev);
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
    typography: {
      fontFamily: "Noto Sans Thai, sans-serif",
    },
  });

  
  /* useEffect(() => {
    const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

    const autoLoopPartner = async () => {
      while (true) {
        await handleImageClickBighit();
        await delay(5000);

        await handleImageClickSM();
        await delay(5000);

        await handleImageClickWecan();
        await delay(5000);

        await handleImageClickAP();
        await delay(5000);
      }
    };

    autoLoopPartner();

    return () => {};
  }, []); */

  return (
    <>
     
      <ThemeProvider theme={Responsive}>
        
        <Box
          id="Partner-section"
          sx={{ marginTop: "auto", height: "17px", backgroundColor: "#F4FFFA" ,'@media screen and (min-width: 419px)': { 
            display: "none"
          }}}
        ></Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            width: "100vw",
            height: "100%",
            backgroundColor: "#F4FFFA",
            flexDirection: "column",
            pt: 2,
            pb:8,
            overflow:"hidden",
            '@media screen and (min-width: 419px)': { 
              display: "none"
            }
          }}
        >
          <Typography sx={{ fontSize: 24, fontWeight: 700, color: "#007DFC" }}>
            PARTNER
          </Typography>

          <Grid container spacing={2}>
            <Grid
              xs={12}
              sx={{
                display: "flex",
                justifyContent: "center",
                px:3
              }}
            >



             
             <Box sx={{display:"flex",justifyContent:"start",alignItems: "center",width:"100%",height:"350px"}}>
                <Box sx={{cursor:"pointer"}}>
             <svg
      xmlns="http://www.w3.org/2000/svg"
      width="36"
      height="36"
      fill="none"
      viewBox="0 0 36 36"
      onClick={handleButtonClickPrev}
    >
      <g filter="url(#filter0_b_2463_7971)">
        <rect
          width="36"
          height="36"
          fill="#fff"
          fillOpacity="0.9"
          rx="18"
        ></rect>
        <rect
          width="35"
          height="35"
          x="0.5"
          y="0.5"
          stroke="#007DFC"
          rx="17.5"
        ></rect>
        <path
          stroke="#007DFC"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.67"
          d="M20.5 23l-5-5 5-5"
        ></path>
      </g>
      <defs>
        <filter
          id="filter0_b_2463_7971"
          width="52"
          height="52"
          x="-8"
          y="-8"
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
          <feGaussianBlur
            in="BackgroundImageFix"
            stdDeviation="4"
          ></feGaussianBlur>
          <feComposite
            in2="SourceAlpha"
            operator="in"
            result="effect1_backgroundBlur_2463_7971"
          ></feComposite>
          <feBlend
            in="SourceGraphic"
            in2="effect1_backgroundBlur_2463_7971"
            result="shape"
          ></feBlend>
        </filter>
      </defs>
    </svg>
    </Box>
             </Box>

             <Box sx={{display:"flex",justifyContent:"center",alignItems: "center",width:"100%",height:"350px"}}>


             <Box sx={{width:230,height:230 ,display:partner1 ? "flex" : "none",}}>
               <Image
               src={ApPartner}
               style={{width:"100%",height:"100%"}}alt="LogoPartner"
             />
             </Box>

             <Box sx={{width:230,height:230 ,display:partner2 ? "flex" : "none",}}>
               <Image
               src={WecanPartner}
               style={{width:"100%",height:"100%"}}alt="LogoPartner"
             />
             </Box>

             <Box sx={{width:230,height:230 ,display:partner3 ? "flex" : "none",}}>
               <Image
               src={SmPartner}
               style={{width:"100%",height:"100%"}}alt="LogoPartner"
             />
             </Box>

             <Box sx={{width:230,height:230 ,display:partner4 ? "flex" : "none",}}>
               <Image
               src={BighitPartner}
               style={{width:"100%",height:"100%",}}alt="LogoPartner"
             />
             </Box>
             
             </Box>

             <Box sx={{display:"flex",justifyContent:"end",alignItems: "center",width:"100%",height:"350px"}}>
                <Box sx={{cursor:"pointer"}}>
             <svg
      xmlns="http://www.w3.org/2000/svg"
      width="36"
      height="36"
      fill="none"
      viewBox="0 0 36 36"
      onClick={handleButtonClickNext}
    >
      <g filter="url(#filter0_b_2463_7972)">
        <rect
          width="36"
          height="36"
          fill="#fff"
          fillOpacity="0.9"
          rx="18"
          
        ></rect>
        <rect
          width="35"
          height="35"
          x="0.5"
          y="0.5"
          stroke="#007DFC"
          rx="17.5"
        ></rect>
        <path
          stroke="#007DFC"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.67"
          d="M15.5 23l5-5-5-5"
        ></path>
      </g>
      <defs>
        <filter
          id="filter0_b_2463_7972"
          width="52"
          height="52"
          x="-8"
          y="-8"
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
          <feGaussianBlur
            in="BackgroundImageFix"
            stdDeviation="4"
          ></feGaussianBlur>
          <feComposite
            in2="SourceAlpha"
            operator="in"
            result="effect1_backgroundBlur_2463_7972"
          ></feComposite>
          <feBlend
            in="SourceGraphic"
            in2="effect1_backgroundBlur_2463_7972"
            result="shape"
          ></feBlend>
        </filter>
      </defs>
    </svg></Box>
             </Box>




            </Grid>

            <Grid

              xs={12}
              
              sx={{
                display: "flex",
                justifyContent: "start",
                flexDirection: "column",
                
                px: 6
              }}
            >
              {partner1  && <Wecan />}
              {partner2  && <Sm />}
              {partner3  && <Ap />}
              {partner4  && <Bighit />}
            </Grid>

            <Grid

              xs={12}
              
              sx={{
                mt:8,
                display:"flex",
                justifyContent:"center"
              }}
            >
              <Box
            sx={{
              position: "absolute",
           
            }}
          >
            <FiberManualRecordIcon
              sx={{
                color: partner1 ? "#007DFC" : "#CDCDCD",
                cursor: "pointer",mr:-0.5,width:20,height:20
              }}
              onClick={handleClickPartner1}
            />
            <FiberManualRecordIcon
              sx={{
                color: partner2 ? "#007DFC" : "#CDCDCD",
                cursor: "pointer",mr:-0.5,width:20,height:20
              }}
              onClick={handleClickPartner2}
            />
            <FiberManualRecordIcon
              sx={{
                color: partner3? "#007DFC" : "#CDCDCD",
                cursor: "pointer",mr:-0.5,width:20,height:20
              }}
              onClick={handleClickPartner3}
            />
            <FiberManualRecordIcon
              sx={{
                color: partner4 ? "#007DFC" : "#CDCDCD",
                cursor: "pointer",width:20,height:20
              }}
              onClick={handleClickPartner4}
            />
          </Box>
            </Grid> 
          </Grid>
          
        </Box>
      </ThemeProvider>
    </>
  );
}
