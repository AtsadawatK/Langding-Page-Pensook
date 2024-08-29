"use client";

import { Box, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Noto_Sans_Thai } from 'next/font/google'

const noto_Sans_Thai = Noto_Sans_Thai({
  weights: ['400', '500' , '600' , '700'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
})
export default function Ap() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

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

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <ThemeProvider theme={Responsive}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "start",
            flexDirection: "column",
            pr:10
          }}
        >
          <Typography
            sx={{
              fontSize: 50,
              fontWeight: 600,
              color: "#178A1C",
              borderBottom: "5px solid #178A1C",
              mb: 1,
              width: 65,
            }}className={noto_Sans_Thai.className}
          >
            AP
          </Typography>
          <Typography
            sx={{
              fontSize: {
                 md:18,lg:24,xl:windowWidth <= 1700 ? 26 : 30 ,   xxl: 30,
              },
              fontWeight: 400,
              color: "#606875",
              mt: 2,
              "&.MuiTypography-root":{
                lineHeight: 1.8
              }
            }}className={noto_Sans_Thai.className}
          >
            เพราะการแก้ไขปัญหาให้คุณ คือธุรกิจของเรา เราเป็นผู้นำในด้าน
            การให้บริการ พัฒนาซอฟต์แวร์ แอปพลิเคชัน และโซลูชันด้านไอที
            แบบครบวงจร (Full-stack) ตั้งแต่การให้คำปรึกษาไปจนถึงการ Maintenance
            ระบบ เรามีความตั้งใจที่จะเปลี่ยนให้ นวัต กรรม และไอเดีย
            ระดับโลกของคุณให้กลายเป็นซอฟต์แวร์ที่มีคุณภาพ บริษัทฯ
            รับพัฒนาซอฟต์แวร์ เขียนโปรแกรม และ แอปพลิเคชัน
            ตามความต้องการทางธุรกิจคุณได้ ทุกรูปแบบ ทุกประเภท
            ทุกความต้องการทางธุรกิจ
          </Typography>

          <Typography
            sx={{
              fontSize: {md:18,lg:24,xl:windowWidth <= 1700 ? 26 : 30 ,   xxl: 30},

              fontWeight: 400,
              color: "#606875",
              textDecoration: "underline",
              mt: 10,
              cursor: "pointer",
            }}className={noto_Sans_Thai.className}
          >
            https://www.ap-machinery.com/index.html
          </Typography>
        </Box>
      </ThemeProvider>
    </>
  );
}
