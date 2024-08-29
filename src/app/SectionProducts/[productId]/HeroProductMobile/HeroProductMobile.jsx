"use client";

import { Box, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import { useRouter } from "next/navigation";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Noto_Sans_Thai } from "next/font/google";
import HeroImageBackground from "../../../../assets/HeroImageBackground.png"
import SmartMedical from "../../../../assets/SmartMedical.png"
import AutomatedDispensing from "../../../../assets/AutomatedDispensing.png"
import PharmacyVending from "../../../../assets/PharmacyVending.png"

const noto_Sans_Thai = Noto_Sans_Thai({
    weight: ['400', '500' , '600' , '700'],
    subsets: ["latin"],
    display: "swap",
  });
export default function HeroProductMobile() {
  const router = useRouter();

  const [SlideProduct1, setSlideProduct1] = useState(false);
  const [SlideProduct2, setSlideProduct2] = useState(false);
  const [SlideProduct3, setSlideProduct3] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
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

  useEffect(() => {
    const currentURL = window.location.href;
    if (currentURL.includes("/SectionProducts/1")) {
      setSlideProduct1(true);
      setSlideProduct2(false);
      setSlideProduct3(false);
    }

    if (currentURL.includes("/SectionProducts/2")) {
      setSlideProduct1(false);
      setSlideProduct2(true);
      setSlideProduct3(false);
    }

    if (currentURL.includes("/SectionProducts/3")) {
      setSlideProduct1(false);
      setSlideProduct2(false);
      setSlideProduct3(true);
    }
  }, []);

  const handleButtonClickNext = () => {
    if (SlideProduct1) {
      router.push("/SectionProducts/2");
    }
    if (SlideProduct2) {
      router.push("/SectionProducts/3");
    }
    if (SlideProduct3) {
      router.push("/SectionProducts/1");
    }
  };

  const handleButtonClickBack = () => {
    if (SlideProduct1) {
      router.push("/SectionProducts/3");
    }
    if (SlideProduct2) {
      router.push("/SectionProducts/1");
    }
    if (SlideProduct3) {
      router.push("/SectionProducts/2");
    }
  };

  const handleButtonClickTabProduct1 = () => {
    router.push("/SectionProducts/1");
  };

  const handleButtonClickTabProduct2 = () => {
    router.push("/SectionProducts/2");
  };

  const handleButtonClickTabProduct3 = () => {
    router.push("/SectionProducts/3");
  };
  return (
    <>
    <ThemeProvider theme={Responsive}>
      <Box
        sx={{
          position: "relative",
          width: "100%",
    
          height: 658,
          
          justifyContent: "center",
          alignItems: "center",
          overflow: "hidden",
          '@media screen and (min-width: 821px)': {
            display:"none"
        },
        '@media screen and (max-width: 820px)': { 
          display: "flex"
        },
        }}
      >
        <Image
          src={HeroImageBackground}
          
          alt="BackgroundHero"
          style={{
            width: "100%", 
            height: "100%", 
            objectFit: "cover", 
          }}
          
        />
        <Box
          sx={{
            position: "absolute",
            backgroundColor: "rgba(0, 125, 252, 0.36)",
            zIndex: 1,
            width: "100%",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            overflow: "hidden",
          }}
        ></Box>
        <Box
          sx={{
            position: "absolute",
            mt:10,
            bgcolor: "#F4F8FB",
            borderRadius: "30px",
            zIndex: 2,
            width: windowWidth < 600 ? 362 : 590,
            height: windowWidth < 600 ? 488 : 488,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            overflow: "hidden",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "start",
              alignItems: "center",
              width: "100%",
              overflow: "hidden",
            }}
          >
             <Box
                sx={{
                  display: "flex",
                  justifyContent: "start",
                  
                }}
              >
            <Box sx={{ ml: 2, cursor: "pointer" }}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="36"
                height="36"
                fill="none"
                viewBox="0 0 36 36"
                onClick={handleButtonClickBack}
              >
                <g filter="url(#filter0_b_2828_2121)">
                  <rect
                    width="36"
                    height="36"
                    fill="#fff"
                    fillOpacity="0.9"
                    rx="18"
                    onMouseOver={(e) => (e.target.style.fill = "#CEE6FF")}
                    onMouseOut={(e) => (e.target.style.fill = "#fff")}
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
                    id="filter0_b_2828_2121"
                    width="52"
                    height="52"
                    x="-8"
                    y="-8"
                    colorInterpolationFilters="sRGB"
                    filterUnits="userSpaceOnUse"
                  >
                    <feFlood
                      floodOpacity="0"
                      result="BackgroundImageFix"
                    ></feFlood>
                    <feGaussianBlur
                      in="BackgroundImageFix"
                      stdDeviation="4"
                    ></feGaussianBlur>
                    <feComposite
                      in2="SourceAlpha"
                      operator="in"
                      result="effect1_backgroundBlur_2828_2121"
                    ></feComposite>
                    <feBlend
                      in="SourceGraphic"
                      in2="effect1_backgroundBlur_2828_2121"
                      result="shape"
                    ></feBlend>
                  </filter>
                </defs>
              </svg>
            </Box>
            </Box>


            <Box
              sx={{
                display: SlideProduct1 ? "flex" : "none",
                justifyContent: "center",
                alignItems: "center",
                flexDirection:"column",
                width:"100%"
               
              }}
            >
              <Box sx={{display: "flex",
                  justifyContent: "center" ,width:164, height: 218}}>
                <Image
                  src={SmartMedical}
                  
                  style={{width:"100%",height:"100%"}}
                />
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "start",                
                  width: windowWidth < 560 ? "100%" : "40vw",
                  flexDirection: "column",
                  pt:8,
                  
                }}
              >
                <Box >
                <Typography
                  sx={{ fontSize: 16, fontWeight: 500, color: "#6F6F6F" }}className={noto_Sans_Thai.className}
                >
                  Medical Automation Machine
                </Typography>
                <Typography
                  sx={{ fontSize: 18, fontWeight: 600, color: "#915BD7" }}className={noto_Sans_Thai.className}
                >
                  Smart Medical Cabinet
                </Typography>
                </Box>
              </Box>
            </Box>





            <Box
              sx={{
                display: SlideProduct2 ? "flex" : "none",
                justifyContent: "center",
                alignItems: "center",
                flexDirection:"column",
                width:"100%"
               
                
              
              }}
            >
             <Box sx={{display: "flex",
                  justifyContent: "center" ,width:164, height: 218}}>
                <Image
                  src={AutomatedDispensing}
                  
                  style={{width:"100%",height:"100%"}}
                />
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "start",                
                  width: windowWidth < 560 ? "100%" : "40vw",
                  flexDirection: "column",
                  pt:8,
                  
                }}
              >
                <Box >
                <Typography
                  sx={{ fontSize: 16, fontWeight: 500, color: "#6F6F6F" }}className={noto_Sans_Thai.className}
                >
                  Custom Medical Automation Machine
                </Typography>
                <Typography
                  sx={{ fontSize: 18, fontWeight: 600, color: "#915BD7" }}className={noto_Sans_Thai.className}
                >
                  Automated Dispensing 
System Technology
                </Typography>
                </Box>
              </Box>
            </Box>






            <Box
              sx={{
                display: SlideProduct3 ? "flex" : "none",
                justifyContent: "center",
                alignItems: "center",
                flexDirection:"column",
                width:"100%"
               
                
              }}
            >
             <Box sx={{display: "flex",
                  justifyContent: "center" ,width:164, height: 218}}>
                <Image
                  src={PharmacyVending}
                  
                  style={{width:"100%",height:"100%"}}
                />
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "start",                
                  width: windowWidth < 560 ? "100%" : "40vw",
                  flexDirection: "column",
                  pt:8,
                  
                }}
              >
                <Box >
                <Typography
                  sx={{ fontSize: 16, fontWeight: 500, color: "#6F6F6F" }}className={noto_Sans_Thai.className}
                >
                 Medical Automation Machine
                </Typography>
                <Typography
                  sx={{ fontSize: 18, fontWeight: 600, color: "#915BD7" }}className={noto_Sans_Thai.className}
                >
                  Pharmacy Vending Machine
                </Typography>
                </Box>
              </Box>
            </Box>
            
          </Box>
          <Box
                sx={{
                  display: "flex",
                  justifyContent: "start",
                  
                }}
              >
            <Box sx={{ mr: 2, cursor: "pointer" }}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="36"
                height="36"
                fill="none"
                viewBox="0 0 36 36"
                onClick={handleButtonClickNext}
              >
                <g filter="url(#filter0_b_2828_2118)">
                  <rect
                    width="36"
                    height="36"
                    fill="#fff"
                    fillOpacity="0.9"
                    rx="18"
                    onMouseOver={(e) => (e.target.style.fill = "#CEE6FF")}
                    onMouseOut={(e) => (e.target.style.fill = "#fff")}
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
                    id="filter0_b_2828_2118"
                    width="52"
                    height="52"
                    x="-8"
                    y="-8"
                    colorInterpolationFilters="sRGB"
                    filterUnits="userSpaceOnUse"
                  >
                    <feFlood
                      floodOpacity="0"
                      result="BackgroundImageFix"
                    ></feFlood>
                    <feGaussianBlur
                      in="BackgroundImageFix"
                      stdDeviation="4"
                    ></feGaussianBlur>
                    <feComposite
                      in2="SourceAlpha"
                      operator="in"
                      result="effect1_backgroundBlur_2828_2118"
                    ></feComposite>
                    <feBlend
                      in="SourceGraphic"
                      in2="effect1_backgroundBlur_2828_2118"
                      result="shape"
                    ></feBlend>
                  </filter>
                </defs>
              </svg>
            </Box>
            </Box>
        </Box>
        
        <Box
          sx={{
            display: "flex",
            justifyContent: "start",
            position: "absolute",
            top:"95%",
            zIndex: 5,
            height:"100%",
            
          }}
        >
          <FiberManualRecordIcon
            sx={{
              color: SlideProduct1 ? "#007DFC" : "#CDCDCD",
              cursor: "pointer",
            }}
            onClick={handleButtonClickTabProduct1}
          />
          <FiberManualRecordIcon
            sx={{
              color: SlideProduct2 ? "#007DFC" : "#CDCDCD",
              cursor: "pointer",
            }}
            onClick={handleButtonClickTabProduct2}
          />
          <FiberManualRecordIcon
            sx={{
              color: SlideProduct3 ? "#007DFC" : "#CDCDCD",
              cursor: "pointer",
            }}
            onClick={handleButtonClickTabProduct3}
          />
        </Box>
      </Box>
      </ThemeProvider>
    </>
  );
}
