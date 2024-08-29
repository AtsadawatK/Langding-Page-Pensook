import { Box, Grid, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

export default function Company() {
  return (
    <>
      <Box
        id="Company-section"
        sx={{
          display: "flex",

          flexDirection: "column",
          alignItems: "center",

          width: "100vw",
          height: "885px",
        }}
      >
        <Typography
          sx={{ fontSize: 50, fontWeight: 700, color: "#007DFC", mt: 8.5 }}
        >
          COMPANY EXPERTISE
        </Typography>
        <Typography
          sx={{ fontSize: 24, fontWeight: 500, color: "#915BD7", mt: 3 }}
        >
          ที่ Pensook ความเชี่ยวชาญของเราไม่ได้มาจากการทำเพียงแค่ธุรกิจ
          แต่มาจากหัวใจที่ใส่ใจในทุก ๆ รายละเอียด
          เรามุ่งมั่นที่จะให้บริการที่ดีที่สุดและทันสมัยในทุก ๆ ด้าน
        </Typography>
        <Typography sx={{ fontSize: 24, fontWeight: 500, color: "#915BD7" }}>
          ด้วยทีมงานที่มีประสบการณ์และความคิดสร้างสรรค์ เราสรรค์สร้างทุก ๆ
          โอกาสในการต่อยอดทำให้บริษัทของคุณเป็นที่รู้จักและได้รับความไว้วางใจ
        </Typography>
        <Box sx={{ position: "relative", left: -850, bottom: 50 }}>
          <Image src={require("../../../assets/shape-left.png")} />
        </Box>
        <Box sx={{ position: "absolute", right: -30, mt: 50 }}>
          <Image src={require("../../../assets/shape-right.png")} />
        </Box>

        <Grid
          container
          spacing={2}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            mt: 35,
            position: "absolute",
            px: 8,
          }}
        >
          <Grid
            item
            xs={3}
            sx={{
              display: "flex",

              alignItems: "center",
              flexDirection: "column",

              height: 528,
            }}
          >
            <Box sx={{ position: "relative" }}>
              <Image src={require("../../../assets/Vector1.png")} />

              <Box
                sx={{
                  position: "absolute",

                  zIndex: 1,
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                }}
              >
                <Image src={require("../../../assets/industrial-robot.png")} />
              </Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                mt: 1.5,
              }}
            >
              <Typography
                sx={{ fontSize: 20, fontWeight: 700, color: "#006AD5" }}
              >
                Automation
              </Typography>
              <Typography
                sx={{ fontSize: 18, fontWeight: 400, color: "#586A86", mt: 3 }}
              >
                เรามีผู้เชี่ยวชาญและมีประสบการณ์
              </Typography>
              <Typography
                sx={{ fontSize: 18, fontWeight: 400, color: "#586A86", mt: 1 }}
              >
                มากกว่า 15 ปีในการออกแบบ ผลิต
              </Typography>
              <Typography
                sx={{ fontSize: 18, fontWeight: 400, color: "#586A86", mt: 1 }}
              >
                ติดตั้งระบบอัตโนมัติ ระบบลำเลียง
              </Typography>
              <Typography
                sx={{ fontSize: 18, fontWeight: 400, color: "#586A86", mt: 1 }}
              >
                ระบบ vision inspection รวมถึง
              </Typography>
              <Typography
                sx={{ fontSize: 18, fontWeight: 400, color: "#586A86", mt: 1 }}
              >
                หุ่นยนต์และระบบ AI ต่าง ๆ อีกทั้ง
              </Typography>
              <Typography
                sx={{ fontSize: 18, fontWeight: 400, color: "#586A86", mt: 1 }}
              >
                ยังสามารถ ออกแบบระบบอัตโนมัติ
              </Typography>
              <Typography
                sx={{ fontSize: 18, fontWeight: 400, color: "#586A86", mt: 1 }}
              >
                เพื่อใช้ในกระบวนการผลิตและบริการ
              </Typography>
              <Typography
                sx={{ fontSize: 18, fontWeight: 400, color: "#586A86", mt: 1 }}
              >
                ได้ตามความต้องการของลูกค้า
              </Typography>
            </Box>
          </Grid>

          <Grid
            item
            xs={3}
            sx={{
              display: "flex",

              alignItems: "center",
              flexDirection: "column",

              height: 528,
            }}
          >
            <Box sx={{ position: "relative" }}>
              <Image src={require("../../../assets/Vector2.png")} />

              <Box
                sx={{
                  position: "absolute",

                  zIndex: 1,
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                }}
              >
                <Image src={require("../../../assets/socket.png")} />
              </Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                mt: 1.5,
              }}
            >
              <Typography
                sx={{ fontSize: 20, fontWeight: 700, color: "#006AD5" }}
              >
                Internet of Things
              </Typography>
              <Typography
                sx={{ fontSize: 18, fontWeight: 400, color: "#586A86", mt: 3 }}
              >
                เรามีทีมพัฒนาระบบ IoT Solution
              </Typography>
              <Typography
                sx={{ fontSize: 18, fontWeight: 400, color: "#586A86", mt: 1 }}
              >
                ที่จะช่วยให้การสื่อสารกับอุปกรณ์
              </Typography>
              <Typography
                sx={{ fontSize: 18, fontWeight: 400, color: "#586A86", mt: 1 }}
              >
                IoT มีความสะดวกสบาย
              </Typography>
              <Typography
                sx={{ fontSize: 18, fontWeight: 400, color: "#586A86", mt: 1 }}
              >
                และได้ประสิทธิภาพมากยิ่งขึ้น
              </Typography>
            </Box>
          </Grid>
          <Grid
            item
            xs={3}
            sx={{
              display: "flex",
              height: 528,
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <Box sx={{ position: "relative" }}>
              <Image src={require("../../../assets/Vector3.png")} />

              <Box
                sx={{
                  position: "absolute",

                  zIndex: 1,
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                }}
              >
                <Image src={require("../../../assets/coding.png")} />
              </Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                mt: 1.5,
              }}
            >
              <Typography
                sx={{ fontSize: 20, fontWeight: 700, color: "#006AD5" }}
              >
                Software
              </Typography>
              <Typography
                sx={{ fontSize: 18, fontWeight: 400, color: "#586A86", mt: 3 }}
              >
                เราสามารถพัฒนา Software สำหรับ
              </Typography>
              <Typography
                sx={{ fontSize: 18, fontWeight: 400, color: "#586A86", mt: 1 }}
              >
                Mobile Application และ
              </Typography>
              <Typography
                sx={{ fontSize: 18, fontWeight: 400, color: "#586A86", mt: 1 }}
              >
                Web Application ที่สามารถสร้าง
              </Typography>
              <Typography
                sx={{ fontSize: 18, fontWeight: 400, color: "#586A86", mt: 1 }}
              >
                Application ที่ทันสมัย
              </Typography>
              <Typography
                sx={{ fontSize: 18, fontWeight: 400, color: "#586A86", mt: 1 }}
              >
                ประสิทธิภาพสูงสำหรับภาคธุรกิจและ
              </Typography>
              <Typography
                sx={{ fontSize: 18, fontWeight: 400, color: "#586A86", mt: 1 }}
              >
                อุตสาหกรรมต่าง ๆ เพื่อเพิ่มความ
              </Typography>
              <Typography
                sx={{ fontSize: 18, fontWeight: 400, color: "#586A86", mt: 1 }}
              >
                สามารถในการแข่งขันและโอกาสในการ
              </Typography>
              <Typography
                sx={{ fontSize: 18, fontWeight: 400, color: "#586A86", mt: 1 }}
              >
                ประสบความสำเร็จในธุรกิจได้เร็วขึ้น
              </Typography>
            </Box>
          </Grid>
          <Grid
            item
            xs={3}
            sx={{
              display: "flex",

              alignItems: "center",
              flexDirection: "column",

              height: 528,
            }}
          >
            <Box sx={{ position: "relative" }}>
              <Image src={require("../../../assets/Vector4.png")} />

              <Box
                sx={{
                  position: "absolute",

                  zIndex: 1,
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                }}
              >
                <Image
                  src={require("../../../assets/artificial-intelligence.png")}
                />
              </Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                mt: 1.5,
              }}
            >
              <Typography
                sx={{ fontSize: 20, fontWeight: 700, color: "#006AD5" }}
              >
                Artificial Intelligence
              </Typography>
              <Typography
                sx={{ fontSize: 18, fontWeight: 400, color: "#586A86", mt: 3 }}
              >
                เรามีบริการพัฒนา AI
              </Typography>
              <Typography
                sx={{ fontSize: 18, fontWeight: 400, color: "#586A86", mt: 1 }}
              >
                ในอุตสาหกรรมและธุรกิจต่าง ๆ
              </Typography>
              <Typography
                sx={{ fontSize: 18, fontWeight: 400, color: "#586A86", mt: 1 }}
              >
                โดยทีมงานผู้เชี่ยวชาญในด้าน
              </Typography>
              <Typography
                sx={{ fontSize: 18, fontWeight: 400, color: "#586A86", mt: 1 }}
              >
                การบริหารจัดการข้อมูล เพื่อสร้าง
              </Typography>
              <Typography
                sx={{ fontSize: 18, fontWeight: 400, color: "#586A86", mt: 1 }}
              >
                Software Technology ใหม่ ๆ
              </Typography>
              <Typography
                sx={{ fontSize: 18, fontWeight: 400, color: "#586A86", mt: 1 }}
              >
                (ปรึกษาเราซิคะ 😊)
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
