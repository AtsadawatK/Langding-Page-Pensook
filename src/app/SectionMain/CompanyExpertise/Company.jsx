"use client"
import { Noto_Sans_Thai } from "next/font/google";
import { Box, Grid, Typography } from "@mui/material";
import Image from "next/image";
import React , { useState , useEffect} from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import ShapeLeft from "../../../assets/shape-left.png"
import Shaperight from "../../../assets/shape-right.png"
import Vector1 from "../../../assets/Vector1.png"
import industrialRobot from "../../../assets/industrial-robot.png"
import Vector2 from "../../../assets/Vector2.png"
import socket from "../../../assets/socket.png"
import Vector3 from "../../../assets/Vector3.png"
import coding from "../../../assets/coding.png"
import Vector4 from "../../../assets/Vector4.png"
import artificialIntelligence from "../../../assets/artificial-intelligence.png"

const noto_Sans_Thai = Noto_Sans_Thai({
  weight: ['400', '500' , '600' , '700'],
  subsets: ["latin"],
  display: "swap",
});
export default  function Company() {
  
  

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
      
    <Box id="Company-section" sx={{marginTop:"auto" ,overflow: "hidden",height:"50px", }}></Box>
      <Box
        
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "100vw",
          height: "100%"   ,     
          overflow: "hidden",
          '@media screen and (max-width: 600px)': {
            display:"none"
        },
        
        mb:{md:5,lg:1}
        }}
      >
        <Typography
          sx={{ fontSize: {xs: 24,md:30,lg:35,xl:45,xxl:50}, fontWeight: 700, color: "#007DFC", }}className={noto_Sans_Thai.className}
        >
          COMPANY EXPERTISE
        </Typography>
        <Box sx={{display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width:"77%",
          textAlign:"center",
          
          overflow: "hidden",
         
          }}>
        <Typography
          sx={{ fontSize: {xs:16,md:18,lg:24}, fontWeight: 500, color: "#915BD7", mt: "32px" }}className={noto_Sans_Thai.className}
        >
          ที่ Pensook ความเชี่ยวชาญของเราไม่ได้มาจากการทำเพียงแค่ธุรกิจแต่มาจากหัวใจที่ใส่ใจในทุก ๆ รายละเอียดเรามุ่งมั่นที่จะให้บริการที่ดีที่สุดและทันสมัยในทุก ๆ ด้าน ด้วยทีมงานที่มีประสบการณ์และความคิดสร้างสรรค์ เราสรรค์สร้างทุก ๆโอกาสในการต่อยอดทำให้บริษัทของคุณเป็นที่รู้จักและได้รับความไว้วางใจ
        </Typography>
        
        </Box>

        <Box sx={{ position: "relative", left: -830, bottom: 40,overflow: "hidden",}}>
          <Image src={ShapeLeft} alt="shape"/>
        </Box>
        <Box sx={{ position: "absolute", right: 0, mt: 40 ,overflow: "hidden",}}>
          <Image src={Shaperight} alt="shape"/>
        </Box>

        <Grid
          container
          spacing={2}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width:"90%",
            overflow: "hidden",

            mt:-45
          }}
        >
          <Grid
            item
            xs={12}
            md={6}
            xl={3}
            sx={{
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
              mb:{xs:5,md:0},
              height: 528,

            }}
          >
            <Box sx={{ position: "relative" }}>
              <Image src={Vector1} alt="vector"/>

              <Box
                sx={{
                  position: "absolute",

                  zIndex: 1,
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                }}
              >
                <Image src={industrialRobot} alt="IconRobot"/>
              </Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                mt: 1.5,
              }}
            >
              <Typography
                sx={{ fontSize: 20, fontWeight: 700, color: "#006AD5" }}className={noto_Sans_Thai.className}
              >
                Automation
              </Typography>
              <Typography
                sx={{ fontSize: 18, fontWeight: 400, color: "#586A86", mt: 3 }}className={noto_Sans_Thai.className}
              >
                เรามีผู้เชี่ยวชาญและมีประสบการณ์
              </Typography>
              <Typography
                sx={{ fontSize: 18, fontWeight: 400, color: "#586A86", mt: 1 }}className={noto_Sans_Thai.className}
              >
                มากกว่า 15 ปีในการออกแบบ ผลิต
              </Typography>
              <Typography
                sx={{ fontSize: 18, fontWeight: 400, color: "#586A86", mt: 1 }}className={noto_Sans_Thai.className}
              >
                ติดตั้งระบบอัตโนมัติ ระบบลำเลียง
              </Typography>
              <Typography
                sx={{ fontSize: 18, fontWeight: 400, color: "#586A86", mt: 1 }}className={noto_Sans_Thai.className}
              >
                ระบบ vision inspection รวมถึง
              </Typography>
              <Typography
                sx={{ fontSize: 18, fontWeight: 400, color: "#586A86", mt: 1 }}className={noto_Sans_Thai.className}
              >
                หุ่นยนต์และระบบ AI ต่าง ๆ อีกทั้ง
              </Typography>
              <Typography
                sx={{ fontSize: 18, fontWeight: 400, color: "#586A86", mt: 1 }}className={noto_Sans_Thai.className}
              >
                ยังสามารถ ออกแบบระบบอัตโนมัติ
              </Typography>
              <Typography
                sx={{ fontSize: 18, fontWeight: 400, color: "#586A86", mt: 1 }}className={noto_Sans_Thai.className}
              >
                เพื่อใช้ในกระบวนการผลิตและบริการ
              </Typography>
              <Typography
                sx={{ fontSize: 18, fontWeight: 400, color: "#586A86", mt: 1 }}className={noto_Sans_Thai.className}
              >
                ได้ตามความต้องการของลูกค้า
              </Typography>
            </Box>
          </Grid>

          <Grid
            item
            xs={12}
            md={6}
            xl={3}
            sx={{
              display: "flex",

              alignItems: "center",
              flexDirection: "column",
              
              height: 528,
            }}
          >
            <Box sx={{ position: "relative" }}>
              <Image src={Vector2} alt="vector"/>

              <Box
                sx={{
                  position: "absolute",

                  zIndex: 1,
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                }}
              >
                <Image src={socket} alt='IconSocket'/>
              </Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                mt: 1.5,
              }}
            >
              <Typography
                sx={{ fontSize: 20, fontWeight: 700, color: "#006AD5" }}className={noto_Sans_Thai.className}
              >
                Internet of Things
              </Typography>
              <Typography
                sx={{ fontSize: 18, fontWeight: 400, color: "#586A86", mt: 3 }}className={noto_Sans_Thai.className}
              >
                เรามีทีมพัฒนาระบบ IoT Solution
              </Typography>
              <Typography
                sx={{ fontSize: 18, fontWeight: 400, color: "#586A86", mt: 1 }}className={noto_Sans_Thai.className}
              >
                ที่จะช่วยให้การสื่อสารกับอุปกรณ์
              </Typography>
              <Typography
                sx={{ fontSize: 18, fontWeight: 400, color: "#586A86", mt: 1 }}className={noto_Sans_Thai.className}
              >
                IoT มีความสะดวกสบาย
              </Typography>
              <Typography
                sx={{ fontSize: 18, fontWeight: 400, color: "#586A86", mt: 1 }}className={noto_Sans_Thai.className}
              >
                และได้ประสิทธิภาพมากยิ่งขึ้น
              </Typography>
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            xl={3}
            sx={{
              display: "flex",
              height: 528,
              alignItems: "center",
              flexDirection: "column",
              mt:{md:10,lg:10,xl:0},
              mb:{xs:5,md:0},pr:5
            }}
          >
            <Box sx={{ position: "relative" }}>
              <Image src={Vector3} alt="vector"/>

              <Box
                sx={{
                  position: "absolute",

                  zIndex: 1,
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                }}
              >
                <Image src={coding} alt="CodingIcon"/>
              </Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                mt: 1.5,
              }}
            >
              <Typography
                sx={{ fontSize: 20, fontWeight: 700, color: "#006AD5" }}className={noto_Sans_Thai.className}
              >
                Software
              </Typography>
              <Typography
                sx={{ fontSize: 18, fontWeight: 400, color: "#586A86", mt: 3 }}className={noto_Sans_Thai.className}
              >
                เราสามารถพัฒนา Software สำหรับ
              </Typography>
              <Typography
                sx={{ fontSize: 18, fontWeight: 400, color: "#586A86", mt: 1 }}className={noto_Sans_Thai.className}
              >
                Mobile Application และ
              </Typography>
              <Typography
                sx={{ fontSize: 18, fontWeight: 400, color: "#586A86", mt: 1 }}className={noto_Sans_Thai.className}
              >
                Web Application ที่สามารถสร้าง
              </Typography>
              <Typography
                sx={{ fontSize: 18, fontWeight: 400, color: "#586A86", mt: 1 }}className={noto_Sans_Thai.className}
              >
                Application ที่ทันสมัย
              </Typography>
              <Typography
                sx={{ fontSize: 18, fontWeight: 400, color: "#586A86", mt: 1 }}className={noto_Sans_Thai.className}
              >
                ประสิทธิภาพสูงสำหรับภาคธุรกิจและ
              </Typography>
              <Typography
                sx={{ fontSize: 18, fontWeight: 400, color: "#586A86", mt: 1 }}className={noto_Sans_Thai.className}
              >
                อุตสาหกรรมต่าง ๆ เพื่อเพิ่มความ
              </Typography>
              <Typography
                sx={{ fontSize: 18, fontWeight: 400, color: "#586A86", mt: 1 }}className={noto_Sans_Thai.className}
              >
                สามารถในการแข่งขันและโอกาสในการ
              </Typography>
              <Typography
                sx={{ fontSize: 18, fontWeight: 400, color: "#586A86", mt: 1 }}className={noto_Sans_Thai.className}
              >
                ประสบความสำเร็จในธุรกิจได้เร็วขึ้น
              </Typography>
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            xl={3}
            sx={{
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
              mt:{md:10,lg:10,xl:0},
              height: 528,
            }}
          >
            <Box sx={{ position: "relative" }}>
              <Image src={Vector4} alt="vector"/>

              <Box
                sx={{
                  position: "absolute",

                  zIndex: 1,
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                }}
              >
                <Image
                  src={artificialIntelligence}
                  alt="ArtificialIntelligenceIcon"
                />
              </Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                mt: 1.5,
              }}
            >
              <Typography
                sx={{ fontSize: 20, fontWeight: 700, color: "#006AD5" }}className={noto_Sans_Thai.className}
              >
                Artificial Intelligence
              </Typography>
              <Typography
                sx={{ fontSize: 18, fontWeight: 400, color: "#586A86", mt: 3 }}className={noto_Sans_Thai.className}
              >
                เรามีบริการพัฒนา AI
              </Typography>
              <Typography
                sx={{ fontSize: 18, fontWeight: 400, color: "#586A86", mt: 1 }}className={noto_Sans_Thai.className}
              >
                ในอุตสาหกรรมและธุรกิจต่าง ๆ
              </Typography>
              <Typography
                sx={{ fontSize: 18, fontWeight: 400, color: "#586A86", mt: 1 }}className={noto_Sans_Thai.className}
              >
                โดยทีมงานผู้เชี่ยวชาญในด้าน
              </Typography>
              <Typography
                sx={{ fontSize: 18, fontWeight: 400, color: "#586A86", mt: 1 }}className={noto_Sans_Thai.className}
              >
                การบริหารจัดการข้อมูล เพื่อสร้าง
              </Typography>
              <Typography
                sx={{ fontSize: 18, fontWeight: 400, color: "#586A86", mt: 1 }}className={noto_Sans_Thai.className}
              >
                Software Technology ใหม่ ๆ
              </Typography>
              <Typography
                sx={{ fontSize: 18, fontWeight: 400, color: "#586A86", mt: 1 }}className={noto_Sans_Thai.className}
              >
                (ปรึกษาเราซิคะ 😊)
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
      </ThemeProvider>
    </>
  );
}
