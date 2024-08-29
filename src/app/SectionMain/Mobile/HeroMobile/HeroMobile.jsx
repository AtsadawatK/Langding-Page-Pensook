"use client"
import { Noto_Sans_Thai } from "next/font/google";
import React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import NextLink from "next/link";
import Image from "next/image";
import ParticleAnimation from "../../Hero/ParticleAnimation";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const noto_Sans_Thai = Noto_Sans_Thai({
  weight: ['400', '500' , '600' , '700'],
  subsets: ["latin"],
  display: "swap",
});

export default function HeroMobile() {
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
            height: 398,
            '@media screen and (min-width: 421px)': {
              display:"none"
          },
          }}
        >
          <Box sx={{ display: "flex" }}>
            <Image
              src={require("../../../../assets/HeroImageTablet.png")}
              layout="fill"
              alt="BackgroundHero"
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
            <Box sx={{ width: "100%", height: "100%" ,}}>
              <ParticleAnimation />
              <Box sx={{zIndex: 2,height:300,display:"flex",justifyContent:"center",alignItems:"center",flexDirection: "column", textAlign: "center",pt:"150px"}}>
                <Typography sx={{color:"#FFFFFF" , fontSize:24,fontWeight:700,}}className={noto_Sans_Thai.className}>
                MAKE THE WORLD A BETTER PLACE
                </Typography>
                <Typography sx={{color:"#FFFFFF" , fontSize:16,fontWeight:400,}}className={noto_Sans_Thai.className}>
                “เมื่อเรามีจุดมุ่งหมายที่ร่วมกัน <br />เราสามารถเปลี่ยนแปลงโลกใบนี้ให้เป็นสถานที่ที่สวยงามยิ่งขึ้นทั้งสำหรับ <br />เราและลูกหลานของเรา ”
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </ThemeProvider>
    </>
  );
}
