import React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Box, Typography } from "@mui/material";
import { TextareaAutosize } from "@mui/base/TextareaAutosize";
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
              sx={{ mb: -1, fontSize: 16, fontWeight: 500, color: "#000000" }}
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
                },
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
            <Typography sx={{ mb: -1, fontSize: 16, fontWeight: 500 }}>
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
                },
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
          <Typography sx={{ mb: -1, fontSize: 16, fontWeight: 500 }}>
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
              },
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
          <Typography sx={{ mb: -1, fontSize: 16, fontWeight: 500 }}>
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
              },
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
          <Typography sx={{ mb: -1, fontSize: 16, fontWeight: 500 }}>
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
              },
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
          <Typography sx={{ mb: -1, fontSize: 16, fontWeight: 500 }}>
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
              },
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
          <Typography sx={{ mb: 1, fontSize: 16, fontWeight: 500 }}>
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
              },
            }}
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            width: "100%",
            pt: 2,
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
                borderRadius: "8px !important",
                boxShadow: [
                  "-3px 8px 20px 0px rgba(0, 125, 252, 0.9) !important",
                ],
              },
            }}
          >
            <Typography
              sx={{
                fontSize: 16,
                fontWeight: 400,
                color: "#FFFFFF",
                textTransform: "none",
              }}
            >
              submit
            </Typography>
          </Button>
        </Box>
      </form>
    </>
  );
}
