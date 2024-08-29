import { AppBar, Box, Typography } from "@mui/material";
import React from "react";
import Image from "next/image";
import CardArticleRecommend from "./CardArticle/CardArticleRecommend";

export default function RecommendArticle() {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          width: "100vw",
          height: 1483,
          justifyContent: "start",
          flexDirection: "column",
          bgcolor: "#F3F6FF",
        }}
      >
        <Box sx={{ p: 10 }}>
          <Typography
            sx={{ color: "#9747FF", fontSize: 50, fontWeight: 700, pl: 15 }}
          >
            บทความที่คุณอาจสนใจ
          </Typography>
          <Box sx={{ px: 10 }}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <CardArticleRecommend />
              <CardArticleRecommend />
              <CardArticleRecommend />
            </Box>
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <CardArticleRecommend />
              <CardArticleRecommend />
              <CardArticleRecommend />
            </Box>
          </Box>
        </Box>

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
