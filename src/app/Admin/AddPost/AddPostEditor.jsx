"use client"

import { Box, Button, Typography ,ThemeProvider,createTheme,FormControl,

  MenuItem,} from "@mui/material";
import React, { forwardRef, useEffect, useRef, useState } from "react";
import { CreateEditor } from './RichTextEditor/src/CreateEditor'
import "./RichTextEditor/src/styles.css"
import Select, { SelectChangeEvent } from '@mui/material/Select';
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useRouter } from 'next/navigation';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Image from "next/image";
import checkIcon from "../../../assets/check_icon.png"
import { Noto_Sans_Thai } from "next/font/google";

const noto_Sans_Thai = Noto_Sans_Thai({
  weight: ['400', '500' , '600' , '700'],
  subsets: ["latin"],
  display: "swap",
});



async function getPostsData() {
  const response = await fetch('http://203.150.243.197:4000/landingPage/getArticleList');

  if (!response.ok) {
    throw new Error('Error');
  }

  return response.json();
}



export default function AddPostEditor() {
  const [content, setContent] = useState("");
  const [resultState, setResultState] = useState("");
  const [label, setLabel] = useState("");
  const [Type, setType] = useState("นวัตกรรมด้านการแพทย์");
  const router = useRouter();
  const [dialogToggle, setDialogToggle] = useState(false);
  const [error, setError] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);


  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);


  const initResult = async () => {
    try {
      const result = await getPostsData();
      setResultState(result);
    } catch (error) {}
  };

  useEffect(() => {
    initResult();
  }, []);

 
  const handleValidation = () => {
    if (label.trim() === '') {
      setError(true);
    } else {
      setError(false);
      // ดำเนินการอื่นๆ ที่ต้องการในที่นี้ เช่น การส่งข้อมูล
    }
  };


  const handleChange = (event) => {
    setType(event.target.value);
  };
 /*  async function onSubmit(event) {
    event.preventDefault()
 
    const formData = new FormData(event.target)
    const response = await fetch('http://203.150.243.197:4000/landingPage/createArticlet', {
      method: 'POST',
      body: formData,
    })
 
    // Handle response if necessary
    const data = await response.json()
    // ...
  } */
 
  const handleSubmit = async () => {

    const data = {
      position: 1,
      label: label,
      content: content,
      articleType: Type,
    };
  
    fetch('http://203.150.243.197:4000/landingPage/createArticle', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })

   
    

    .then(response => {
      if (response.ok) {
        console.log('Create Artice Success');
        setDialogToggle(true);
        setTimeout(() => {
          setDialogToggle(false);
          router.push('/Admin');
        }, 2000); 
      } else {
        console.error('Failed to Create Article');
      }
    })
    .catch(error => {
      console.error('An error occurred:', error);
    });

    const updatedDataArray = resultState.response.result.map((post, index) => ({
      articleId: post._id,
      position: post.position + 1 
    }));

   
  const res = await fetch(`http://203.150.243.197:4000/landingPage/updateArticlePosition?articleList=${JSON.stringify(updatedDataArray)}`, {
    method: 'PATCH',
});

   
  };

    
   
   
    const theme = createTheme({
      components: {
        MuiMenuItem: {
          styleOverrides: {
            root: {
              "&.Mui-selected": {
                backgroundColor: "#C5C5C5",
                color: "#007DFC",
              },
              color: "#007DFC",
              "&:hover": {
                backgroundColor: "#D5EAFF",
              },
              height: "30px",
              width:"225px",
              fontFamily: ["Roboto", "Noto Sans Thai", "sans-serif"].join(","),
              
            },
          },
        },
        MuiPaper: {
          styleOverrides: {
            root: {
              borderRadius: "8px",
              boxShadow: "none",
              border: "2px solid #007DFC",
              marginTop: 5,
              
            },
          },
        },
        MuiList: {
          styleOverrides: {
            root: {
              paddingTop: 0,
              paddingBottom: 0,
            },
          },
        },
      },
      Select: {
        fontFamily: ["Roboto", "Noto Sans Thai", "sans-serif"].join(","),
      },
    });
  
  return (
    <>

    
    
<Dialog
          open={dialogToggle}
          sx={{
            "& .MuiPaper-root": {
              borderRadius: "8px",
              width: "100%",
              maxWidth: { xs: "270px", md: "428px" },
              height: "100%",
              maxHeight: { xs: 136, md: 224 },
            },
          }}
        >
          <DialogContent
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              py: { xs: 4, md: 5 },
              px: 8,
            }}
          >
            
              <Image src={checkIcon} width={63} height={63} alt="checkIcon"/>
           
            <DialogContentText
              id="alert-dialog-description"
              align="center"
              sx={{
                fontSize: { xs: 13, md: 24 },
                color: "#000",
                mt: { xs: "10px", md: "25px" },
              }}
            >
              บันทึกข้อมูลสำเร็จ
            </DialogContentText>
          </DialogContent>
        </Dialog>


      <Box sx={{width:"100vw" , height:"100%" , pt:windowWidth < 1250 ? "34px" : "134px",bgcolor:"#FFFFFF",display:"flex" , justifyContent:"center",positione:"relative",}}>
      
        <CreateEditor content={content}
              setContent={setContent}  label={label}
              setLabel={setLabel} />
              
          <Box sx={{position:"absolute",display:"flex",justifyContent:"end",mt:"170px",width:windowWidth < 400 ? "95%" : windowWidth < 530 ? "90%" : "80%",pr:0}}>


            <Box sx={{display:"flex",}}> 

          <Box sx={{mr:15}}> 
          <ThemeProvider theme={theme}>
            <FormControl sx={{  minWidth: 120 }}>
              
            <Select
      value={Type}
      onChange={handleChange}
      displayEmpty
      inputProps={{ "aria-label": "Without label" }}
      IconComponent={KeyboardArrowDownIcon}
      sx={{
        height: 50,
        width: windowWidth < 1250 ? "213px" : "225px",
        color: "#007DFC",
        backgroundColor: "#fff",
        fontWeight: 600,
        fontSize: 16,
        position: "absolute",
        "& .MuiOutlinedInput-notchedOutline": {
          borderColor: "#007DFC",
          border: "1px solid",
        },
        "&:hover .MuiOutlinedInput-notchedOutline": {
          borderColor: "#007DFC",
        },
        "& .MuiSvgIcon-root": {
          color: "#007DFC",
        },
        borderRadius: "8px",
      }}className={noto_Sans_Thai.className}
    >
      <MenuItem value="นวัตกรรมด้านการแพทย์" sx={{ fontSize: 16, fontWeight: 600 }}className={noto_Sans_Thai.className}>
        นวัตกรรมด้านการแพทย์
      </MenuItem>

      <MenuItem value="การดูแลสุขภาพ" sx={{ fontSize: 16, fontWeight: 600 }}className={noto_Sans_Thai.className}>
        การดูแลสุขภาพ
      </MenuItem>
    </Select>
        
      </FormControl>
            </ThemeProvider>  
            </Box>


            <Box > 
              <Button
              variant="contained"
              sx={{
                display:"flex",
                width: windowWidth < 1250 ? "106px" : "213px",
                height: "50px",
                bgcolor: "#007DFC",
                
                "&:hover": {
                  bgcolor: "#0060C2",
                },
                "&.MuiButton-root": {
                  boxShadow: "none !important",
                  borderRadius: "8px !important",
                },
                
              }}
              onClick ={handleSubmit}
            >
              <Typography
                sx={{ fontSize: 18, fontWeight: 600, color: "#FFFFFF" }}
              >
                บันทึก
              </Typography>
            </Button>
            </Box>



            
            </Box>
            </Box>
      </Box>
    </>
  )
}
