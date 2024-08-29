"use client";

import { AppBar, Box, Button, Grid, Typography } from "@mui/material";
import React from "react";
import LocationOnRoundedIcon from "@mui/icons-material/LocationOnRounded";
import { IoLocationSharp } from "react-icons/io5";
import { FaFacebook } from "react-icons/fa";
import { FaLine } from "react-icons/fa";
import Image from "next/image";
import ContactForm from "./ContactForm";
import { useRouter } from "next/navigation";
export default function Contact() {

   const router = useRouter();

   const redirectToPensookFacebook = () => {
     window.location.href = "https://www.facebook.com/pensookcare"; 
   };

   const redirectToPensookLine = () => {
     window.location.href = "https://line.me/R/ti/p/@217rhsxg"; 
   };

  return (
    <>
      <Box
        id="Contact-section"
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "100vw",
          height: 1100,
          background: "linear-gradient(to bottom, #FFFFFF, #B6DAFF)",
        }}
      >
        <Typography
          sx={{ fontSize: 50, fontWeight: 700, color: "#007DFC", mt: 5 }}
        >
          CONTACT US
        </Typography>
        <Box sx={{ position: "relative" }}>
          <Box sx={{ position: "absolute", zIndex: 1, right: 590, top: -50 }}>
            <Image src={require("../../../assets/shape_contactTop.png")} />
          </Box>
        </Box>

        <Box sx={{ position: "relative" }}>
          <Box sx={{ position: "absolute", zIndex: 1, left: 650, top: 400 }}>
            <Image src={require("../../../assets/shape_contactBottom.png")} />
          </Box>
        </Box>

        <Grid
          container
          spacing={2}
          sx={{
            display: "flex",
            p: 10,

            alignItems: "center",
          }}
        >
          <Grid
            xs={6}
            sx={{
              display: "flex",
              justifyContent: "center",
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
                sx={{ fontSize: 35, fontWeight: 400, color: "#915BD7" }}
              >
                บริษัท เป็นสุข เฮลท์แคร์ เทคโนโลยี จำกัด
              </Typography>
              <Typography
                sx={{ fontSize: 35, fontWeight: 400, color: "#5D6169" }}
              >
                PENSOOK HEALTH CARE <br />
                TECHNOLOGY CO., LTD.
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
                  }}
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
                  pt: "145px",
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
                    }}
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
                    }}
                  >
                    Line PENSOOK
                  </Typography>
                </Button>
              </Box>
            </Box>
          </Grid>

          <Grid
            xs={6}
            sx={{
              display: "flex",
              justifyContent: "start",
              zIndex: 2,
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                p: 5,

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
          </Grid>
        </Grid>
        <AppBar
          position="static"
          sx={{
            marginTop: "auto",
            height: "80px",
            bgcolor: "#FFFFFF",
            px: 15,
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
              src={require("../../../assets/LogoPensook_Bottom.png")}
              width={172}
              height={43}
              alt="Picture of the author"
            />
            <Box
              sx={{
                display: "flex",
              }}
            >
              <Typography
                sx={{ color: "#222222", fontSize: 16, fontWeight: 400 }}
              >
                ชีวิตดี ๆ เริ่มต้นที่
              </Typography>
              <Typography
                sx={{
                  color: "#007DFC",
                  ml: 0.5,
                  fontSize: 16,
                  fontWeight: 400,
                }}
              >
                เป็นสุข
              </Typography>
            </Box>
          </Box>
        </AppBar>
      </Box>
    </>
  );
}
