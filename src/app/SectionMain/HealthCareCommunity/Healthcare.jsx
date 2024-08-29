"use client";


import { Noto_Sans_Thai } from 'next/font/google'
import { Box, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import { useRouter } from "next/navigation";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const noto_Sans_Thai = Noto_Sans_Thai({
  weights: ['400', '500' , '600' , '700'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
})



async function getDataPostQty() {
  const response = await fetch('http://203.150.243.197:4000/landingPage/getPostQty');

  if (!response.ok) {
    throw new Error('Error');
  }

  return response.json();
}





export default function Healthcare() {
  const router = useRouter();
  const [resultState , setResultState] = useState ([]);



  const initResult = async () =>{
    try{
      const result = await getDataPostQty ()
      setResultState(result)
    } catch (error){}
  }
  useEffect(()=> {
    initResult()

  },[])

console.log(resultState)
 


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

  const redirectToPensookSocial = () => {
    window.open("https://pensook.com/feed", "_blank");
   
  };

  

  return (
    <>
      <ThemeProvider theme={Responsive}>
        <Box
          id="HealthCare-section"
          sx={{ marginTop: "auto", height: { xs: "30px", lg: "70px"  ,overflowX: "hidden"} }}
        ></Box>
         <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: "100vw",
            height: "100%",
            overflowX: "hidden", 

            
          }}
        > 
           <Box sx={{display:{xs:"none",sm:"flex"},flexDirection:"column",alignItems: "center",justifyContent: "center",width:"100%"}}>
          <Typography
            sx={{
              fontSize: { xs:24,md: 30, lg: 35, xl: 45, xxl: 50 },
              fontWeight: 700,
              color: "#007DFC","&.MuiTypography-root" :{

                letterSpacing : -0.5,
              },
            }}className={noto_Sans_Thai.className}
          >
            HEALTHCARE COMMUNITIES
          </Typography>

          <Typography
            sx={{
              color: "#5D6471",
              display: "flex",
              fontSize: { xs:16,md: 18, lg: 25, xl: 30, xxl: 40 },
              fontWeight: 500,
              pt: "10px",
              "&.MuiTypography-root" :{

                letterSpacing : -0.4,
              },
            }}className={noto_Sans_Thai.className}
          >
            เข้าถึงผู้ป่วยของคุณได้มากกว่า ที่
            <Typography
              sx={{
                color: "#007DFC",
                fontSize: { xs:16,md: 18, lg: 25, xl: 30, xxl: 40 },
                fontWeight: 500,
                ml: {xs:0,md:1},"&.MuiTypography-root" :{

                  letterSpacing : -0.4,
                },
              }}className={noto_Sans_Thai.className}
            >
              Pensook Healthcare Communities
            </Typography>
          </Typography>

          <Typography
            sx={{
              color: "#5D6471",
              fontSize: { xs:16,md: 18, lg: 25, xl: 30, xxl: 40 },
              fontWeight: 500,
              mt: "8px","&.MuiTypography-root" :{

                letterSpacing : -0.4,
              },
            }}className={noto_Sans_Thai.className}
          >
            พื้นที่แบ่งปันความรู้และประสบการณ์ในการดูแลสุขภาพ
          </Typography>
            </Box> 
               <Box sx={{display:{xs:"flex",sm:"none"},flexDirection:"column",alignItems: "center",justifyContent: "center",textAlign:"center"}}>

              <Typography
            sx={{
              fontSize: { xs:24,md: 30, lg: 35, xl: 45, xxl: 50 },
              fontWeight: 700,
              color: "#007DFC",
            }}className={noto_Sans_Thai.className}
          >
            HEALTHCARE COMMUNITIES
          </Typography>

          <Typography
            sx={{
              color: "#5D6471",
              display: "flex",
              fontSize: { xs:16,md: 18, lg: 25, xl: 30, xxl: 40 },
              fontWeight: 500,
              pt: "10px",
            }}className={noto_Sans_Thai.className}
          >
            เข้าถึงผู้ป่วยของคุณได้มากกว่า ที่
            
          </Typography>
          <Typography
              sx={{
                color: "#007DFC",
                fontSize: { xs:16,md: 18, lg: 25, xl: 30, xxl: 40 },
                fontWeight: 400,
                
              }}className={noto_Sans_Thai.className}
            >
              Pensook Healthcare Communities
            </Typography>
          <Typography
            sx={{
              color: "#5D6471",
              fontSize: { xs:16,md: 18, lg: 25, xl: 30, xxl: 40 },
              fontWeight: 500,
              
            }}className={noto_Sans_Thai.className}
          >
            พื้นที่แบ่งปันความรู้และประสบการณ์ในการดูแลสุขภาพ
          </Typography>

              </Box> 
            <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              width: "85%",
              height: { xs:362,md: 410, lg: 513 },
              mt: { xs:5,md: 5, lg: "59px" },
              borderRadius: "50px",
              backgroundColor: "#F3F6FF",
              overflow: "hidden", 
            }}
          > 
             <Grid container spacing={2} sx={{width:"93%"}}>
            <Grid
                item
                xs={12}
                
                sx={{
                  display: {xs:"flex",md:"none"},
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection:"column",
                  
                  
                }}
              >
                
                  <Typography
                    sx={{
                      fontSize: {xs:30},
                      fontWeight: 700,
                      color: "#915BD7",
                      transition: "top: 1s",
                      mt:1
                    }}className={noto_Sans_Thai.className}
                  >
                    {resultState?.response?.postQty}
                  </Typography>
                  <Typography
                    sx={{
                      color: "#5D6471",
                      fontSize: {xs:24},
                      fontWeight: 500,
                      mt: { lg: -1, xxl: -3 },
                    }}className={noto_Sans_Thai.className}
                  >
                    โพสต์
                  </Typography>

                  
                  <Box sx={{ display: { xs: "flex",  } }}>
                    <Typography
                      sx={{
                        color: "#5D6471",
                        fontSize: {xs:16},
                        fontWeight: 500,
                        display: "flex",
                        mt: 3,
                      }}className={noto_Sans_Thai.className}
                    >
                      ให้การ
                      <Typography
                        sx={{
                          color: "#915BD7",
                          fontSize: {xs:16},
                          fontWeight: 500,
                        }}className={noto_Sans_Thai.className}
                      >
                        ดูแลผู้ป่วย
                      </Typography>
                      <Typography
                        sx={{
                          color: "#5D6471",
                          fontSize: {xs:16},
                          fontWeight: 500,
                        }}className={noto_Sans_Thai.className}
                      >
                        ที่เหนือกว่า
                      </Typography>
                    </Typography>
                  </Box>
               


                <Typography
                    sx={{
                      color: "#5D6471",
                      fontSize: {xs:16},
                      fontWeight: 500,
                      mt:3,
                      mb: 5,
                      textAlign:"center"
                    }}className={noto_Sans_Thai.className}
                  >
                    เข้าร่วม Pensook Healthcare Communities
                  </Typography>





                  <Button
                    variant="contained"
                    endIcon={
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="39"
                        height="22"
                        fill="none"
                        viewBox="0 0 39 22"
                      >
                        <path
                          stroke="#fff"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="3"
                          d="M2 11h30M22 2l14 9-14 9"
                        ></path>
                      </svg>
                    }
                    sx={{
                      bgcolor: "#915BD7",
                      width: 153,
                      height: 50,
                      borderRadius: "8px",
                      fontSize: 40,
                      fontWeight: 500,

                      "&:hover": {
                        bgcolor: "#6D23CC",
                      },
                    }}
                    onClick={redirectToPensookSocial}
                    
                  >
                    <Typography
                      sx={{
                        color: "#FFFFFF",
                        fontSize: 20,
                        fontWeight: 500,
                        pr: 1.5,
                      }}className={noto_Sans_Thai.className}
                    >
                      เข้าร่วม
                    </Typography>
                  </Button>
              </Grid>







              <Grid
                item
                lg={6}
                sx={{
                  display: {xs:"none",lg:"flex"},
                  justifyContent:  "center" ,
                  alignItems: "center",
                  pl: 5,
                 
                  mt:-3.5 
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "column",
                    mt: { md: 5, lg: -5 },
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: { md: 40, lg: 60, xl: 80, xxl: 100 },
                      fontWeight: 700,
                      color: "#915BD7",
                      transition: "top: 1s",
                      
                    }}
                    className={noto_Sans_Thai.className}
                  >
                    {resultState?.response?.postQty}
                  </Typography>
                  <Typography
                    sx={{
                      color: "#5D6471",
                      fontSize: { md: 25, lg: 40 },
                      fontWeight: 500,
                      mt: { lg: -1, xxl: -3 },"&.MuiTypography-root" :{

                        letterSpacing : -1,
                      },
                    }}className={noto_Sans_Thai.className}
                  >
                    โพสต์
                  </Typography>
                  <Box sx={{ display: { md: "none", lg: "flex" } }}>
                    <Typography
                      sx={{
                        color: "#5D6471",
                        fontSize: { md: 25, lg: 40 },
                        fontWeight: 500,
                        display: "flex",
                        mt: "47px","&.MuiTypography-root" :{

                          letterSpacing : -1,
                        },
                      }}className={noto_Sans_Thai.className}
                    >
                      ให้การ
                      <Typography
                        sx={{
                          color: "#915BD7",
                          fontSize: { md: 25, lg: 40 },
                          fontWeight: 500,"&.MuiTypography-root" :{

                            letterSpacing : -1,
                          },
                        }}className={noto_Sans_Thai.className}
                      >
                        ดูแลผู้ป่วย
                      </Typography>
                      <Typography
                        sx={{
                          color: "#5D6471",
                          fontSize: { md: 25, lg: 40 },
                          fontWeight: 500,"&.MuiTypography-root" :{

                            letterSpacing : -1,
                          },
                        }}className={noto_Sans_Thai.className}
                      >
                        ที่เหนือกว่า
                      </Typography>
                    </Typography>
                  </Box>
                </Box>
              </Grid>
                     
                 
                        
              <Grid
                item
                lg={6}
                sx={{
                  display: {xs:"none",lg:"flex"},
                  justifyContent:  "center" ,
                  alignItems: "center",
                 pr:10,
                  mt:-3.5 
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "column",
                    textAlign:"center"
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: 40 ,
                      fontWeight: 400,
                      color: "#5D6471",
                      transition: "top: 1s",
                      mb:"43px"
                      
                    }}
                    className={noto_Sans_Thai.className}
                  >
                    เข้าร่วม Pensook Healthcare  <br />Communities 
                  </Typography>
                  <Button
                    variant="contained"
                    endIcon={
                      <svg
      xmlns="http://www.w3.org/2000/svg"
      width="66"
      height="41"
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
                      bgcolor: "#915BD7",
                      width: 324,
                      height: 100,
                      borderRadius: "8px",
                      fontSize: 40,
                      fontWeight: 500,

                      "&:hover": {
                        bgcolor: "#6D23CC",
                      },
                    }}
                    onClick={redirectToPensookSocial}
                    
                  >
                    <Typography
                      sx={{
                        color: "#FFFFFF",
                        fontSize: 40,
                        fontWeight: 500,
                        pr: 1.5,
                      }}className={noto_Sans_Thai.className}
                    >
                      เข้าร่วม
                    </Typography>
                  </Button>
                  
                </Box>
              </Grid>
                     
                      
                     
              <Grid
                item
                xs={12}
                sx={{
                  display: { xs:"none",md: "flex", lg: "none" },
                  justifyContent: "center",
                  flexDirection:"column",
                  
                  alignItems:"center"
                  
                }}
              > <Box sx={{width:500,display:"flex",justifyContent:"center",flexDirection:"column",}}>  
               <Box sx={{width:"100%",display:"flex",justifyContent:"center",px:1.5,pb:7}}>                         
                          <Box sx={{width:"50%",display:"flex",justifyContent:"start",}}>
                            
                            <Box sx={{display:"flex",justifyContent:"center",flexDirection:"column",alignItems:"center"}}>

                            <Typography
                    sx={{
                      color: "#915BD7",
                      fontSize: 40,
                      fontWeight: 600,
                    }}className={noto_Sans_Thai.className}
                  >
                    105
                  </Typography>


                  <Typography
                    sx={{
                      color: "#5D6471",
                      fontSize: 24,
                      fontWeight: 500,
                    }}className={noto_Sans_Thai.className}
                  >
                    โพสต์
                  </Typography>


                            </Box>
                            
                            
                            
                            
                            </Box>  
                          <Box sx={{width:"100%",display:"flex",justifyContent:"end",alignItems:"end"}}>
                            <Typography
                    sx={{
                      color: "#5D6471",
                      fontSize: 24,
                      fontWeight: 500,display:"flex",
                    }}className={noto_Sans_Thai.className}
                  >
                    ให้การ <Typography
                    sx={{
                      color: "#9747FF",
                      fontSize: 24,
                      fontWeight: 500,
                    }}className={noto_Sans_Thai.className}
                  >
                    ดูแลผู้ป่วย
                  </Typography>ที่เหนือกว่า
                  </Typography>
                  
                  </Box>                                      
                          </Box>
                          <Box sx={{width:"100%",display:"flex",justifyContent:"center",flexDirection:"column",alignItems:"center"}}>
                  <Typography
                    sx={{
                      color: "#5D6471",
                      fontSize: 24,
                      fontWeight: 500,pb:10
                    }}className={noto_Sans_Thai.className}
                  >
                    เข้าร่วม Pensook Healthcare Communities
                  </Typography>

                  <Button
                    variant="contained"
                    endIcon={
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="39"
                        height="22"
                        fill="none"
                        viewBox="0 0 39 22"
                      >
                        <path
                          stroke="#fff"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="3"
                          d="M2 11h30M22 2l14 9-14 9"
                        ></path>
                      </svg>
                    }
                    sx={{
                      bgcolor: "#915BD7",
                      width: 169,
                      height: 60,
                      borderRadius: "8px",
                      fontSize: 40,
                      fontWeight: 500,

                      "&:hover": {
                        bgcolor: "#6D23CC",
                      },
                    }}
                    onClick={redirectToPensookSocial}
                    
                  >
                    <Typography
                      sx={{
                        color: "#FFFFFF",
                        fontSize: 24,
                        fontWeight: 500,
                        pr: 1.5,
                      }}className={noto_Sans_Thai.className}
                    >
                      เข้าร่วม
                    </Typography>
                  </Button>
                  </Box>
                  </Box>
                  

              
              </Grid>

             



            </Grid> 
          </Box>  
         </Box> 
      </ThemeProvider>
    </>
  );
}
