import { Box, Typography } from "@mui/material";
import React from "react";
import Image from "next/image";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import HeroImageBackground from "../../../../../assets/HeroImageBackground.png"
import AutomatedDispensing from "../../../../../assets/AutomatedDispensing.png"


export default function SlideImageProduct1() {
  return (
   <>
      <Box
        sx={{
          position: "relative",
          width: "100vw",
          height: 794,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Image
          src={HeroImageBackground}
          layout="fill"
          alt="BackgroundHero"
          objectFit="cover"
        />
        <Box
          sx={{
            position: "absolute",
            backgroundColor: "rgba(0, 125, 252, 0.36)",
            zIndex: 1,
            width: "100%",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }} 
        ></Box>
        <Box
          sx={{
            position: "absolute",
            maxWidth: 1646,
            maxHeight: 569,
            bgcolor: "#F4F8FB",
            borderRadius: "30px",
            zIndex: 2,
            width: "100%",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              width: "100%",
            }}
          >
            <Box sx={{ ml: 8, cursor: "pointer" }}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="36"
                height="36"
                fill="none"
                viewBox="0 0 36 36"
              >
                <g filter="url(#filter0_b_2828_2121)">
                  <rect
                    width="36"
                    height="36"
                    fill="#fff"
                    fillOpacity="0.9"
                    rx="18"
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
                    id="filter0_b_2828_2121"
                    width="52"
                    height="52"
                    x="-8"
                    y="-8"
                    colorInterpolationFilters="sRGB"
                    filterUnits="userSpaceOnUse"
                  >
                    <feFlood
                      floodOpacity="0"
                      result="BackgroundImageFix"
                    ></feFlood>
                    <feGaussianBlur
                      in="BackgroundImageFix"
                      stdDeviation="4"
                    ></feGaussianBlur>
                    <feComposite
                      in2="SourceAlpha"
                      operator="in"
                      result="effect1_backgroundBlur_2828_2121"
                    ></feComposite>
                    <feBlend
                      in="SourceGraphic"
                      in2="effect1_backgroundBlur_2828_2121"
                      result="shape"
                    ></feBlend>
                  </filter>
                </defs>
              </svg>
            </Box>
            <Box>
              <Image
                src={AutomatedDispensing}
                width={373}
                height={497}
              />
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "start",
                ml: 20,
                width: "30vw",
                flexDirection: "column",
              }}
            >
              <Typography
                sx={{ fontSize: 30, fontWeight: 500, color: "#6F6F6F" }}
              >
                Medical Automation Machine
              </Typography>
              <Typography
                sx={{ fontSize: 45, fontWeight: 600, color: "#915BD7" }}
              >
                Automated Dispensing System Technology
              </Typography>
            </Box>
            <Box sx={{ mr: 8, cursor: "pointer" }}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="36"
                height="36"
                fill="none"
                viewBox="0 0 36 36"
              >
                <g filter="url(#filter0_b_2828_2118)">
                  <rect
                    width="36"
                    height="36"
                    fill="#fff"
                    fillOpacity="0.9"
                    rx="18"
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
                    id="filter0_b_2828_2118"
                    width="52"
                    height="52"
                    x="-8"
                    y="-8"
                    colorInterpolationFilters="sRGB"
                    filterUnits="userSpaceOnUse"
                  >
                    <feFlood
                      floodOpacity="0"
                      result="BackgroundImageFix"
                    ></feFlood>
                    <feGaussianBlur
                      in="BackgroundImageFix"
                      stdDeviation="4"
                    ></feGaussianBlur>
                    <feComposite
                      in2="SourceAlpha"
                      operator="in"
                      result="effect1_backgroundBlur_2828_2118"
                    ></feComposite>
                    <feBlend
                      in="SourceGraphic"
                      in2="effect1_backgroundBlur_2828_2118"
                      result="shape"
                    ></feBlend>
                  </filter>
                </defs>
              </svg>
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "start",
            position: "absolute",
            mt: "75vh",
            zIndex: 5,
          }}
        >
          <FiberManualRecordIcon
            sx={{
              color: "#CDCDCD",
              cursor: "pointer",
            }}
          />
          <FiberManualRecordIcon
            sx={{
              color: "#CDCDCD",
              cursor: "pointer",
            }}
          />
          <FiberManualRecordIcon
            sx={{
              color: "#CDCDCD",
              cursor: "pointer",
            }}
          />
        </Box>
      </Box>
    </>
  );
}
