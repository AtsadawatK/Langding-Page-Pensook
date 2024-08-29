"use client";

import { AppBar, Box, Button, Grid, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import LocationOnRoundedIcon from "@mui/icons-material/LocationOnRounded";
import { IoLocationSharp } from "react-icons/io5";
import { FaFacebook } from "react-icons/fa";
import { FaLine } from "react-icons/fa";
import Image from "next/image";
import ContactForm from "./ContactForm";
import { useRouter } from "next/navigation";
import LogoPensookBottom from "../../../assets/LogoPensook_Bottom.png"
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Noto_Sans_Thai } from 'next/font/google'


const noto_Sans_Thai = Noto_Sans_Thai({
  weights: ['400', '500' , '600' , '700'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
})
export default function Contact() {

   const router = useRouter();
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
      
    });
   const redirectToPensookFacebook = () => {
     window.open("https://www.facebook.com/pensookcare", "_blank");
   };

   const redirectToPensookLine = () => {
     window.open("https://line.me/R/ti/p/@217rhsxg", "_blank");
   };

  return (
    <>
    <Box id="Contact-section" sx={{marginTop:"auto" ,height:"15px",'@media screen and (max-width: 820px)': {
              display:"none"
          }, }}></Box>
    <ThemeProvider theme={Responsive}>
      <Box
        
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "100vw",
          height: "100%",
          background: "linear-gradient(to bottom, #FFFFFF, #B6DAFF)",
          overflow:"hidden",
          '@media screen and (max-width: 820px)': {
            display:"none"
        },
        }}
      >
        <Typography
          sx={{ fontSize: {md:30,lg:40,xl:50}, fontWeight: 700, color: "#007DFC", mt: 5 }}className={noto_Sans_Thai.className}
        >
          CONTACT US
        </Typography>
        <Box sx={{ position: "relative" }}>
          <Box sx={{ position: "absolute", zIndex: 1, right: 590, top: -50 }}>
            <Image src={require("../../../assets/shape_contactTop.png")} alt="shape"/>
          </Box>
        </Box>

        <Box sx={{ position: "relative" }}>
          <Box sx={{ position: "absolute", zIndex: 1, left: 650, top: 400 }}>
            <Image src={require("../../../assets/shape_contactBottom.png")} alt="shape"/>
          </Box>
        </Box>

        <Grid
          container
          spacing={2}
          sx={{
            display: "flex",
           py:10,
            justifyContent:"center",
            alignItems: "center",
            
            width:"1420px"
          }}
        >
          <Grid
            xs={12}
            xl={6}
            sx={{
              display: {xs:"none",xl:"flex"},
              justifyContent: "start",
              zIndex: 2,
             
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "start",
                flexDirection: "column",
              }}
            >
              <Typography
                sx={{ fontSize: {xs:18,md:24,lg:30,xl:35}, fontWeight: 400, color: "#915BD7" }}className={noto_Sans_Thai.className}
              >
                บริษัท เป็นสุข เฮลท์แคร์ เทคโนโลยี จำกัด
              </Typography>
              <Typography
                sx={{ fontSize: {xs:18,md:24,lg:30,xl:35}, fontWeight: 400, color: "#5D6169" }}className={noto_Sans_Thai.className}
              >
                PENSOOK HEALTH CARE <br />
                TECHNOLOGY CO., LTD.
              </Typography>
              <Box
                sx={{ display: "flex", justifyContent: "start", pt: "50px" }}
              >
                <Box
                  sx={{
                    width: 40,
                    height: 40,
                    borderRadius: 50,
                    bgcolor: "#007DFC",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <IoLocationSharp
                    style={{ width: "29px", height: "29px", color: "#FFFFFF" }}
                  />
                </Box>
                <Typography
                  sx={{
                    fontSize: {xs:16,md:20,lg:25},
                    fontWeight: 400,
                    color: "#3D3F43",
                    ml: 2,
                  }}className={noto_Sans_Thai.className}
                >
                  95/1 หมู่ที่ 3 ตำบลคลองจิก อำเภอบางปะอิน <br />
                  จังหวัดพระนครศรีอยุธยา 13160 
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  width: "100%",
                  pt: "137px",
                }}
              >
                <Button
                  variant="contained"
                  startIcon={
                    <FaFacebook
                      style={{
                        width: "36px",
                        height: "36px",
                        color: "#007DFC",
                       
                      }}
                    />
                  }
                  sx={{
                    display: "flex",
                    justifyContent: "start",
                    bgcolor: "#FFFFFF",
                    width: 230,
                    height: 65,
                    
                    "&.MuiButton-root": {
                      borderRadius: "8px !important",
                      boxShadow: [
                        "-3px 8px 20px  rgba(0,0,0, 0.25) !important",
                      ],
                      paddingLeft: "20px !important"
                    },
                    "&: hover": {
                      bgcolor: "#CEE6FF",
                      "&.MuiButton-root": {
                        boxShadow: [
                          "-3px 8px 20px 0px rgba(0, 125, 252, 0.9) !important",
                        ],
                      },
                    },
                  }}
                  onClick={redirectToPensookFacebook}
                >
                  <Typography
                    sx={{
                      fontSize: 16,
                      fontWeight: 400,
                      color: "#007DFC",
                      textTransform: "none",
                    }}className={noto_Sans_Thai.className}
                  >
                    Facebook PENSOOK 
                  </Typography>
                </Button>
                <Button
                  variant="contained"
                  startIcon={
                    <FaLine
                      style={{
                        width: "36px",
                        height: "36px",
                        color: "#06C755",
                      }}
                    />
                  }
                  sx={{
                    display: "flex",
                    justifyContent: "start",
                    bgcolor: "#FFFFFF",
                    width: 230,
                    height: 65,
                    "&.MuiButton-root": {
                      borderRadius: "8px !important",
                      boxShadow: [
                        "-3px 8px 20px  rgba(0,0,0, 0.25) !important",
                      ],
                      paddingLeft: "20px !important"
                    },
                    "&: hover": {
                      bgcolor: "#CEE6FF",
                      "&.MuiButton-root": {
                        boxShadow: [
                          "-3px 8px 20px 0px rgba(0, 125, 252, 0.9) !important",
                        ],
                      },
                    },
                  }}
                  onClick={redirectToPensookLine}
                >
                  <Typography
                    sx={{
                      fontSize: 16,
                      fontWeight: 400,
                      color: "#007DFC",
                      textTransform: "none",
                    }}className={noto_Sans_Thai.className}
                  >
                    Line PENSOOK
                  </Typography>
                </Button>
              </Box>
            </Box>
          </Grid>

          <Grid
            xs={12}
            sx={{
              display: {xs:"none",lg:"flex",xl:"none"},
              justifyContent: "center",
              zIndex: 2,
              flexDirection: "column",
              alignItems:"center"
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "start",
                flexDirection: "column",
                width:"50%",
                
              }}
            >
              <Typography
                sx={{ fontSize: 35, fontWeight: 400, color: "#915BD7" }}className={noto_Sans_Thai.className}
              >
                บริษัท เป็นสุข เฮลท์แคร์ เทคโนโลยี จำกัด
              </Typography>
              <Typography
                sx={{ fontSize: 35, fontWeight: 400, color: "#5D6169" ,width:"100%"}}className={noto_Sans_Thai.className}
              >
                PENSOOK HEALTH CARE TECHNOLOGY CO., LTD.
              </Typography>
              <Box
                sx={{ display: "flex", justifyContent: "start", pt: "50px" }}
              >
                <Box
                  sx={{
                    width: 40,
                    height: 40,
                    borderRadius: 50,
                    bgcolor: "#007DFC",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <IoLocationSharp
                    style={{ width: "29px", height: "29px", color: "#FFFFFF" }}
                  />
                </Box>
                <Typography
                  sx={{
                    fontSize: 25,
                    fontWeight: 400,
                    color: "#3D3F43",
                    ml: 2,
                  }}className={noto_Sans_Thai.className}
                >
                  95/1 หมู่ที่ 3 ตำบลคลองจิก อำเภอบางปะอิน <br />
                  จังหวัดพระนครศรีอยุธยา 13160 
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  width: "100%",
                  pt: "100px",
                  px:10
                }}
              >
                <Button
                  variant="contained"
                  startIcon={
                    <FaFacebook
                      style={{
                        width: "36px",
                        height: "36px",
                        color: "#007DFC",
                       
                      }}
                    />
                  }
                  sx={{
                    display: "flex",
                    justifyContent: "start",
                    bgcolor: "#FFFFFF",
                    width: 230,
                    height: 65,
                    
                    "&.MuiButton-root": {
                      borderRadius: "8px !important",
                      boxShadow: [
                        "-3px 8px 20px  rgba(0,0,0, 0.25) !important",
                      ],
                      paddingLeft: "20px !important"
                    },
                    "&: hover": {
                      bgcolor: "#CEE6FF",
                      "&.MuiButton-root": {
                        boxShadow: [
                          "-3px 8px 20px 0px rgba(0, 125, 252, 0.9) !important",
                        ],
                      },
                    },
                  }}
                  onClick={redirectToPensookFacebook}
                >
                  <Typography
                    sx={{
                      fontSize: 16,
                      fontWeight: 400,
                      color: "#007DFC",
                      textTransform: "none",
                    }}className={noto_Sans_Thai.className}
                  >
                    Facebook PENSOOK 
                  </Typography>
                </Button>
                <Button
                  variant="contained"
                  startIcon={
                    <FaLine
                      style={{
                        width: "36px",
                        height: "36px",
                        color: "#06C755",
                      }}
                    />
                  }
                  sx={{
                    display: "flex",
                    justifyContent: "start",
                    bgcolor: "#FFFFFF",
                    width: 230,
                    height: 65,
                    "&.MuiButton-root": {
                      borderRadius: "8px !important",
                      boxShadow: [
                        "-3px 8px 20px  rgba(0,0,0, 0.25) !important",
                      ],
                      paddingLeft: "20px !important"
                    },
                    "&: hover": {
                      bgcolor: "#CEE6FF",
                      "&.MuiButton-root": {
                        boxShadow: [
                          "-3px 8px 20px 0px rgba(0, 125, 252, 0.9) !important",
                        ],
                      },
                    },
                  }}
                  onClick={redirectToPensookLine}
                >
                  <Typography
                    sx={{
                      fontSize: 16,
                      fontWeight: 400,
                      color: "#007DFC",
                      textTransform: "none",
                    }}className={noto_Sans_Thai.className}
                  >
                    Line PENSOOK
                  </Typography>
                </Button>
              </Box>
            </Box>
          </Grid>



          <Grid
            md={12}
            xl={6}
            sx={{
              display: {xs:"none",md:"flex",lg:"none"},
              justifyContent: "center",
              zIndex: 2,
              flexDirection: "column",
              alignItems:"center",
              px:15
            }}
          >
            <Box
              sx={{
                display: {xs:"none",md:"flex",xl:"none"},
                justifyContent: "start",
                flexDirection: "column",
           
    
                
              }}
            >
              <Typography
                sx={{ fontSize: 30, fontWeight: 400, color: "#915BD7" }}className={noto_Sans_Thai.className}
              >
                บริษัท เป็นสุข เฮลท์แคร์ เทคโนโลยี จำกัด
              </Typography>
              <Typography
                sx={{ fontSize: 30, fontWeight: 400, color: "#5D6169" }}className={noto_Sans_Thai.className}
              >
                PENSOOK HEALTH CARE TECHNOLOGY CO., LTD.
              </Typography>
              <Box
                sx={{ display: "flex", justifyContent: "start", pt: "70px" }}className={noto_Sans_Thai.className}
              >
                <Box
                  sx={{
                    width:26,
                    height: 26,
                    borderRadius: 50,
                    bgcolor: "#007DFC",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <IoLocationSharp
                    style={{ width: "21px", height: "21px", color: "#FFFFFF" }}
                  />
                </Box>
                <Typography
                  sx={{
                    fontSize: 18,
                    fontWeight: 400,
                    color: "#3D3F43",
                    ml: 2,
                  }}className={noto_Sans_Thai.className}
                >
                  95/1 หมู่ที่ 3 ตำบลคลองจิก อำเภอบางปะอิน จังหวัดพระนครศรีอยุธยา 13160
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  width: "100%",
                  pt: {md:"80px",xl:"145px"},
                  px:10,
                  pb:{md:"75px",xl:0}
                }}
              >
                <Button
                  variant="contained"
                  startIcon={
                    <FaFacebook
                      style={{
                        width: "36px",
                        height: "36px",
                        color: "#007DFC",
                      }}
                    />
                  }
                  sx={{
                    display: "flex",
                    justifyContent: "start",
                    bgcolor: "#FFFFFF",
                    width: 230,
                    height: 65,
                    "&.MuiButton-root": {
                      borderRadius: "8px !important",
                      boxShadow: [
                        "-3px 8px 20px  rgba(0,0,0, 0.25) !important",
                      ],
                    },
                    "&: hover": {
                      bgcolor: "#CEE6FF",
                      "&.MuiButton-root": {
                        boxShadow: [
                          "-3px 8px 20px 0px rgba(0, 125, 252, 0.9) !important",
                        ],
                      },
                    },
                  }}
                  onClick={redirectToPensookFacebook}
                >
                  <Typography
                    sx={{
                      fontSize: 16,
                      fontWeight: 400,
                      color: "#007DFC",
                      textTransform: "none",
                    }}className={noto_Sans_Thai.className}
                  >
                    Facebook PENSOOK
                  </Typography>
                </Button>
                <Button
                  variant="contained"
                  startIcon={
                    <FaLine
                      style={{
                        width: "36px",
                        height: "36px",
                        color: "#06C755",
                      }}
                    />
                  }
                  sx={{
                    display: "flex",
                    justifyContent: "start",
                    bgcolor: "#FFFFFF",
                    width: 230,
                    height: 65,
                    "&.MuiButton-root": {
                      borderRadius: "8px !important",
                      boxShadow: [
                        "-3px 8px 20px  rgba(0,0,0, 0.25) !important",
                      ],
                    },
                    "&: hover": {
                      bgcolor: "#CEE6FF",
                      "&.MuiButton-root": {
                        boxShadow: [
                          "-3px 8px 20px 0px rgba(0, 125, 252, 0.9) !important",
                        ],
                      },
                    },
                  }}
                  onClick={redirectToPensookLine}
                >
                  <Typography
                    sx={{
                      fontSize: 16,
                      fontWeight: 400,
                      color: "#007DFC",
                      textTransform: "none",
                    }}className={noto_Sans_Thai.className}
                  >
                    Line PENSOOK
                  </Typography>
                </Button>
              </Box>
            </Box>
          </Grid>



           <Grid   
            md={12}
            xl={6}
            sx={{
              display: {xs:"none",md:"flex",xl:"none"},
              justifyContent: "center",
              pt:"75px",
              alignItems:"center",
              
            }}>

              <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                pl:5,
                pr:5,
                pt:3,
                pb:5,
                width:"50%",
                backgroundColor: "rgba(248, 248, 248, 0.5)",
                borderRadius: 4,
                position: "relative",
                boxShadow: "0px 1px 10px  rgba(0, 0, 0, 0.5)",
                border: "1px solid white",
                zIndex:5,
              }}
            >
              <ContactForm
                sx={{
                  position: "absolute",
                  zIndex: 1,
                }}
              />
            </Box>
            </Grid> 

            <Grid   
            md={12}
            xl={6}
            sx={{
              display: {xs:"none",xl:"flex"},
              justifyContent: "center",
              pt:"75px",
              alignItems:"center",
              
            }}>

              <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                pl:5,
                pr:5,
                pt:3,
                pb:5,
                width:"100%",
                backgroundColor: "rgba(248, 248, 248, 0.5)",
                borderRadius: 4,
                position: "relative",
                boxShadow: "0px 1px 10px  rgba(0, 0, 0, 0.5)",
                border: "1px solid white",
                zIndex:5,
              }}
            >
              <ContactForm
                sx={{
                  position: "absolute",
                  zIndex: 1,
                }}
              />
            </Box>
            </Grid> 

{/* 
          <Grid   
            md={12}
            xl={6}
            sx={{
              display: {xs:"none",md:"flex",lg:"none"},
              justifyContent: "center",
              
              alignItems:"center",
              
            }}>

              <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                p: 5,
                maxWidth: 700,
                backgroundColor: "rgba(248, 248, 248, 0.5)",
                borderRadius: 4,
                position: "relative",
                boxShadow: "0px 3px 10px  rgba(0, 0, 0, 0.5)",
                border: "1px solid white",
                zIndex:5,
              }}
            >
              <ContactForm
                sx={{
                  position: "absolute",
                  zIndex: 1,
                }}
              />
            </Box>
            </Grid> */}
          




        



          {/* <Grid
            xs={12}
            sx={{
              display: {xs:"flex",md:"none"},
              justifyContent: "center",
              zIndex: 2,
              flexDirection: "column",
              alignItems:"center"
            }}
          >
            <Box
              sx={{
                display: {xs:"flex",xl:"none"},
                justifyContent: "start",
                flexDirection: "column",
              }}
            >
              <Typography
                sx={{ fontSize: 35, fontWeight: 400, color: "#915BD7" }}className={noto_Sans_Thai.className}
              >
                บริษัท เป็นสุข เฮลท์แคร์ เทคโนโลยี จำกัด
              </Typography>
              <Typography
                sx={{ fontSize: 35, fontWeight: 400, color: "#5D6169" }}className={noto_Sans_Thai.className}
              >
                PENSOOK HEALTH CARE TECHNOLOGY CO., LTD.
              </Typography>
              <Box
                sx={{ display: "flex", justifyContent: "start", pt: "70px" }}
              >
                <Box
                  sx={{
                    width: 40,
                    height: 40,
                    borderRadius: 50,
                    bgcolor: "#007DFC",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <IoLocationSharp
                    style={{ width: "29px", height: "29px", color: "#FFFFFF" }}
                  />
                </Box>
                <Typography
                  sx={{
                    fontSize: 25,
                    fontWeight: 400,
                    color: "#3D3F43",
                    ml: 2,
                  }}className={noto_Sans_Thai.className}
                >
                  95/1 หมู่ที่ 3 ตำบลคลองจิก อำเภอบางปะอิน จังหวัดพระนครศรีอยุธยา 13160
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  width: "100%",
                  pt: {md:"80px",xl:"145px"},
                  px:17,
                  pb:{md:"75px",xl:0}
                }}
              >
                <Button
                  variant="contained"
                  startIcon={
                    <FaFacebook
                      style={{
                        width: "36px",
                        height: "36px",
                        color: "#007DFC",
                      }}
                    />
                  }
                  sx={{
                    display: "flex",
                    justifyContent: "start",
                    bgcolor: "#FFFFFF",
                    width: 230,
                    height: 65,
                    "&.MuiButton-root": {
                      borderRadius: "8px !important",
                      boxShadow: [
                        "-3px 8px 20px  rgba(0,0,0, 0.25) !important",
                      ],
                    },
                    "&: hover": {
                      bgcolor: "#CEE6FF",
                      "&.MuiButton-root": {
                        boxShadow: [
                          "-3px 8px 20px 0px rgba(0, 125, 252, 0.9) !important",
                        ],
                      },
                    },
                  }}
                  onClick={redirectToPensookFacebook}
                >
                  <Typography
                    sx={{
                      fontSize: 16,
                      fontWeight: 400,
                      color: "#007DFC",
                      textTransform: "none",
                    }}className={noto_Sans_Thai.className}
                  >
                    Facebook PENSOOK
                  </Typography>
                </Button>
                <Button
                  variant="contained"
                  startIcon={
                    <FaLine
                      style={{
                        width: "36px",
                        height: "36px",
                        color: "#06C755",
                      }}
                    />
                  }
                  sx={{
                    display: "flex",
                    justifyContent: "start",
                    bgcolor: "#FFFFFF",
                    width: 230,
                    height: 65,
                    "&.MuiButton-root": {
                      borderRadius: "8px !important",
                      boxShadow: [
                        "-3px 8px 20px  rgba(0,0,0, 0.25) !important",
                      ],
                    },
                    "&: hover": {
                      bgcolor: "#CEE6FF",
                      "&.MuiButton-root": {
                        boxShadow: [
                          "-3px 8px 20px 0px rgba(0, 125, 252, 0.9) !important",
                        ],
                      },
                    },
                  }}
                  onClick={redirectToPensookLine}
                >
                  <Typography
                    sx={{
                      fontSize: 16,
                      fontWeight: 400,
                      color: "#007DFC",
                      textTransform: "none",
                    }}className={noto_Sans_Thai.className}
                  >
                    Line PENSOOK
                  </Typography>
                </Button>
              </Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                p: 5,
                maxWidth: 700,
                backgroundColor: "rgba(248, 248, 248, 0.5)",
                borderRadius: 4,
                position: "relative",
                boxShadow: "0px 8px 10px  rgba(0, 0, 0, 0.5)",
                border: "1px solid white",
                
                
              }}
            >
              <ContactForm
                sx={{
                  position: "absolute",
                  zIndex: 1,
                  
                }}
              />
            </Box>
          </Grid>  */}


        </Grid>
        <AppBar
          position="static"
          sx={{
            marginTop: "auto",
            height: "80px",
            bgcolor: "#FFFFFF",
            px: 6,
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
            <Image
              src={LogoPensookBottom}
              width={172}
              height={43}
              alt="LogoPensook"
            />
            <Box
              sx={{
                display: "flex",
                pr:1
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
      </Box>
      </ThemeProvider>
    </>
  );
}