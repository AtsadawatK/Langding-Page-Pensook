"use client";

import { Box, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Image from "next/image";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import { Noto_Sans_Thai } from "next/font/google";
import ExImgPDList from  "../../../../../../assets/ExImgPDList.png"
const noto_Sans_Thai = Noto_Sans_Thai({
  weight: ['400', '500' , '600' , '700'],
  subsets: ["latin"],
  display: "swap",
});
export default function CardProductList1Mobile() {
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
  const router = useRouter();

  const [SlideProduct1, setSlideProduct1] = useState(false);
  const [SlideProduct2, setSlideProduct2] = useState(false);
  const [SlideProduct3, setSlideProduct3] = useState(false);

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

  const handleButtonClickProduct1 = () => {
    router.push("/SectionProducts/1");
  };

  const handleButtonClickProduct2 = () => {
    router.push("/SectionProducts/2");
  };

  const handleButtonClickProduct3 = () => {
    router.push("/SectionProducts/3");
  };

  return (
    <>
      <ThemeProvider theme={Responsive}>
      <Box
        sx={{ display: "flex",  width: "100%" , justifyContent:"center"  , flexDirection:"column",alignItems: "center",}}
      >
        <Paper
          elevation={0}
          sx={{
            width: windowWidth < 715 ? 362 : 500,
            height: windowWidth < 715 ? 612 : 563,
            border: "1px solid #E5E9EB",
            borderRadius: "8px",
            p: "19px",
            display: SlideProduct1 ? "none" : "flex",
            flexDirection: "column",
            alignItems: "center",
           
            cursor:"pointer",
            mb:5
          }}
          onClick = {handleButtonClickProduct1}
        >
          <Box sx={{width:"95%",height:"95%"}}>
          <Image src={ExImgPDList} style={{width:"100%",height:"100%"}}/>

          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "start",
              width: "100%",
              mt: "19px",
              flexDirection: "column",
            }}
          >
            <Typography
              sx={{ color: "#007DFC", fontSize: 25, fontWeight: 700 }}className={noto_Sans_Thai.className}
            >
              Smart Medical Cabinet
            </Typography>
            
           
            
          </Box>
          <Box sx={{mb: windowWidth < 715 ? 10 : 0}}>
          <Typography
              sx={{ color: "#475467", fontSize: 18, fontWeight: 500 ,  marginTop: "auto",}}className={noto_Sans_Thai.className}
            >
              สามารถออกแบบ หรือปรับเปลี่ยน spec ของ Pharmacy ending machine
              ได้ตามใจคุณ
            </Typography>
            </Box>
          <Button
            variant="contained"
            disableElevation
            sx={{
              width: "100%",
              marginTop: "auto",
              bgcolor: "#007DFC",
              "&:hover": {
                bgcolor: "#0060C2",
              },
            }}
          >
            <Typography
              sx={{ color: "#FFFFFF", fontSize: 25, fontWeight: 500 }}className={noto_Sans_Thai.className}
            >
              ดูเพิ่มเติม
            </Typography>
          </Button>
        </Paper>

        <Paper
          elevation={0}
          sx={{
            width: windowWidth < 715 ? 362 : 500,
            height: windowWidth < 715 ? 612 : 563,
            border: "1px solid #E5E9EB",
            borderRadius: "8px",
            p: "19px",
            display: SlideProduct2 ? "none" : "flex",
            flexDirection: "column",
            alignItems: "center",
          
            cursor:"pointer",
            mb:5
          }}
          onClick = {handleButtonClickProduct2}
        >
          <Box sx={{width:"95%",height:"95%"}}>
          <Image src={ExImgPDList} style={{width:"100%",height:"100%"}}/>

          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "start",
              width: "100%",
              mt: "19px",
              flexDirection: "column",
            }}
          >
            <Typography
              sx={{ color: "#007DFC", fontSize: 25, fontWeight: 700 }}className={noto_Sans_Thai.className}
            >
              Automated Dispensing System Technology
            </Typography>
            
          </Box>
          <Box sx={{mb: windowWidth < 715 ? 10 : 0}}>
          <Typography
              sx={{ color: "#475467", fontSize: 18, fontWeight: 500 ,  marginTop: "auto",}}className={noto_Sans_Thai.className}
            >
              สามารถออกแบบ หรือปรับเปลี่ยน spec ของ Pharmacy ending machine
              ได้ตามใจคุณ
            </Typography>
            </Box>
          <Button
            variant="contained"
            disableElevation
            sx={{
              width: "100%",
              marginTop: "auto",
              bgcolor: "#007DFC",
              "&:hover": {
                bgcolor: "#0060C2",
              },
            }}
          >
            <Typography
              sx={{ color: "#FFFFFF", fontSize: 25, fontWeight: 500 }}className={noto_Sans_Thai.className}
            >
              ดูเพิ่มเติม
            </Typography>
          </Button>
        </Paper>

        <Paper
          elevation={0}
          sx={{
            width: windowWidth < 715 ? 362 : 500,
            height: windowWidth < 715 ? 612 : 563,
            border: "1px solid #E5E9EB",
            borderRadius: "8px",
            p: "19px",
            display: SlideProduct3 ? "none" : "flex",
            flexDirection: "column",
            alignItems: "center",
           
            cursor:"pointer",
            mb:5
          }}
          onClick = {handleButtonClickProduct3}
        >
          <Box sx={{width:"95%",height:"95%"}}>
          <Image src={ExImgPDList} style={{width:"100%",height:"100%"}}/>

          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "start",
              width: "100%",
              mt: "19px",
              flexDirection: "column",
            }}
          >
            <Typography
              sx={{ color: "#007DFC", fontSize: 25, fontWeight: 700 }}className={noto_Sans_Thai.className}
            >
              Pharmacy Vending Machine
            </Typography>
           
          </Box>
          <Box sx={{mb: windowWidth < 715 ? 10 : 0}}>
          <Typography
              sx={{ color: "#475467", fontSize: 18, fontWeight: 500 ,  marginTop: "auto",}}className={noto_Sans_Thai.className}
            >
              สามารถออกแบบ หรือปรับเปลี่ยน spec ของ Pharmacy ending machine
              ได้ตามใจคุณ
            </Typography>
            </Box>
          <Button
            variant="contained"
            disableElevation
            sx={{
              width: "100%",
              marginTop: "auto",
              bgcolor: "#007DFC",
              "&:hover": {
                bgcolor: "#0060C2",
              },
            }}
          >
            <Typography
              sx={{ color: "#FFFFFF", fontSize: 25, fontWeight: 500 }}className={noto_Sans_Thai.className}
            >
              ดูเพิ่มเติม
            </Typography>
          </Button>
        </Paper>
      </Box>
      </ThemeProvider>
    </>
  );
}
