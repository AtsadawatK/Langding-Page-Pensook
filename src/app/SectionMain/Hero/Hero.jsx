"use client";
import { Noto_Sans_Thai } from 'next/font/google'
import React from "react";

import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import BackgroundPicPC from "../../../assets/HeroImageBackground.png"
import BackgroundPicTablet from "../../../assets/HeroImageTablet.png"
import Image from "next/image";
import ParticleAnimation from "./ParticleAnimation";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const noto_Sans_Thai = Noto_Sans_Thai({
  weight: ['400', '500' , '600' , '700'],
  subsets: ['latin'],
  display: 'swap',
})


export default function Hero() {
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

  

  

  return (
    <>
      <ThemeProvider theme={Responsive}>
        <Box
          id="Hero-section"
          sx={{
            position: "relative",
            overflow: "hidden",
            width: "100vw",
            height: { xs:400,md: 500, lg: 920 },
            '@media screen and (max-width: 420px)': {
              display:"none"
          },
          }}
        >


          <Box sx={{ display: { xs: "none", lg: "flex" } }}>
            <Image
              src={BackgroundPicPC}
              layout="fill"             
              alt="ภาพพื้นหลังหน้าหลัก"
              priority
            />
          </Box>



          <Box sx={{ display: { xs: "flex", lg: "none" } }}>
            <Image
              src={BackgroundPicTablet}
              layout="fill"
              alt="ภาพพื้นหลังหน้าหลัก"
            />
          </Box>


          <Box
            sx={{
              position: "absolute",
              backgroundColor: "rgba(0, 125, 252, 0.26)",
              zIndex: 1,
              width: "100%",
              height: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box sx={{ width: "100%", height: "100%" }}>
              <ParticleAnimation />
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",

                  zIndex: 2,
                 
                  width: "100%",
                  height: "100%",
                }}
              >
                <Typography
                  sx={{
                    fontSize: { xs:24,sm:30,md: 40, lg: 50, xl: 60, xxl: 70 },
                    fontWeight: 700,
                    color: "#FFFFFF",
                    opacity: 1,
                    pb: 3.5,
                    pt:{md:10,lg:5.5},
                    "&.MuiTypography-root" :{

                      letterSpacing : -1,
                    },
                  }}className={noto_Sans_Thai.className}
                 
                >
                  MAKE THE WORLD A BETTER PLACE
                </Typography>
                <Typography
                  sx={{
                    fontSize: { xs:14,sm:20,md: 25, lg: 30, xl: 35, xxl: 40 },
                    fontWeight: 500,
                    color: "#FFFFFF",
                    opacity: 1,
                    
                  }}className={noto_Sans_Thai.className}
                  
                >
                  “ เมื่อเรามีจุดมุ่งหมายที่ร่วมกัน
                </Typography>
                <Typography
                  sx={{
                    fontSize: { xs:14,sm:20,md: 25, lg: 30, xl: 35, xxl: 40 },
                    fontWeight: 500,
                    color: "#FFFFFF",
                    opacity: 1,
                  }}className={noto_Sans_Thai.className}
                >
                  เราสามารถเปลี่ยนแปลงโลกใบนี้ให้เป็นสถานที่ที่สวยงามยิ่งขึ้นทั้งสำหรับ
                </Typography>
                <Typography
                  sx={{
                    fontSize: { xs:14,sm:20,md: 25, lg: 30, xl: 35, xxl: 40 },
                    fontWeight: 500,
                    color: "#FFFFFF",
                    opacity: 1,
                  }}className={noto_Sans_Thai.className}
                >
                  เราและลูกหลานของเรา ”
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </ThemeProvider>
    </>
  );
}
