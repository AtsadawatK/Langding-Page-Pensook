import React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import NextLink from "next/link";
import Image from "next/image";
import ParticleAnimation from "./ParticleAnimation";

export default function Hero() {
  return (
    <>
      <Box
        id="Hero-section"
        sx={{
          position: "relative",
          overflow: "hidden",
          width: "100vw",
          height: 827,
        }}
      >
        <Image
          src={require("../../../assets/HeroImageBackground.png")}
          layout="fill"
          alt="BackgroundHero"
        
        />

        <Box
          sx={{
            position: "absolute",
            backgroundColor: "rgba(0, 125, 252, 0.26)",
            zIndex: 1,
            width: "100%",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box sx={{ width: "100%", height: "100%" }}>
            <ParticleAnimation />
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",

                zIndex: 2,
                top: 0,
                width: "100%",
                height: "100%",
              }}
            >
              <Typography
                sx={{
                  fontSize: 70,
                  fontWeight: 700,
                  color: "#FFFFFF",
                  opacity: 1,
                  pb:3.5
                }}
              >
                MAKE THE WORLD A BETTER PLACE
              </Typography>
              <Typography
                sx={{
                  fontSize: 40,
                  fontWeight: 500,
                  color: "#FFFFFF",
                  opacity: 1,
                }}
              >
                “ เมื่อเรามีจุดมุ่งหมายที่ร่วมกัน
              </Typography>
              <Typography
                sx={{
                  fontSize: 40,
                  fontWeight: 500,
                  color: "#FFFFFF",
                  opacity: 1,
                }}
              >
                เราสามารถเปลี่ยนแปลงโลกใบนี้ให้เป็นสถานที่ที่สวยงามยิ่งขึ้นทั้งสำหรับ
              </Typography>
              <Typography
                sx={{
                  fontSize: 40,
                  fontWeight: 500,
                  color: "#FFFFFF",
                  opacity: 1,
                }}
              >
                เราและลูกหลานของเรา ”
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}
