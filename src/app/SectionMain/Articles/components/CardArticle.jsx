"use client"
import parse from 'html-react-parser';
import { Box, Typography } from "@mui/material";
import React , { useState , useEffect} from "react";
import Paper from "@mui/material/Paper";
import Image from "next/image";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import Link from 'next/link';
import ExImgCard from "../../../../assets/ExImgCard.png"
import Noimage from "../../../../assets/no_image.png"
import { Noto_Sans_Thai } from "next/font/google";
import Button from "@mui/material/Button";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';


const noto_Sans_Thai = Noto_Sans_Thai({
  weight: ['400', '500' , '600' , '700'],
  subsets: ["latin"],
  display: "swap",
});

async function getPostsData() {
  const response = await fetch("http://203.150.243.197:4000/landingPage/getArticleList");

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


export default  function CardArticle() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);
  const [resultState , setResultState] = useState ([]);
  const [showMoreContent, setShowMoreContent] = useState(false);
  const [morePost, setMorePost] = useState(1);
  const [post, setPost] = useState(6);
  const[showButtonMore,setShowButtonMore] = useState(true);
  const[showButtonLess,setShowButtonLess] = useState(false);

const handleShowAll = () => {
  setPost(6);
  setMorePost(resultState?.response?.result?.length);
  setShowButtonMore(false);
  setShowButtonLess(true);
};

const handleShowLess = () => {
  setPost(6);
  setMorePost(1);
  setShowButtonMore(true);
  setShowButtonLess(false);
};




   const initResult = async () =>{
    try{
      const result = await getPostsData ()
      setResultState(result)
    } catch (error){}
  }
  useEffect(()=> {
    initResult()

  },[])
  console.log(resultState)
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      setWindowHeight(window.innerHeight);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

    const sortedPosts = resultState?.response?.result?.sort((a, b) => a.position - b.position);
  return (
    <>




    {resultState?.response?.result?.slice(0, post * morePost).map((post, index) => (
      
        
      <Paper
        key={index}
        elevation={3}
        sx={{
          width:windowWidth < 1890 ? (windowWidth < 1735 ? (windowWidth < 1610 ? (windowWidth < 1490 ? (windowWidth < 1320 ? "100%" : 536) : 606) : 656) : 706) : 506,
          height:  580,
          p: "24px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          
          mt: "64px",
          cursor: "pointer",
          "&.MuiPaper-root": {
            border: "1px solid #E5E9EB !important",
            borderRadius: "0px !important",
            boxShadow: [
              "0px 12px 16px -4px rgba(16, 24, 40, 0.1) !important",
              "0px 12px 16px -2px rgba(16, 24, 40, 0.1) !important",
            ],
          },
          "&:hover" :{
            backgroundColor:"#EEEEEE"
          }
        }}
        onClick={() => window.open(`/SectionArticles/${post._id}`)}
      >
        <Box>
          <Box
            sx={{
              position: "relative",
              display: "flex",
              justifyContent: "center",
              width: "100%",
              height: 240,
            }}
          >
        
<Image
              src={post.displayImagePath === "http://203.150.243.197:4000null" ? Noimage : post.displayImagePath}
              fill={true}
              style={{objectFit:"cover"}}
              alt='ArticleImage'
            />
          </Box>

         {/*  <Box
            sx={{
              position: "relative",
              display: "flex",
              justifyContent: "center",
              width: 458,
              height: 240,
            }}
          >
        
<Image
              src={post.displayImagePath === "http://203.150.243.197:4000null" ? Noimage : post.displayImagePath}
              width={458}
              height={240}
              style={{objectFit:"cover"}}
              alt='ArticleImage'
            />
          </Box> */}

          
          <Box
            sx={{
              display: "flex",
              justifyContent: "start",
              flexDirection: "column",
              pt: 4,
            }}
          >
            
            <Typography
              sx={{ fontSize: 14, fontWeight: 600, color: "#6941C6", }}className={noto_Sans_Thai.className}
            >
              นวัตกรรมด้านการแพทย์
            </Typography>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                width:"100%",
                pt: 1,
              }}
            >
              
              <Typography
              noWrap
                sx={{ fontSize: 24, fontWeight: 600, color: "#007DFC", }}className={noto_Sans_Thai.className}
                
              >
                {post.label} 
              </Typography>
              
              <ArrowOutwardIcon
                sx={{ width: 23, height: 23, color: "#007DFC", mt: 0.5 }}
              />
            </Box>
            <Typography
          sx={{ fontWeight: 400, fontSize: 16 ,display: 'block',
          overflowWrap: 'break-word',mt: 1, color: "#667085",}}  className={noto_Sans_Thai.className}       
          
        >
          {showMoreContent
    ? parse(post.contentText.replace(/<[^>]+>/g, ""))
    : parse(post.contentText.substring(0, 190).replace(/<[^>]+>/g, ""))}
        </Typography>
          </Box>
        </Box>

        <Box sx={{ display: "flex", justifyContent: "start" }}>
        
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
          >
            <rect
              width="18"
              height="15"
              x="3"
              y="6"
              stroke="gray"
              strokeWidth="2"
              rx="2"
            ></rect>
            <path
              fill="gray"
              d="M3 10c0-1.886 0-2.828.586-3.414C4.172 6 5.114 6 7 6h10c1.886 0 2.828 0 3.414.586C21 7.172 21 8.114 21 10H3z"
            ></path>
            <path
              stroke="gray"
              strokeLinecap="round"
              strokeWidth="2"
              d="M7 3v3M17 3v3"
            ></path>
            <rect width="4" height="2" x="7" y="12" fill="gray" rx="0.5"></rect>
            <rect width="4" height="2" x="7" y="16" fill="gray" rx="0.5"></rect>
            <rect
              width="4"
              height="2"
              x="13"
              y="12"
              fill="gray"
              rx="0.5"
            ></rect>
            <rect
              width="4"
              height="2"
              x="13"
              y="16"
              fill="gray"
              rx="0.5"
            ></rect>
          </svg>
          <Typography
            sx={{
              fontSize: 14,
              fontWeight: 400,
              color: "#667085",
              ml: 1.5,
              pt:0.2
              
            }}className={noto_Sans_Thai.className}
          >
            {formatDate(post.createTime)}
          </Typography>
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
          <Typography sx={{ fontSize: 18, fontWeight: 500, color: "#6941C6" }}>
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
          <Typography sx={{ fontSize: 18, fontWeight: 500, color: "#6941C6" }}>
            แสดงน้อยลง
          </Typography>
        </Button>
        </Box>
    </>
  );
}
