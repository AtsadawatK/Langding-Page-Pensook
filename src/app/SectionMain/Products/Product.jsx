"use client";
import Link from "next/link";
import { Box, Grid, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import EastIcon from "@mui/icons-material/East";
import Image from "next/image";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import FiberManualRecordOutlinedIcon from "@mui/icons-material/FiberManualRecordOutlined";
import { Truculenta } from "next/font/google";
import { useRouter } from "next/navigation";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CircleIcon from '@mui/icons-material/Circle';
import { Noto_Sans_Thai } from "next/font/google";
import SmartMedicalCabinetfrom from"../../../assets/Product1.png"
import PharmacyVendignMachine from"../../../assets/Product2.png"
import AutomatedDispensing from"../../../assets/Product3.png"

const noto_Sans_Thai = Noto_Sans_Thai({
  weight: ['400', '500' , '600' , '700'],
  subsets: ["latin"],
  display: "swap",
});
export default function Product() {
  const [widthImageSmart, setWidthImageSmart] = useState(453);
  const [widthImagePharmacy, setWidthImagePharmacy] = useState(339);
  const [widthImageDispensing, setWidthImageDispensing] = useState(339);
  const [sizeImageSmart, setSizeImageSmart] = useState(true);
  const [sizeImagePharmacy, setSizeImagePharmacy] = useState(false);
  const [sizeImageDispensing, setSizeImageDispensing] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const router = useRouter();

  console.log(windowWidth);
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

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (windowWidth >= 1480 && windowWidth <= 1600) {
      setWidthImageSmart(400);
      setWidthImagePharmacy(286);
      setWidthImageDispensing(286);
    } else if (windowWidth >= 1250 && windowWidth <= 1480) {
      setWidthImageSmart(350);
      setWidthImagePharmacy(236);
      setWidthImageDispensing(236);
    } else if (windowWidth >= 820 && windowWidth <= 950) {
      setWidthImageSmart(277);
      setWidthImagePharmacy(197);
      setWidthImageDispensing(197);
    } 
    else if (windowWidth < 820) {
      setWidthImageSmart(199);
      setWidthImagePharmacy(143);
      setWidthImageDispensing(143);
    }else {
      setWidthImageSmart(453);
      setWidthImagePharmacy(339);
      setWidthImageDispensing(339);
    }
  }, [windowWidth]);

  const handleClickImageSmart = () => {
    if (windowWidth >= 1480 && windowWidth <= 1600) {
      setWidthImageSmart(400);
      setWidthImagePharmacy(286);
      setWidthImageDispensing(286);
    } else if (windowWidth >= 1250 && windowWidth <= 1480) {
      setWidthImageSmart(350);
      setWidthImagePharmacy(236);
      setWidthImageDispensing(236);
    } else if (windowWidth >= 820 && windowWidth <= 950) {
      setWidthImageSmart(277);
      setWidthImagePharmacy(197);
      setWidthImageDispensing(197);
    } else if (windowWidth < 820) {
      setWidthImageSmart(199);
      setWidthImagePharmacy(143);
      setWidthImageDispensing(143);
    }else {
      setWidthImageSmart(453);
      setWidthImagePharmacy(339);
      setWidthImageDispensing(339);
    }
    setSizeImagePharmacy(false);
    setSizeImageDispensing(false);
    if (!sizeImageSmart) {
      setSizeImageSmart(!sizeImageSmart);
    }
  };

  const handleClickImagePharmacy = () => {
    if (windowWidth >= 1480 && windowWidth <= 1600) {
      setWidthImageSmart(286);
      setWidthImagePharmacy(400);
      setWidthImageDispensing(286);
    } else if (windowWidth >= 1250 && windowWidth <= 1480) {
      setWidthImageSmart(236);
      setWidthImagePharmacy(350);
      setWidthImageDispensing(236);
    } else if (windowWidth >= 820 && windowWidth <= 950) {
      setWidthImageSmart(197);
      setWidthImagePharmacy(277);
      setWidthImageDispensing(197);
    } else if (windowWidth < 820) {
      setWidthImageSmart(143);
      setWidthImagePharmacy(199);
      setWidthImageDispensing(143);
    }else {
      setWidthImageSmart(339);
      setWidthImagePharmacy(453);
      setWidthImageDispensing(339);
    }
    setSizeImageSmart(false);
    setSizeImageDispensing(false);

    if (!sizeImagePharmacy) {
      setSizeImagePharmacy(!sizeImagePharmacy);
    }
  };

  const handleClickImageDispensing = () => {
    if (windowWidth >= 1480 && windowWidth <= 1600) {
      setWidthImageSmart(286);
      setWidthImagePharmacy(286);
      setWidthImageDispensing(400);
    } else if (windowWidth >= 1250 && windowWidth <= 1480) {
      setWidthImageSmart(236);
      setWidthImagePharmacy(236);
      setWidthImageDispensing(350);
    } else if (windowWidth >= 820 && windowWidth <= 950) {
      setWidthImageSmart(197);
      setWidthImagePharmacy(197);
      setWidthImageDispensing(277);
    } else if (windowWidth < 820) {
      setWidthImageSmart(143);
      setWidthImagePharmacy(143);
      setWidthImageDispensing(199);
    }else {
      setWidthImageSmart(339);
      setWidthImagePharmacy(339);
      setWidthImageDispensing(453);
    }
    setSizeImageSmart(false);
    setSizeImagePharmacy(false);

    if (!sizeImageDispensing) {
      setSizeImageDispensing(!sizeImageDispensing);
    }
  };

  return (
    <>
      <ThemeProvider theme={Responsive}>
        <Box
          id="Product-section"
          sx={{ marginTop: "auto", height: "80px" ,'@media screen and (max-width: 1250px)': {
            display:"none"
        },}}
        ></Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            width: "100vw",
            height: "100%" ,
            backgroundColor: "#F4F8FB",
            flexDirection: "column",
            pt: 5,
            overflow:"hidden",
            textAlign:"center",
            pb:"39px",
            '@media screen and (max-width: 1250px)': {
              display:"none"
          },
          }}
        >
          
          <Typography
            sx={{
              fontSize: { xs:24,md: 30, lg: 35, xl: 40, xxl: 50 },
              fontWeight: 700,
              color: "#007DFC",
            }}className={noto_Sans_Thai.className}
          >
            PRODUCTS & SOLUTIONS
          </Typography>
          <Box sx={{display:"flex",flexDirection:"column", alignItems: "center",}}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              pt: { md: "10px", lg: "35", xl: "60px", xxl: "60px" },
            }}
          >
            <Typography
              sx={{
                fontSize: { xs:16,md: 18, lg: 25, xl: 30, xxl: 40 },
                fontWeight: 600,
                color: "#065B85",
              }}className={noto_Sans_Thai.className}
            >
              เรามุ่งมั่นที่จะนำเสนอเทคโนโลยีทางการแพทย์ที่
            </Typography>
            <Typography
              sx={{
                fontSize: { xs:16,md: 18, lg: 25, xl: 30, xxl: 40 },
                fontWeight: 600,
                color: "#007DFC",
                display:{xs:"none",sm:"flex"},
                
              }}className={noto_Sans_Thai.className}
            >
              ทันสมัยและมีความน่าเชื่อถือ
            </Typography>
          </Box>
          <Typography
            sx={{
              fontSize: { xs:16,md: 18, lg: 25, xl: 30, xxl: 40 },
              fontWeight: 600,
              color: "#065B85",
              display:{xs:"flex"},
              pt:1.5
            }}className={noto_Sans_Thai.className}
          >
            <Typography
              sx={{
                fontSize: { xs:16,md: 18, lg: 25, xl: 30, xxl: 40 },
                fontWeight: 600,
                color: "#007DFC",
                display:{xs:"flex",sm:"none"},
              }}className={noto_Sans_Thai.className}
            >
              ทันสมัยและมีความน่าเชื่อถือ
            </Typography> 
            เพื่อเสริมสร้างการดูแลสุขภาพที่มีประสิทธิภาพ
          </Typography>
          </Box>
          <Grid
            container
            spacing={2}
            sx={{
              pr:6.5,
              pt: "130px",
              display: { xs: "none", lg: "flex" },
            }}
          >
            {/* <Box sx={{display:"flex", flexDirection: "column",alignItems:"center",border:"1px solid black",width:"100%"}}> */}
            <Grid
              xs={6}
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems:"start",
                pl:19,
                
                height:windowWidth < 1480 ? 534 : 644
              }}
            >
              <Box
                sx={{
                  display:
                    (sizeImagePharmacy || sizeImageDispensing) &&
                    !sizeImageSmart
                      ? "none"
                      : "flex",
                  flexDirection: "column",
                 textAlign:"left"
                }}
              >
                <Typography
                  sx={{
                    fontSize: { xs:16,md: 18, lg: 20, xl: 24, xxl: 30 },
                    fontWeight: 400,
                    color: "#065B85",
                  }}className={noto_Sans_Thai.className}
                >
                  Medical Automation Machine 
                </Typography>
                <Typography
                  sx={{
                    fontSize: { xs:24,md: 30, lg: 30, xl: 40, xxl: 45 },
                    fontWeight: 700,
                    color: "#007DFC",
                    alignItems:"center",
                    py:2.5,
                    ml:3,
                    
                  }}className={noto_Sans_Thai.className}
                >
                  
                  <CircleIcon sx={{mr:3,width:"16px",pb:0.5}}/>
                    Smart Medical Cabinet
                  
                </Typography>
                
                
                <Typography
                  sx={{
                    fontSize: { xs:16,md: 18, lg: 20, xl: 24, xxl: 30 },
                    fontWeight: 400,
                    color: "#555C60",
                    width:"78%"
                  }}  className={noto_Sans_Thai.className}
                >
                เรามี Medical Automation Machine บริการแบบ 
                Custom made สำหรับลูกค้าที่ต้องการการออกแบบ
                 
                  ที่เป็นพิเศษสำหรับ ภาคธุรกิจของท่าน เพื่อให้ระบบได้
                </Typography>
                </Box>
                <Box
                  sx={{
                    display:
                    (sizeImagePharmacy || sizeImageDispensing) &&
                    !sizeImageSmart
                      ? "none"
                      : "flex",
                    
                    alignItems:"flex-end",
                    height:"100%"
                  }}
                >
                  <Button
                    variant="contained"
                    endIcon={
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="55"
                        height="30"
                        fill="none"
                        viewBox="0 0 66 41"
                      >
                        <path
                          stroke="#fff"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="5"
                          d="M5 21h51M37 9l19.25 11.958L37 32.917"
                        ></path>
                      </svg>
                    }
                    sx={{
                      bgcolor: "#007DFC",
                      width: 221,
                      height: 72,
                      borderRadius: "8px",
                      fontSize: 30,
                      fontWeight: 600,

                      "&:hover": {
                        bgcolor: "#0060C2",
                      },
                    }}className={noto_Sans_Thai.className}
                    onClick={() => window.open("/SectionProducts/1", "_blank")}
                  >
                    ดูเพิ่มเติม
                  </Button>
                </Box>
              





              <Box
                sx={{
                  display:
                    (sizeImageDispensing || sizeImageSmart) &&
                    !sizeImagePharmacy
                      ? "none"
                      : "flex",
                  flexDirection: "column",
                  textAlign:"left"
                }}
              >
               <Typography
                  sx={{
                    fontSize: { xs:16,md: 18, lg: 20, xl: 24, xxl: 30 },
                    fontWeight: 400,
                    color: "#065B85",
                  }}className={noto_Sans_Thai.className}
                >
                  Medical Automation Machine
                </Typography>
                <Typography
                  sx={{
                    fontSize: { xs:24,md: 30, lg: 30, xl: 40, xxl: 45 },
                    fontWeight: 700,
                    color: "#007DFC",
                    alignItems:"center",
                    py:2,
                    ml:3
                  }}className={noto_Sans_Thai.className}
                >
                  
                  <CircleIcon sx={{mr:5,width:"18px"}}/>
                  Automated Dispensing 
      System Technology 
                  
                </Typography>
                
                
                <Typography
                  sx={{
                    fontSize: { xs:16,md: 18, lg: 20, xl: 24, xxl: 30 },
                    fontWeight: 400,
                    color: "#555C60",
                    width:"75%"
                  }}  className={noto_Sans_Thai.className}
                >
                  เรามี Medical Automation Machine บริการแบบ 
Custom made สำหรับลูกค้าที่ต้องการการออกแบบ ที่เป็นพิเศษสำหรับ ภาคธุรกิจของท่าน เพื่อให้ระบบได้ 
ระบบ Automation system ที่มีความเฉพาะและเกิด
ประสิทธิภาพ สูงสุดต่อการใช้งานในองค์กร 
                </Typography>              
              </Box>
              <Box
                  sx={{
                    display:
                    (sizeImageDispensing || sizeImageSmart) &&
                    !sizeImagePharmacy
                      ? "none"
                      : "flex",
                    
                    alignItems:"flex-end",
                    height:"100%"
                  }}
                >
                  <Button
                    variant="contained"
                    endIcon={
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="55"
                        height="30"
                        fill="none"
                        viewBox="0 0 66 41"
                      >
                        <path
                          stroke="#fff"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="5"
                          d="M5 21h51M37 9l19.25 11.958L37 32.917"
                        ></path>
                      </svg>
                    }
                    sx={{
                      bgcolor: "#007DFC",
                      width: 221,
                      height: 72,
                      borderRadius: "8px",
                      fontSize: 30,
                      fontWeight: 600,

                      "&:hover": {
                        bgcolor: "#0060C2",
                      },
                    }}className={noto_Sans_Thai.className}
                    onClick={() => window.open("/SectionProducts/1", "_blank")}
                  >
                    ดูเพิ่มเติม
                  </Button>
                </Box>








              <Box
                sx={{
                  display:
                    (sizeImagePharmacy || sizeImageSmart) &&
                    !sizeImageDispensing
                      ? "none"
                      : "flex",
                  flexDirection: "column",
                  textAlign:"left"
                }}
              >
                <Typography
                  sx={{
                    fontSize: { xs:16,md: 18, lg: 20, xl: 24, xxl: 30 },
                    fontWeight: 400,
                    color: "#065B85",
                  }}className={noto_Sans_Thai.className}
                >
                  Custom Medical Automation Machine
                </Typography>
                <Typography
                  sx={{
                    fontSize: { xs:24,md: 30, lg: 30, xl: 40, xxl: 45 },
                    fontWeight: 700,
                    color: "#007DFC",
                    alignItems:"center",
                    py:2,
                    ml:3
                  }}className={noto_Sans_Thai.className}
                >
                  
                  <CircleIcon sx={{mr:5,width:"18px"}}/>
                 Pharmacy Vending Machine
                  
                </Typography>
                
                
                <Typography
                  sx={{
                    fontSize: { xs:16,md: 18, lg: 20, xl: 24, xxl: 30 },
                    fontWeight: 400,
                    color: "#555C60",
                    width:"75%"
                  }}  className={noto_Sans_Thai.className}
                >
                ระบบ Automation system ที่มีความเฉพาะและเกิด
ประสิทธิภาพ สูงสุดต่อการใช้งานในองค์กร
                </Typography>
                
              </Box>

              <Box
                  sx={{
                    display:
                    (sizeImagePharmacy || sizeImageSmart) &&
                    !sizeImageDispensing
                      ? "none"
                      : "flex",
                    
                    alignItems:"flex-end",
                    height:"100%"
                  }}
                >
                  <Button
                    variant="contained"
                    endIcon={
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="55"
                        height="30"
                        fill="none"
                        viewBox="0 0 66 41"
                      >
                        <path
                          stroke="#fff"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="5"
                          d="M5 21h51M37 9l19.25 11.958L37 32.917"
                        ></path>
                      </svg>
                    }
                    sx={{
                      bgcolor: "#007DFC",
                      width: 221,
                      height: 72,
                      borderRadius: "8px",
                      fontSize: 30,
                      fontWeight: 600,

                      "&:hover": {
                        bgcolor: "#0060C2",
                      },
                    }}className={noto_Sans_Thai.className}
                    onClick={() => window.open("/SectionProducts/1", "_blank")}
                  >
                    ดูเพิ่มเติม
                  </Button>
                </Box>
            </Grid>

            <Grid
              xs={3}
              sx={{
                display: "flex",
                justifyContent: "end",
                alignItems: "flex-start",
                mt: -8,
                
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "end",
                  position: "relative",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "end",
                    width: "100%",
                  }}
                >
                  <Image
                    src={SmartMedicalCabinetfrom}
                    alt="SmartMedicalCabinet"
                    width={widthImageSmart}
                    height={widthImageSmart}
                    style={{
                      boxShadow: sizeImageSmart
                        ? "-3px 8px 20px rgba(0, 0, 0, 0.5)"
                        : "none",
                      borderRadius: 8,
                      cursor: "pointer",
                      transition: "width 0.5s, height 0.5s",
                    }}
                    onClick={handleClickImageSmart}
                    
                  />
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "end",
                    mt: 4,

                    width: "100%",
                  }}
                >
                  <Image
                    src={AutomatedDispensing}
                    alt="AutomatedDispensing"
                    width={widthImagePharmacy}
                    height={widthImagePharmacy}
                    style={{
                      boxShadow: sizeImagePharmacy
                        ? "-3px 8px 20px rgba(0, 0, 0, 0.5)"
                        : "none",
                      borderRadius: 8,
                      cursor: "pointer",
                      transition: "width 0.5s, height 0.5s",
                    }}
                    onClick={handleClickImagePharmacy}
                  />
                </Box>
              </Box>
              
            </Grid>
            <Grid xs={3} sx={{ pt: widthImageDispensing === 339 ? 9 : 5 ,display: "flex",
                justifyContent: "start",
                alignItems: "flex-start",pl:5,}}>
              <Box sx={{  height: 900 }}>
                <Image
                  src={PharmacyVendignMachine}
                  alt="AutomatedDispensing"
                  width={widthImageDispensing}
                  height={widthImageDispensing}
                  style={{
                    boxShadow: sizeImageDispensing
                      ? "-3px 8px 20px rgba(0, 0, 0, 0.5)"
                      : "none",
                    borderRadius: 8,
                    cursor: "pointer",
                    transition: "width 1s, height 1s",
                  }}
                  onClick={handleClickImageDispensing}
                />
              </Box>
            </Grid>
            {/* </Box> */}
          </Grid>
          <Box
            sx={{
              display: "flex",
              justifyContent:"center",
              
              mt: windowWidth < 1480 ? -25 : -20,
            }}
          >
            <FiberManualRecordIcon
              sx={{
                color: sizeImageSmart ? "#007DFC" : "#CDCDCD",
                cursor: "pointer",
                mr:-0.5,
                height:30,
                width:30,
              }}
              onClick={handleClickImageSmart}
            />
            <FiberManualRecordIcon
              sx={{
                color: sizeImagePharmacy ? "#007DFC" : "#CDCDCD",
                cursor: "pointer",mr:-0.7,height:30,
                width:30,
              }}
              onClick={handleClickImagePharmacy}
            />
            <FiberManualRecordIcon
              sx={{
                color: sizeImageDispensing ? "#007DFC" : "#CDCDCD",
                cursor: "pointer",mr:-0.7,height:30,
                width:30,
              }}
              onClick={handleClickImageDispensing}
            />
          </Box>
        </Box>
      </ThemeProvider>
    </>
  );
}
