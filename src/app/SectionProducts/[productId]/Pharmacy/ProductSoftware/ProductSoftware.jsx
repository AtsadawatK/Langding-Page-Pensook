"use client";

import React from "react";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import Grid from "@mui/material/Grid";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Noto_Sans_Thai } from "next/font/google";

const noto_Sans_Thai = Noto_Sans_Thai({
  weight: ['400', '500' , '600' , '700'],
  subsets: ["latin"],
  display: "swap",
});
export default function ProductSoftware3() {

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
  const EasyToUseList = [
    {
      id: 1,
      text: "สามารถใช้งานได้ง่ายดายผ่าน web browser โดยไม่ต้องติดตั้งโปรแกรม",
    },
    { id: 2, text: "หน้าตาโปรแกรมถูกออกแบบเพื่อให้ใช้งานได้ง่ายที่สุด" },
    {
      id: 3,
      text: "รองรับการใช้งานผ่าน Mobile Tablet laptop Computer",
    },
    { id: 4, text: "ระบบแจ้งเตือนแบบ Real Time" },
    { id: 5, text: "สามารถทำธุรกรรมได้แบบ Real time" },
  ];

  const DataManagementList = [
    {
      id: 1,
      text: "รองรับการดูข้อมูลภาพรวมผ่าน Dashboard ทำให้ง่ายต่อการวิเคราะห์",
    },
    { id: 2, text: "รองรับการดูข้อมูลผ่านตาราง" },
    {
      id: 3,
      text: "สามารถ Export ข้อมูลไปใช้ต่อใน Excel ได้",
    },
    {
      id: 4,
      text: " สามารถจัดการข้อมูลได้ง่ายๆ ด้วยตัวเอง ไม่ต้องเรียกใช้งานฝ่าย IT",
    },
    { id: 5, text: "สามารถเพิ่ม-ลด ยาชนิดใหม่ๆ ได้อย่างง่ายดาย" },
  ];

  const SecurityList = [
    {
      id: 1,
      text: "ระบบจำกัดสิทธิ์การเข้าถึง เพื่อความปลอดภัย",
    },
    { id: 2, text: "ข้อมูลปลอดภัยด้วยเทคโนโลยีคลาวด์" },
  ];

  return (
    <>
    <ThemeProvider theme={Responsive}>
      <Box
        sx={{
          width: "100vw",
          height: "100%",
          '@media screen and (max-width: 820px)': {
            display:"none"
        },
        '@media screen and (min-width: 820px)': {
          display:"flex"
      },
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          bgcolor: "#F3F6FF",
          position: "relative",
          pb: 10,
          overflow: "hidden",
        }}
      >
        <Box sx={{ display: "flex", mt: 8 }}>
          <Typography sx={{ fontSize: {md:30,lg:40,xl:45,xxl:50}, fontWeight: 700, color: "#007DFC" }}className={noto_Sans_Thai.className}>
            PHARMACY VENDING MACHINE
          </Typography>
          <Typography
            sx={{ fontSize: {md:30,lg:40,xl:45,xxl:50}, fontWeight: 700, color: "#9747FF", ml: 1 }}className={noto_Sans_Thai.className}
          >
            SOFTWARE
          </Typography>
        </Box>
        <Box sx={{ position: "absolute", left: 10, top: 50 }}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="402"
            height="398"
            fill="none"
            viewBox="0 0 402 398"
          >
            <path
              stroke="#E7D9F9"
              strokeOpacity="0.27"
              strokeWidth="7"
              d="M398.5 199c0 53.529-30.359 102.32-80.106 137.867C268.654 372.408 199.76 394.5 123.5 394.5s-145.154-22.092-194.894-57.633C-121.141 301.32-151.5 252.529-151.5 199c0-53.529 30.359-102.32 80.106-137.867C-21.654 25.593 47.24 3.5 123.5 3.5s145.154 22.092 194.894 57.633C368.141 96.68 398.5 145.471 398.5 199z"
            ></path>
          </svg>
        </Box>
        <Box sx={{ position: "absolute", right: -5, bottom: 1 }}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="231"
            height="398"
            fill="none"
            viewBox="0 0 231 398"
          >
            <path
              stroke="#E7D9F9"
              strokeOpacity="0.27"
              strokeWidth="7"
              d="M553.5 199c0 53.529-30.359 102.32-80.106 137.867C423.654 372.408 354.76 394.5 278.5 394.5s-145.154-22.092-194.894-57.633C33.859 301.32 3.5 252.529 3.5 199c0-53.529 30.359-102.32 80.106-137.867C133.346 25.593 202.24 3.5 278.5 3.5s145.154 22.092 194.894 57.633C523.141 96.68 553.5 145.471 553.5 199z"
            ></path>
          </svg>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Grid
            container
            sx={{
              display: "flex",
              justifycontent: "center",
              width: "100%",
              mt: 12,
            }}
          >
            <Grid
              lg={12}
              xl={6}
              sx={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                px: 15,
              }}
            >
              <Box sx={{ width: 839, height: 598, position: "relative" }}>
                <Image
                  src={require("../../../../../assets/PHARMACYMACHINE SOFTWARE.png")}
                  fill={true}
                />
              </Box>
            </Grid>
            <Grid
              lg={12}
              xl={6}
              sx={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                pl:10
              }}
            >


              <Box sx={{width:"90%",display: "flex", justifyContent:"start",flexDirection: "column",}}>
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    width="60"
                    height="60"
                    fill="none"
                    viewBox="0 0 60 60"
                  >
                    <rect width="60" height="60" fill="#9747FF" rx="30"></rect>
                    <path fill="url(#pattern4)" d="M11 11H49V49H11z"></path>
                    <defs>
                      <pattern
                        id="pattern4"
                        width="1"
                        height="1"
                        patternContentUnits="objectBoundingBox"
                      >
                        <use
                          transform="scale(.00781)"
                          xlinkHref="#image0_2442_22227"
                        ></use>
                      </pattern>
                      <image
                        id="image0_2442_22227"
                        width="128"
                        height="128"
                        xlinkHref="data:image/png;base64,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"
                      ></image>
                    </defs>
                  </svg>
                  <Typography
                    sx={{
                      fontSize: 35,
                      fontWeight: 600,
                      color: "#9747FF",
                      ml: 2,
                    }}className={noto_Sans_Thai.className}
                  >
                    Easy To Use
                  </Typography>
                </Box>
                <Box sx={{ pl: 7.5, pt: 3 }}>
                  <List disablePadding>
                    {EasyToUseList.map((item) => (
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
                                  fontSize: 18,
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
                    width="60"
                    height="60"
                    fill="none"
                    viewBox="0 0 60 60"
                  >
                    <rect width="60" height="60" fill="#9747FF" rx="30"></rect>
                    <path fill="url(#pattern5)" d="M11 11H49V49H11z"></path>
                    <defs>
                      <pattern
                        id="pattern5"
                        width="1"
                        height="1"
                        patternContentUnits="objectBoundingBox"
                      >
                        <use
                          transform="scale(.00781)"
                          xlinkHref="#image0_2442_22229"
                        ></use>
                      </pattern>
                      <image
                        id="image0_2442_22229"
                        width="128"
                        height="128"
                        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAOxAAADsQBlSsOGwAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAA7XSURBVHic7Z1/tB1Vdcc/GyUQIgEULT8MLH60odQEtNBA6w+MBVZVsFZQo4CoLRSwGCi0FZcJoC6lQhIRCRC1SFHBpqigVBAxVpplFYL8DIVAjSRAUSAQ8jvk2z/O3Lxz583cO2fuzL3vvTmfte7KuefX7JfZd86Zc/beByKRSHOxToWStgH+DDgGOAB4DfDyPsg1VnkO+CczuwtA0quBLwH7V3iNzcDTwEPATcB/mdmWvMq5CiDpSOBiYGqFwkXgF2Y2DUDSxcDf13y9e4BzzOy2rMJt0hmSTNL5wC3Em18HT3rpZ/twvYOAWyXNljTsB5/1OJ+dfHxWA4uA5cCaqiVsEKuB+d73S4CNwO9XeI1xwGtxQ/f4JM+A871/s5F0pKQtGmKjpE9IGp/bKDIikTRR0oWSNnn3c4uko/IabCPpV6mbn105MmqQ9I6UEtwr6WVZFd+kdj45AHkjNSBpVureHpFV6Z+9Ci9KmpDT2Y6SjpC0a075Hkn59jnlB0qa1ssfFAlD0gRJq737e0lWpRu9CjfndLSzpEeTOs9K2j9V/ieS1iTlSyRtlyo/XUNzjPlE+oak72fdX/818Pe89Iqcft4C7JukdwHenSp/H7BDkn598vH5MENrDx9WxmtJpDZ+46V3ayV8BdjWS2/K6eQ+YH2SFvDLVLn/fRXwcIfyX5qZ8qSNVM5GL731Xgct65rZY5LeAhwL/MzMFqXKr5O0CffL/6aZpRc6zgKWAjsCV4RcO1IzyZjd4suDlidSLZLmeff3vlb+sKXgSLOICtBw8uYAkyT9eV8lidTNXlmZeQpwTPKJjHHiENBwogI0nLwh4BpgZj8FidTOhcDH0pl5CrDBzJ6rV55IP5G0Pis/DgENJypAw+m7ibek1+JMzCcDE4GdkqJVDG0gLTWzJ7N7iFRJ7Qog6eXA0cB7gOnA3gXbLQNuBxYCP+5k2x4pj68AykmXQtIrgTOBv6Xd1qAo+yefU4CVki4Dvmxmq3uVLTKEPwdYnJMOQtI4SecBv8aZl+fd/C04L5YWm3PqAewJfA5YLunjyjJqjPSGpG0lnSjp7T30cYikpcrmGUlXS/qQpAMSRbnNK18oZ7t2sKRTJF0n6YWcvu6WdGCVf/9YR9IXsraDq7zAGZLWZ9ysxZKOk7RtRps2Bcgo317SSWo3V2/xoqQTK/9Dxih5CtDzJFDOru8i4NxU0cM4n7SbyvZtZuuBayRdC/w18Bng1UnxBODrkvYys8+WvUYLSfsBn/b6H21sAK4ysxv7elVJl6V+mVvkrE+6ehN1ewJk1N9Z0jUZT4MqFODmjH5HG+skvSLn78t8AvS0ECRpFnCGl7UOmGFmM81sXS99Z2Fmq8zsJOATuElki/Mkndlj9xu7VxnxbKb9/6UrW4cASTsDpwFPANd0s9iV9E7aHQ3XAu80s5+ECFAGM/u8pEeAbzFk4TpH0j1m9tOS3Z4BrGR0DwFfMbO1pVpL+rb3iDi5S909Jf3Oq79J0tElrhk0BGS0PyX1CFwp6VWh/TSBIkOAHwvg4C79zQX8/+izzeyWCuQMwsyuSmRpsQduvSBSkOA5gKTpwPFe1g+AyyqTKJxzaXc4+aikQwYlzGijzCTQDx6xDjh9kB4+ZvYSbu7SmvxsA3xqUPKMNoIUQNJhwJu9rIvN7Dd59ftFEnTpX72sYyS9LqQPSUclc4jRyouSPhP6fxf6BPiIl14LXBp6wRqZDbyUpA04ObD9LNwcYrQyAfik3CZcYQorgKRxtI/915vZ70IuVidmthw3H2kxQy7MXVF+VbFIg+Ax4PmQBiFLwYcBO3vfvxlyoT5xHc5xFdyveQouTFoRZgJ3UNBeYQTyAnBDMicqTIgCvNVLrwHKLrjUyc24YaC1XTydggpgZptxCtQoQh6R/trAz80sL4bAwDCz54EHvKx0gIpIihAFmOylH8itNXj8X/zk3FoRIGwImOSlH61aEGAXSX9cQT/+ps6k3FoVIxcUazKDi6W8AXgw1HaykLDJbNqPGrYq5CIFmQ7cWXGfEyvuLxNJE3GyVxnxswy34gxwC1N0CNie9sDSmV4mJah7C7ZfEU4PZfA3H+AouQjkhSmqAOtp32eu6j+27lfJym0ScrgTWNana3XiVjP7bUiDQkOAmW2RtAYX3Ana1wNKY2bXJho7J1V0BfCVkt3+HfChJP1CWdlCMLPnJU3BObwMymJ5A/BgaKOQCcvjQMsSt7IDDsxsriTRvq17KnCfmV0e2l8yHrdY3qt8RUnsF0fdamLIa+BDXjpoo6UbZjYPONvPAi6T9DcluvPNxUfCY3lEE6IAd3vpacqJBVwWM5vLcCW4MkQJkuHEfzrdVZF4Y5YQBfBt/cbjwsZWSgVK8C7ax+Da7RNHOyEK8Avajzg5oWJZgJ6V4DgvvRIX2jbSgcIKkKz9X+9lvUfSa6oXqZwSSJoM+KHtvhU9irsTahDyNS89Hhf7txZKKMEshh7/Aq6uS7axRGiw6Dsl3cbQL+3jkhaY2WPVi7b1FRGG1glaSoCZLWjVkzQVeL/X9EYz68uGlVxAzb+kPdp6N5YDl5rZi/VIVQJJD3n2ZfM61Huj2g+W+qFqjvsv6ayU/duW1pNA0nZqdx59SdIb6pTHk2tftZ/HE0JfLalVlWuYmd0BfMPLOho4pwIZO11zLu3DTetJcDrOMfUgr2yBmS2pUx6PXnb/plQpSFnKCn8OcCRDwR8+J+lhM/teNWINx8zmJU8afzhI/4pWAOfVJUOWWKnvD9B5o2wvRqrrWdEhwKt/ZPK4bbFWfThmLmM4aLFJ0pvqvn5KlrenZPjDLvWv8Or21aSusiGghZn9CPhHL2s8cJOkk3qQswjzgP/IyD/TzH5W87XHHD25h5vZxbgDpluMwwVtuELSDjnNSiPn+Pld4C9SRReaWTyFrAQ9B4o0s3OBC1LZpwIPSnq3KnhDkItfdBpujD3WL8Idx54+6zhSkEoihZrZ+bgj4Xzf9L2BG4Alkj5Y9okg5+h5P3A57RHHVgPvM7OLSgkdASoMFWtmVwPTGL4nfjBwLfCUpOslnSrpDcoIZSJpJ0lT1b7EPA/4g1TVxcAhZvZvVcnfVCq1YDWz+5Nf7Bm4pVk/hsCOwHuTDwCSVgGt1bCJDBlxrpV0uJndCzzt9fEkbrhZMBbX+eXO9J1LmDHrJuCrZvaFMtes3IQ5cU26VNK/4KKEfoyc82pwpmVZ5mU74CZ69+LmE/fgFOHrpUOgjA7m0D04RxYXSfqGmT0R2rC2aOFmtjrRyn2AI4AvUdxm7Tng+0k/vzWzC8xs/hi/+QBBnr0eVrZt7U4MyaP6p8mnFUP4AJwZ9asYMjRdA/wfzunkHjNbU7dsI5zFQKd1jUnAB3q9SN+9WJLjZBfTQzzihnC7meVGOpH0ZipQgHhgRMOJCtBwgoYASbvhZuh5rMs76UPu4IhJDN9B83l8JLqdj2UKK4CkBbiAzd3qXWdmM1J5B+JO/+h2cMSzko5Kgj5F+kChIUDSBOCjBft8v4Ybi36QYqeGvBK3pBzpE0XnANvR+dGdJu08GuJE0i+P3gjlXwM/Cyzyvk/DxfIvwhMMOW+2+CLtLl21Inc2wD4BTTYDS8ysL86m/aSsAtxvZre1vkjaLqDtWr9t0j4otFkvSPoALqhk6BvQE5IOGkGh8dJ7IaX2Rpr4Gngc5f7uPWiPkjpoljIUE/Ap4H/LdDKoeDaDJMR+P824yqToETN7RtKhOOPcH5Q9oKOsAkyT5AckDLHDf4Wk41N5g4rxv4jObzc7MIL9C83sEeCRXvooqwAzKX+8/G7At0u2rZq1nbyasoxWxhpFx8K1dD7YMU3a5SlkG7fpu4B9pZACJOFPPo2zPunEZmCOmT2Tyr8aF8i4GyuAK4vIFAFJF0i6V1JpJ93CQ4CZXSjp87THC0yzLlGWdNtHgf3kDqbqtKC0apCHT4wmJP0RzuwO4JJkCT74xPVQ7+CN9BDbz8zqCDDZVPyJsyXfgxWgiesAEY+oAA0nZDv4INw7c8iybyjLgC8mQ41/7UOBkwhbiFmNC8Iw8DONRjIhwaJ/iHuHrxvh+RvKHVVzC7BLib4OA95YkVxjkqJDwMuAfi2K7JT6vhvlbj5k7zA+5aWDJ01jjaKxgjdJOgEXtKnTa2CvPMDwuMFpfg2k1xl8dqXzuT+zcUpmtJ+B2EhC1gG+B9QWASSACxI/xEwkfQT4al554j3z3rzyphHfAhpOVICGExWg4YSsA5wA/AO9TQKfBs4ys5/30EdPJPaAV+JeN0+tK8jlaCFPAdo2bCRtCywgzLo3i31xs/w/7bGfXvgU8LYkPZvhBqpjlcxNOH8I8Ddq0j77m3Geu1WwoqJ+yuJvouw6MCn6jx90YqsRrv8EWOml20y8zExyMXFPpLel4OeI+/2Dwr+nj7cSvgIsAv4qSb9O0jQz++9WoZktIy6cjEokHUy7AvxnK+EPAd+h3eJnfh2x/iL9JfHZuJyhOcA6YGGrfKsCmNkK4Cqv7etxkT+bNE6OKRILrBuAw73sK/2zBdNvAbNw0b9bBy9NBx6WNB+3G7iS+tmCcxN/qWvNSCaS9gZOxkVr84NTL8O9BW2lTQHM7FlJxwI/BnZPsnfBReDuZxTuJyW91cz+p4/XHBMkAavvYriT7Qrg6PQhFcNWAs1sKe4s3DvqErIAuwMzutaKZHE4w2/+7cChWYtemUvBZrYS5wd3fNI4xCegCjbhnkKRcG7ChdbdjBu232VmbzOzp7Iq5y4FJ+bZC4GFknYC9gP2pPfVwG5sAe5u+hJtWZIJ3hRJ49KmdVkUNQh5HliSfCKjgCI3H+JuYOOJCtBwogI0nKgADScqQMOJCtBwogI0nKgADScqQMOJCtBwRlScwOQ4mdMYOkYGhp+gdbykAzp0M9VLj0/C2vj45/tOkdTJRjEdU3BGYl7VYt9U+dmSOvktTvPS+2TI5jvBviMj6LbP7qnvMyX5UUw3AF8zs+Ud+ggKAF07kv6dIbvESO/cZ2ZTO1UYaUNAWqsjvdE1nsOIGgJwwSfnEBWhClYB5w9aiEgkMpL5f/mtMpsGDtoLAAAAAElFTkSuQmCC"
                      ></image>
                    </defs>
                  </svg>
                  <Typography
                    sx={{
                      fontSize: 35,
                      fontWeight: 600,
                      color: "#9747FF",
                      ml: 2,
                    }}className={noto_Sans_Thai.className}
                  >
                    Data Management
                  </Typography>
                </Box>
                <Box sx={{ pl: 7.5, pt: 3 }}>
                  <List disablePadding>
                    {DataManagementList.map((item) => (
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
                                  fontSize: 18,
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

              <Box sx={{ display: "flex", flexDirection: "column",justifycontent:"start", mt: 5 }}>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    width="60"
                    height="60"
                    fill="none"
                    viewBox="0 0 60 60"
                  >
                    <rect width="60" height="60" fill="#9747FF" rx="30"></rect>
                    <path fill="url(#pattern5)" d="M11 11H49V49H11z"></path>
                    <defs>
                      <pattern
                        id="pattern5"
                        width="1"
                        height="1"
                        patternContentUnits="objectBoundingBox"
                      >
                        <use
                          transform="scale(.00781)"
                          xlinkHref="#image0_2442_22229"
                        ></use>
                      </pattern>
                      <image
                        id="image0_2442_22229"
                        width="128"
                        height="128"
                        xlinkHref="data:image/png;base64,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"
                      ></image>
                    </defs>
                  </svg>
                  <Typography
                    sx={{
                      fontSize: 35,
                      fontWeight: 600,
                      color: "#9747FF",
                      ml: 2,
                    }}className={noto_Sans_Thai.className}
                  >
                    Security
                  </Typography>
                </Box>
                <Box sx={{ pl: 7.5, pt: 3 }}>
                  <List disablePadding>
                    {SecurityList.map((item) => (
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
                                  fontSize: 18,
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

</Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
      </ThemeProvider>
    </>
  );
}
