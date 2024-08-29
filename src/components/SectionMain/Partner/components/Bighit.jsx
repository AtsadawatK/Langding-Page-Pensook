import { Box, Typography } from '@mui/material';
import React from 'react'

export default function Bighit() {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "start",
          flexDirection: "column",
        }}
      >
        <Typography
          sx={{
            fontSize: 50,
            fontWeight: 600,
            color: "#178A1C",
            borderBottom: "5px solid #178A1C",
            mb: 1,
            width: 550,
          }}
        >
          Big Hit Entertainment
        </Typography>
        <Typography
          sx={{
            fontSize: 30,
            fontWeight: 400,
            color: "#606875",
            mt: 2,
          }}
        >
          เพราะการแก้ไขปัญหาให้คุณ คือธุรกิจของเรา เราเป็นผู้นำในด้าน
          <Typography
            sx={{
              fontSize: 30,
              fontWeight: 400,
              color: "#606875",
              mt: 1,
            }}
          >
            การให้บริการ พัฒนาซอฟต์แวร์ แอปพลิเคชัน และโซลูชันด้านไอที
          </Typography>
          <Typography
            sx={{
              fontSize: 30,
              fontWeight: 400,
              color: "#606875",
              mt: 1,
            }}
          >
            แบบครบวงจร (Full-stack) ตั้งแต่การให้คำปรึกษาไปจนถึงการ
          </Typography>
          <Typography
            sx={{
              fontSize: 30,
              fontWeight: 400,
              color: "#606875",
              mt: 1,
            }}
          >
            Maintenance ระบบ เรามีความตั้งใจที่จะเปลี่ยนให้ นวัตกรรม
          </Typography>
          <Typography
            sx={{
              fontSize: 30,
              fontWeight: 400,
              color: "#606875",
              mt: 1,
            }}
          >
            และไอเดีย ระดับโลกของคุณให้กลายเป็นซอฟต์แวร์ที่มีคุณภาพ
          </Typography>
          <Typography
            sx={{
              fontSize: 30,
              fontWeight: 400,
              color: "#606875",
              mt: 1,
            }}
          >
            บริษัทฯ รับพัฒนาซอฟต์แวร์ เขียนโปรแกรม และ แอปพลิเคชัน
          </Typography>
          <Typography
            sx={{
              fontSize: 30,
              fontWeight: 400,
              color: "#606875",
              mt: 1,
            }}
          >
            ตามความต้องการทางธุรกิจคุณได้ ทุกรูปแบบ ทุกประเภท
          </Typography>
          <Typography
            sx={{
              fontSize: 30,
              fontWeight: 400,
              color: "#606875",
              mt: 1,
            }}
          >
            ทุกความต้องการทางธุรกิจ
          </Typography>
        </Typography>
      </Box>
    </>
  );
}
