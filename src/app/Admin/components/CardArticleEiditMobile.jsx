"use client";

import parse from 'html-react-parser';
import {
  Avatar,
  Box,
  FormControl,
  IconButton,
  InputBase,
  InputLabel,
  MenuItem,
  Switch,

  Typography,

} from "@mui/material";
import React , { useState , useEffect} from "react";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import Image from "next/image";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";

import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Select, { SelectChangeEvent } from '@mui/material/Select';
import AddIcon from '@mui/icons-material/Add';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import checkIcon from "../../../assets/check_icon.png"
import ExImgCard from "../../../assets/ExImgCard.png"
import Noimage from "../../../assets/no_image.png"
import { Noto_Sans_Thai } from "next/font/google";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';


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

function formatDate(dateString) {
  const date = new Date(dateString);
  const options = {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  };
  return date.toLocaleDateString('en-GB', options); 
}

export default  function CardArticleEditMobile({onDataArrayLengthChange, onEditChange}) {
  const [post, setPost] = useState("");
  const [positionChanged, setPositionChanged] = useState(false);
  const [dialogToggle, setDialogToggle] = useState(false);
  const [showMoreContent, setShowMoreContent] = useState(false);
  const [sortedResult, setSortedResult] = useState([]);
  const [resultState , setResultState] = useState ([]);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [morePost, setMorePost] = useState(1);
  const [showPost, setShowPost] = useState(2);
  const[showButtonMore,setShowButtonMore] = useState(true);
  const[showButtonLess,setShowButtonLess] = useState(false);

  const handleShowAll = () => {
    setShowPost(2);
    setMorePost(resultState?.response?.result?.length);
    setShowButtonMore(false);
    setShowButtonLess(true);
  };
  
  const handleShowLess = () => {
    setShowPost(2);
    setMorePost(1);
    setShowButtonMore(true);
    setShowButtonLess(false);
  };

  

  const Responsive = createTheme({
    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 820,
        lg: 1250,
        xl: 1500,
        xxl: 1800,
      },
    },
    
    
  });


  const initResult = async () => {
    try {
      const result = await getPostsData();
      setResultState(result);
      setSortedResult(result?.response?.result?.sort((a, b) => a.position - b.position));
    } catch (error) {}
  };

  useEffect(() => {
    initResult();
  }, []);

  useEffect(() => {
    const sortPosts = () => {
      if (resultState?.response?.result) {
        const sorted = resultState.response.result.sort((a, b) => a.position - b.position);
        setSortedResult(sorted);
      }
    };

    sortPosts();
    
  }, [resultState]);
  console.log(resultState)


  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);


  

  useEffect(() => {
    onEditChange(true);
    const newLength = resultState.length;
    onDataArrayLengthChange(newLength); 
  }, [resultState, onDataArrayLengthChange,onEditChange]);


  const handleChange = async (newPosition, index) => {
    const selectedPost = resultState.response.result[index];
    const targetPost = resultState.response.result.find((post) => post.position === newPosition);

    const updatedData = [
        { articleId: selectedPost._id, position: newPosition },
        { articleId: targetPost._id, position: selectedPost.position }
    ];

    setResultState({
        ...resultState,
        response: {
            ...resultState.response,
            result: resultState.response.result.map(post =>
                post._id === selectedPost._id ? { ...post, position: newPosition } :
                post._id === targetPost._id ? { ...post, position: selectedPost.position } :
                post
            )
        }
    });

    
};


const handleConfirmAll = async () => {
  const updatedDataArray = resultState.response.result.map((post, index) => ({
      articleId: post._id,
      position: post.position
  }));

  const res = await fetch(`http://203.150.243.197:4000/landingPage/updateArticlePosition?articleList=${JSON.stringify(updatedDataArray)}`, {
      method: 'PATCH',
  });

  if (res.ok) {
      console.log('Positions updated successfully');
  } else {
      console.error('Failed to update positions');
  }
  setDialogToggle(true);
  setTimeout(() => {
    setDialogToggle(false);
  }, 2000);
  setTimeout(() => {
  setPositionChanged(false);
}, 2000);
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
            width:"125px",
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

  function countCharactersInsideTag(html) {
    let insideTag = false;
    let count = 0;

    for (let i = 0; i < html?.length; i++) {
      let char = html.charAt(i);

      if (char === "<") {
        insideTag = true;
      } else if (char === ">") {
        insideTag = false;
      } else if (!insideTag) {
        count++;
      }
    }

    return count;
  }


  
  return (
    <>
    <ThemeProvider theme={Responsive}>
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
            
              <Image src={checkIcon } width={63} height={63} alt="checkIcon"/>
           
            <DialogContentText
              id="alert-dialog-description"
              align="center"
              sx={{
                fontSize: { xs: 13, md: 24 },
                color: "#000",
                mt: { xs: "10px", md: "25px" },
              }}className={noto_Sans_Thai.className}
            >
              บันทึกข้อมูลสำเร็จ
            </DialogContentText>
          </DialogContent>
        </Dialog>
    <Box sx={{display:{xs:"none",sm:"flex"}, justifyContent:"end", width:"100%" ,alignItems:"center",}}>
    <Box
          sx={{
            display: "flex",
            justifyContent: "start",
            width: "100%",
            alignItems:"center"
          }}
        >
          <Typography
              sx={{ fontSize: {xs:16,xl:24}, fontWeight: 500,  mt:7,}}className={noto_Sans_Thai.className}
            >
              บทความทั้งหมด {sortedResult.length} / 9
            </Typography>
          <Button
            variant="outlined"
            startIcon={
              <AddIcon sx={{color:sortedResult.length >= 9 ? "#808080" : "#007DFC",}}/>
            }
            sx={{
              width: 149,
              height: 50,
              bgcolor: sortedResult.length >= 9 ? "#C5C5C5 " :  "#FFFFFF",
              mt: 7,
              ml:windowWidth < 647 ? 0 : 3,
              "&:hover": {
                bgcolor: "#D5EAFF",
              },
              "&.MuiButton-root": {
                boxShadow: "none !important",
                borderRadius: "8px !important",
                border: sortedResult.length >= 9 ? "none" : "1px solid #007DFC",
                
              },
              
            }}
            disabled={sortedResult.length >= 9}
            onClick={() => window.open("/Admin/AddPost", "_blank")}
          >
            <Typography
              sx={{ fontSize: 18, fontWeight: 500, color:sortedResult.length >= 9 ? "#808080" : "#007DFC", 
              }}className={noto_Sans_Thai.className}
            >
              เพิ่มบทความ
            </Typography>
          </Button>
        </Box>


<Box sx={{display:"flex",justifyContent:"end",width:"80%"}}>
       
    <Button variant="contained"
            sx={{
              width: {xs:149},
              height: 50,
              bgcolor: positionChanged ? "#007DFC" : "#C5C5C5 !important",
              mt: 7,
              "&:hover": {
                bgcolor: "#0060C2",
              },
              "&.MuiButton-root": {
                boxShadow: "none !important",
                borderRadius: "8px !important",
              },
            }} onClick={handleConfirmAll}
            disabled={!positionChanged}><Typography
            sx={{ fontSize: 18, fontWeight: 500, color: positionChanged ? "#FFFFFF" : "#808080" }}className={noto_Sans_Thai.className}
          >
            บันทึก
          </Typography></Button>
          </Box>
    </Box>


    <Box sx={{display:{xs:"flex",sm:"none"}, justifyContent:"end", width:"100%" , alignItems:"center",}}>
    
            <Box sx={{display:"flex",jusfityContent:"center",flexDirection:"column",width:"100%"}}>
<Box sx={{display:"flex",justifyContent:"end"}}>
    <Button variant="contained"
            sx={{
              width: 149,
              height: 50,
              bgcolor: positionChanged ? "#007DFC" : "#C5C5C5 !important",
              mt: 7,
              "&:hover": {
                bgcolor: "#0060C2",
              },
              "&.MuiButton-root": {
                boxShadow: "none !important",
                borderRadius: "8px !important",
              },
            }} onClick={handleConfirmAll}
            disabled={!positionChanged}><Typography
            sx={{ fontSize: 18, fontWeight: 500, color: positionChanged ? "#FFFFFF" : "#808080" }}className={noto_Sans_Thai.className}
          >
            บันทึก
          </Typography></Button>

</Box>
            <Box sx={{display:"flex",justifyContent:"space-between"}}>
          <Typography
              sx={{ fontSize: {md:16,xl:24}, fontWeight: 500,  mt:8.5,pr:5,}}className={noto_Sans_Thai.className}
            >
              บทความทั้งหมด {sortedResult.length} / 9
            </Typography>

          <Button
            variant="outlined"
            startIcon={
              <AddIcon sx={{color:sortedResult.length === 9 ? "#808080" : "#007DFC",}}/>
            }
            sx={{
              width: 149,
              height: 50,
              bgcolor: sortedResult.length === 9 ? "#C5C5C5 " :  "#FFFFFF",
              mt: 7,
              "&:hover": {
                bgcolor: "#D5EAFF",
              },
              "&.MuiButton-root": {
                boxShadow: "none !important",
                borderRadius: "8px !important",
                border: sortedResult.length === 9 ? "none" : "1px solid #007DFC",
                
              },
              
            }}
            disabled={sortedResult.length === 9}
          >
            <Typography
              sx={{ fontSize: 18, fontWeight: 500, color:sortedResult.length === 9 ? "#808080" : "#007DFC", 
              }}className={noto_Sans_Thai.className}
            >
              เพิ่มบทความ
            </Typography>
          </Button>

          </Box>
            </Box>


          
       


    
    </Box>
    
    



       
        {sortedResult.slice(0, showPost * morePost).map((post, index) => (
      <Paper
        key={index}
        elevation={3}
        sx={{
          width: windowWidth < 1890 ? (windowWidth < 1735 ? (windowWidth < 1610 ? (windowWidth < 1490 ? (windowWidth < 1390 ? "100%" : 536) : 576) : 646) : 706) : 506,
          height: {xs:580},
          p: "24px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          
          mt: "64px",
          "&.MuiPaper-root": {
            border: "1px solid #E5E9EB !important",
            borderRadius: "0px !important",
            boxShadow: [
              "0px 12px 16px -4px rgba(16, 24, 40, 0.1) !important",
              "0px 12px 16px -2px rgba(16, 24, 40, 0.1) !important",
            ],
          },
        }}
      >
        
        <Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-end", 
              alignItems: "flex-end",
              ml: 0.5,
              width: "100%",
              height: 240,
              position: "relative",
            }}
          >
            <Box sx={{width:"100%",height:"100%",}}>
            <Image
              src={post.displayImagePath === "http://203.150.243.197:4000null" ? Noimage : post.displayImagePath}
              fill={true}
              style={{objectFit:"cover"}}
              alt="Picture Article Cover"

            />
            </Box>
            
            <Box
              sx={{
                position: "absolute",
                top:1, 
                left: 1,
              }}
            >
              
            

          
            <FormControl sx={{ m: 1, minWidth: 120 }}>

        <Select
          value={post.position}
          onChange={(event) => {
            handleChange(event.target.value, index);
            setPositionChanged(true);
          }} 
          IconComponent={KeyboardArrowDownIcon}
          sx={{height: 30,
            width:125,
            color: "#007DFC",
            backgroundColor: "#fff",
            fontWeight: 500,
            fontSize:14,
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
            borderRadius: "8px",}}className={noto_Sans_Thai.className}
        >
          
          {sortedResult.map((option) => (
                      <MenuItem key={option.position} value={option.position} sx={{ fontSize: 14, fontWeight: 500}} className={noto_Sans_Thai.className}>
                  แสดงลำดับ {option.position}
                </MenuItem>
              ))}
            
        </Select>
        
      </FormControl>
      
        
            </Box>
            <Box
              sx={{
                position: "absolute",
                top: -45, 
                right: 10,
              }}
            >
              <Button
                variant="contained"
                startIcon={
                  <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width="17"
      height="17"
      fill="none"
      viewBox="0 0 17 17"
    >
      <path fill="url(#pattern802)" d="M0 0H17V17H0z"></path>
      <defs>
        <pattern
          id="pattern802"
          width="1"
          height="1"
          patternContentUnits="objectBoundingBox"
        >
          <use transform="scale(.01563)" xlinkHref="#image0_3029_17342"></use>
        </pattern>
        <image
          id="image0_3029_17342"
          width="64"
          height="64"
          xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAOxAAADsQBlSsOGwAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAUZSURBVHic1ZvPa11FHMXP1NSAWBBT0iQqWFy0VrtR2kUXQhFBErE22lZFlFJpqYp/gcuC4MJatCUlWbnyR6wQY2tARRCpLqJCY1sVUrG2xcSisQZfKs3HxZ0Hry8zc++7990fOfAgmfl+z8w5d+7ceffNGMUAWC3pEUn9ktZL6pa0Ji4vIxYkfS1pnzHmx1YSgQclbZd0n6K+zkk6K+m4pFFjzEJSoj5gGPiP8vBdC8I3ACdj+H4Ftich2w/M560uIW5J0N9+4O+EfIvAKz6iDuBIXkpS4DKwIkb8AFBrkXcReNJFdrjdCjJgAXgmRvzDwL8p+WeAVaZx2Es6EmjvnKQxST9Lmgl1rA2oSZo0xlz0BQADkj6Q1OmqlnRM0klJayXtlnSTI+7FOlkf/nv+PLALMA6CUkB42NeAx5ri1wNXHLHH6wHDHrJJoLcUlR4kED/gyTvoiJ8WsBr3o+480FO0wBDSire5Lzty/hCw20O4q0hxccgi3ua/48g7I2DUUTHN8rrn48RvI3r0NeNtAd87Kg4VJS4ObRAfyt8mYNZRsb8ogSHkLH4SMMI9NHYWJTLQ+dAiZwF4NEP+FeDeeqALOwpR6e98nle+BvQ3BlfKgJgrl/XKL82vkgGFi7dJlTCgFPE2sXQDShNvk0s1oFTxlqA0A0oXb0lKMaAS4i1R4QZURrwlK9SAKogHOhr/KcyAssXb/Gmi9x8TQF9hBlRAfDdLX52PFWJA2eItx4Ajdz53A6og3vLscBHkakBVxFuuYg2oknjLV5wBVRNvOYsxoIriLW/+BlRVvOXO14Aqi7f8+RlQdfG2jXwMAO7H/8NqJcTbdtpvANAL/FZ18batXAwYWw7ibXvtNQDY4sm9Svb39sH8NMjDgHFP7t6YvMLF23bbZwBws0fERExeO77VbQQOAVPAPx6uxEhrwKAn74FATtafuzqJdrBdyyK4GR2hRgPY4CiblfSVT7z8G5oWJD1ujPnY1xjQKemEpK2tdzWM4B68AFz7hk4bY641FxLNCcfkFn9V0s6QeIs3lIN4SYtpDehylF2u/wHcAGwFPpN0VNKNjvgFSYPGmLFQQ8BGScGJNQNm094CLuM2A6OKNlLfLbdJdcQO+wbs8bR3StKIpEsJOCTpJUnNc9SltAa4cLv9xKEm6YmE4iXpIUfZKUmbjTG1JATASkkHHVU/tNOAJLioaNh/00LOHY6ykaTiLZ6VdJujfDztHJB02NWBpA8lbWpRvCStytI+cKek1xxVNUmfpDVg2BLEoSbpI0lbjDGDob2/eYBoo+cJSbc6qg8bY/7qUHR1mvcEBvcIGmOmgE2SnpfU19impN/tZ0rSp8aY+ZT9zwQr/nNFp1yaMSfp1XrgjGOB9EKBfQ3Cs4CLW6l2Ey2VXVikYRfsCkUTUzPWtVtIUbBX/gtJ93hCDhhj3m1MeN/hUmW2yrYyAoAe4LQnB2BoiS7gOU/wU4UojEFSA4A1+Ic9wAiu4zdAF+7t8heAviUJBSOJAURX/kxA/FFCI9oGuPBt2SbEGQCsBc6mFm9JevG/XLgAPE3M6a284DMAWAnsITpZllp846GpfZKGArG/KFrU/KToOV8U3nOUfSnpLl2/BmnGsKKTpyRuCXgr4OZygnvCS2BAB/BmyZ3PgkXgAFkf4cBe2vDCsWDM0c5zTkQT4xDRe/4qowa8TnTKvWXEDhWgS9KA/ayT1KP8j897u6Prv2yNS5owxvyZlvB/KMekuIZPmNAAAAAASUVORK5CYII="
        ></image>
      </defs>
    </svg>
                }
                sx={{
                  width: 80,
                  height: 30,
                  bgcolor: "#007DFC",
                  mt: 7,
                  "&:hover": {
                    bgcolor: "#0060C2",
                  },
                  "&.MuiButton-root": {
                    boxShadow: "none !important",
                    borderRadius: "8px !important",
                    border: "none !important",
                  },
                }}
                onClick={() => window.open(`/Admin/EditArticle/${post._id}`, "_blank")}
              >
                <Typography
                  sx={{ fontSize: 16, fontWeight: 400, color: "#FFFFFF" }}className={noto_Sans_Thai.className}
                >
                  แก้ไข
                </Typography>
              </Button>
            </Box>
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
              sx={{ fontSize: 14, fontWeight: 600, color: "#6941C6" }}className={noto_Sans_Thai.className}
            >
              {post.articleType}
            </Typography>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                width: "100%",
                pt: 1,
                
              }}
            >
              <Typography
              noWrap
                sx={{ fontSize: 24, fontWeight: 600, color: "#007DFC" ,}}className={noto_Sans_Thai.className}
              >
                {post.label}
              </Typography>
              <ArrowOutwardIcon
                sx={{ width: 28, height: 28, color: "#007DFC", mt: 0.5 }}
              />
            </Box>
<Typography
          sx={{ fontWeight: 400, fontSize: 16 ,display: 'block',
          overflowWrap: 'break-word',mt: 1,}}      className={noto_Sans_Thai.className}   
        >
          {showMoreContent
    ? parse(post.contentText.replace(/<[^>]+>/g, ""))
    : parse(post.contentText.substring(0, 190).replace(/<[^>]+>/g, ""))}        
        </Typography>



          </Box>
          <Box sx={{ display: "flex", justifyContent: "start",marginbottom:"auto", pt:13,}}>
          <CalendarMonthIcon sx={{ color: "#808080", width: 24, height: 24 }} />
          <Typography
            sx={{
              fontSize: 14,
              fontWeight: 400,
              color: "#667085",
              ml: 1.5,
            }}className={noto_Sans_Thai.className}
          >
            {formatDate(post.createTime)}
          </Typography>
        </Box>
        </Box>

        
      </Paper>
       
       ))}
       
     <Box sx={{width:"100%",display:"flex",justifyContent:"center",}}>
<Button
          variant="contained"
          endIcon={<ArrowDownwardIcon sx={{ color: "#6941C6" }} />}
          sx={{
            display: showButtonMore ? "flex": " none",
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
          onClick={handleShowAll}
        >
          <Typography sx={{ fontSize: 18, fontWeight: 500, color: "#6941C6" }}className={noto_Sans_Thai.className}>
            แสดงเพิ่มเติม
          </Typography>
        </Button>

        <Button
          variant="contained"
          endIcon={<ArrowUpwardIcon  sx={{ color: "#6941C6" }} />}
          sx={{
            display:showButtonLess ? "flex": " none",
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
          onClick={handleShowLess}
        >
          <Typography sx={{ fontSize: 18, fontWeight: 500, color: "#6941C6" }}className={noto_Sans_Thai.className}>
            แสดงน้อยลง
          </Typography>
        </Button>
        </Box>
        </ThemeProvider>
    </>
  );
}
