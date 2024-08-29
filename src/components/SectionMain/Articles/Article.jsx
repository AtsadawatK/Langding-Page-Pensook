import { Box, Typography } from "@mui/material";
import React from "react";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import Image from "next/image";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import CardArticle from "./components/CardArticle";

export default function Article() {
  return (
    <>
      <Box
        id="Article-section"
        sx={{
          display: "flex",
          alignItems: "center",
          width: "100vw",
          height: 1694,
          pt: 10,
          flexDirection: "column",
        }}
      >
        <Typography sx={{ fontSize: 50, fontWeight: 700, color: "#007DFC" }}>
          บทความที่น่าสนใจ
        </Typography>
        <Typography sx={{ fontSize: 40, fontWeight: 600, color: "#915BD7" }}>
          บทความเกี่ยวกับนวัตกรรมในด้านการแพทย์ และการดูแลสุขภาพ
        </Typography>
        <Box
          sx={{
            display: "flex",
            position: "relative",
            justifyContent: "space-between",
          }}
        >
          <CardArticle />
          <CardArticle />
          <CardArticle />

          <Box sx={{ position: "absolute", zIndex: -1, right: -150, top: 380 }}>
            <Image src={require("../../../assets/Vector_Articles.png")} />
          </Box>
          <Box sx={{ position: "absolute", zIndex: -1, top: 900, left: -150 }}>
            <Image src={require("../../../assets/Vector_Articles.png")} />
          </Box>
        </Box>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <CardArticle />
          <CardArticle />
          <CardArticle />
        </Box>
        <Button
          variant="contained"
          endIcon={<ArrowDownwardIcon sx={{ color: "#6941C6" }} />}
          sx={{
            width: 168,
            height: 56,
            bgcolor: "#F9F5FF",
            mt: 7,
            "&:hover": {
              bgcolor: "#F2EAFF",
            },
            "&.MuiButton-root": {
              boxShadow: "none !important",
              borderRadius: "8px !important",
            },
          }}
        >
          <Typography sx={{ fontSize: 18, fontWeight: 500, color: "#6941C6" }}>
            แสดงเพิ่มเติม
          </Typography>
        </Button>
      </Box>
    </>
  );
}
