"use client";


import { AppBar, Box, Typography } from "@mui/material";
import React from "react";
import Image from "next/image";
import CardProductList from "./components/CardProductList";
import Paper from "@mui/material/Paper";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import { Noto_Sans_Thai } from "next/font/google";

import LogoPensookBottom from  "../../../../../assets/LogoPensook_Bottom.png"

const noto_Sans_Thai = Noto_Sans_Thai({
  weight: ['400', '500' , '600' , '700'],
  subsets: ["latin"],
  display: "swap",
});
export default function ProductList1() {

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


  return (
    <>
       <ThemeProvider theme={Responsive}>
      <Box
        sx={{
          width: "100vw",
          height: "100%",
          '@media screen and (max-width: 820px)': {
            display:"none"
        },
        '@media screen and (min-width: 820px)': {
          display:"flex"
      },
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
          pt:{md:10,lg:0}
        }}
      >
        <Typography
          sx={{ color: "#0A5D87", fontSize: 40, fontWeight: 500, mt: 10 }}className={noto_Sans_Thai.className}
        >
          ผลิตภัณฑ์อื่น ๆ ที่แนะนำ
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            width: "100%",
            alignItems: "center",
            flexDirection:{md:"column",lg:"row"},
            mt: 10,
          
          }}
        >
          <CardProductList />
      
        
        </Box>







        <AppBar
          position="static"
          sx={{
            marginTop: "auto",
            height: "80px",
            bgcolor: "#FFFFFF",
            display: "flex",
            justifyContent: "center",
            mt:10
          }}
        >
          <Box
            sx={{
              display: {xs:"none",md:"flex"},
              justifyContent: "space-between",
              width: "100%",
              px:{ xs:"0px",md: "50px", xl: "80px", xxl: "137px" },
              height: "100%",
              alignItems: "center",
            }}
          >
            <Image
              src={LogoPensookBottom}
              width={172}
              height={43}
              alt="Picture of the author"
            />
            <Box
              sx={{
                display: "flex",

              }}
            >
              <Typography
                sx={{ color: "#222222", fontSize: 16, fontWeight: 400 }}className={noto_Sans_Thai.className}
              >
                ชีวิตดี ๆ เริ่มต้นที่
              </Typography>
              <Typography
                sx={{
                  color: "#007DFC",
                  ml: 0.5,
                  fontSize: 16,
                  fontWeight: 400,
                }}className={noto_Sans_Thai.className}
              >
                เป็นสุข
              </Typography>
            </Box>
          </Box>




          <Box
            sx={{
              display: {xs:"flex",md:"none"},
              justifyContent: "space-between",
              width: "100%",
              pl:{xs:"34px",sm:8,md:6},
              height: "100%",
              alignItems: "center",
            }}
          >
            <Image
              src={LogoPensookBottom}
              width={155}
              height={43}
              alt="Picture of the author"
            />
            <Box
              sx={{
                display: "flex",
                mr:{xs:3,sm:6,md:6}
              }}
            >
              <Typography
                sx={{ color: "#222222", fontSize: 16, fontWeight: 400 }}className={noto_Sans_Thai.className}
              >
                ชีวิตดี ๆ เริ่มต้นที่
              </Typography>
              <Typography
                sx={{
                  color: "#007DFC",
                  ml: 0.5,
                  fontSize: 16,
                  fontWeight: 400,
                }}className={noto_Sans_Thai.className}
              >
                เป็นสุข
              </Typography>
            </Box>
          </Box>

          
        </AppBar>




      </Box>
      </ThemeProvider>
    </>
  );
}
