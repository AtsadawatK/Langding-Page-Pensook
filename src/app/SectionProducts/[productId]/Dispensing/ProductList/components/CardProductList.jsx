"use client";

import { Box, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Image from "next/image";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import ExImgPDList from "../../../../../../assets/ExImgPDList.png"
import { Noto_Sans_Thai } from "next/font/google";



const noto_Sans_Thai = Noto_Sans_Thai({
  weight: ['400', '500' , '600' , '700'],
  subsets: ["latin"],
  display: "swap",
});
export default function CardProductList() {
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
        sx={{ display: "flex",  width: "100%" , justifyContent:"space-between"  , flexDirection:{md:"column",lg:"row"},alignItems: "center",px:{lg:10,xl:25,xxl:45}}}
      >
      
        <Paper
          elevation={0}
          sx={{
            width: {md:692,lg:578},
            height: {md:563,lg:605},
            border: "1px solid #E5E9EB",
            borderRadius: "8px",
            p: "19px",
            display: SlideProduct1 ? "none" : "flex",
            flexDirection: "column",
            alignItems: "center",
            
            cursor:"pointer",
            mb:{md:5,lg:0}
          }}
          onClick = {handleButtonClickProduct1}
        >
           <Box sx={{width:"100%",borderRadius: "8px",}}>
          <Image src={ExImgPDList}  style={{objectFit:"cover",width:"100%",borderRadius: "8px",}}/>
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
          <Typography
              sx={{ color: "#475467", fontSize: 18, fontWeight: 500 ,  marginTop: "auto",}}className={noto_Sans_Thai.className}
            >
              สามารถออกแบบ หรือปรับเปลี่ยน spec ของ Pharmacy ending machine
              ได้ตามใจคุณ
            </Typography>
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
            width: {md:692,lg:578},
            height: {md:563,lg:605},
            border: "1px solid #E5E9EB",
            borderRadius: "8px",
            p: "19px",
            display: SlideProduct2 ? "none" : "flex",
            flexDirection: "column",
            alignItems: "center",
            
            cursor:"pointer",
            mb:{md:5,lg:0}
          }}
          onClick = {handleButtonClickProduct2}
        >
          <Box sx={{width:"100%",borderRadius: "8px",}}>
          <Image src={ExImgPDList}  style={{objectFit:"cover",width:"100%",borderRadius: "8px",}}/>
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
          <Typography
              sx={{ color: "#475467", fontSize: 18, fontWeight: 500 ,  marginTop: "auto",}}className={noto_Sans_Thai.className}
            >
              สามารถออกแบบ หรือปรับเปลี่ยน spec ของ Pharmacy ending machine
              ได้ตามใจคุณ
            </Typography>
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
            width: {md:692,lg:578},
            height: {md:563,lg:605},
            border: "1px solid #E5E9EB",
            borderRadius: "8px",
            p: "19px",
            display: SlideProduct3 ? "none" : "flex",
            flexDirection: "column",
            alignItems: "center",
            
            cursor:"pointer",
            mb:{md:5,lg:0}
          }}
          onClick = {handleButtonClickProduct3}
        >
           <Box sx={{width:"100%",borderRadius: "8px",}}>
          <Image src={ExImgPDList}  style={{objectFit:"cover",width:"100%",borderRadius: "8px",}}/>
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
          <Typography
              sx={{ color: "#475467", fontSize: 18, fontWeight: 500 ,  marginTop: "auto",}}className={noto_Sans_Thai.className}
            >
              สามารถออกแบบ หรือปรับเปลี่ยน spec ของ Pharmacy ending machine
              ได้ตามใจคุณ
            </Typography>
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
