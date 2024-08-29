"use client";
import Link from "next/link";
import { Box, Grid, Typography } from "@mui/material";
import React, { useState } from "react";
import Button from "@mui/material/Button";
import EastIcon from "@mui/icons-material/East";
import Image from "next/image";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import FiberManualRecordOutlinedIcon from "@mui/icons-material/FiberManualRecordOutlined";
import { Truculenta } from "next/font/google";
import { useRouter } from "next/navigation";

export default function Product() {
  const [widthImageSmart, setWidthImageSmart] = useState(453);
  const [widthImagePharmacy, setWidthImagePharmacy] = useState(339);
  const [widthImageDispensing, setWidthImageDispensing] = useState(339);
  const [sizeImageSmart, setSizeImageSmart] = useState(true);
  const [sizeImagePharmacy, setSizeImagePharmacy] = useState(false);
  const [sizeImageDispensing, setSizeImageDispensing] = useState(false);
  const router = useRouter();

  const handleClickImageSmart = () => {
    setWidthImageSmart(453);
    setWidthImagePharmacy(339);
    setWidthImageDispensing(339);
    setSizeImagePharmacy(false);
    setSizeImageDispensing(false);
    if (!sizeImageSmart) {
      setSizeImageSmart(!sizeImageSmart);
    }
  };

  const handleClickImagePharmacy = () => {
    setWidthImageSmart(339);
    setWidthImagePharmacy(453);
    setWidthImageDispensing(339);
    setSizeImageSmart(false);
    setSizeImageDispensing(false);

    if (!sizeImagePharmacy) {
      setSizeImagePharmacy(!sizeImagePharmacy);
    }
  };

  const handleClickImageDispensing = () => {
    setWidthImageSmart(339);
    setWidthImagePharmacy(339);
    setWidthImageDispensing(453);
    setSizeImageSmart(false);
    setSizeImagePharmacy(false);

    if (!sizeImageDispensing) {
      setSizeImageDispensing(!sizeImageDispensing);
    }
  };

  return (
    <>
      <Box
        id="Product-section"
        sx={{
          display: "flex",
          alignItems: "center",
          width: "100vw",
          height: 1400,
          backgroundColor: "#F4F8FB",
          flexDirection: "column",
          pt: "67px",
        }}
      >
        <Typography sx={{ fontSize: 50, fontWeight: 700, color: "#007DFC" }}>
          PRODUCTS & SOLUTIONS
        </Typography>
        <Box sx={{ display: "flex", justifyContent: "center", pt: "90px" }}>
          <Typography sx={{ fontSize: 40, fontWeight: 600, color: "#065B85" }}>
            เรามุ่งมั่นที่จะนำเสนอเทคโนโลยีทางการแพทย์ที่
          </Typography>
          <Typography sx={{ fontSize: 40, fontWeight: 600, color: "#007DFC" }}>
            ทันสมัยและมีความน่าเชื่อถือ
          </Typography>
        </Box>
        <Typography sx={{ fontSize: 40, fontWeight: 600, color: "#065B85" }}>
          เพื่อเสริมสร้างการดูแลสุขภาพที่มีประสิทธิภาพ
        </Typography>

        <Grid container spacing={2} sx={{ px: 15, pt: "130px" }}>
          <Grid
            xs={6}
            sx={{
              display: "flex",

              px: 5,
            }}
          >
            <Box
              sx={{
                display:
                  (sizeImagePharmacy || sizeImageDispensing) && !sizeImageSmart
                    ? "none"
                    : "flex",
                flexDirection: "column",
                position: "relative",
              }}
            >
              <Typography
                sx={{ fontSize: 30, fontWeight: 500, color: "#065B85" }}
              >
                Medical Automation Machine
              </Typography>
              <Typography
                sx={{
                  fontSize: 45,
                  fontWeight: 600,
                  color: "#007DFC",
                  ml: 3,
                  mt: -2,
                }}
              >
                <ul>
                  <li>Smart Medical Cabinet</li>
                </ul>
              </Typography>
              <Typography
                sx={{
                  fontSize: "30px",
                  fontWeight: 400,
                  color: "#555C60",
                  mt: -1.5,
                }}
              >
                เรามี Medical Automation Machine บริการแบบ <br />
                Custom made สำหรับลูกค้าที่ต้องการการออกแบบ
                <br />
                ที่เป็นพิเศษสำหรับ ภาคธุรกิจของท่าน เพื่อให้ระบบได้
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "start",
                  mt: "60vh",
                  position: "absolute",
                }}
              >
                <Button
                  variant="contained"
                  endIcon={
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="55"
                      height="30"
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
                    bgcolor: "#007DFC",
                    width: 221,
                    height: 72,
                    borderRadius: "8px",
                    fontSize: 30,
                    fontWeight: 600,

                    "&:hover": {
                      bgcolor: "#0060C2",
                    },
                  }}
                  onClick={() => router.push("/SectionProducts/1")}
                >
                  ดูเพิ่มเติม
                </Button>
              </Box>
            </Box>

            <Box
              sx={{
                display:
                  (sizeImageDispensing || sizeImageSmart) && !sizeImagePharmacy
                    ? "none"
                    : "flex",
                flexDirection: "column",
                position: "relative",
              }}
            >
              <Typography
                sx={{ fontSize: 30, fontWeight: 500, color: "#065B85" }}
              >
                Custom Medical Automation Machine
              </Typography>
              <Typography
                sx={{
                  fontSize: 45,
                  fontWeight: 600,
                  color: "#007DFC",
                  ml: 3,
                  mt: -2,
                }}
              >
                <ul>
                  <li>
                    Automated Dispensing <br />
                    System Technology
                  </li>
                </ul>
              </Typography>
              <Typography
                sx={{ fontSize: "30px", fontWeight: 400, color: "#555C60" }}
              >
                เรามี Medical Automation Machine บริการแบบ <br />
                Custom made สำหรับลูกค้าที่ต้องการการออกแบบ
                <br />
                ที่เป็นพิเศษสำหรับ ภาคธุรกิจของท่าน เพื่อให้ระบบได้ <br />
                ระบบ Automation system ที่มีความเฉพาะและเกิด <br />
                ประสิทธิภาพ สูงสุดต่อการใช้งานในองค์กร
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "start",
                  mt: "60vh",
                  position: "absolute",
                }}
              >
                <Button
                  variant="contained"
                  endIcon={
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="55"
                      height="30"
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
                    bgcolor: "#007DFC",
                    width: 221,
                    height: 72,
                    borderRadius: "8px",
                    fontSize: 30,
                    fontWeight: 600,

                    "&:hover": {
                      bgcolor: "#0060C2",
                    },
                  }}
                  onClick={() => router.push("/SectionProducts/2")}
                >
                  ดูเพิ่มเติม
                </Button>
              </Box>
            </Box>

            <Box
              sx={{
                display:
                  (sizeImagePharmacy || sizeImageSmart) && !sizeImageDispensing
                    ? "none"
                    : "flex",
                flexDirection: "column",
                position: "relative",
              }}
            >
              <Typography
                sx={{ fontSize: 30, fontWeight: 500, color: "#065B85" }}
              >
                Medical Automation Machine
              </Typography>
              <Typography
                sx={{
                  fontSize: 45,
                  fontWeight: 600,
                  color: "#007DFC",
                  ml: 3,
                  mt: -2,
                }}
              >
                <ul>
                  <li>Pharmacy Vending Machine</li>
                </ul>
              </Typography>
              <Typography
                sx={{ fontSize: "30px", fontWeight: 400, color: "#555C60" }}
              >
                ระบบ Automation system ที่มีความเฉพาะและเกิด <br />
                ประสิทธิภาพ สูงสุดต่อการใช้งานในองค์กร
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "start",
                  mt: "60vh",
                  position: "absolute",
                }}
              >
                <Button
                  variant="contained"
                  endIcon={
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="55"
                      height="30"
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
                    bgcolor: "#007DFC",
                    width: 221,
                    height: 72,
                    borderRadius: "8px",
                    fontSize: 30,
                    fontWeight: 600,

                    "&:hover": {
                      bgcolor: "#0060C2",
                    },
                  }}
                  onClick={() => router.push("/SectionProducts/3")}
                >
                  ดูเพิ่มเติม
                </Button>
              </Box>
            </Box>
          </Grid>

          <Grid
            xs={3}
            sx={{
              display: "flex",
              justifyContent: "end",
              alignItems: "flex-start",
              mt: -8,
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
                  src={require("../../../assets/Product1.png")}
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
                  src={require("../../../assets/Product3.png")}
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
            <Box
              sx={{
                display: "flex",
                justifyContent: "start",
                position: "absolute",
                mt: "90vh",
                mr: "22vw",
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
          <Grid xs={3} sx={{ pt: widthImageDispensing === 339 ? 15 : 5 }}>
            <Box sx={{ ml: 4, height: 900 }}>
              <Image
                src={require("../../../assets/Product2.png")}
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
    </>
  );
}
