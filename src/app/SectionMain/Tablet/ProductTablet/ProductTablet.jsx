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
import { Noto_Sans_Thai } from "next/font/google";
import CircleIcon from '@mui/icons-material/Circle';
import SmartMedicalCabinetfrom from"../../../../assets/Product1.png"
import PharmacyVendignMachine from"../../../../assets/Product2.png"
import AutomatedDispensing from"../../../../assets/Product3.png"

const noto_Sans_Thai = Noto_Sans_Thai({
  weight: ['400', '500' , '600' , '700'],
  subsets: ["latin"],
  display: "swap",
});
export default function ProductTablet() {
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
    
      setWidthImageSmart(277);
      setWidthImagePharmacy(197);
      setWidthImageDispensing(197);
    
  }, [windowWidth]);

  const handleClickImageSmart = () => {
    
      setWidthImageSmart(277);
      setWidthImagePharmacy(197);
      setWidthImageDispensing(197);
    
    setSizeImagePharmacy(false);
    setSizeImageDispensing(false);
    if (!sizeImageSmart) {
      setSizeImageSmart(!sizeImageSmart);
    }
  };

  const handleClickImagePharmacy = () => {
    
      setWidthImageSmart(197);
      setWidthImagePharmacy(277);
      setWidthImageDispensing(197);
    
    setSizeImageSmart(false);
    setSizeImageDispensing(false);

    if (!sizeImagePharmacy) {
      setSizeImagePharmacy(!sizeImagePharmacy);
    }
  };

  const handleClickImageDispensing = () => {
    
      setWidthImageSmart(197);
      setWidthImagePharmacy(197);
      setWidthImageDispensing(277);
    
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
          sx={{ marginTop: "auto", height: "30px" ,
          '@media screen and (min-width: 600px) and (max-width: 1250px)': { 
            display: "flex"
          },
          '@media screen and (max-width: 600px), (min-width: 1251px)': { 
            display: "none"
          }}}
        ></Box>
        <Box
          sx={{
            
            alignItems: "center",
            width: "100vw",
            height: "100%" ,
            backgroundColor: "#F4F8FB",
            flexDirection: "column",
            pt: 5,
            overflow:"hidden",
            textAlign:"center",
            '@media screen and (min-width: 600px) and (max-width: 1250px)': { 
              display: "flex"
            },
            '@media screen and (max-width: 600px), (min-width: 1251px)': { 
              display: "none"
            }
          }}
        >
          
          <Typography
            sx={{
              fontSize: 30,
              fontWeight: 700,
              color: "#007DFC",
            }}className={noto_Sans_Thai.className}
          >
            PRODUCTS & SOLUTIONS
          </Typography>
          <Box sx={{display:"flex",flexDirection:"column", alignItems: "center",px:5}}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              pt: { md: "10px", lg: "35", xl: "70px", xxl: "90px" },
              px:5
            }}
          >
            <Typography
              sx={{
                fontSize: 18,
                fontWeight: 500,
                color: "#065B85",
              }}className={noto_Sans_Thai.className}
            >
              เรามุ่งมั่นที่จะนำเสนอเทคโนโลยีทางการแพทย์ที่
            </Typography>
            <Typography
              sx={{
                fontSize: 18,
                fontWeight: 500,
                color: "#007DFC",
                display:{xs:"none",sm:"flex"}
              }}className={noto_Sans_Thai.className}
            >
              ทันสมัยและมีความน่าเชื่อถือ
            </Typography>
          </Box>
          <Typography
            sx={{
              fontSize: 18,
              fontWeight: 500,
              color: "#065B85",
              display:{xs:"flex"},
              pt:1
            }}className={noto_Sans_Thai.className}
          >
            <Typography
              sx={{
                fontSize: 18,
                fontWeight: 500,
                color: "#007DFC",
                display:{xs:"flex",sm:"none"}
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
              pt:"140px",
              display: {
                xs: "flex",
                lg: "none",
                overflowY: "hidden",
                overflowX: "hidden",
              },
              pr:5
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                width: "100%",
              }}
            >
              <Grid
                xs={3}
                sx={{
                  display: "flex",
                  justifyContent: "end",
                  alignItems: "flex-start",
                  mt: -5,
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
                <Grid xs={3} sx={{ pt: 15 }}>
                  <Box sx={{ ml: 4, height: 500 }}>
                    <Image
                      src={PharmacyVendignMachine}
                      alt="PharmacyVendignMachine"
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
              </Grid>
            </Box>





            <Grid
              xs={12}
              sx={{
                display: "flex",
                flexDirection: "column",
                mt:0,
                height: "30vh",
                alignItems:"center",
                jusifyContent:"center",
                
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
                  width:"50%"
                  
                }}
              >
                <Box sx={{ textAlign:"left",}}>
                 <Typography
                  sx={{
                    fontSize: { xs:16,md: 18, lg: 20, xl: 24, xxl: 30 },
                    fontWeight: 500,
                    color: "#065B85",
                  }}className={noto_Sans_Thai.className}
                >
                  Medical Automation Machine
                </Typography>
                <Typography
                  sx={{
                    fontSize: { xs:24,md: 30, lg: 30, xl: 40, xxl: 45 },
                    fontWeight: 600,
                    color: "#007DFC",
                    alignItems:"center",
                    py:2
                  }}className={noto_Sans_Thai.className}
                >
                  
                  <CircleIcon sx={{mr:5,width:"18px"}}/>
                    Smart Medical Cabinet
                  
                </Typography>
                
                
                <Typography
                  sx={{
                    fontSize: { xs:16,md: 18, lg: 20, xl: 24, xxl: 30 },
                    fontWeight: 400,
                    color: "#555C60",
                    width:"100%"
                  }}  className={noto_Sans_Thai.className}
                >
                เรามี Medical Automation Machine บริการแบบ 
                Custom made สำหรับลูกค้าที่ต้องการการออกแบบ
                 
                  ที่เป็นพิเศษสำหรับ ภาคธุรกิจของท่าน เพื่อให้ระบบได้
                </Typography>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "start",
                    marginTop: "auto",
                    pt:"140px"
                  }}
                >
                  <Button
                    variant="contained"
                    endIcon={
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="37"
                        height="22"
                        fill="none"
                        viewBox="0 0 37 22"
                      >
                        <path
                          stroke="#fff"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="3"
                          d="M5 11h25M20 2l14 9-14 9"
                        ></path>
                      </svg>
                    }
                    sx={{
                      bgcolor: "#007DFC",
                      width: 174,
                      height: 60,
                      borderRadius: "8px",
                      fontSize: 24,
                      fontWeight: 600,

                      "&:hover": {
                        bgcolor: "#0060C2",
                      },
                    }}className={noto_Sans_Thai.className}
                    onClick={() => router.push("/SectionProducts/1")}
                  >
                    ดูเพิ่มเติม
                  </Button>
                </Box>
              </Box>

              <Box
                sx={{
                  display:
                    (sizeImageDispensing || sizeImageSmart) &&
                    !sizeImagePharmacy
                      ? "none"
                      : "flex",
                  flexDirection: "column",
                  width:"50%"
                }}
              >
               <Box sx={{ textAlign:"left",}}>
                 <Typography
                  sx={{
                    fontSize: { xs:16,md: 18, lg: 20, xl: 24, xxl: 30 },
                    fontWeight: 500,
                    color: "#065B85",
                  }}className={noto_Sans_Thai.className}
                >
                  Medical Automation Machine
                </Typography>
                <Typography
                  sx={{
                    fontSize: { xs:24,md: 30, lg: 30, xl: 40, xxl: 45 },
                    fontWeight: 600,
                    color: "#007DFC",
                    alignItems:"center",
                    py:2
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
                    width:"100%"
                  }}  className={noto_Sans_Thai.className}
                >
                 ระบบ Automation system ที่มีความเฉพาะและเกิด
ประสิทธิภาพ สูงสุดต่อการใช้งานในองค์กร
                </Typography>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "start",
                    marginTop: "auto",
                    pt:"140px"
                  }}
                >
                  <Button
                    variant="contained"
                    endIcon={
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="37"
                        height="22"
                        fill="none"
                        viewBox="0 0 37 22"
                      >
                        <path
                          stroke="#fff"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="3"
                          d="M5 11h25M20 2l14 9-14 9"
                        ></path>
                      </svg>
                    }
                    sx={{
                      bgcolor: "#007DFC",
                      width: 174,
                      height: 60,
                      borderRadius: "8px",
                      fontSize: 24,
                      fontWeight: 600,

                      "&:hover": {
                        bgcolor: "#0060C2",
                      },
                    }}className={noto_Sans_Thai.className}
                    onClick={() => router.push("/SectionProducts/2")}
                  >
                    ดูเพิ่มเติม
                  </Button>
                </Box>
              </Box>

              <Box
                sx={{
                  display:
                    (sizeImagePharmacy || sizeImageSmart) &&
                    !sizeImageDispensing
                      ? "none"
                      : "flex",
                  flexDirection: "column",
                  width:"50%"
                }}
              >
               <Box sx={{ textAlign:"left",}}>
                 <Typography
                  sx={{
                    fontSize: { xs:16,md: 18, lg: 20, xl: 24, xxl: 30 },
                    fontWeight: 500,
                    color: "#065B85",
                  }}className={noto_Sans_Thai.className}
                >
                  Custom Medical Automation Machine
                </Typography>
                <Typography
                  sx={{
                    fontSize: { xs:24,md: 30, lg: 30, xl: 40, xxl: 45 },
                    fontWeight: 600,
                    color: "#007DFC",
                    alignItems:"center",
                    py:2
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
                    width:"100%"
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
                    display: "flex",
                    justifyContent: "start",
                    marginTop: "auto",
                    pt:"50px"
                  }}
                >
                  <Button
                    variant="contained"
                    endIcon={
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="37"
                        height="22"
                        fill="none"
                        viewBox="0 0 37 22"
                      >
                        <path
                          stroke="#fff"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="3"
                          d="M5 11h25M20 2l14 9-14 9"
                        ></path>
                      </svg>
                    }
                    sx={{
                      bgcolor: "#007DFC",
                      width: 174,
                      height: 60,
                      borderRadius: "8px",
                      fontSize: 24,
                      fontWeight: 600,

                      "&:hover": {
                        bgcolor: "#0060C2",
                      },
                    }}className={noto_Sans_Thai.className}
                    onClick={() => router.push("/SectionProducts/3")}
                  >
                    ดูเพิ่มเติม
                  </Button>
                </Box>
              </Box>
            </Grid>



            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                width: "100%",
                pt: 20,
                pb: 5,
              }}
            >
              <FiberManualRecordIcon
                sx={{
                  color: sizeImageSmart ? "#007DFC" : "#CDCDCD",
                  cursor: "pointer",
                }}
                onClick={handleClickImageSmart}
              />
              <FiberManualRecordIcon
                sx={{
                  color: sizeImagePharmacy ? "#007DFC" : "#CDCDCD",
                  cursor: "pointer",
                }}
                onClick={handleClickImagePharmacy}
              />
              <FiberManualRecordIcon
                sx={{
                  color: sizeImageDispensing ? "#007DFC" : "#CDCDCD",
                  cursor: "pointer",
                }}
                onClick={handleClickImageDispensing}
              />
            </Box>
          </Grid>
        </Box>
      </ThemeProvider>
    </>
  );
}
