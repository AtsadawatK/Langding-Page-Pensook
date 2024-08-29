import React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Box, Typography } from "@mui/material";
import { TextareaAutosize } from "@mui/base/TextareaAutosize";
import { Noto_Sans_Thai } from 'next/font/google'



const noto_Sans_Thai = Noto_Sans_Thai({
  weights: ['400', '500' , '600' , '700'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
})

export default function ContactForm() {
  return (
    <>
      <form>
        <Box sx={{ display: "flex", justifyContent: "start" }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "start",
              flexDirection: "column",
              mr: 4,
            }}
          >
            <Typography
              sx={{ mb: -1, fontSize: 16, fontWeight: 500, color: "#000000" }}className={noto_Sans_Thai.className}
            >
              First name (ชื่อจริง)
            </Typography>
            <TextField
              fullWidth
              margin="normal"
              sx={{
                width: 290,

                "& .MuiInputBase-root": {
                  color: "#000000 !important",
                  backgroundColor: "#FFFFFF",
                  borderRadius:"8px"
                },
                "& .MuiOutlinedInput-notchedOutline" :{
                  border: "none !important"
                }
              }}
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "start",
              flexDirection: "column",
            }}
          >
            <Typography sx={{ mb: -1, fontSize: 16, fontWeight: 500 }}className={noto_Sans_Thai.className}>
              Last name (นามสกุล)
            </Typography>
            <TextField
              variant="outlined"
              fullWidth
              margin="normal"
              sx={{
                width: 290,
                "& .MuiInputBase-root": {
                  color: "#000000 !important",
                  backgroundColor: "#FFFFFF",
                  borderRadius:"8px"
                },
                "& .MuiOutlinedInput-notchedOutline" :{
                  border: "none !important"
                }
              }}
            />
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "start",
            flexDirection: "column",
            mt: 1,
          }}
        >
          <Typography sx={{ mb: -1, fontSize: 16, fontWeight: 500 }}className={noto_Sans_Thai.className}>
            Email (อีเมลติดต่อ)
          </Typography>
          <TextField
            type="password"
            variant="outlined"
            fullWidth
            margin="normal"
            sx={{
              width: 612,
              "& .MuiInputBase-root": {
                color: "#000000 !important",
                backgroundColor: "#FFFFFF",
                borderRadius:"8px"
              },
              "& .MuiOutlinedInput-notchedOutline" :{
                border: "none !important"
              }
            }}
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "start",
            flexDirection: "column",
            mt: 1,
          }}
        >
          <Typography sx={{ mb: -1, fontSize: 16, fontWeight: 500 }}className={noto_Sans_Thai.className}>
            Company (จากบริษัท)
          </Typography>
          <TextField
            type="password"
            variant="outlined"
            fullWidth
            margin="normal"
            sx={{
              width: 612,
              "& .MuiInputBase-root": {
                color: "#000000 !important",
                backgroundColor: "#FFFFFF",
                borderRadius:"8px"
              },
              "& .MuiOutlinedInput-notchedOutline" :{
                border: "none !important"
              }
            }}
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "start",
            flexDirection: "column",
            mt: 1,
          }}
        >
          <Typography sx={{ mb: -1, fontSize: 16, fontWeight: 500 }}className={noto_Sans_Thai.className}>
            Telephone (เบอร์โทรติดต่อ)
          </Typography>
          <TextField
            type="password"
            variant="outlined"
            fullWidth
            margin="normal"
            sx={{
              width: 612,
              "& .MuiInputBase-root": {
                color: "#000000 !important",
                backgroundColor: "#FFFFFF",
                borderRadius:"8px"
              },
              "& .MuiOutlinedInput-notchedOutline" :{
                border: "none !important"
              }
            }}
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "start",
            flexDirection: "column",
            mt: 1,
          }}
        >
          <Typography sx={{ mb: -1, fontSize: 16, fontWeight: 500 }}className={noto_Sans_Thai.className}>
            Subject (เรื่อง)
          </Typography>
          <TextField
            type="password"
            fullWidth
            margin="normal"
            sx={{
              width: 612,
              "& .MuiInputBase-root": {
                color: "#000000 !important",
                backgroundColor: "#FFFFFF",
                borderRadius:"8px"
              },
              "& .MuiOutlinedInput-notchedOutline" :{
                border: "none !important"
              }
            }}
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "start",
            flexDirection: "column",
            mt: 1,
          }}
        >
          <Typography sx={{ mb: 1, fontSize: 16, fontWeight: 500 }}className={noto_Sans_Thai.className}>
            Message (ข้อความ)
          </Typography>
          <TextField
            fullWidth
            multiline
            id="contactStatus"
            name="contactStatus"
            rows={4}
            inputProps={{
              style: { fontWeight: 500 },
            }}
            sx={{
              mt: "5px",
              width: "100%",
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderRadius: `8px`,
                  fontWeight: "500",
                },
              },
              "& .MuiInputBase-root": {
                color: "#000000 !important",
                backgroundColor: "#FFFFFF",
                borderRadius:"8px"
              },
              "& .MuiOutlinedInput-notchedOutline" :{
                border: "none !important"
              }
            }}
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            width: "100%",
            pt: "31px",
          }}
        >
          <Button
            type="submit"
            variant="contained"
            sx={{
              width: 261,
              height: 50,
              bgcolor: "#007DFC",
              "&:hover": {
                color: "#0060C2",
              },
              "&.MuiButton-root": {
                borderRadius: "8px",
                boxShadow: [
                  "-3px 8px 20px 0px rgba(0, 125, 252, 0.9) !important",
                ],
              },
            }}
          >
            <Typography
              sx={{
                fontSize: 16,
                fontWeight: 300,
                color: "#FFFFFF",
                textTransform: "none",
              }}className={noto_Sans_Thai.className}
            >
              Submit
            </Typography>
          </Button>
        </Box>
      </form>
    </>
  );
}
