"use client";

import React ,{useState ,useEffect }from "react";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import Grid from "@mui/material/Grid";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Noto_Sans_Thai } from "next/font/google";
import clock from  "../../../../../assets/clock .png"
import Accuracy from  "../../../../../assets/Accuracy.png"
import Tech from  "../../../../../assets/Tech.png"
import imgPD1 from  "../../../../../assets/imgPD1.png"
import imgPD2 from  "../../../../../assets/imgPD2.png"
import imgPD3 from  "../../../../../assets/imgPD3.png"
const noto_Sans_Thai = Noto_Sans_Thai({
  weight: ['400', '500' , '600' , '700'],
  subsets: ["latin"],
  display: "swap",
});
export default function ProductDetail1Mobile() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
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
      fontFamily: "Noto Sans Thai, sans-serif",
    },
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);


  const SpecificationList = [
    { id: 1, text: "ขนาดตู้ กว้าง 1 เมตร ยาว 1.2 เมตร สูง 1.8 เมตร" },
    { id: 2, text: "ตู้ปิดมิดชิดเพื่อป้องกันแสงแดดจากภายนอกเข้าไปในตู้ยา" },
    {
      id: 3,
      text: "บรรจุยาได้ ทั้งหมด 56 แถว แถวละ 20-30 ชิ้นตามขนาดของ package",
    },
    { id: 4, text: "สามารถบรรจุยาได้มากสุดถึง 1,680 ชิ้น" },
    { id: 5, text: "จอทัสกรีนขนาด 22 นิ้ว สำหรับโต้ตอบกับผู้ใช้งาน" },
  ];

  const TechnologyList = [
    {
      id: 1,
      text: "Software บริหารจัดการตู้จ่ายยาที่ทันสมัย เพื่อแสดงสถานะต่าง ๆ",
    },
    { id: 2, text: "กล้องวงจรปิดภายในตู้เพื่อตรวจสอบความผิดปกติ" },
    { id: 3, text: "รับยาผ่านการแสกน QR code" },
    { id: 4, text: "มี GPS ระบุตำแหน่งของตู้ได้" },
    {
      id: 5,
      text: "ระบบทำความเย็นควบคุมอุณภูมิตู้เพื่อให้เหมาะสมในการเก็บรักษายา",
    },
    { id: 6, text: "ระบบ print bar code ของฉลากยาแบบอัติโนมัติ" },
  ];

  const UserCareList = [
    {
      id: 1,
      text: "สามารถรับยาได้สะดวก โดยไม่ต้องก้มรับยา",
    },
    { id: 2, text: "สามารถหยิบยาออกมาได้อย่างง่ายดาย โดยไม่เกิดอันตราย" },
    { id: 3, text: "ระบบทำความสะอาดจอทัสกรีนด้วย UV disinfection light อัตโนมัติทุกๆ 5 นาที" },
    { id: 4, text: "สามารถบอกรายละเอียดในการรับประทานยาให้กับผู้รับยาได้" },
    
    /* { id: 1, text: "สามารถรับยาได้สะดวก โดยไม่ต้องก้มรับยา" },
    { id: 2, text: "สามารถหยิบยาออกมาได้อย่างง่ายดาย โดยไม่เกิดอันตราย" },
    {
      id: 3,
      text: "ระบบทำความสะอาดจอทัสกรีนด้วย UV disinfection light อัตโนมัติทุกๆ 5 นาที",
    },
    { id: 4, text: "สามารถบอกรายละเอียดในการรับประทานยาให้กับผู้รับยาได้" }, */
  ];

  const ServiceList = [
    {
      id: 1,
      text: "สามารถออกแบบ หรือปรับเปลี่ยน spec ของ Phamacy vending machine ได้ตามใจคุณ",
    },
  ];

  return (
    <>
     <ThemeProvider theme={Responsive}>
      <Box
        sx={{
          
          width: "100vw",
          height:"100%",
          '@media screen and (min-width: 821px)': {
            display:"none"
        },
        '@media screen and (max-width: 820px)': { 
          display: "flex"
        },
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          pt: 5,
          pb: 3,
          overflowX:"hidden"
        }}
      >
        <Typography sx={{ fontSize: 24, fontWeight: 700, color: "#007DFC" ,textAlign:"center"}}className={noto_Sans_Thai.className}>
        Custom Medical Automation Machine
        </Typography>
       
        <Box sx={{ display: "flex",textAlign:"center",px:5 ,}}>
          <p  style={{color:"#007DFC",fontSize:"18px",fontWeight:500}} className={noto_Sans_Thai.className}>Smart Medical Cabinet <span style={{color:"#5D6471",fontSize:"18px",fontWeight:500}}>เป็นตู้จ่ายแบบอัตโมมัติที่จะช่วยลดเวลารอรับยา  ช่วยเพิ่มความ แม่นยำในการจ่ายยา สามารถบันทึกข้อมูลและแสดงรายงานต่าง ๆ เกี่ยวกับการจ่ายยา อาทิเช่น การตรวจสอบ ความถูกต้องของการจ่ายยา ปริมาณยาที่ถูกใช้ไป รวมถึงสามารถ</span> แจ้งเตือนเมื่อยาใกล้หมดไปที่คลังยา</p>
          </Box>
        
      

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            width: "100%",
            
            mt: 5,
            alignItems: "center",
          }}
        >
          <Box sx={{display:"flex", flexDirection:windowWidth < 1500 ? "column" : "row",justifyContent: "center",  alignItems: "center",width:"100%"}}>
            
          <Box
            sx={{
              display: "flex",

              flexDirection: "column",
              alignItems: "center",
              marginBottom: "auto",
            }}
          >
            <Box
              sx={{
                position: "relative",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="177"
                height="176"
                fill="none"
                viewBox="0 0 177 176"
              >
                <path
                  fill="#EAFCF7"
                  fillRule="evenodd"
                  d="M30.56 164.87c-43.264-30.59-36.8-95.707-2.104-135.266 39.733-45.3 102.942-30.11 122.459-10.331 16.26 16.479 45.184 54.487 4.879 119.225C127.061 184.65 53.872 181.353 30.56 164.87z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <Box
                sx={{
                  position: "absolute",
                  
                }}
              >
                <Image
                  src={clock}
                  alt="BackgroundHero"
                  objectFit="cover"
                />
              </Box>
            </Box>

            <Typography
              sx={{ fontSize: 20, fontWeight: 700, color: "#007DFC", mt: 3 }}className={noto_Sans_Thai.className}
            >
              ลดเวลาในการจ่ายยา
            </Typography>
            <Typography
              sx={{ fontSize: 18, fontWeight: 400, color: "#334258", mt: 1.5 }}className={noto_Sans_Thai.className}
            >
              สามารถจ่ายยาให้ผู้ป่วยในปริมาณที่
            </Typography>
            <Typography
              sx={{ fontSize: 18, fontWeight: 400, color: "#334258" }}className={noto_Sans_Thai.className}
            >
              มากขึ้น ในเวลาที่น้อยลง
            </Typography>
          </Box>


          
          <Box
            sx={{
              display: "flex",

              flexDirection: "column",
              alignItems: "center",
              mt:10,
              marginBottom: "auto",
            }}
          >
            <Box
              sx={{
                position: "relative",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="177"
                height="176"
                fill="none"
                viewBox="0 0 177 176"
              >
                <path
                  fill="#E3F1FF"
                  fillRule="evenodd"
                  d="M141.75 23.699c21.541 22.145 32.517 55.936 34.765 84.21 1.458 18.327-3.766 37.663-18.805 47.661-20.331 13.515-87.528 38.278-125.552 0-2.776-2.795-40.59-48.433-29.314-94.225 5.53-22.46 16.725-47.688 41.482-57.52C67.573-5.41 121.04 2.407 141.75 23.698z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <Box
                sx={{
                  position: "absolute",
                }}
              >
                <Image
                  src={Accuracy}
                  alt="BackgroundHero"
                  objectFit="cover"
                />
              </Box>
            </Box>
            <Typography
              sx={{ fontSize: 20, fontWeight: 700, color: "#007DFC", mt: 3 }}className={noto_Sans_Thai.className}
            >
              เพิ่มความแม่นยำ
            </Typography>
            <Typography
              sx={{ fontSize: 18, fontWeight: 400, color: "#334258", mt: 1.5 }}className={noto_Sans_Thai.className}
            >
              ลดความผิดพลาด จากการจ่ายยาผิด
            </Typography>
          </Box>
              <Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              alignItems: "center",
              marginBottom: "auto",
              mt:10,
            }}
          >
            <Box
              sx={{
                position: "relative",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="177"
                height="176"
                fill="none"
                viewBox="0 0 177 176"
              >
                <path
                  fill="#E5ECFE"
                  fillRule="evenodd"
                  d="M74.138 175.044C26.36 167.386.279 144.32.25 104.484.229 72.367 24.92 39.827 34.695 29.001 43.583 19.155 53.583-.536 98.025.011c35.705.44 73.634 23.256 77.22 45.946 2.942 18.622-.15 52.287-15 83.141-11.267 23.41-21.666 35.553-38.332 41.57-21.056 7.602-43.562 5.051-47.775 4.376z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <Box
                sx={{
                  position: "absolute",
                  ml: 3,
                }}
              >
                <Image
                  src={Tech}
                  alt="BackgroundHero"
                  objectFit="cover"
                />
              </Box>
            </Box>
            <Typography
              sx={{ fontSize: 20, fontWeight: 700, color: "#007DFC", mt: 3 }}className={noto_Sans_Thai.className}
            >
              ผลักดันเทคโนโลยี
            </Typography>
            <Typography
              sx={{ fontSize: 18, fontWeight: 400, color: "#334258", mt: 1.5 }}className={noto_Sans_Thai.className}
            >
              เพื่อผลักดันเทคโนโลยีการรักษาทางไกล
            </Typography>
            <Typography
              sx={{ fontSize: 18, fontWeight: 400, color: "#334258" }}className={noto_Sans_Thai.className}
            >
              telemedicine ในการจ่ายยาและรับยา
            </Typography>
          </Box>
        </Box>
        </Box>
        </Box>




        <Grid
          container
          sx={{
            display: "flex",
            justifycontent: "center",
            width: "100%",
            mt: 10,
          }}
        >

          <Grid
          lg={12}
            xl={6}
            sx={{
              width: "100%",
              display: "flex",
             
              alignItems: "center",
              flexDirection: "column",
              
              pb: 1,
            }}
          >
            <Box sx={{width:windowWidth < 650 ? 362 : 600 , height:396}}>
              <Image src={imgPD1} 
              style={{ width:"100%" , height:"100%" }}/>
            </Box>
            


              <Box sx={{width:windowWidth < 650 ? 362 : 600 , height:396,py:2}}>
              <Image
                src={imgPD2}
                style={{ width:"100%" , height:"100%" }}
              />
              </Box >


              <Box sx={{width:windowWidth < 650 ? 362 : 600 , height:396}}>
              <Image src={imgPD3} 
              style={{ width:"100%" , height:"100%" }}/>
              </Box>



            
          </Grid>





          <Grid
            xs={12}
            
            sx={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              px:5,
              pt:2
            }}
          >
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <Box sx={{ display: "flex", alignItems: "center" }}>
              <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width="32"
      height="32"
      fill="none"
      viewBox="0 0 32 32"
    >
      <rect width="32" height="32" fill="#007DFC" rx="16"></rect>
      <path fill="url(#pattern12)" d="M4 3H28V27H4z"></path>
      <defs>
        <pattern
          id="pattern12"
          width="1"
          height="1"
          patternContentUnits="objectBoundingBox"
        >
          <use transform="scale(.01563)" xlinkHref="#image0_2442_7576"></use>
        </pattern>
        <image
          id="image0_2442_7576"
          width="64"
          height="64"
          xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAOxAAADsQBlSsOGwAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAASlSURBVHic7ZtBb1VFFMfPbRV2TaAkJG+NNipG1wbd2EUrBb+BO/aQNrKEDYqfwO4sn0EjSqEkoCArTUS3urDGNFil2lAb4edizvDG+2Ze7333zH3vhf43b+6cM3PP+ffMmbnn3orsYx8mAL6mPdy2sruwmgjAaq4qKIrCxPbnLCYJYWVYCtZET1hONo4wj4DcsI6wZz4CxoYA4EpkN1gZtl1P4S0ynK8DvAtMAhPAowgBj1Q2qbodq/sPYrAZAcCLwLpOeRN4Xdsbgc6G9h0HvtD2b8DLFjYMYrQJAcBM4Pxj/X2ov/cCvXslmdddB2aq3m+kcoCG8JqIdETkuojMiMhdEZlSlW8Ddd+eUp0ZHdMRkbXWl4NFBOg6BvgXOKZ9B4BF4AxwMNA9qH2LwAHtO6ZjAU4386i+8RYETACf61R3vWMqmwOuAdvAprbnA/nzwG0dex2YbGLLIMZbEFAArwJbOt2i9n9AHE+AC6qzpH1bOkfWI7k5cPv8TsnBM8CCtv8B3sdtj9PAWWBXSZhX3RA7wJVh+1UZgeEbuAz/MW6d39D+85Ex51T2peou61i/RdaPSFzS+Qj4NRF2WRGx54GKerI6cERlf/YhFNzWeJkgp/Qj4HI7rsYRsecvFU1HZNMq+2MPAjw+rEKAP4S8saeyIQIj/RJYxoX1Te0/GxnjE99V+iwB4IRerlc2JIOPe913hXgSPKXtXdyaP4wL/UVcYgSYJZ4EV2r7NSgBFsSR3gYvkcZF1em7DY4LARO4cIbeg9BJ3I6whUuMq/QehG7p2J6D0LgQkDoKL5E+Ci9R4Sg8LgR06CbhVXXoThDuy4HuctB/R3VX9Xqd0raZnQArkOlxeGwIUBteAH5RU9YwKIhkI4BMtTqMS2JmBFgbVhW4c0IZn9QY35wAxrFW17WrGQG0XKuzRsqvSjVBRqhWV/kvaXkDRqhWNygBjZYA/Wt1C7it6gHwNy43nArkprW6YRFQt1YHcEl1TGt1rRNAulY3p+0d3GPqFHBI27sqO4lxrW4YBHiUa3XXtP9cZA5fq7uBVa2uriODjksRENHzy+FQROZrdQ+rzl8Xtbzv44fFq7HYmvZJctdg/hjMPpKqTAClWp2IfKOi9yLqvu+78hIoKxaD4a36rlZEJERTtbp53EsJX6s7gntOOE+3Vpd6YbGSzYGKftVSJL0NXlASYrioOrW2wcRcA8OKgH61ujncm5lN3GHoKjAbyPvW6saFgGy1urbQlIBstbq20IgA7W/lcZgE9pJXHdeIKTLU6saKAJXXLYmdZpifr3XttiEgot+oVtcWUn717MleKfdX3ynUIb8KvB8pv0bqM7lhYOS+Fm878p75CHhKAFq3C65zIfkoS8b/Oyr5dctfF4HgdxE5bEpvAqkwDw3NjM2iKP7/zRHdyu3bue5a96+V4f6z5QgIc8AP+vtKLgNE5KsKOmbVngj8afRH3xHuAtkJKIrizVxzV8Rx/b3fI6H7KdlPwNF27coP4Cjws/p4wveHSXBSRL4XkZeGYWCLuC8irxVF8UQkyAFFUTwWkXdE5DMR2R6ObVmxLSKfisiCd34f+xD5D9mYSn1x1UtFAAAAAElFTkSuQmCC"
        ></image>
      </defs>
    </svg>
                <Typography
                  sx={{
                    fontSize: 18,
                    fontWeight: 600,
                    color: "#007DFC",
                    ml: 2,
                  }}className={noto_Sans_Thai.className}
                >
                  Technical Specification
                </Typography>
              </Box>
              <Box sx={{ pl: 7.5, pt: 3 }}>
                <List disablePadding>
                  {SpecificationList.map((item) => (
                    <ListItem key={item.id} sx={{ mt: -2.5 }}>
                      <ListItemIcon>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="18"
                          height="15"
                          fill="none"
                          viewBox="0 0 18 15"
                        >
                          <path
                            fill="#162578"
                            d="M13.781 7.75c0 3.746-3.062 6.781-6.781 6.781A6.78 6.78 0 01.219 7.75C.219 4.031 3.254.969 7 .969c3.719 0 6.781 3.062 6.781 6.781zm-7.574 3.61l5.031-5.032a.463.463 0 000-.629l-.629-.601a.387.387 0 00-.601 0L5.906 9.199 3.965 7.285a.387.387 0 00-.602 0l-.629.602a.463.463 0 000 .629l2.844 2.843a.463.463 0 00.629 0z"
                          ></path>
                        </svg>
                      </ListItemIcon>
                      <ListItemText
                        primary={
                          <>
                            <Typography
                              sx={{
                                fontSize: 16,
                                fontWeight: 500,
                                color: "#475467",
                              }}className={noto_Sans_Thai.className}
                            >
                              {item.text}
                            </Typography>
                          </>
                        }
                        sx={{ ml: -4 }}
                      />
                    </ListItem>
                  ))}
                </List>
              </Box>
            </Box>

            <Box sx={{ display: "flex", flexDirection: "column", mt: 5 }}>
              <Box sx={{ display: "flex", alignItems: "center" }}>
              <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width="32"
      height="32"
      fill="none"
      viewBox="0 0 32 32"
    >
      <rect width="32" height="32" fill="#007DFC" rx="16"></rect>
      <path fill="url(#pattern13)" d="M4 4H28V28H4z"></path>
      <defs>
        <pattern
          id="pattern13"
          width="1"
          height="1"
          patternContentUnits="objectBoundingBox"
        >
          <use transform="scale(.00781)" xlinkHref="#image0_2442_7637"></use>
        </pattern>
        <image
          id="image0_2442_7637"
          width="128"
          height="128"
          xlinkHref="data:image/png;base64,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"
        ></image>
      </defs>
    </svg>
                <Typography
                  sx={{
                    fontSize: 18,
                    fontWeight: 600,
                    color: "#007DFC",
                    ml: 2,
                  }}className={noto_Sans_Thai.className}
                >
                  Technology
                </Typography>
              </Box>
              <Box sx={{ pl: 7.5, pt: 3 }}>
                <List disablePadding>
                  {TechnologyList.map((item) => (
                    <ListItem key={item.id} sx={{ mt: -2.5 }}>
                      <ListItemIcon>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="18"
                          height="15"
                          fill="none"
                          viewBox="0 0 18 15"
                        >
                          <path
                            fill="#162578"
                            d="M13.781 7.75c0 3.746-3.062 6.781-6.781 6.781A6.78 6.78 0 01.219 7.75C.219 4.031 3.254.969 7 .969c3.719 0 6.781 3.062 6.781 6.781zm-7.574 3.61l5.031-5.032a.463.463 0 000-.629l-.629-.601a.387.387 0 00-.601 0L5.906 9.199 3.965 7.285a.387.387 0 00-.602 0l-.629.602a.463.463 0 000 .629l2.844 2.843a.463.463 0 00.629 0z"
                          ></path>
                        </svg>
                      </ListItemIcon>
                      <ListItemText
                        primary={
                          <>
                            <Typography
                              sx={{
                                fontSize: 16,
                                fontWeight: 500,
                                color: "#475467",
                              }}className={noto_Sans_Thai.className}
                            >
                              {item.text}
                            </Typography>
                          </>
                        }
                        sx={{ ml: -4 }}
                      />
                    </ListItem>
                  ))}
                </List>
              </Box>
            </Box>

            <Box sx={{ display: "flex", flexDirection: "column", mt: 5 }}>
              <Box sx={{ display: "flex", alignItems: "center" }}>
              <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width="32"
      height="32"
      fill="none"
      viewBox="0 0 32 32"
    >
      <rect width="32" height="32" fill="#007DFC" rx="16"></rect>
      <path fill="url(#pattern14)" d="M4 4H28V28H4z"></path>
      <defs>
        <pattern
          id="pattern14"
          width="1"
          height="1"
          patternContentUnits="objectBoundingBox"
        >
          <use transform="scale(.00781)" xlinkHref="#image0_2442_7662"></use>
        </pattern>
        <image
          id="image0_2442_7662"
          width="128"
          height="128"
          xlinkHref="data:image/png;base64,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"
        ></image>
      </defs>
    </svg>
                <Typography
                  sx={{
                    fontSize: 18,
                    fontWeight: 600,
                    color: "#007DFC",
                    ml: 2,
                  }}className={noto_Sans_Thai.className}
                >
                  User Care
                </Typography>
              </Box>
              <Box sx={{ pl: 7.5, pt: 3 }}>
                <List disablePadding>
                  {UserCareList.map((item) => (
                    <ListItem key={item.id} sx={{ mt: -2.5 }}>
                      <ListItemIcon>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="18"
                          height="15"
                          fill="none"
                          viewBox="0 0 18 15"
                        >
                          <path
                            fill="#162578"
                            d="M13.781 7.75c0 3.746-3.062 6.781-6.781 6.781A6.78 6.78 0 01.219 7.75C.219 4.031 3.254.969 7 .969c3.719 0 6.781 3.062 6.781 6.781zm-7.574 3.61l5.031-5.032a.463.463 0 000-.629l-.629-.601a.387.387 0 00-.601 0L5.906 9.199 3.965 7.285a.387.387 0 00-.602 0l-.629.602a.463.463 0 000 .629l2.844 2.843a.463.463 0 00.629 0z"
                          ></path>
                        </svg>
                      </ListItemIcon>
                      <ListItemText
                        primary={
                          <>
                            <Typography
                              sx={{
                                fontSize: 16,
                                fontWeight: 500,
                                color: "#475467",
                              }}className={noto_Sans_Thai.className}
                            >
                              {item.text}
                            </Typography>
                          </>
                        }
                        sx={{ ml: -4 }}
                      />
                    </ListItem>
                  ))}
                </List>
              </Box>
            </Box>

            <Box sx={{ display: "flex", flexDirection: "column", mt: 5 }}>
              <Box sx={{ display: "flex", alignItems: "center", }}>
                <Typography
                  sx={{
                    fontSize: 18,
                    fontWeight: 600,
                    color: "#915BD7",
                    ml: 2,
                    
                    borderBottom: "5px solid #915BD7",
                  }}className={noto_Sans_Thai.className}
                >
                  Special Service
                </Typography>
              </Box>
              <Box sx={{ pl: 7.5, pt: 3 }}>
                <List disablePadding>
                  {ServiceList.map((item) => (
                    <ListItem key={item.id} sx={{ mt: -2.5 }}>
                      <ListItemIcon>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="18"
                          height="15"
                          fill="none"
                          viewBox="0 0 18 15"
                        >
                          <path
                            fill="#162578"
                            d="M13.781 7.75c0 3.746-3.062 6.781-6.781 6.781A6.78 6.78 0 01.219 7.75C.219 4.031 3.254.969 7 .969c3.719 0 6.781 3.062 6.781 6.781zm-7.574 3.61l5.031-5.032a.463.463 0 000-.629l-.629-.601a.387.387 0 00-.601 0L5.906 9.199 3.965 7.285a.387.387 0 00-.602 0l-.629.602a.463.463 0 000 .629l2.844 2.843a.463.463 0 00.629 0z"
                          ></path>
                        </svg>
                      </ListItemIcon>
                      <ListItemText
                        primary={
                          <>
                            <Typography
                              sx={{
                                fontSize: 16,
                                fontWeight: 500,
                                color: "#475467",
                              }}className={noto_Sans_Thai.className}
                            >
                              {item.text}
                            </Typography>
                          </>
                        }
                        sx={{ ml: -4 }}
                      />
                    </ListItem>
                  ))}
                </List>
              </Box>
            </Box>
          </Grid>






          
        </Grid>
      </Box>
      </ThemeProvider>
    </>
  );
}
