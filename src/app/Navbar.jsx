"use client";
import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Popper from "@mui/material/Popper";
import Button from "@mui/material/Button";
import Fade from "@mui/material/Fade";
import Paper from "@mui/material/Paper";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import { IBM_Plex_Sans_Thai } from "next/font/google";



const iBM_Plex_Sans_Thai = IBM_Plex_Sans_Thai({
  weight: ['400', '500' , '600' , '700'],
  subsets: ["latin"],
  display: "swap",
});
export default function navbar() {
  const router = useRouter();
  const [menuHome, setMenuHome] = useState();
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const menuItems = [
    "HEALTHCARE COMMUNITIES",
    "COMPANY EXPERTISE",
    "PRODUCTS & SOLUTIONS",
    "PARTNER",
    "ARTICLE",
    "CONTACT US",
  ];

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
        xl: 1670,
        xxl: 1840,
      },
    },
    typography: {
      fontFamily: "Kanit, sans-serif",
    },
  });

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  
  return (
    <>
      <ThemeProvider theme={Responsive}>
        <AppBar
          sx={{
            height: "80px",
            bgcolor: "#FFFFFF",
            px: { xs:"0px",lg: "50px", xl: "80px", xxl: "137px" },
            pl: { md: "0px" },
            display: "flex",
            justifyContent: "center",
            position: "fixed",
          }}
        >
          <Box
            sx={{
              display: {xs:"none",lg:"flex"},
              width: "120%",
              height: "100%",
              alignItems: "center",
            }}
          >
            <Link href="/SectionMain">
              <Box sx={{ cursor: "pointer",pr:{xs:0,lg:windowWidth < 1450 ? "50px" : "200px",xl:"307px"} ,display:{ md: "none", lg: "flex",}}}>
                <Image
                  src={require("../assets/LogoPensook.png")}
                  width={155}
                  height={29}
                  alt="Picture of the author"
                />
              </Box>
            </Link>


            <Box
              sx={{
                display: { xs: "none", lg: "flex",},
                
              }}
            >
              
              <Typography
                sx={{
                  fontSize: {
                    lg: windowWidth < 1350 && windowWidth > 1200 ? 15 : 16,
                    xl: 18,
                    xxl: 20,
                  },
                  cursor: "pointer",
                  userSelect: "none",
                  color: "#000000",
                  pr: "35px",
               
                  fontWeight: 600,
                  "&:hover": {
                    textDecoration: "underline",
                  },
                }}className={iBM_Plex_Sans_Thai.className}
                onClick={() => scrollToSection("HealthCare-section")}
              >
                HEALTHCARE COMMUNITIES
              </Typography>
              <Typography
                sx={{
                  fontSize: {
                    lg: windowWidth < 1350 && windowWidth > 1200 ? 15 : 16,
                    xl: 18,
                    xxl: 20,
                  },
                  cursor: "pointer",
                  userSelect: "none",
                  color: "#000000",
                  pr: "35px",
                  fontWeight: 600,
                  "&:hover": {
                    textDecoration: "underline",
                  },
                }}className={iBM_Plex_Sans_Thai.className}
                onClick={() => scrollToSection("Company-section")}
              >
                COMPANY EXPERTISE
              </Typography>
              <Typography
                sx={{
                  fontSize: {
                    lg: windowWidth < 1350 && windowWidth > 1200 ? 15 : 16,
                    xl: 18,
                    xxl: 20,
                  },
                  cursor: "pointer",
                  userSelect: "none",
                  color: "#000000",
                  pr: "35px",
                  fontWeight: 600,
                  "&:hover": {
                    textDecoration: "underline",
                  },
                }}className={iBM_Plex_Sans_Thai.className}
                onClick={() => scrollToSection("Product-section")}
              >
                PRODUCTS & SOLUTIONS
              </Typography>
              <Typography
                sx={{
                  fontSize: {
                    lg: windowWidth < 1350 && windowWidth > 1200 ? 15 : 16,
                    xl: 18,
                    xxl: 20,
                  },
                  cursor: "pointer",
                  userSelect: "none",
                  color: "#000000",
                  pr: "35px",
                  fontWeight: 600,
                  "&:hover": {
                    textDecoration: "underline",
                  },
                }}className={iBM_Plex_Sans_Thai.className}
                onClick={() => scrollToSection("Partner-section")}
              >
                PARTNER
              </Typography>
              <Typography
                sx={{
                  fontSize: {
                    lg: windowWidth < 1350 && windowWidth > 1200 ? 15 : 16,
                    xl: 18,
                    xxl: 20,
                  },
                  cursor: "pointer",
                  userSelect: "none",
                  color: "#000000",
                  pr: "35px",
                  fontWeight: 600,
                  "&:hover": {
                    textDecoration: "underline",
                  },
                }}className={iBM_Plex_Sans_Thai.className}
                onClick={() => scrollToSection("Article-section")}
              >
                ARTICLE
              </Typography>
              <Typography
                sx={{
                  fontSize: {
                    lg: windowWidth < 1350 && windowWidth > 1200 ? 15 : 16,
                    xl: 18,
                    xxl: 20,
                  },
                  cursor: "pointer",
                  userSelect: "none",
                  color: "#000000",
                  fontWeight: 600,
                  "&:hover": {
                    textDecoration: "underline",
                  },
                }}className={iBM_Plex_Sans_Thai.className}
                onClick={() => scrollToSection("Contact-section")}
              >
                CONTACT US
              </Typography>
            </Box>
          </Box>










          <Box
            sx={{
              display: {xs:"flex",lg:"none"},
              justifyContent: "space-between",
              width: "100%",
              height: "100%",
              alignItems: "center",zIndex:10,
              pl:{xs:"34px",sm:8,md:6}
            }}
          >
            <Link href="/SectionMain">
              <Box sx={{ cursor: "pointer"}}>
                <Image
                  src={require("../assets/LogoPensook.png")}
                  width={115}
                  height={21}
                  alt="Picture of the author"
                />
              </Box>
            </Link>
            <Box
              sx={{
                display: { xs: "flex", lg: "none" },
                justifyContent: "end",
                mr:{xs:2,sm:6,md:6}
              }}
            >
             
                <Button
                  id="basic-button"
                  aria-controls={open ? "basic-menu" : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? "true" : undefined}
                  onClick={handleClick}
                  
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path fill="url(#pattern0)" d="M0 0H24V24H0z"></path>
                    <defs>
                      <pattern
                        id="pattern0"
                        width="1"
                        height="1"
                        patternContentUnits="objectBoundingBox"
                      >
                        <use
                          transform="scale(.00195)"
                          xlinkHref="#image0_2442_7151"
                        ></use>
                      </pattern>
                      <image
                        id="image0_2442_7151"
                        width="512"
                        height="512"
                        xlinkHref="data:image/png;base64,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"
                      ></image>
                    </defs>
                  </svg>
                </Button>
                <Menu
                  sx={{
                    mt: 3,
                    "& .MuiPopover-paper": {
                      borderRadius: "8px",
                      width: "273px",
                      height: {sm:"240px"},
                    },
                  }}
                  id="basic-menu"
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                  MenuListProps={{
                    "aria-labelledby": "basic-button",
                  }}
                >
                  {menuItems.map((menu, index) => (
                    <MenuItem
                      key={index}
                      onClick={handleClose}
                      sx={{
                        px: "30px",
                        py: {xs:"2px",sm:"8.2px"},
                        fontSize: 14,
                        fontWeight: 400,
                        color: "#222222",
                      }}
                    >
                      
                      {menu}
                    </MenuItem>
                  ))}
                </Menu>
             
            </Box>
          </Box>




        </AppBar>
      </ThemeProvider>
    </>
  );
}
