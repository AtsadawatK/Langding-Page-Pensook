"use client";

import { Box, Typography } from "@mui/material";
import React from "react";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import EastIcon from "@mui/icons-material/East";
import { FaArrowRightLong } from "react-icons/fa6";
import { useRouter } from "next/navigation";

export default function Healthcare() {
  const router = useRouter();

  const redirectToPensookSocial = () => {
    window.location.href = "https://romyen.pensook.com/feed"; 
  };
  return (
    <>
      <Box
        id="HealthCare-section"
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "100vw",
          height: "calc(100vh )",
          pt: "87px",
        }}
      >
        <Typography sx={{ fontSize: 50, fontWeight: 700, color: "#007DFC" }}>
          HEALTHCARE COMMUNITIES
        </Typography>

        <Typography
          sx={{
            color: "#5D6471",
            display: "flex",
            fontSize: 40,
            fontWeight: 500,
            pt: "10px",
          }}
        >
          เข้าถึงผู้ป่วยของคุณได้มากกว่า ที่
          <Typography
            sx={{
              color: "#007DFC",
              fontSize: 40,
              fontWeight: 500,
              ml: 1,
            }}
          >
            Pensook Healthcare Communities
          </Typography>
        </Typography>

        <Typography
          sx={{ color: "#5D6471", fontSize: 40, fontWeight: 500, mt: "15px" }}
        >
          พื้นที่แบ่งปันความรู้และประสบการณ์ในการดูแลสุขภาพ
        </Typography>

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            width: "1646px",
            height: "513px",
            mt: 10,
            borderRadius: "50px",
            backgroundColor: "#F3F6FF",
          }}
        >
          <Grid container spacing={2}>
            <Grid
              item
              xs={6}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                pl: 5,
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                  mt: -5,
                }}
              >
                <Typography
                  sx={{
                    fontSize: 100,
                    fontWeight: 600,
                    color: "#915BD7",
                  }}
                >
                  125
                </Typography>
                <Typography
                  sx={{
                    color: "#5D6471",
                    fontSize: 40,
                    fontWeight: 500,
                    mt: -3,
                  }}
                >
                  โพสต์
                </Typography>

                <Typography
                  sx={{
                    color: "#5D6471",
                    fontSize: 40,
                    fontWeight: 500,
                    display: "flex",
                    mt: 5,
                  }}
                >
                  ให้การ
                  <Typography
                    sx={{ color: "#915BD7", fontSize: 40, fontWeight: 500 }}
                  >
                    ดูแลผู้ป่วย
                  </Typography>
                  <Typography
                    sx={{ color: "#5D6471", fontSize: 40, fontWeight: 500 }}
                  >
                    ที่เหนือกว่า
                  </Typography>
                </Typography>
              </Box>
            </Grid>
            <Grid
              item
              xs={6}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                pr: 7,
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                }}
              >
                <Typography
                  sx={{ color: "#5D6471", fontSize: 40, fontWeight: 500 }}
                >
                  เข้าร่วม Pensook Healthcare
                </Typography>
                <Typography
                  sx={{
                    color: "#5D6471",
                    fontSize: 40,
                    fontWeight: 500,
                    mt: 0.5,
                  }}
                >
                  Communities
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
                    mt: 7,
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
                    }}
                  >
                    เข้าร่วม
                  </Typography>
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
}
