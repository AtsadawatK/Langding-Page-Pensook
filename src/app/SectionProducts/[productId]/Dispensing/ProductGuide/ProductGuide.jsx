"use client";

import { Box, Typography } from "@mui/material";
import React from "react";
import Image from "next/image";
import Grid from "@mui/material/Grid";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import VectorArticles from  "../../../../../assets/Vector_Articles.png"
import HowtoImgPD from  "../../../../../assets/HowtoImgPD.png"

import { Noto_Sans_Thai } from "next/font/google";



const noto_Sans_Thai = Noto_Sans_Thai({
  weight: ['400', '500' , '600' , '700'],
  subsets: ["latin"],
  display: "swap",
});
export default function ProductGuide2() {

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
          alignItems: "center",
          flexDirection: "column",
          bgcolor: "#F4F8FB",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <Box sx={{ display: "flex", pt: 10 }}>
          <Typography
            sx={{ fontSize: {md:30,lg:35,xl:40,xxl:50}, fontWeight: 700, color: "#0A5D87", mr: 1 }}className={noto_Sans_Thai.className}
          >
            สนใจใช้
          </Typography>
          <Typography sx={{ fontSize: {md:30,lg:35,xl:40,xxl:50}, fontWeight: 700, color: "#007DFC" }}className={noto_Sans_Thai.className}>
            PENSOOK
          </Typography>
          <Typography
            sx={{ fontSize: {md:30,lg:35,xl:40,xxl:50}, fontWeight: 700, color: "#0A5D87", ml: 1 }}className={noto_Sans_Thai.className}
          >
            ง่ายนิดเดียว
          </Typography>
        </Box>

        <Box sx={{ display: "flex", pt: 1 }}>
          <Typography sx={{ fontSize: {md:20,lg:25,xl:30,xxl:40}, fontWeight: 500, color: "#0A5D87",zIndex:2 }}className={noto_Sans_Thai.className}>
            โลเร็ม อิปซัมเรานำเสนอเทคโนโลยีทางการแพทย์ที่
          </Typography>
          <Typography sx={{ fontSize: {md:20,lg:25,xl:30,xxl:40}, fontWeight: 500, color: "#007DFC",zIndex:2 }}className={noto_Sans_Thai.className}>
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

            mt: 12,
          }}
        >

<Grid
            xs={12}
            sx={{
              display: {md:"flex",xl:"none"},
              pl: {lg:"8vw",xxl:"14vw"},
              alignItems: "center",
              marginBottom: "auto",
              justifyContent:"center"
            }}
          >
            <Box
              sx={{
                width: {lg: 465,xxl:577},
                height: {lg: 650,xxl:762},
                position: "relative",
                mt:{lg:10,xl:0}
              }}
            >
              <Image
                src={HowtoImgPD}
                style={{width:"100%",height:"100%"}}
              />
            </Box>
          </Grid>



          <Grid
            xs={6}
            sx={{
              display: {md:"none",xl:"flex"},
              flexDirection: "column",

              justifyContent: "start",
              pl: "10vw",
              position: "relative",
              py: "10vh",
            }}
          >
            <Box
              sx={{ position: "absolute", left: {lg:"12vw",xxl:"11.5vw"}, zIndex: 1, mt: 8 }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="5"
                height="500"
                fill="none"
                viewBox="0 0 5 500"
              >
                <path
                  stroke="#007DFC"
                  strokeWidth="5"
                  d="M2.5 0L2.5 500"
                ></path>
              </svg>
            </Box>
            <Box
              sx={{
                display: "flex",
                mb: 6,
                alignItems: "center",
                zIndex: 2,
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="60"
                height="60"
                fill="none"
                viewBox="0 0 60 60"
              >
                <rect width="60" height="60" fill="#007DFC" rx="30"></rect>
                <path
                  fill="#fff"
                  d="M33.455 41H28.17V26.545v-1.47c.023-.583.047-1.19.07-1.82.023-.63.047-1.19.07-1.68-.117.14-.373.397-.77.77-.373.35-.723.665-1.05.945l-2.87 2.31-2.555-3.185 8.05-6.405h4.34V41z"
                ></path>
              </svg>
              <Box
                sx={{ display: "flex", flexDirection: "column", ml: "18px" }}
              >
                <Typography
                  sx={{ fontSize: 35, fontWeight: 600, color: "#007DFC" }}className={noto_Sans_Thai.className}
                >
                  ติดต่อฝ่ายขาย
                </Typography>
                <Typography
                  sx={{ fontSize: 18, fontWeight: 500, color: "#000000" }}className={noto_Sans_Thai.className}
                >
                  ติดต่อโทร 0859056507 หรือ Email pensookcare@gmail.com
                </Typography>
              </Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                mb: 6,
                alignItems: "center",
                zIndex: 2,
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="60"
                height="60"
                fill="none"
                viewBox="0 0 60 60"
              >
                <rect width="60" height="60" fill="#007DFC" rx="30"></rect>
                <path
                  fill="#fff"
                  d="M37.865 41H20.4v-3.675l6.265-6.335a119.11 119.11 0 003.045-3.255c.77-.887 1.33-1.68 1.68-2.38.35-.723.525-1.493.525-2.31 0-1.003-.28-1.75-.84-2.24-.537-.49-1.272-.735-2.205-.735-.957 0-1.89.222-2.8.665-.91.443-1.867 1.073-2.87 1.89l-2.87-3.395a23.566 23.566 0 012.275-1.75c.817-.537 1.75-.968 2.8-1.295 1.073-.35 2.357-.525 3.85-.525 1.633 0 3.033.303 4.2.91 1.19.583 2.1 1.388 2.73 2.415.653 1.003.98 2.147.98 3.43 0 1.05-.163 2.018-.49 2.905a9.894 9.894 0 01-1.365 2.59c-.583.817-1.307 1.668-2.17 2.555-.863.863-1.843 1.808-2.94 2.835l-3.22 3.01v.245h10.885V41z"
                ></path>
              </svg>
              <Box
                sx={{ display: "flex", flexDirection: "column", ml: "18px" }}
              >
                <Typography
                  sx={{ fontSize: 35, fontWeight: 600, color: "#007DFC" }}className={noto_Sans_Thai.className}
                >
                  เลือก Spec ที่ต้องการ
                </Typography>
                <Typography
                  sx={{ fontSize: 18, fontWeight: 500, color: "#000000" }}className={noto_Sans_Thai.className}
                >
                  เลือกรุ่นของผลิตภัณฑ์ หรือ ปรับเปลี่ยน Spec ตามต้องการ
                </Typography>
              </Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                mb: 6,
                alignItems: "center",
                zIndex: 2,
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="60"
                height="60"
                fill="none"
                viewBox="0 0 60 60"
              >
                <rect width="60" height="60" fill="#007DFC" rx="30"></rect>
                <path
                  fill="#fff"
                  d="M36.885 21.61c0 1.143-.245 2.135-.735 2.975a5.827 5.827 0 01-1.925 2.065c-.793.537-1.703.933-2.73 1.19v.105c2.007.233 3.523.84 4.55 1.82 1.05.98 1.575 2.298 1.575 3.955 0 1.447-.362 2.753-1.085 3.92-.7 1.143-1.797 2.053-3.29 2.73-1.47.653-3.372.98-5.705.98-1.377 0-2.66-.117-3.85-.35a17.045 17.045 0 01-3.36-1.015v-4.48c1.073.537 2.193.945 3.36 1.225 1.19.28 2.287.42 3.29.42 1.89 0 3.208-.327 3.955-.98.77-.653 1.155-1.575 1.155-2.765 0-.7-.175-1.283-.525-1.75-.35-.49-.968-.852-1.855-1.085-.863-.257-2.077-.385-3.64-.385h-1.89v-4.06h1.925c1.54 0 2.707-.14 3.5-.42.817-.303 1.365-.7 1.645-1.19.303-.513.455-1.097.455-1.75 0-.887-.28-1.575-.84-2.065-.537-.513-1.447-.77-2.73-.77-.793 0-1.517.105-2.17.315a9.484 9.484 0 00-1.785.7c-.513.28-.968.548-1.365.805l-2.45-3.64a13.915 13.915 0 012.17-1.26 13.036 13.036 0 012.695-.875c.98-.21 2.077-.315 3.29-.315 2.567 0 4.597.525 6.09 1.575 1.517 1.027 2.275 2.485 2.275 4.375z"
                ></path>
              </svg>
              <Box
                sx={{ display: "flex", flexDirection: "column", ml: "18px" }}
              >
                <Typography
                  sx={{ fontSize: 35, fontWeight: 600, color: "#007DFC" }}className={noto_Sans_Thai.className}
                >
                  ยืนยันการสั่งซื้อ
                </Typography>
                <Typography
                  sx={{ fontSize: 18, fontWeight: 500, color: "#000000" }}className={noto_Sans_Thai.className}
                >
                  สามารถยืนยันการสั่งซื้อได้ในใบเสนอราคา
                </Typography>
              </Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                mb: 6,
                alignItems: "center",
                zIndex: 2,
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="60"
                height="60"
                fill="none"
                viewBox="0 0 60 60"
              >
                <rect width="60" height="60" fill="#007DFC" rx="30"></rect>
                <path
                  fill="#fff"
                  d="M38.425 35.82h-3.01V41H30.27v-5.18H19.595v-3.675L30.55 16.01h4.865v15.715h3.01v4.095zm-8.155-8.33v-1.4l.07-1.645c.023-.56.047-1.05.07-1.47.023-.443.047-.747.07-.91h-.14c-.21.467-.432.922-.665 1.365-.233.443-.513.898-.84 1.365l-4.585 6.93h6.02V27.49z"
                ></path>
              </svg>
              <Box
                sx={{ display: "flex", flexDirection: "column", ml: "18px" }}
              >
                <Typography
                  sx={{ fontSize: 35, fontWeight: 600, color: "#007DFC" }}className={noto_Sans_Thai.className}
                >
                  ชำระเงิน
                </Typography>
                <Typography
                  sx={{ fontSize: 18, fontWeight: 500, color: "#000000" }}className={noto_Sans_Thai.className}
                >
                  โอนเข้าบัญชีบริษัท
                </Typography>
              </Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                mb: 6,
                alignItems: "center",
                zIndex: 2,
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="60"
                height="60"
                fill="none"
                viewBox="0 0 60 60"
              >
                <rect width="60" height="60" fill="#007DFC" rx="30"></rect>
                <path
                  fill="#fff"
                  d="M31.5 26.04c1.517 0 2.87.292 4.06.875a6.59 6.59 0 012.8 2.555c.7 1.12 1.05 2.508 1.05 4.165 0 1.797-.373 3.348-1.12 4.655-.747 1.307-1.867 2.31-3.36 3.01-1.47.7-3.302 1.05-5.495 1.05-1.307 0-2.543-.117-3.71-.35-1.143-.233-2.147-.572-3.01-1.015v-4.55c.863.443 1.902.828 3.115 1.155 1.213.303 2.357.455 3.43.455 1.05 0 1.925-.14 2.625-.42.723-.28 1.272-.712 1.645-1.295s.56-1.33.56-2.24c0-1.237-.408-2.17-1.225-2.8-.817-.653-2.077-.98-3.78-.98-.653 0-1.33.07-2.03.21-.7.117-1.283.233-1.75.35l-2.1-1.12.945-12.74h13.545v4.48H28.77l-.455 4.9c.397-.07.817-.14 1.26-.21.467-.093 1.108-.14 1.925-.14z"
                ></path>
              </svg>
              <Box
                sx={{ display: "flex", flexDirection: "column", ml: "18px" }}
              >
                <Typography
                  sx={{ fontSize: 35, fontWeight: 600, color: "#007DFC" }}className={noto_Sans_Thai.className}
                >
                  เริ่มใช้งาน
                </Typography>
                <Typography
                  sx={{ fontSize: 18, fontWeight: 500, color: "#000000" }}className={noto_Sans_Thai.className}
                >
                  ส่งข้อมูลเบื้องต้นให้ฝ่ายซัพพอร์ตบรรจุลงระบบและเริ่มต้นใช้งาน
                </Typography>
              </Box>
            </Box>
          </Grid>




          <Grid
            xs={6}
            sx={{
              display: {md:"none",xl:"flex"},
              pl: {lg:"8vw",xxl:"14vw"},
              alignItems: "center",
              marginBottom: "auto",
            }}
          >
            <Box
              sx={{
                width: {lg: 465,xxl:577},
                height: {lg: 650,xxl:762},
                position: "relative",
                mt:{lg:10,xl:0}
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
              display: {md:"flex",xl:"none"},
              flexDirection: "column",

              justifyContent: "start",
              pl: "10vw",
              position: "relative",
              py: "10vh",
            }}
          >
            <Box
              sx={{ position: "absolute", left: {md:"13vw",lg:"12vw",xxl:"11.5vw"}, zIndex: 1, mt: 8 }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="5"
                height="500"
                fill="none"
                viewBox="0 0 5 500"
              >
                <path
                  stroke="#007DFC"
                  strokeWidth="5"
                  d="M2.5 0L2.5 500"
                ></path>
              </svg>
            </Box>
            <Box
              sx={{
                display: "flex",
                mb: 6,
                alignItems: "center",
                zIndex: 2,
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="60"
                height="60"
                fill="none"
                viewBox="0 0 60 60"
              >
                <rect width="60" height="60" fill="#007DFC" rx="30"></rect>
                <path
                  fill="#fff"
                  d="M33.455 41H28.17V26.545v-1.47c.023-.583.047-1.19.07-1.82.023-.63.047-1.19.07-1.68-.117.14-.373.397-.77.77-.373.35-.723.665-1.05.945l-2.87 2.31-2.555-3.185 8.05-6.405h4.34V41z"
                ></path>
              </svg>
              <Box
                sx={{ display: "flex", flexDirection: "column", ml: "18px" }}
              >
                <Typography
                  sx={{ fontSize: 35, fontWeight: 600, color: "#007DFC" }}className={noto_Sans_Thai.className}
                >
                  ติดต่อฝ่ายขาย
                </Typography>
                <Typography
                  sx={{ fontSize: 18, fontWeight: 500, color: "#000000" }}className={noto_Sans_Thai.className}
                >
                  ติดต่อโทร 0859056507 หรือ Email pensookcare@gmail.com
                </Typography>
              </Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                mb: 6,
                alignItems: "center",
                zIndex: 2,
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="60"
                height="60"
                fill="none"
                viewBox="0 0 60 60"
              >
                <rect width="60" height="60" fill="#007DFC" rx="30"></rect>
                <path
                  fill="#fff"
                  d="M37.865 41H20.4v-3.675l6.265-6.335a119.11 119.11 0 003.045-3.255c.77-.887 1.33-1.68 1.68-2.38.35-.723.525-1.493.525-2.31 0-1.003-.28-1.75-.84-2.24-.537-.49-1.272-.735-2.205-.735-.957 0-1.89.222-2.8.665-.91.443-1.867 1.073-2.87 1.89l-2.87-3.395a23.566 23.566 0 012.275-1.75c.817-.537 1.75-.968 2.8-1.295 1.073-.35 2.357-.525 3.85-.525 1.633 0 3.033.303 4.2.91 1.19.583 2.1 1.388 2.73 2.415.653 1.003.98 2.147.98 3.43 0 1.05-.163 2.018-.49 2.905a9.894 9.894 0 01-1.365 2.59c-.583.817-1.307 1.668-2.17 2.555-.863.863-1.843 1.808-2.94 2.835l-3.22 3.01v.245h10.885V41z"
                ></path>
              </svg>
              <Box
                sx={{ display: "flex", flexDirection: "column", ml: "18px" }}
              >
                <Typography
                  sx={{ fontSize: 35, fontWeight: 600, color: "#007DFC" }}className={noto_Sans_Thai.className}
                >
                  เลือก Spec ที่ต้องการ
                </Typography>
                <Typography
                  sx={{ fontSize: 18, fontWeight: 500, color: "#000000" }}className={noto_Sans_Thai.className}
                >
                  เลือกรุ่นของผลิตภัณฑ์ หรือ ปรับเปลี่ยน Spec ตามต้องการ
                </Typography>
              </Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                mb: 6,
                alignItems: "center",
                zIndex: 2,
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="60"
                height="60"
                fill="none"
                viewBox="0 0 60 60"
              >
                <rect width="60" height="60" fill="#007DFC" rx="30"></rect>
                <path
                  fill="#fff"
                  d="M36.885 21.61c0 1.143-.245 2.135-.735 2.975a5.827 5.827 0 01-1.925 2.065c-.793.537-1.703.933-2.73 1.19v.105c2.007.233 3.523.84 4.55 1.82 1.05.98 1.575 2.298 1.575 3.955 0 1.447-.362 2.753-1.085 3.92-.7 1.143-1.797 2.053-3.29 2.73-1.47.653-3.372.98-5.705.98-1.377 0-2.66-.117-3.85-.35a17.045 17.045 0 01-3.36-1.015v-4.48c1.073.537 2.193.945 3.36 1.225 1.19.28 2.287.42 3.29.42 1.89 0 3.208-.327 3.955-.98.77-.653 1.155-1.575 1.155-2.765 0-.7-.175-1.283-.525-1.75-.35-.49-.968-.852-1.855-1.085-.863-.257-2.077-.385-3.64-.385h-1.89v-4.06h1.925c1.54 0 2.707-.14 3.5-.42.817-.303 1.365-.7 1.645-1.19.303-.513.455-1.097.455-1.75 0-.887-.28-1.575-.84-2.065-.537-.513-1.447-.77-2.73-.77-.793 0-1.517.105-2.17.315a9.484 9.484 0 00-1.785.7c-.513.28-.968.548-1.365.805l-2.45-3.64a13.915 13.915 0 012.17-1.26 13.036 13.036 0 012.695-.875c.98-.21 2.077-.315 3.29-.315 2.567 0 4.597.525 6.09 1.575 1.517 1.027 2.275 2.485 2.275 4.375z"
                ></path>
              </svg>
              <Box
                sx={{ display: "flex", flexDirection: "column", ml: "18px" }}
              >
                <Typography
                  sx={{ fontSize: 35, fontWeight: 600, color: "#007DFC" }}className={noto_Sans_Thai.className}
                >
                  ยืนยันการสั่งซื้อ
                </Typography>
                <Typography
                  sx={{ fontSize: 18, fontWeight: 500, color: "#000000" }}className={noto_Sans_Thai.className}
                >
                  สามารถยืนยันการสั่งซื้อได้ในใบเสนอราคา
                </Typography>
              </Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                mb: 6,
                alignItems: "center",
                zIndex: 2,
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="60"
                height="60"
                fill="none"
                viewBox="0 0 60 60"
              >
                <rect width="60" height="60" fill="#007DFC" rx="30"></rect>
                <path
                  fill="#fff"
                  d="M38.425 35.82h-3.01V41H30.27v-5.18H19.595v-3.675L30.55 16.01h4.865v15.715h3.01v4.095zm-8.155-8.33v-1.4l.07-1.645c.023-.56.047-1.05.07-1.47.023-.443.047-.747.07-.91h-.14c-.21.467-.432.922-.665 1.365-.233.443-.513.898-.84 1.365l-4.585 6.93h6.02V27.49z"
                ></path>
              </svg>
              <Box
                sx={{ display: "flex", flexDirection: "column", ml: "18px" }}
              >
                <Typography
                  sx={{ fontSize: 35, fontWeight: 600, color: "#007DFC" }}className={noto_Sans_Thai.className}
                >
                  ชำระเงิน
                </Typography>
                <Typography
                  sx={{ fontSize: 18, fontWeight: 500, color: "#000000" }}className={noto_Sans_Thai.className}
                >
                  โอนเข้าบัญชีบริษัท
                </Typography>
              </Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                mb: 6,
                alignItems: "center",
                zIndex: 2,
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="60"
                height="60"
                fill="none"
                viewBox="0 0 60 60"
              >
                <rect width="60" height="60" fill="#007DFC" rx="30"></rect>
                <path
                  fill="#fff"
                  d="M31.5 26.04c1.517 0 2.87.292 4.06.875a6.59 6.59 0 012.8 2.555c.7 1.12 1.05 2.508 1.05 4.165 0 1.797-.373 3.348-1.12 4.655-.747 1.307-1.867 2.31-3.36 3.01-1.47.7-3.302 1.05-5.495 1.05-1.307 0-2.543-.117-3.71-.35-1.143-.233-2.147-.572-3.01-1.015v-4.55c.863.443 1.902.828 3.115 1.155 1.213.303 2.357.455 3.43.455 1.05 0 1.925-.14 2.625-.42.723-.28 1.272-.712 1.645-1.295s.56-1.33.56-2.24c0-1.237-.408-2.17-1.225-2.8-.817-.653-2.077-.98-3.78-.98-.653 0-1.33.07-2.03.21-.7.117-1.283.233-1.75.35l-2.1-1.12.945-12.74h13.545v4.48H28.77l-.455 4.9c.397-.07.817-.14 1.26-.21.467-.093 1.108-.14 1.925-.14z"
                ></path>
              </svg>
              <Box
                sx={{ display: "flex", flexDirection: "column", ml: "18px" }}
              >
                <Typography
                  sx={{ fontSize: 35, fontWeight: 600, color: "#007DFC" }}className={noto_Sans_Thai.className}
                >
                  เริ่มใช้งาน
                </Typography>
                <Typography
                  sx={{ fontSize: 18, fontWeight: 500, color: "#000000" }}className={noto_Sans_Thai.className}
                >
                  ส่งข้อมูลเบื้องต้นให้ฝ่ายซัพพอร์ตบรรจุลงระบบและเริ่มต้นใช้งาน
                </Typography>
              </Box>
            </Box>
          </Grid>



        </Grid>
      </Box>
      </ThemeProvider>
    </>
  );
}
