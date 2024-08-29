"use client"
import { AppBar, Box, Typography } from "@mui/material";
import React , { useState , useEffect} from "react";
import Image from "next/image";
import CardArticleRecommend from "./CardArticle/CardArticleRecommend";
import LogoPensookBottom from "../../../../assets/LogoPensook_Bottom.png"
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Noto_Sans_Thai } from "next/font/google";


const noto_Sans_Thai = Noto_Sans_Thai({
  weight: ['400', '500' , '600' , '700'],
  subsets: ["latin"],
  display: "swap",
});
export default function RecommendArticle() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);

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
      fontFamily: "Kanit, sans-serif",
    },
  });

  return (
    <>

<ThemeProvider theme={Responsive}>
      <Box
        
        sx={{
          display: "flex",
          alignItems: "center",
          width: "100vw",
          height: "100%",
          pt:{xs:"30px",md:"40px"},
          flexDirection: "column",
          overflow:"hidden",
          pb:10,
          bgcolor:"#F3F6FF"
        }}
      >
        <Box sx={{display:"flex",justifyContent:"start",width:"100%",pl:{xs:"34px",sm:8,md:8}}}>
        <Typography sx={{ fontSize: {xs:24,lg:35,xl:50,},fontWeight: 600, color: "#915BD7" ,}}className={noto_Sans_Thai.className}>
          บทความที่คุณอาจสนใจ
        </Typography>
        </Box>
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
    <CardArticleRecommend key={index} />
  ))}
         

        </Box>
      </Box>




        <AppBar
          position="static"
          sx={{
            marginTop: "auto",
            height: "80px",
            bgcolor: "#FFFFFF",
            px: {xs:5,md:15},
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
              height: "100%",
              alignItems: "center",
            }}
          >
            <Box sx={{width:{xs:108,sm:172},height:{xs:27,sm:43}}}>
            <Image
              src={LogoPensookBottom}
              style={{width:"100%",height:"100%"}}
              alt="LogoPensook"
            />
            </Box>
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
        </AppBar>
        </ThemeProvider>
    </>
  );
}
