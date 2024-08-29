import { Box, Typography } from "@mui/material";
import React from "react";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import Image from "next/image";

export default function ArticleDetail() {
  return (
    <>
      <Box
        sx={{
          position: "relative",
          width: "100vw",
          height: 1763,
          display: "flex",
          justifyContent: "start",

          flexDirection: "column",

          p: 10,
        }}
      >
        <Box sx={{ position: "absolute", left: 10, top: 350 }}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="168"
            height="310"
            fill="none"
            viewBox="0 0 168 310"
          >
            <path
              fill="#E5F8FE"
              fillOpacity="0.74"
              fillRule="evenodd"
              d="M-72.62 50.367c81.373-61.551 157.578-71.203 206.085 0 35.379 51.933 52.185 145.222 7.959 200.041-4.545 5.635-92.503 90.604-183.087 47.125-98.177-47.125-81.395-209.014-30.957-247.166z"
              clipRule="evenodd"
            ></path>
          </svg>
        </Box>
        <Box sx={{ position: "absolute", right: 0, top: 50 }}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="249"
            height="357"
            fill="none"
            viewBox="0 0 249 357"
          >
            <path
              fill="#E5F8FE"
              fillOpacity="0.74"
              fillRule="evenodd"
              d="M51.302 57.526c103.38-71.031 200.196-82.17 261.823 0 44.948 59.933 66.299 167.591 10.112 230.852-5.775 6.504-117.522 104.561-232.606 54.384-124.73-54.384-103.409-241.208-39.33-285.236z"
              clipRule="evenodd"
            ></path>
          </svg>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "start",
            alignItems: "center",
          }}
        >
          <CalendarMonthIcon sx={{ color: "#808080", width: 24, height: 24 }} />
          <Typography
            sx={{
              fontSize: 14,
              fontWeight: 400,
              color: "#667085",
              ml: 0.5,
            }}
          >
            14 Jan 2022
          </Typography>
        </Box>
        <Typography sx={{ fontSize: 50, fontWeight: 700, color: "#007DFC" }}>
          ฝึกสมาธิ ช่วยส่งเสริมคุณภาพชีวิต “ผู้ป่วยโรคหัวใจ”
        </Typography>

        <Box sx={{ overflow: "auto", width: "100%", height: "100%" ,zIndex:2}}>
          <Box sx={{ display: "flex", justifyContent: "center", mt: "47px" }}>
            <Image
              src={require("../../../assets/ExImg2.png")}
              width={594}
              height={594}
            />
          </Box>

          <Typography
            sx={{ fontSize: 30, fontWeight: 400, color: "#686868", mt: "69px" }}
          >
            จากงานวิจัยพบว่า โดยธรรมชาติแล้วผู้ป่วยโรคหัวใจมักงานหนัก ชอบแข่งขัน
            ซึ่งส่งผลให้มีความเครียดสูง อีกทั้งยังขาดการออกกำลังกาย นอนดึก
            ตื่นเช้าอยู่เป็นเวลานาน และบางครั้งโรคหัวใจมักเกิดจากการที่ผู้ป่วยมี
            อารมณ์โกรธ . ซึ่งความเครียดส่งผลให้หัวใจเต้นเร็วขึ้น
            ความดันและชีพจรเร็วขึ้น การหายใจเร็วขึ้น ตลอดจนถึงเมทาโบลิซึม
            ในร่างกายเพิ่มขึ้น ซึ่งหาก อาการเหล่านี้
            ประกอบกับการมีภาวะไขมันในเลือดสูง จะทำให้เกิดเส้นเลือดอุดตันได้ .
            การขาดการออกกำลังกายรวมถึงนอนดึกและตื่นเช้าอยู่เป็นประจำนานๆ
            จะทำให้เกิดอาการเจ็บหน้าอก โดย เฉพาะเวลาทำงานหรือเวลาออกกำลังกาย
            และมักจะเกิดตรงกลางหน้าอกเหมือนมีของหนักๆมากทับ
            รวมถึงอาจจะลามไปร้าวไปไหล่ซ้ายและมีเหงื่อแตก
            ซึ่งถ้าหากผู้ป่วยมีอาการเหล่านี้ ให้รีบ นำผู้ป่วยมาส่งที่โรง พยาบาล
            . การฝึกสมาธิทุกๆวันก่อนนอนหรือตอนเช้า วันละประมาณ 30 นาที
            จะช่วยป้องกันโรคได้ จากการลดความ เครียด การยับยั้งอารมณ์โกรธ และยัง
            ช่วยให้การนอนหลับมีคุณภาพดีมากขึ้น ซึ่งเป็นปัจจัยเสี่ยงใน การเกิด
            โรคหัวใจ อีกทั้งการฝึกสมาธิช่วยลดความดันโลหิต ช่วยให้คนเลิกสูบบุหรี่
            และช่วยลดความ เสี่ยงโรคหัวใจวาย อีกด้วย .
            แต่ถึงอย่างไรการนั่งสมาธิก็ควรทำควบคู่กับการควบคุมอาหาร
            การออกกำลังกาย การเปลี่ยนไลฟ์สไตล์อื่น ๆ และการฝึกสมาธิไม่สามารถแ
            ทรกแซง การใ ช้ยาได้ เพียงแต่การทำสมาธิอาจ สามารถช่วยลดความเสี่ยง
            ต่อการ เป็นโรคหัวใจ โดยช่วยลดผลกระทบจากความเครียดได้นั่นเอง
          </Typography>
        </Box>
      </Box>
    </>
  );
}
