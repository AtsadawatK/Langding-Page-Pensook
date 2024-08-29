"use client";
import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Image from "next/image";
import { createTheme } from "@mui/material/styles";
import Link from "next/link";
import { useRouter } from "next/navigation";
export default function navbar() {
  const router = useRouter();
  const [menuHome, setMenuHome] = useState(false);
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const theme = createTheme({
    typography: {
      fontFamily: "IBM Plex Sans Thai, sans-serif",
    },
  });

  useEffect(() => {
    if (router && router.asPath) {
    const currentURL = router.asPath;
    if (
      currentURL.includes("/SectionProducts/1") ||
      currentURL.includes("/SectionProducts/2") ||
      currentURL.includes("/SectionProducts/3")
    ) {
      setMenuHome(true);
    } else {
      setMenuHome(false);
    }
  }}, [router.asPath]);

  return (
    <>
      <AppBar
        position="sticky"
        sx={{
          marginTop: "auto",
          height: "80px",
          bgcolor: "#FFFFFF",
          px: "137px",
          display: "flex",
          justifyContent: "center",
          width: "100vw",
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
          <Link href="/">
            <Box sx={{ cursor: "pointer" }}>
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
              display: "flex",
            }}
          >
            <Typography
              sx={{
                fontSize: 20,
                cursor: "pointer",
                userSelect: "none",
                color: "#000000",
                pr: "35px",
                fontWeight: 600,
                "&:hover": {
                  textDecoration: "underline",
                },
                display: menuHome ? "flex" : "none",
              }}
            >
              HOME
            </Typography>
            <Typography
              sx={{
                fontSize: 20,
                cursor: "pointer",
                userSelect: "none",
                color: "#000000",
                pr: "35px",
                fontWeight: 600,
                "&:hover": {
                  textDecoration: "underline",
                },
              }}
              onClick={() => scrollToSection("HealthCare-section")}
            >
              HEALTHCARE COMMUNITIES
            </Typography>
            <Typography
              sx={{
                fontSize: 20,
                cursor: "pointer",
                userSelect: "none",
                color: "#000000",
                pr: "35px",
                fontWeight: 600,
                "&:hover": {
                  textDecoration: "underline",
                },
              }}
              onClick={() => scrollToSection("Company-section")}
            >
              COMPANY EXPERTISE
            </Typography>
            <Typography
              sx={{
                fontSize: 20,
                cursor: "pointer",
                userSelect: "none",
                color: "#000000",
                pr: "35px",
                fontWeight: 600,
                "&:hover": {
                  textDecoration: "underline",
                },
              }}
              onClick={() => scrollToSection("Product-section")}
            >
              PRODUCTS & SOLUTIONS
            </Typography>
            <Typography
              sx={{
                fontSize: 20,
                cursor: "pointer",
                userSelect: "none",
                color: "#000000",
                pr: "35px",
                fontWeight: 600,
                "&:hover": {
                  textDecoration: "underline",
                },
              }}
              onClick={() => scrollToSection("Partner-section")}
            >
              PARTNER
            </Typography>
            <Typography
              sx={{
                fontSize: 20,
                cursor: "pointer",
                userSelect: "none",
                color: "#000000",
                pr: "35px",
                fontWeight: 600,
                "&:hover": {
                  textDecoration: "underline",
                },
              }}
              onClick={() => scrollToSection("Article-section")}
            >
              ARTICLE
            </Typography>
            <Typography
              sx={{
                fontSize: 20,
                cursor: "pointer",
                userSelect: "none",
                color: "#000000",
                fontWeight: 600,
                "&:hover": {
                  textDecoration: "underline",
                },
              }}
              onClick={() => scrollToSection("Contact-section")}
            >
              CONTACT US
            </Typography>
          </Box>
        </Box>
      </AppBar>
      {/* <AppBar
        position="sticky"
        sx={{
          background: "#FFFFFF",
          display: "flex",
          justifyContent: "center",
          width: "100vw",
          height: "80px",
          fontFamily: "IBM Plex Sans Thai, sans-serif",
          px: 15,
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
          <Box
            sx={{ pt: 1, cursor: "pointer" }}
            onClick={() => scrollToSection("Hero-section")}
          >
            <Image
              src={require("../assets/LogoPensook.png")}
              width={155}
              height={29}
              alt="Picture of the author"
            />
          </Box>
          <Box sx={{ display: "flex", justifyContent: "center", pt: 1.2 }}>
            <Typography
              sx={{
                fontSize: 20,
                cursor: "pointer",
                userSelect: "none",
                color: "#000000",
                pr: 3,
                fontWeight: 600,
                "&:hover": {
                  textDecoration: "underline",
                },
              }}
              onClick={() => scrollToSection("HealthCare-section")}
            >
              HEALTHCARE COMMUNITIES
            </Typography>
            <Typography
              sx={{
                fontSize: 20,
                cursor: "pointer",
                userSelect: "none",
                color: "#000000",
                pr: 3,
                fontWeight: 600,
                "&:hover": {
                  textDecoration: "underline",
                },
              }}
              onClick={() => scrollToSection("Company-section")}
            >
              COMPANY EXPERTISE
            </Typography>
            <Typography
              sx={{
                fontSize: 20,
                cursor: "pointer",
                userSelect: "none",
                color: "#000000",
                pr: 3,
                fontWeight: 600,
                "&:hover": {
                  textDecoration: "underline",
                },
              }}
              onClick={() => scrollToSection("Product-section")}
            >
              PRODUCTS & SOLUTIONS
            </Typography>
            <Typography
              sx={{
                fontSize: 20,
                cursor: "pointer",
                userSelect: "none",
                color: "#000000",
                pr: 3,
                fontWeight: 600,
                "&:hover": {
                  textDecoration: "underline",
                },
              }}
              onClick={() => scrollToSection("Partner-section")}
            >
              PARTNER
            </Typography>
            <Typography
              sx={{
                fontSize: 20,
                cursor: "pointer",
                userSelect: "none",
                color: "#000000",
                pr: 3,
                fontWeight: 600,
                "&:hover": {
                  textDecoration: "underline",
                },
              }}
              onClick={() => scrollToSection("Article-section")}
            >
              ARTICLE
            </Typography>
            <Typography
              sx={{
                fontSize: 20,
                cursor: "pointer",
                userSelect: "none",
                color: "#000000",
                pr: 3,
                fontWeight: 600,
                "&:hover": {
                  textDecoration: "underline",
                },
              }}
              onClick={() => scrollToSection("Contact-section")}
            >
              CONTACT US
            </Typography>
          </Box>
        </Box>
      </AppBar> */}
    </>
  );
}
