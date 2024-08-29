import { Box, Typography } from "@mui/material";
import React from "react";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import Image from "next/image";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

export default function CardArticleRecommend() {
  return (
    <>
      <Paper
        elevation={3}
        sx={{
          width: 506,
          height: 580,
          p: 2.5,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          mr: 3,
          mt: 5,
          cursor: "pointer",
          "&.MuiPaper-root": {
            border: "1px solid #E5E9EB !important",
            borderRadius: "0px !important",
            boxShadow: [
              "0px 12px 16px -4px rgba(16, 24, 40, 0.1) !important",
              "0px 4px 6px -2px rgba(16, 24, 40, 0.1) !important",
            ],
          },
        }}
      >
        <Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              ml: 0.5,
              width: 458,
              height: 240,
            }}
          >
            <Image
              src={require("../../../../assets/ExImgCard.png")}
              width={"100%"}
              height={"100%"}
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "start",
              flexDirection: "column",
              pt: 4,
            }}
          >
            <Typography
              sx={{ fontSize: 14, fontWeight: 600, color: "#6941C6" }}
            >
              นวัตกรรมด้านการแพทย์
            </Typography>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                width: 458,
                pt: 1,
              }}
            >
              <Typography
                sx={{ fontSize: 24, fontWeight: 600, color: "#007DFC" }}
              >
                UX review presentations
              </Typography>
              <ArrowOutwardIcon
                sx={{ width: 28, height: 28, color: "#007DFC", mt: 0.5 }}
              />
            </Box>
            <Typography
              sx={{
                fontSize: 16,
                fontWeight: 400,
                color: "#667085",
                mt: 1,
              }}
            >
              How do you create compelling presentations that wow your <br />
              colleagues and impress your managers?
            </Typography>
          </Box>
        </Box>

        <Box sx={{ display: "flex", justifyContent: "start" }}>
          <CalendarMonthIcon sx={{ color: "#808080", width: 24, height: 24 }} />
          <Typography
            sx={{
              fontSize: 14,
              fontWeight: 400,
              color: "#667085",
              ml: 1.5,
            }}
          >
            14 Jan 2022
          </Typography>
        </Box>
      </Paper>
    </>
  );
}
