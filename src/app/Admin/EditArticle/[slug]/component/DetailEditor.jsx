"use client";


import React ,{ useState , useEffect} from "react";

import "../RichTextEditor/src/styles.css"
import { Box, Button, Typography ,ThemeProvider,createTheme,FormControl,

  MenuItem,  Grid,} from "@mui/material";
import { UpdateEditor } from '../RichTextEditor/src/UpdateEditor';import Select, { SelectChangeEvent } from '@mui/material/Select';
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useRouter } from 'next/navigation';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Image from "next/image";
import TextField from '@mui/material/TextField';
import checkIcon from "../../../../../assets/check_icon.png"
import { Noto_Sans_Thai } from "next/font/google";


const noto_Sans_Thai = Noto_Sans_Thai({
  weight: ['400', '500' , '600' , '700'],
  subsets: ["latin"],
  display: "swap",
});
async function getPostsFromID( slug ) {
  const response = await fetch(`http://203.150.243.197:4000/landingPage/getArticle?articleId=${slug}`);

  if (!response.ok) {
    throw new Error('Error');
  }

  return response.json();
}

async function getPostsData() {
  const response = await fetch('http://203.150.243.197:4000/landingPage/getArticleList');

  if (!response.ok) {
    throw new Error('Error');
  }

  return response.json();
}




export default function DetailEditor({params,label, }) {
  const [resultState , setResultState] = useState ([]);
  const [resultStateAll , setResultStateAll] = useState ([]);
  const [content, setContent] = useState();
  const [labelText, setLabelText] = useState(label);
  const [Type, setType] = useState([]);
  const router = useRouter();
  const [dialogToggle, setDialogToggle] = useState(false);
  const [dialogEditToggle, setDialogEditToggle] = useState(false);
  const [deleteDialogToggle, setDeleteDialogToggle] = useState(false);
  const [htmlBase64, setHtmlBase64] = useState();
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);

  const handleChangeType = (event) => {
    setType(event.target.value);
  };
  const initResult = async () =>{
    try{
      const result = await getPostsFromID (params.slug)
      setResultState(result)
    } catch (error){}
  }
  useEffect(()=> {
    initResult()

  },[])

  const initResultAll = async () => {
    try {
      const result = await getPostsData();
      setResultStateAll(result);
    } catch (error) {}
  };

  useEffect(() => {
    initResultAll();
  }, []);

 console.log(resultStateAll)

 useEffect(() => {
  
  setType(resultState?.response?.result?.articleType);
}, [resultState?.response?.result?.articleType]);

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
  typography: {
    fontFamily: "Kanit, sans-serif",
  },
});


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


  const htmlContent = resultState?.response?.result?.content;

async function imageUrlToBase64(url) {
  const response = await fetch(url);
  const blob = await response.blob();
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onloadend = () => resolve(reader.result.split(",")[1]);
    reader.onerror = reject;
    reader.readAsDataURL(blob);
  });
}

async function replaceImageUrlsWithBase64(html) {
  const imgRegex = /<img[^>]+src="([^"]+)"[^>]*>/g;
  const matches = html.match(imgRegex);

  if (matches) {
    for (const match of matches) {
      const imageUrl = match.match(/src="([^"]+)"/)[1];
      try {
        const base64String = await imageUrlToBase64(imageUrl);
        const updatedImgTag = match.replace(
          imageUrl,
          `data:image/png;base64,${base64String}`
        );
        html = html.replace(match, updatedImgTag);
      } catch (error) {
        console.error(error);
      }
    }
  }

  return html;
}

useEffect(() => {
  const updateHtmlBase64 = async () => {
    try {
      const resultHtml = await replaceImageUrlsWithBase64(htmlContent);
      console.log('Updated HTML with Base64:', resultHtml);
      setHtmlBase64(resultHtml);
    } catch (error) {
      console.error(error);
    }
  };

  updateHtmlBase64();
}, [htmlContent]);

console.log("Html content :", htmlContent);
console.log("Html Base64 :", htmlBase64);
 /*  const handleSubmit = async () => {
    const data = {
      articleId: resultState?.response?.result?._id
    };
  
    fetch('http://203.150.243.197:4000/landingPage/deleteArticle/', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then(response => {
      if (response.ok) {
        console.log('Delete Article Success');
        // ทำตามสิ่งที่ต้องการหลังจากลบบทความสำเร็จ
      } else {
        console.error('Failed to Delete Article');
      }
    })
    .catch(error => {
      console.error('An error occurred:', error);
    });
  };
   */
  /* const handleSubmit= async () => {
    const data = {
      articleId: resultState?.response?.result?._id
    };
  
    const res = await fetch(`http://203.150.243.197:4000/landingPage/deleteArticle?articleId=${JSON.stringify(data)}`, {
        method: 'PATCH',
    });
  
    if (res.ok) {
        console.log('Positions updated successfully');
    } else {
        console.error('Failed to update positions');
    }
    
  }; */


console.log(resultState?.respone?.result?.position)
  const handleDelete = async () => {
    const data = {
      articleId: params?.slug,
    };
  
    try {
      const response = await fetch('http://203.150.243.197:4000/landingPage/deleteArticle', {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
  
      if (response.ok) {
        console.log('Delete Article Success');
        setDialogToggle(true);
  setTimeout(() => {
    setDialogToggle(false);
    router.push('/Admin');
  }, 2000);
        
      } else {
        console.error('Failed to Delete Article');
      }
    } catch (error) {
      console.error('An error occurred:', error);
    }

    const updatedDataArray = resultStateAll.response.result.map((post, index) => ({
      articleId: post._id,
      position: post.position > resultState?.response?.result?.position ? post.position - 1 : post.position,
    }));

   
  const res = await fetch(`http://203.150.243.197:4000/landingPage/updateArticlePosition?articleList=${JSON.stringify(updatedDataArray)}`, {
    method: 'PATCH',
});

  };

 
console.log(resultState?.response?.result?.label)


const handleEditArticle = async () => {



  const data = {
    label: labelText,
    content: content,
    articleId: params?.slug,
    articleType: Type,
  };
  console.log("data.label : ",data.label)
  console.log("data.content : ",data.content)

  try {
    const res = await fetch(
      'http://203.150.243.197:4000/landingPage/updateArticle',
      {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
body: JSON.stringify(data)
      }

    );

    if (res.ok) {
      console.log('Update Successful');
      setDialogEditToggle(true);
setTimeout(() => {
  setDialogEditToggle(false);
  router.push('/Admin');
}, 2000);
    } else {
      console.error('Update Failed');
    }
  } catch (error) {
    console.error('Error during update:', error.message);
  }
};
  
  return (
    <>
    <ThemeProvider theme={Responsive}>
     <Dialog
          open={dialogEditToggle}
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
              }}className={noto_Sans_Thai.className}
            >
              บันทึกข้อมูลสำเร็จ
            </DialogContentText>
          </DialogContent>
        </Dialog>





     <Dialog
        open={deleteDialogToggle}
        PaperProps={{
          sx: {
            maxHeight: { xs: 136, md: 254 },
            maxWidth: { xs: 270, md: 428 },
            width: "100%",
            height: "100%",
            mt: 0,
            mr: 0,
            mb: 0,
            ml: 0,
          },
        }}
        sx={{
          "& .MuiPaper-root": { borderRadius: "8px" },
        }}
      >
        <DialogContent
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            height: { xs: 92, md: 204 },
            overflow: "hidden",
          }}
        >
          <Box >
          <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width="59"
      height="59"
      fill="none"
      viewBox="0 0 59 59"
    >
      <path fill="url(#pattern0)" d="M0 0H59V59H0z"></path>
      <defs>
        <pattern
          id="pattern0"
          width="1"
          height="1"
          patternContentUnits="objectBoundingBox"
        >
          <use transform="scale(.00195)" xlinkHref="#image0_2442_17039"></use>
        </pattern>
        <image
          id="image0_2442_17039"
          width="512"
          height="512"
          xlinkHref="data:image/png;base64,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gERr/WAQTBpfjBjhukaOuscMufvuzN8wV61yHSMiIiIicmqSjPFWrwazyky47z7XNcJwCgYCwJzAL9G7DozCAYCf4CfcfjuwgafOP991jdDSFJk6FVKmBKaMH+86RkREREQkvJKvCowYNw5sInbyZNc1wjP2y6uvhoSyGRdeeaXrmJwWRQOARGtt/vxAQ1shLs51jXAlEzZtAu9y70D37q5jRERERESyV0ZcIHjHHehxgblFjGn10EMA1hrjOianRNEAwP/K/+ruu4FP6VqhguuaKHbk8X6mOfd06vS7x6aIiIiIiESwhx4yZtcuMHfyTteuQAIZ1rquil72dptSuzbErQutu+EG1zU5JQoGAP2rWr9IEaC/3XL//a5rxCxl/NixkHw4uGfOHNc1IiIiIiI5K3l1cPqsWcAIZr7wgusaMXN5YvjwY2fFRbYoGADk2xY6vX9/oAEtypZ1XRPFrmbK5s1gPgjcNXiw6xgREREREbfSdgda9evH0VtjxZE1PFqtGtg3/NYdOriOyW4RPABItNYvXRr4lo/vvdd1jdg9FP3vfzO3/Kemuq4REREREXHr4RHG270bzDRaaL3inh1sr3jggcx1ZGys65rsEsEDAFsx1KBfP+B5qhcp4romitUnfdIkGNoi2PK991zHiIiIiIjkLsmPBk976y3gCVPi7bdd10SxTtxbqVLmU+O6dHEdk10icAAwqIm1pUqBnc8zd93luiaKdeGb3bvBaxbI36eP6xgRERERkdwt9L23p2dPYBmLtWPWoUm23JAhkboTIAIHADHLQjXuuw9d+XfMfGtG9emTueX/119d14iIiIiI5G7DKxmzeTNwuZk7aJDrmih2M3dUrAh+H79P586uY8ItggYAidbakiXBfsXrd9/tuiaKfWtumDMHkm/yJowf7zpGRERERCRvSRngDRg7FhhsWs2e7bomijWzlePiIm0nQAQNAGzx0Fl9+6Ir/65sYt2BA2ALeu917w5gjJ5rKiIiIiJyojJ/jvbyex/ceSewjc2HDrluikKf0/Oss8B+4Pfs1Ml1TLhEwAAg0Vq/aFGwX/OWrvy7Y7uajORkGDrRmDVrXNeIiIiIiORtScZ4q1YBI02pBx90XRO97EF7+qBB0LattYGA65pTFQEDAH+tv/auu4Dx1CxWzHVNFHqBh9euhd27vaqjRrmOERERERGJ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"
        ></image>
      </defs>
    </svg>
          </Box>
          <DialogContentText
            id="alert-dialog-description"
            align="center"
            sx={{
              fontSize: { xs: 13, md: 24 },
              color: "#000",
              mt: { xs: 1, md: "44px" },
            }}className={noto_Sans_Thai.className}
          >
             ต้องการลบบทความนี้หรือไม่
          </DialogContentText>
        </DialogContent>
        <DialogActions sx={{ p: 0 }}>
          <Grid container sx={{ display: "flex", justifyContent: "center" }}>
            <Grid item sx={{ width: "50%" }}>
              <Button
                variant="contained"
                sx={{
                  height: { xs: 44, md: 50 },
                  width: { xs: "100%", md: "100%" },
                  fontSize: { xs: 16, md: 18 },
                  fontWeight: "400",
                  borderRadius: 0,
                  bgcolor:"#8DA3B8",
                  ":hover": {
                    bgcolor: "#8DA3B8",
                  },
                }}className={noto_Sans_Thai.className}
                style={{ color: "#ffff" }}
                onClick={() => setDeleteDialogToggle(false)}
              >
                ยกเลิก
              </Button>
            </Grid>
            <Grid item sx={{ width: "50%" }}>
              <Button
                variant="contained"
                color="primary"
                sx={{
                  height: { xs: 44, md: 50 },
                  width: { xs: "100%", md: "100%" },
                  borderRadius: 0,
                  fontWeight: "400",
                  fontSize: { xs: 16, md: 18 },
                  ":hover": {
                    bgcolor: "#006AD5",
                  },
                }}className={noto_Sans_Thai.className}
                onClick={handleDelete}
              >
                ยืนยัน
              </Button>
            </Grid>
          </Grid>
        </DialogActions>
      </Dialog>




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
              }}className={noto_Sans_Thai.className}
            >
              ลบข้อมูลสำเร็จ
            </DialogContentText>
          </DialogContent>
        </Dialog>


      <Box sx={{width:"100vw" , height:"100%" , bgcolor:"#FFFFFF",display:"flex" , justifyContent:"center",pt:windowWidth < 1250 ? "34px" : "134px",pb:8}}>
      <Box sx={{position:"absolute",display:"flex",justifyContent:"start",mt:"170px",width:windowWidth < 400 ? "95%" : windowWidth < 530 ? "90%" : "81%",}}>


        <TextField
            fullWidth
            placeholder='หัวข้อ'
            defaultValue={resultState?.response?.result?.label}
            value={labelText} 
            onChange={(event) => setLabelText(event.target.value)}
            inputProps={{
              style: { fontWeight: 700, fontSize: windowWidth < 1250 ? 30 : 50, color: "#007DFC" },
            }}className={noto_Sans_Thai.className}
            sx={{
              overflowWrap: 'break-word',
              pt: "80px",
              width: "100%",
              pl:0,
              input: {
                "&::placeholder": {
                  color: "007DFC",
                  opacity: 1,
                },
              },
              color: "#007DFC",
              mt: 5,
              zIndex:555,

              "& .MuiOutlinedInput-notchedOutline": {
                border: "none !important",
              },
              "& .MuiOutlinedInput-input": {
                padding: "0 !important"
              }
            }}
          />
        </Box>



<Box>

{resultState?.response?.result?.content && htmlBase64 && (
        <UpdateEditor 
          html={htmlBase64}
          label={resultState.response.result.label}
          content={content}
          setContent={setContent}
          
        /> 
      )}
      
      </Box>
<Box sx={{position:"absolute",display:windowWidth < 820 ? "none" : "flex",justifyContent:"start",mt:"170px",width:"80.5%",}}><Box><Button
  variant="contained"
  startIcon={<svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    fill="none"
    viewBox="0 0 20 20"
  >
    <path
      fill="#fff"
      d="M5.833 17.5c-.458 0-.85-.163-1.177-.49a1.605 1.605 0 01-.49-1.177V5h-.833V3.333H7.5V2.5h5v.833h4.166V5h-.833v10.833c0 .459-.163.851-.49 1.177-.326.327-.718.49-1.177.49H5.833zM14.166 5H5.833v10.833h8.333V5zM7.5 14.167h1.666v-7.5H7.5v7.5zm3.333 0H12.5v-7.5h-1.667v7.5z"
    ></path>
  </svg>}
  sx={{
    display:"flex",
    width: "150px",
    height: "50px",
    bgcolor: "#E73D3D",
    zIndex:555,
    "&:hover": {
      bgcolor: "#F11D1D",
    },
    "&.MuiButton-root": {
      boxShadow: "none !important",
      borderRadius: "8px !important",
    },
    
  }}
  onClick={() => setDeleteDialogToggle(true)}
>
  <Typography
    sx={{ fontSize: 18, fontWeight: 500, color: "#FFFFFF" }}className={noto_Sans_Thai.className}
  >
    ลบบทความ
  </Typography>
</Button></Box></Box>
<Box sx={{position:"absolute",display:"flex",justifyContent:"end",mt:"170px",width:"80.5%",}}>


<Box sx={{display:"flex",}}> 

<Box sx={{mr:windowWidth < 1250 ? 13 : 15}}> 
<ThemeProvider theme={theme}>
<FormControl sx={{  minWidth: 120 }}>
  
<Select
value={Type === "นวัตกรรมด้านการแพทย์"  || " การดูแลสุขภาพ" ? Type : "กรุณาเลือกประเภท"}
onChange={handleChangeType}
inputProps={{ 'aria-label': 'Without label' ,}}
IconComponent={KeyboardArrowDownIcon}
sx={{height: 50,
width:{xs:"213px",lg:"225px"} ,
color: "#007DFC",
backgroundColor: "#fff",
fontWeight: 600,
fontSize:16,
position:"absolute",

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

    <MenuItem  value="นวัตกรรมด้านการแพทย์" 
    sx={{fontSize: 16 , fontWeight:600}}className={noto_Sans_Thai.className}>
    นวัตกรรมด้านการแพทย์
    </MenuItem>

    <MenuItem  value="การดูแลสุขภาพ" 
    sx={{fontSize: 16 , fontWeight:600}}className={noto_Sans_Thai.className}>
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
    width: {md:"106px",lg:"213px"},
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
  onClick={handleEditArticle}
>
  <Typography
    sx={{ fontSize: 18, fontWeight: 500, color: "#FFFFFF" }}className={noto_Sans_Thai.className}
  >
    บันทึก
  </Typography>
</Button>
</Box>




</Box>
</Box>


      </Box>
      <Box sx={{
    display: windowWidth < 820 ? "flex" : "none",
    justifyContent: "center",
    alignItems: "flex-end",
    marginBottom: 0,
    pb:8
    }}><Button
  variant="contained"
  startIcon={<svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    fill="none"
    viewBox="0 0 20 20"
  >
    <path
      fill="#fff"
      d="M5.833 17.5c-.458 0-.85-.163-1.177-.49a1.605 1.605 0 01-.49-1.177V5h-.833V3.333H7.5V2.5h5v.833h4.166V5h-.833v10.833c0 .459-.163.851-.49 1.177-.326.327-.718.49-1.177.49H5.833zM14.166 5H5.833v10.833h8.333V5zM7.5 14.167h1.666v-7.5H7.5v7.5zm3.333 0H12.5v-7.5h-1.667v7.5z"
    ></path>
  </svg>}
  sx={{
    display:"flex",
    width: "150px",
    height: "50px",
    bgcolor: "#E73D3D",
    zIndex:555,
    "&:hover": {
      bgcolor: "#F11D1D",
    },
    "&.MuiButton-root": {
      boxShadow: "none !important",
      borderRadius: "8px !important",
    },
    
  }}
  onClick={() => setDeleteDialogToggle(true)}
>
  <Typography
    sx={{ fontSize: 18, fontWeight: 500, color: "#FFFFFF" }}className={noto_Sans_Thai.className}
  >
    ลบบทความ
  </Typography>
</Button></Box>

      </ThemeProvider>
    </>
  );
}
