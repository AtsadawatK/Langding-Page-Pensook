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
export default function ProductMobile() {
  const [widthImageSmart, setWidthImageSmart] = useState(453);
  const [widthImagePharmacy, setWidthImagePharmacy] = useState(339);
  const [widthImageDispensing, setWidthImageDispensing] = useState(339);
  const [sizeImageSmart, setSizeImageSmart] = useState(true);
  const [sizeImagePharmacy, setSizeImagePharmacy] = useState(false);
  const [sizeImageDispensing, setSizeImageDispensing] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);
  const router = useRouter();
  const [imageSmallMobile1, setImageSmallMobile1] = useState(true);
  const [imageSmallMobile2, setImageSmallMobile2] = useState(false);
  const [imageSmallMobile3, setImageSmallMobile3] = useState(false);



  const handleClickDotTab1 = () => {
      setImageSmallMobile1(true);
      setImageSmallMobile2(false);
      setImageSmallMobile3(false);
      setSizeImageSmart(true);
      setSizeImagePharmacy(false);
      setSizeImageDispensing(false);
  };

  const handleClickDotTab2 = () => {
    setImageSmallMobile1(false);
    setImageSmallMobile2(true);
    setImageSmallMobile3(false);
    setSizeImageSmart(false);
      setSizeImagePharmacy(true);
      setSizeImageDispensing(false);
};

const handleClickDotTab3 = () => {
  setImageSmallMobile1(false);
  setImageSmallMobile2(false);
  setImageSmallMobile3(true);
  setSizeImageSmart(false)
      setSizeImagePharmacy(false)
      setSizeImageDispensing(true)
};


  const handleClickNext = () => {
    if (imageSmallMobile1 == true ) {

      setImageSmallMobile1(false);
      setImageSmallMobile2(true);
      setImageSmallMobile3(false);
      
      setSizeImageSmart(false);
      setSizeImagePharmacy(true);
      setSizeImageDispensing(false);

    }else if (imageSmallMobile2 == true) {

      setImageSmallMobile1(false);
      setImageSmallMobile2(false);
      setImageSmallMobile3(true);

      setSizeImageSmart(false);
      setSizeImagePharmacy(false);
      setSizeImageDispensing(true);
    }
    else if (imageSmallMobile3 == true) {

      setImageSmallMobile1(true);
      setImageSmallMobile2(false);
      setImageSmallMobile3(false);

      setSizeImageSmart(true)
      setSizeImagePharmacy(false)
      setSizeImageDispensing(false)
    }
    

    
  };

  const handleClickPrev = () => {
    if (imageSmallMobile1 == true ) {
      setImageSmallMobile1(false);
      setImageSmallMobile2(false);
      setImageSmallMobile3(true);

      setSizeImageSmart(false)
      setSizeImagePharmacy(false)
      setSizeImageDispensing(true)

    }else if (imageSmallMobile2 == true) {
      setImageSmallMobile1(true);
      setImageSmallMobile2(false);
      setImageSmallMobile3(false);

      setSizeImageSmart(true)
      setSizeImagePharmacy(false)
      setSizeImageDispensing(false)


    }
    else if (imageSmallMobile3 == true) {
      setImageSmallMobile1(false);
      setImageSmallMobile2(true);
      setImageSmallMobile3(false);

      setSizeImageSmart(false)
      setSizeImagePharmacy(true)
      setSizeImageDispensing(false)


    }
  };



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
      setWindowHeight(window.innerHeight);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (windowWidth < 501 ) {
      setWidthImageSmart(170);
      setWidthImagePharmacy(120);
      setWidthImageDispensing(120);
    }
    else{
      setWidthImageSmart(199);
      setWidthImagePharmacy(143);
      setWidthImageDispensing(143);

    }
  }, [windowWidth]);

  const handleClickImageSmart = () => {
    if (windowWidth < 501) {
      setWidthImageSmart(170);
      setWidthImagePharmacy(120);
      setWidthImageDispensing(120);
    }else{
      setWidthImageSmart(199);
      setWidthImagePharmacy(143);
      setWidthImageDispensing(143);
    }
    setSizeImagePharmacy(false);
    setSizeImageDispensing(false);
    if (!sizeImageSmart) {
      setSizeImageSmart(!sizeImageSmart);
    }
  };

  const handleClickImagePharmacy = () => {
    if (windowWidth < 501) {
      setWidthImageSmart(120);
      setWidthImagePharmacy(170);
      setWidthImageDispensing(120);
    }else{
      setWidthImageSmart(143);
      setWidthImagePharmacy(199);
      setWidthImageDispensing(143);
    }
    setSizeImageSmart(false);
    setSizeImageDispensing(false);

    if (!sizeImagePharmacy) {
      setSizeImagePharmacy(!sizeImagePharmacy);
    }
  };

  const handleClickImageDispensing = () => {
    if (windowWidth < 501) {
      setWidthImageSmart(120);
      setWidthImagePharmacy(120);
      setWidthImageDispensing(170);
    }else{

      setWidthImageSmart(143);
      setWidthImagePharmacy(143);
      setWidthImageDispensing(199);
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
          sx={{ marginTop: "auto", height: "80px",'@media screen and (min-width: 601px)': {
            display:"none"
        }, }}
        ></Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            width: "100vw",
            height: "100%" ,
            backgroundColor: "#F4F8FB",
            flexDirection: "column",
            pt: 3,
            overflow:"hidden",
            textAlign:"center",
            '@media screen and (min-width: 601px)': {
              display:"none"
          },
          }}
        >
          
          <Typography
            sx={{
              fontSize: windowWidth < 400 ? 20 : 24,
              fontWeight: 700,
              color: "#007DFC",
              
            }}className={noto_Sans_Thai.className}
          >
            PRODUCTS & SOLUTIONS
          </Typography>
           
          <Box sx={{display:"flex",flexDirection:"column", alignItems: "center",textAlign:"center",width:"85%"}}>
          <p  style={{color:"#065B85",fontSize:"16px",fontWeight:500}} className={noto_Sans_Thai.className}>เรามุ่งมั่นที่จะนำเสนอเทคโนโลยีทางการแพทย์ที่ <span style={{color:"#007DFC",fontSize:"16px"}}>ทันสมัยและมีความน่าเชื่อถือ</span> เพื่อเสริมสร้างการดูแลสุขภาพที่มีประสิทธิภาพ</p>
          
          </Box>
        


            
            

          <Grid
            container
            spacing={2}
            sx={{
              pt:"85px",
              display: {
                xs: "flex",
                lg: "none",
                overflowY: "hidden",
                overflowX: "hidden",
               
              },
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
                  display: windowWidth < 400 ? "none" : "flex",
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
                      onClick={handleClickImageSmart} alt="SmartMedicalCabinet"
                    />
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "end",
                      mt: 2,

                      width: "100%",
                    }}
                  >
                    <Image
                      src={AutomatedDispensing}
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
                      onClick={handleClickImagePharmacy} alt="AutomatedDispensing"
                    />
                  </Box>
                </Box>
                <Grid xs={3} sx={{ pt: widthImageDispensing === 339 ? 15 : 8 }}>
                  <Box sx={{ ml: 2, height: windowWidth < 501 ? 280 : 400 }}>
                    <Image
                      src={PharmacyVendignMachine}
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
                      onClick={handleClickImageDispensing} alt="PharmacyVendignMachine"
                    />
                  </Box>
                </Grid>
              </Grid>




              
              <Grid
                xs={12}
                sx={{
                  display: windowWidth < 400 ? "flex" : "none",
                  mt: -5,
                 
                }}
              >
                
                <Box sx={{zIndex: 3 ,display:"flex",alignItems:"center",}}><svg
      xmlns="http://www.w3.org/2000/svg"
      width="36"
      height="36"
      fill="none"
      viewBox="0 0 36 36"
      onClick={handleClickPrev} 
    >
      <g filter="url(#filter0_b_2463_7962)">
        <rect
          width="36"
          height="36"
          fill="#fff"
          fillOpacity="0.9"
          rx="18"
          onMouseOver={(e) => (e.target.style.fill = "#CEE6FF")}
                    onMouseOut={(e) => (e.target.style.fill = "#fff")}
        ></rect>
        <rect
          width="35"
          height="35"
          x="0.5"
          y="0.5"
          stroke="#007DFC"
          rx="17.5"
        ></rect>
        <path
          stroke="#007DFC"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.67"
          d="M20.5 23l-5-5 5-5"
        ></path>
      </g>
      <defs>
        <filter
          id="filter0_b_2463_7962"
          width="52"
          height="52"
          x="-8"
          y="-8"
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
          <feGaussianBlur
            in="BackgroundImageFix"
            stdDeviation="4"
          ></feGaussianBlur>
          <feComposite
            in2="SourceAlpha"
            operator="in"
            result="effect1_backgroundBlur_2463_7962"
          ></feComposite>
          <feBlend
            in="SourceGraphic"
            in2="effect1_backgroundBlur_2463_7962"
            result="shape"
          ></feBlend>
        </filter>
      </defs>
    </svg></Box>

                  <Box
                    sx={{
                      display: ( imageSmallMobile2 ||  imageSmallMobile3) &&
                      ! imageSmallMobile1
                        ? "none"
                        : "flex",
                      justifyContent: "center",
                      width: "100%",
                      px:3
                    }}
                  >
                    
                    <Image
                      src={SmartMedicalCabinetfrom}
                      width={widthImageSmart}
                      height={widthImageSmart}
                      style={{
                        borderRadius: 8,
                        cursor: "pointer",
                        transition: "width 0.5s, height 0.5s",
                      }}
                      onClick={handleClickImageSmart} alt="SmartMedicalCabinet"
                    />
                  </Box>

                  <Box
                    sx={{
                      display: ( imageSmallMobile1 ||  imageSmallMobile3) &&
                      ! imageSmallMobile2
                        ? "none"
                        : "flex",
                      justifyContent: "center",
                      width: "100%",
                      px:3
                    }}
                  >
                    
                    <Image
                      src={PharmacyVendignMachine}
                      width={widthImageSmart}
                      height={widthImageSmart}
                      style={{
                        borderRadius: 8,
                        cursor: "pointer",
                        transition: "width 0.5s, height 0.5s",
                      }}
                      onClick={handleClickImageSmart}alt="PharmacyVendignMachine"
                    />
                  </Box>


                  <Box
                    sx={{
                      display: ( imageSmallMobile1 ||  imageSmallMobile2) &&
                      ! imageSmallMobile3
                        ? "none"
                        : "flex",
                      justifyContent: "center",
                      width: "100%",
                      px:3
                    }}
                  >
                    
                    <Image
                      src={AutomatedDispensing}
                      width={widthImageSmart}
                      height={widthImageSmart}
                      style={{
                        borderRadius: 8,
                        cursor: "pointer",
                        transition: "width 0.5s, height 0.5s",
                      }}
                      onClick={handleClickImageSmart} alt="AutomatedDispensing"
                    />
                  </Box>
                  
                  <Box sx={{zIndex: 3 ,display:"flex",alignItems:"center",}}><svg
      xmlns="http://www.w3.org/2000/svg"
      width="36"
      height="36"
      fill="none"
      viewBox="0 0 36 36"
      onClick={handleClickNext} 
    >
      <g filter="url(#filter0_b_2463_7963)">
        <rect
          width="36"
          height="36"
          fill="#fff"
          fillOpacity="0.9"
          rx="18"
          onMouseOver={(e) => (e.target.style.fill = "#CEE6FF")}
                    onMouseOut={(e) => (e.target.style.fill = "#fff")}
        ></rect>
        <rect
          width="35"
          height="35"
          x="0.5"
          y="0.5"
          stroke="#007DFC"
          rx="17.5"
        ></rect>
        <path
          stroke="#007DFC"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.67"
          d="M15.5 23l5-5-5-5"
        ></path>
      </g>
      <defs>
        <filter
          id="filter0_b_2463_7963"
          width="52"
          height="52"
          x="-8"
          y="-8"
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
          <feGaussianBlur
            in="BackgroundImageFix"
            stdDeviation="4"
          ></feGaussianBlur>
          <feComposite
            in2="SourceAlpha"
            operator="in"
            result="effect1_backgroundBlur_2463_7963"
          ></feComposite>
          <feBlend
            in="SourceGraphic"
            in2="effect1_backgroundBlur_2463_7963"
            result="shape"
          ></feBlend>
        </filter>
      </defs>
    </svg></Box>

              </Grid>




            </Box>









            <Grid
              xs={12}
              sx={{
                display: "flex",
                flexDirection: "column",
                mt:windowWidth < 400 ? 3.5 : 0,
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
                  width:"100%",
                  
                  
                }}
              >
                <Box sx={{ textAlign:"left",width:"100%",pl:6,pr:3}}>
                 <Typography
                  sx={{
                    fontSize: 16,
                    fontWeight: 500,
                    color: "#065B85",
                  }}className={noto_Sans_Thai.className}
                >
                  Medical Automation Machine
                </Typography>
                <Typography
                  sx={{
                    fontSize: 24,
                    fontWeight: 600,
                    color: "#007DFC",
                    alignItems:"center",
                    py:2
                  }}className={noto_Sans_Thai.className}
                >
                  
                  <CircleIcon sx={{mr:5,width:"10px"}}/>
                    Smart Medical Cabinet
                  
                </Typography>
                
                
                <Typography
                  sx={{
                    fontSize: 16,
                    fontWeight: 400,
                    color: "#555C60",
                    width:"100%",
                  }}  className={noto_Sans_Thai.className}
                >
                เรามี Medical Automation Machine บริการแบบ Custom made สำหรับลูกค้าที่ต้องการการออกแบบที่เป็นพิเศษสำหรับ ภาคธุรกิจของท่าน เพื่อให้ระบบได้
                </Typography>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "start",
                    marginTop: "auto",
                    pt:"100px",
                    pl:6
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
                      height: 50,
                      borderRadius: "8px",
                      fontSize: 20,
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
              </Box>

              <Box
                sx={{
                  display:
                    (sizeImageDispensing || sizeImageSmart) &&
                    !sizeImagePharmacy
                      ? "none"
                      : "flex",
                  flexDirection: "column",
                  width:"75%"
                }}
              >
               <Box sx={{ textAlign:"left",}}>
                 <Typography
                  sx={{
                    fontSize: 16,
                    fontWeight: 500,
                    color: "#065B85",
                  }}className={noto_Sans_Thai.className}
                >
                  Medical Automation Machine
                </Typography>
                <Typography
                  sx={{
                    fontSize: 24,
                    fontWeight: 600,
                    color: "#007DFC",
                    alignItems:"center",
                    py:2
                  }}className={noto_Sans_Thai.className}
                >
                  
                  <CircleIcon sx={{mr:5,width:"10px"}}/>
                  Pharmacy Vending Machine
                  
                </Typography>
                
                
                <Typography
                  sx={{
                    fontSize: 16,
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
                    pt:"100px"
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
                      height: 50,
                      borderRadius: "8px",
                      fontSize: 20,
                      fontWeight: 600,

                      "&:hover": {
                        bgcolor: "#0060C2",
                      },
                    }}className={noto_Sans_Thai.className}
                    onClick={() => window.open("/SectionProducts/2", "_blank")}
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
                  width:"75%"
                }}
              >
               <Box sx={{ textAlign:"left",}}>
                 <Typography
                  sx={{
                    fontSize: 16,
                    fontWeight: 500,
                    color: "#065B85",
                  }}className={noto_Sans_Thai.className}
                >
                  Custom Medical Automation Machine
                </Typography>
                <Typography
                  sx={{
                    fontSize: 24,
                    fontWeight: 600,
                    color: "#007DFC",
                    alignItems:"center",
                    py:2
                  }}className={noto_Sans_Thai.className}
                >
                  
                  <CircleIcon sx={{mr:5,width:"10px"}}/>
                  Automated Dispensing 
      System Technology
                  
                </Typography>
                
                
                <Typography
                  sx={{
                    fontSize: 16,
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
                      height: 50,
                      borderRadius: "8px",
                      fontSize: 20,
                      fontWeight: 600,

                      "&:hover": {
                        bgcolor: "#0060C2",
                      },
                    }}className={noto_Sans_Thai.className}
                    onClick={() => window.open("/SectionProducts/3", "_blank")}
                  >
                    ดูเพิ่มเติม
                  </Button>
                </Box>
              </Box>
            </Grid>



            <Box
              sx={{
                display: windowWidth > 400 ? "flex" : "none",
                justifyContent: "center",
                width: "100%",
                pt: windowWidth < 400 ? 25 : 10 ,
                pb: 5,
                mt: windowHeight < 840 ? 10 : 0,
              }}
            >
              <FiberManualRecordIcon
                sx={{
                  color: sizeImageSmart ? "#007DFC" : "#CDCDCD",
                  cursor: "pointer",mr:-0.5,width:18,height:18
                }}
                onClick={handleClickImageSmart}
              />
              <FiberManualRecordIcon
                sx={{
                  color: sizeImagePharmacy ? "#007DFC" : "#CDCDCD",
                  cursor: "pointer",mr:-0.5,width:18,height:18
                }}
                onClick={handleClickImagePharmacy}
              />
              <FiberManualRecordIcon
                sx={{
                  color: sizeImageDispensing ? "#007DFC" : "#CDCDCD",
                  cursor: "pointer",width:18,height:18
                }}
                onClick={handleClickImageDispensing}
              />
            </Box>

            <Box
              sx={{
                display: windowWidth < 400 ? "flex" : "none",
                justifyContent: "center",
                width: "100%",
                pt: windowWidth < 400 ? 25 : 20 ,
                pb: 5,
                mt: windowHeight < 840 ? 10 : 0,
              }}
            >
              <FiberManualRecordIcon
                sx={{
                  color: sizeImageSmart ? "#007DFC" : "#CDCDCD",
                  cursor: "pointer",mr:-0.5,width:20,height:20
                }}
                onClick={handleClickDotTab1}
              />
              <FiberManualRecordIcon
                sx={{
                  color: sizeImagePharmacy ? "#007DFC" : "#CDCDCD",
                  cursor: "pointer",mr:-0.5,width:20,height:20
                }}
                onClick={handleClickDotTab2}
              />
              <FiberManualRecordIcon
                sx={{
                  color: sizeImageDispensing ? "#007DFC" : "#CDCDCD",
                  cursor: "pointer",width:20,height:20
                }}
                onClick={handleClickDotTab3}
              />
            </Box>
          </Grid>
        </Box>
      </ThemeProvider>
    </>
  );
}
