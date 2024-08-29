"use client";

import { Box, Typography } from "@mui/material";
import React from "react";
import Image from "next/image";
import Grid from "@mui/material/Grid";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import Stack from '@mui/material/Stack';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import StepConnector, { stepConnectorClasses } from '@mui/material/StepConnector'
import { Noto_Sans_Thai } from "next/font/google";
import VectorArticles from  "../../../../../assets/Vector_Articles.png"
import HowtoImgPD from  "../../../../../assets/HowtoImgPD.png"



const noto_Sans_Thai = Noto_Sans_Thai({
  weight: ['400', '500' , '600' , '700'],
  subsets: ["latin"],
  display: "swap",
});
const LabelStep = [
    'ติดต่อฝ่ายขาย',
    'เลือก Spec ที่ต้องการ',
    'ยืนยันการสั่งซื้อ',
    'ชำระเงิน',
    'เริ่มใช้งาน'
  ];

  const DetailStep = [
    'ติดต่อโทร 0859056507 หรือ Email pensookcare@gmail.com',
    'เลือกรุ่นของผลิตภัณฑ์ หรือ ปรับเปลี่ยน Spec ตามต้องการ',
    'สามารถยืนยันการสั่งซื้อได้ในใบเสนอราคา',
    'โอนเข้าบัญชีบริษัท',
    'ส่งข้อมูลเบื้องต้นให้ฝ่ายซัพพอร์ตบรรจุลงระบบและเริ่มต้นใช้งาน'
  ];

  

export default function ProductGuide2Mobile() {


const [activeStep, setActiveStep] = React.useState(0);

  





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
        sx={{
          width: "100vw",
          height: "100%",
          '@media screen and (min-width: 821px)': {
            display:"none"
        },
        '@media screen and (max-width: 820px)': { 
          display: "flex"
        },
          alignItems: "center",
          flexDirection: "column",
          bgcolor: "#F4F8FB",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <Box sx={{ display: "flex", pt: 10,zIndex:5 }}>
          <Typography
            sx={{ fontSize: 24, fontWeight: 700, color: "#0A5D87", mr: 1 }}className={noto_Sans_Thai.className}
          >
            สนใจใช้
          </Typography>
          <Typography sx={{ fontSize: 24, fontWeight: 700, color: "#007DFC" }}className={noto_Sans_Thai.className}>
            PENSOOK
          </Typography>
          <Typography
            sx={{ fontSize: 24, fontWeight: 700, color: "#0A5D87", ml: 1 }}className={noto_Sans_Thai.className}
          >
            ง่ายนิดเดียว
          </Typography>
        </Box>

        <Box sx={{ display: "flex", pt: 1 }}>
          <Typography sx={{ fontSize: 16, fontWeight: 500, color: "#0A5D87",zIndex:2 }}className={noto_Sans_Thai.className}>
            โลเร็ม อิปซัมเรานำเสนอเทคโนโลยีทางการแพทย์ที่
          </Typography>
          <Typography sx={{ fontSize: 16, fontWeight: 500, color: "#007DFC",zIndex:2 }}className={noto_Sans_Thai.className}>
            ทันสมัยและมีความน่าเชื่อถือ
          </Typography>
        </Box>
        
        <Box sx={{position:"absolute",top:10 , left: -80}}>
        <Image
                src={VectorArticles}
                
              />

        </Box>

        <Box sx={{position:"absolute",bottom: 20 , right: -80}}>
        <Image
                src={VectorArticles}
                
              />

        </Box>

        <Grid
          container
          sx={{
            display: "flex",
            justifycontent: "center",

            mt: 6,
          }}
        >

<Grid
            xs={12}
            sx={{
              display: "flex",
              alignItems: "center",
              marginBottom: "auto",
              justifyContent:"center",
              pb:3
            }}
          >
            <Box
              sx={{
                width: {xs: 223,sm:500},
                height: {xs: 295,sm:450},
                position: "relative",
                
              }}
            >
              <Image
                src={HowtoImgPD}
                style={{width:"100%",height:"100%"}}
              />
            </Box>
          </Grid>

          <Grid
            xs={12}
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "start",
              px:{xs:5,sm:10},
              pb:10,
              height:"100%"
            }}
          >
           
<Stepper orientation="vertical" sx={{
    "& .MuiStep-root": {
        position: "relative",
        "& .MuiStepLabel-root": {
            padding: 0,
            alignItems: "start",
            height: '20px'
        },
    },
    "& .MuiStepIcon-root": { color: "#007DFC" ,width:"43px",height:"43px"},
    "& .MuiStepLabel-root": { color: "#007DFC" },
    "& .MuiStepConnector-line": { minHeight:"80px" ,marginLeft:"7px",borderLeftWidth: "3px",borderColor:"#007DFC"},
}}>
        {LabelStep.map((label, index) => (
  <Step key={label}>
    <StepLabel>
      <Typography sx={{ color: "#007DFC", fontSize: 20, fontWeight: 600 }}className={noto_Sans_Thai.className}>{label}</Typography>
      <Typography sx={{ color: "#000000", fontSize: 16, fontWeight: 400 }}className={noto_Sans_Thai.className}>{DetailStep[index]}</Typography>
    </StepLabel>
  </Step>
))}
      </Stepper>
  
          </Grid>



        </Grid>
      </Box>
      </ThemeProvider>
    </>
  );
}
