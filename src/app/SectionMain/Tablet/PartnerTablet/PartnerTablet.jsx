"use client";

import { Box, Grid, Typography } from "@mui/material";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import Wecan from "./components/Wecan";
import Bighit from "./components/Bighit";
import Sm from "./components/Sm";
import Ap from "./components/Ap";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Noto_Sans_Thai } from 'next/font/google'
import WecanPartner from "../../../../assets/Wecan_Partner.png"
import SmPartner from "../../../../assets/SM_Partner.png"
import BighitPartner from "../../../../assets/BigHit_Partner.png"
import ApPartner from "../../../../assets/AP_Partner.png"
const noto_Sans_Thai = Noto_Sans_Thai({
  weights: ['220', '500' , '600' , '700'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
})
export default function PartnerTablet() {
  const [tabBighit, setTabBighit] = useState(false);
  const [tabSM, setTabSM] = useState(false);
  const [tabWecan, setTabWecan] = useState(false);
  const [tabAP, setTabAP] = useState(true);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);
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
      fontFamily: "Noto Sans Thai, sans-serif",
    },
  });

  const [boxPositionBighit, setBoxPositionBighit] = useState({
    top: 120,
    left: 220,
  });

  const [boxPositionSM, setBoxPositionSM] = useState({
    top: 110,
  });

  const [boxPositionAP, setBoxPositionAP] = useState({
    top: 200,
    left: 260,
  });

  const [boxPositionWecan, setBoxPositionWecan] = useState({
    top: 320,
    left: 100,
  });

  const handleImageClickAP = () => {
    const imageElementBighit = document.getElementById("BighitImg");
    const imageElementSM = document.getElementById("SMImg");
    const imageElementWecan = document.getElementById("WecanImg");
    const imageElementAP = document.getElementById("APImg");

    if (imageElementAP) {
      const currentWidth = imageElementAP.width;
      const currentHeight = imageElementAP.height;

      if (currentWidth === 165 && currentHeight === 165) {
        setTimeout(() => {
          const newTop = 110;
          const newLeft = 0;
          setBoxPositionAP({ top: newTop, left: newLeft });
          imageElementAP.width = 215;
          imageElementAP.height = 215;

          setTimeout(() => {
            const newTop1 = 120;
            const newLeft1 = 220;
            setBoxPositionAP({ top: newTop1, left: newLeft1 });
            imageElementAP.width = 109;
            imageElementAP.height = 109;

            setTimeout(() => {
              const newTop2 = 200;
              const newLeft2 = 260;
              setBoxPositionAP({ top: newTop2, left: newLeft2 });
              imageElementAP.width = 294;
              imageElementAP.height = 294;
            }, 500);
          }, 500);
        }, 500);
      }

      if (currentWidth === 215 && currentHeight === 215) {
        setTimeout(() => {
          const newTop1 = 120;
          const newLeft1 = 220;
          setBoxPositionAP({ top: newTop1, left: newLeft1 });
          imageElementAP.width = 109;
          imageElementAP.height = 109;

          setTimeout(() => {
            const newTop2 = 200;
            const newLeft2 = 260;
            setBoxPositionAP({ top: newTop2, left: newLeft2 });
            imageElementAP.width = 294;
            imageElementAP.height = 294;
          }, 500);
        }, 500);
      }

      if (currentWidth === 109 && currentHeight === 109) {
        setTimeout(() => {
          const newTop2 = 200;
          const newLeft2 = 260;
          setBoxPositionAP({ top: newTop2, left: newLeft2 });
          imageElementAP.width = 294;
          imageElementAP.height = 294;
        }, 500);
      }
    }

    if (imageElementBighit) {
      const currentWidth = imageElementBighit.width;
      const currentHeight = imageElementBighit.height;

      if (currentWidth === 294 && currentHeight === 294) {
        setTimeout(() => {
          const newTop = 320;
          const newLeft = 100;
          setBoxPositionBighit({ top: newTop, left: newLeft });
          imageElementBighit.width = 165;
          imageElementBighit.height = 165;

          setTimeout(() => {
            const newTop1 = 110;
            const newLeft1 = 0;
            setBoxPositionBighit({ top: newTop1, left: newLeft1 });
            imageElementBighit.width = 215;
            imageElementBighit.height = 215;

            setTimeout(() => {
              const newTop2 = 120;
              const newLeft2 = 220;
              setBoxPositionBighit({ top: newTop2, left: newLeft2 });
              imageElementBighit.width = 109;
              imageElementBighit.height = 109;
            }, 500);
          }, 500);
        }, 500);
      }

      if (currentWidth === 165 && currentHeight === 165) {
        setTimeout(() => {
          const newTop = 110;
          const newLeft = 0;
          setBoxPositionBighit({ top: newTop, left: newLeft });
          imageElementBighit.width = 215;
          imageElementBighit.height = 215;

          setTimeout(() => {
            const newTop2 = 120;
            const newLeft2 = 220;
            setBoxPositionBighit({ top: newTop2, left: newLeft2 });
            imageElementBighit.width = 109;
            imageElementBighit.height = 109;
          }, 500);
        }, 500);
      }

      if (currentWidth === 215 && currentHeight === 215) {
        setTimeout(() => {
          const newTop2 = 120;
          const newLeft2 = 220;
          setBoxPositionBighit({ top: newTop2, left: newLeft2 });
          imageElementBighit.width = 109;
          imageElementBighit.height = 109;
        }, 500);
      }
    }

    if (imageElementSM) {
      const currentWidth = imageElementSM.width;
      const currentHeight = imageElementSM.height;

      if (currentWidth === 294 && currentHeight === 294) {
        setTimeout(() => {
          const newTop = 320;
          const newLeft = 100;
          setBoxPositionSM({ top: newTop, left: newLeft });
          imageElementSM.width = 165;
          imageElementSM.height = 165;

          setTimeout(() => {
            const newTop1 = 110;
            const newLeft1 = 0;
            setBoxPositionSM({ top: newTop1, left: newLeft1 });
            imageElementSM.width = 215;
            imageElementSM.height = 215;
          }, 500);
        }, 500);
      }

      if (currentWidth === 165 && currentHeight === 165) {
        setTimeout(() => {
          const newTop1 = 110;
          const newLeft1 = 0;
          setBoxPositionSM({ top: newTop1, left: newLeft1 });
          imageElementSM.width = 215;
          imageElementSM.height = 215;
        }, 500);
      }

      if (currentWidth === 109 && currentHeight === 109) {
        setTimeout(() => {
          const newTop = 200;
          const newLeft = 260;
          setBoxPositionSM({ top: newTop, left: newLeft });
          imageElementSM.width = 294;
          imageElementSM.height = 294;

          setTimeout(() => {
            const newTop1 = 320;
            const newLeft1 = 100;
            setBoxPositionSM({ top: newTop1, left: newLeft1 });
            imageElementSM.width = 165;
            imageElementSM.height = 165;

            setTimeout(() => {
              const newTop2 = 110;
              const newLeft2 = 0;
              setBoxPositionSM({ top: newTop2, left: newLeft2 });
              imageElementSM.width = 215;
              imageElementSM.height = 215;
            }, 500);
          }, 500);
        }, 500);
      }
    }

    if (imageElementWecan) {
      const currentWidth = imageElementWecan.width;
      const currentHeight = imageElementWecan.height;

      if (currentWidth === 215 && currentHeight === 215) {
        setTimeout(() => {
          const newTop = 120;
          const newLeft = 220;
          setBoxPositionWecan({ top: newTop, left: newLeft });
          imageElementWecan.width = 109;
          imageElementWecan.height = 109;

          setTimeout(() => {
            const newTop1 = 200;
            const newLeft1 = 260;
            setBoxPositionWecan({ top: newTop1, left: newLeft1 });
            imageElementWecan.width = 294;
            imageElementWecan.height = 294;

            setTimeout(() => {
              const newTop2 = 320;
              const newLeft2 = 100;
              setBoxPositionWecan({ top: newTop2, left: newLeft2 });
              imageElementWecan.width = 165;
              imageElementWecan.height = 165;
            }, 500);
          }, 500);
        }, 500);
      }
      if (currentWidth === 109 && currentHeight === 109) {
        setTimeout(() => {
          const newTop = 200;
          const newLeft = 260;
          setBoxPositionWecan({ top: newTop, left: newLeft });
          imageElementWecan.width = 294;
          imageElementWecan.height = 294;

          setTimeout(() => {
            const newTop1 = 320;
            const newLeft1 = 100;
            setBoxPositionWecan({ top: newTop1, left: newLeft1 });
            imageElementWecan.width = 165;
            imageElementWecan.height = 165;
          }, 500);
        }, 500);
      }

      if (currentWidth === 294 && currentHeight === 294) {
        setTimeout(() => {
          const newTop1 = 320;
          const newLeft1 = 100;
          setBoxPositionWecan({ top: newTop1, left: newLeft1 });
          imageElementWecan.width = 165;
          imageElementWecan.height = 165;
        }, 500);
      }
    }
    setTimeout(() => {
      setTabAP(true);
      setTabBighit(false);
      setTabSM(false);
      setTabWecan(false);
    }, 500);
  };

  const handleImageClickWecan = () => {
    const imageElementBighit = document.getElementById("BighitImg");
    const imageElementSM = document.getElementById("SMImg");
    const imageElementWecan = document.getElementById("WecanImg");
    const imageElementAP = document.getElementById("APImg");

    if (imageElementWecan) {
      const currentWidth = imageElementWecan.width;
      const currentHeight = imageElementWecan.height;

      if (currentWidth === 165 && currentHeight === 165) {
        setTimeout(() => {
          const newTop = 110;
          const newLeft = 0;
          setBoxPositionWecan({ top: newTop, left: newLeft });
          imageElementWecan.width = 215;
          imageElementWecan.height = 215;

          setTimeout(() => {
            const newTop1 = 120;
            const newLeft1 = 220;

            setBoxPositionWecan({ top: newTop1, left: newLeft1 });
            imageElementWecan.width = 109;
            imageElementWecan.height = 109;

            setTimeout(() => {
              const newTop2 = 200;
              const newLeft2 = 260;

              setBoxPositionWecan({ top: newTop2, left: newLeft2 });
              imageElementWecan.width = 294;
              imageElementWecan.height = 294;
            }, 500);
          }, 500);
        }, 500);
      }

      if (currentWidth === 215 && currentHeight === 215) {
        setTimeout(() => {
          const newTop = 120;
          const newLeft = 220;
          setBoxPositionWecan({ top: newTop, left: newLeft });
          imageElementWecan.width = 109;
          imageElementWecan.height = 109;

          setTimeout(() => {
            const newTop1 = 200;
            const newLeft1 = 260;

            setBoxPositionWecan({ top: newTop1, left: newLeft1 });
            imageElementWecan.width = 294;
            imageElementWecan.height = 294;
          }, 500);
        }, 500);
      }
      if (currentWidth === 109 && currentHeight === 109) {
        setTimeout(() => {
          const newTop2 = 200;
          const newLeft2 = 260;
          setBoxPositionWecan({ top: newTop2, left: newLeft2 });
          imageElementWecan.width = 294;
          imageElementWecan.height = 294;
        }, 500);
      }
    }

    if (imageElementBighit) {
      const currentWidth = imageElementBighit.width;
      const currentHeight = imageElementBighit.height;

      if (currentWidth === 109 && currentHeight === 109) {
        setTimeout(() => {
          const newTop = 200;
          const newLeft = 260;
          setBoxPositionBighit({ top: newTop, left: newLeft });
          imageElementBighit.width = 294;
          imageElementBighit.height = 294;

          setTimeout(() => {
            const newTop1 = 320;
            const newLeft1 = 100;
            setBoxPositionBighit({ top: newTop1, left: newLeft1 });
            imageElementBighit.width = 165;
            imageElementBighit.height = 165;

            setTimeout(() => {
              const newTop2 = 110;
              const newLeft2 = 0;
              setBoxPositionBighit({ top: newTop2, left: newLeft2 });
              imageElementBighit.width = 215;
              imageElementBighit.height = 215;
            }, 500);
          }, 500);
        }, 500);
      }

      if (currentWidth === 294 && currentHeight === 294) {
        setTimeout(() => {
          const newTop = 320;
          const newLeft = 100;
          setBoxPositionBighit({ top: newTop, left: newLeft });
          imageElementBighit.width = 165;
          imageElementBighit.height = 165;

          setTimeout(() => {
            const newTop1 = 110;
            const newLeft1 = 0;
            setBoxPositionBighit({ top: newTop1, left: newLeft1 });
            imageElementBighit.width = 215;
            imageElementBighit.height = 215;
          }, 500);
        }, 500);
      }

      if (currentWidth === 165 && currentHeight === 165) {
        setTimeout(() => {
          const newTop = 110;
          const newLeft = 0;
          setBoxPositionBighit({ top: newTop, left: newLeft });
          imageElementBighit.width = 215;
          imageElementBighit.height = 215;
        }, 500);
      }
    }

    if (imageElementSM) {
      const currentWidth = imageElementSM.width;
      const currentHeight = imageElementSM.height;

      if (currentWidth === 215 && currentHeight === 215) {
        setTimeout(() => {
          const newTop = 120;
          const newLeft = 220;
          setBoxPositionSM({ top: newTop, left: newLeft });
          imageElementSM.width = 109;
          imageElementSM.height = 109;

          setTimeout(() => {
            const newTop1 = 200;
            const newLeft1 = 260;
            setBoxPositionSM({ top: newTop1, left: newLeft1 });
            imageElementSM.width = 294;
            imageElementSM.height = 294;

            setTimeout(() => {
              const newTop2 = 320;
              const newLeft2 = 100;
              setBoxPositionSM({ top: newTop2, left: newLeft2 });
              imageElementSM.width = 165;
              imageElementSM.height = 165;
            }, 500);
          }, 500);
        }, 500);
      }

      if (currentWidth === 109 && currentHeight === 109) {
        setTimeout(() => {
          const newTop = 200;
          const newLeft = 260;
          setBoxPositionSM({ top: newTop, left: newLeft });
          imageElementSM.width = 294;
          imageElementSM.height = 294;

          setTimeout(() => {
            const newTop1 = 320;
            const newLeft1 = 100;
            setBoxPositionSM({ top: newTop1, left: newLeft1 });
            imageElementSM.width = 165;
            imageElementSM.height = 165;
          }, 500);
        }, 500);
      }

      if (currentWidth === 294 && currentHeight === 294) {
        setTimeout(() => {
          const newTop = 320;
          const newLeft = 100;
          setBoxPositionSM({ top: newTop, left: newLeft });
          imageElementSM.width = 165;
          imageElementSM.height = 165;
        }, 500);
      }
    }

    if (imageElementAP) {
      const currentWidth = imageElementAP.width;
      const currentHeight = imageElementAP.height;

      if (currentWidth === 294 && currentHeight === 294) {
        setTimeout(() => {
          const newTop = 320;
          const newLeft = 100;
          setBoxPositionAP({ top: newTop, left: newLeft });
          imageElementAP.width = 165;
          imageElementAP.height = 165;

          setTimeout(() => {
            const newTop1 = 110;
            const newLeft1 = 0;
            setBoxPositionAP({ top: newTop1, left: newLeft1 });
            imageElementAP.width = 215;
            imageElementAP.height = 215;

            setTimeout(() => {
              const newTop2 = 120;
              const newLeft2 = 220;
              setBoxPositionAP({ top: newTop2, left: newLeft2 });
              imageElementAP.width = 109;
              imageElementAP.height = 109;
            }, 500);
          }, 500);
        }, 500);
      }

      if (currentWidth === 165 && currentHeight === 165) {
        setTimeout(() => {
          const newTop = 110;
          const newLeft = 0;
          setBoxPositionAP({ top: newTop, left: newLeft });
          imageElementAP.width = 215;
          imageElementAP.height = 215;

          setTimeout(() => {
            const newTop1 = 120;
            const newLeft1 = 220;
            setBoxPositionAP({ top: newTop1, left: newLeft1 });
            imageElementAP.width = 109;
            imageElementAP.height = 109;
          }, 500);
        }, 500);
      }

      if (currentWidth === 215 && currentHeight === 215) {
        setTimeout(() => {
          const newTop = 120;
          const newLeft = 220;
          setBoxPositionAP({ top: newTop, left: newLeft });
          imageElementAP.width = 109;
          imageElementAP.height = 109;
        }, 500);
      }
    }
    setTimeout(() => {
      setTabAP(false);
      setTabBighit(false);
      setTabSM(false);
      setTabWecan(true);
    }, 500);
  };

  const handleImageClickSM = () => {
    const imageElementBighit = document.getElementById("BighitImg");
    const imageElementSM = document.getElementById("SMImg");
    const imageElementWecan = document.getElementById("WecanImg");
    const imageElementAP = document.getElementById("APImg");

    if (imageElementSM) {
      const currentWidth = imageElementSM.width;
      const currentHeight = imageElementSM.height;

      if (currentWidth === 215 && currentHeight === 215) {
        setTimeout(() => {
          const newTop = 120;
          const newLeft = 220;
          setBoxPositionSM({ top: newTop, left: newLeft });
          imageElementSM.width = 109;
          imageElementSM.height = 109;

          setTimeout(() => {
            const newTop2 = 200;
            const newLeft2 = 260;

            setBoxPositionSM({ top: newTop2, left: newLeft2 });
            imageElementSM.width = 294;
            imageElementSM.height = 294;
          }, 500);
        }, 500);
      }

      if (currentWidth === 109 && currentHeight === 109) {
        setTimeout(() => {
          const newTop = 200;
          const newLeft = 260;
          setBoxPositionSM({ top: newTop, left: newLeft });
          imageElementSM.width = 294;
          imageElementSM.height = 294;
        }, 500);
      }

      if (currentWidth === 165 && currentHeight === 165) {
        setTimeout(() => {
          const newTop = 110;
          const newLeft = 0;
          setBoxPositionSM({ top: newTop, left: newLeft });
          imageElementSM.width = 215;
          imageElementSM.height = 215;

          setTimeout(() => {
            const newTop1 = 120;
            const newLeft1 = 220;
            setBoxPositionSM({ top: newTop1, left: newLeft1 });
            imageElementSM.width = 109;
            imageElementSM.height = 109;

            setTimeout(() => {
              const newTop2 = 200;
              const newLeft2 = 260;
              setBoxPositionSM({ top: newTop2, left: newLeft2 });
              imageElementSM.width = 294;
              imageElementSM.height = 294;
            }, 500);
          }, 500);
        }, 500);
      }

      if (imageElementBighit) {
        const currentWidth = imageElementBighit.width;
        const currentHeight = imageElementBighit.height;

        if (currentWidth === 109 && currentHeight === 109) {
          setTimeout(() => {
            const newTop = 200;
            const newLeft = 260;
            setBoxPositionBighit({ top: newTop, left: newLeft });
            imageElementBighit.width = 294;
            imageElementBighit.height = 294;

            setTimeout(() => {
              const newTop1 = 320;
              const newLeft1 = 100;
              setBoxPositionBighit({ top: newTop1, left: newLeft1 });
              imageElementBighit.width = 165;
              imageElementBighit.height = 165;
            }, 500);
          }, 500);
        }

        if (currentWidth === 294 && currentHeight === 294) {
          setTimeout(() => {
            const newTop = 320;
            const newLeft = 100;
            setBoxPositionBighit({ top: newTop, left: newLeft });
            imageElementBighit.width = 165;
            imageElementBighit.height = 165;
          }, 500);
        }

        if (currentWidth === 215 && currentHeight === 215) {
          setTimeout(() => {
            const newTop = 120;
            const newLeft = 220;

            setBoxPositionBighit({ top: newTop, left: newLeft });
            imageElementBighit.width = 109;
            imageElementBighit.height = 109;

            setTimeout(() => {
              const newTop1 = 200;
              const newLeft1 = 260;

              setBoxPositionBighit({ top: newTop1, left: newLeft1 });
              imageElementBighit.width = 294;
              imageElementBighit.height = 294;

              setTimeout(() => {
                const newTop2 = 320;
                const newLeft2 = 100;

                setBoxPositionBighit({ top: newTop2, left: newLeft2 });
                imageElementBighit.width = 165;
                imageElementBighit.height = 165;
              }, 500);
            }, 500);
          }, 500);
        }
      }

      if (imageElementAP) {
        const currentWidth = imageElementAP.width;
        const currentHeight = imageElementAP.height;

        if (currentWidth === 294 && currentHeight === 294) {
          setTimeout(() => {
            const newTop = 320;
            const newLeft = 100;
            setBoxPositionAP({ top: newTop, left: newLeft });
            imageElementAP.width = 165;
            imageElementAP.height = 165;

            setTimeout(() => {
              const newTop1 = 110;
              const newLeft1 = 0;
              setBoxPositionAP({ top: newTop1, left: newLeft1 });
              imageElementAP.width = 215;
              imageElementAP.height = 215;
            }, 500);
          }, 500);
        }

        if (currentWidth === 165 && currentHeight === 165) {
          setTimeout(() => {
            const newTop = 110;
            const newLeft = 0;
            setBoxPositionAP({ top: newTop, left: newLeft });
            imageElementAP.width = 215;
            imageElementAP.height = 215;
          }, 500);
        }

        if (currentWidth === 109 && currentHeight === 109) {
          setTimeout(() => {
            const newTop = 200;
            const newLeft = 260;
            setBoxPositionAP({ top: newTop, left: newLeft });
            imageElementAP.width = 294;
            imageElementAP.height = 294;

            setTimeout(() => {
              const newTop1 = 320;
              const newLeft1 = 100;
              setBoxPositionAP({ top: newTop1, left: newLeft1 });
              imageElementAP.width = 165;
              imageElementAP.height = 165;

              setTimeout(() => {
                const newTop2 = 110;
                const newLeft2 = 0;
                setBoxPositionAP({ top: newTop2, left: newLeft2 });
                imageElementAP.width = 215;
                imageElementAP.height = 215;
              }, 500);
            }, 500);
          }, 500);
        }
      }

      if (imageElementWecan) {
        const currentWidth = imageElementWecan.width;
        const currentHeight = imageElementWecan.height;

        if (currentWidth === 165 && currentHeight === 165) {
          setTimeout(() => {
            const newTop = 110;
            const newLeft = 0;
            setBoxPositionWecan({ top: newTop, left: newLeft });
            imageElementWecan.width = 215;
            imageElementWecan.height = 215;

            setTimeout(() => {
              const newTop = 120;
              const newLeft = 220;
              setBoxPositionWecan({ top: newTop, left: newLeft });
              imageElementWecan.width = 109;
              imageElementWecan.height = 109;
            }, 500);
          }, 500);
        }

        if (currentWidth === 215 && currentHeight === 215) {
          setTimeout(() => {
            const newTop = 120;
            const newLeft = 220;
            setBoxPositionWecan({ top: newTop, left: newLeft });
            imageElementWecan.width = 109;
            imageElementWecan.height = 109;
          }, 500);
        }

        if (currentWidth === 294 && currentHeight === 294) {
          setTimeout(() => {
            const newTop = 320;
            const newLeft = 100;
            setBoxPositionWecan({ top: newTop, left: newLeft });
            imageElementWecan.width = 165;
            imageElementWecan.height = 165;

            setTimeout(() => {
              const newTop1 = 110;
              const newLeft1 = 0;
              setBoxPositionWecan({ top: newTop1, left: newLeft1 });
              imageElementWecan.width = 215;
              imageElementWecan.height = 215;

              setTimeout(() => {
                const newTop2 = 120;
                const newLeft2 = 220;
                setBoxPositionWecan({ top: newTop2, left: newLeft2 });
                imageElementWecan.width = 109;
                imageElementWecan.height = 109;
              }, 500);
            }, 500);
          }, 500);
        }
      }
    }
    setTimeout(() => {
      setTabAP(false);
      setTabBighit(false);
      setTabSM(true);
      setTabWecan(false);
    }, 500);
  };

  const handleImageClickBighit = () => {
    const imageElementBighit = document.getElementById("BighitImg");
    const imageElementSM = document.getElementById("SMImg");
    const imageElementWecan = document.getElementById("WecanImg");
    const imageElementAP = document.getElementById("APImg");

    if (imageElementBighit) {
      const currentWidth = imageElementBighit.width;
      const currentHeight = imageElementBighit.height;

      if (currentWidth === 109 && currentHeight === 109) {
        setTimeout(() => {
          const newTop = 200;
          const newLeft = 260;
          setBoxPositionBighit({ top: newTop, left: newLeft });
          imageElementBighit.width = 294;
          imageElementBighit.height = 294;
        }, 500);
      }

      if (currentWidth === 165 && currentHeight === 165) {
        setTimeout(() => {
          const newTop1 = 110;
          const newLeft1 = 0;
          setBoxPositionBighit({ top: newTop1, left: newLeft1 });

          imageElementBighit.width = 215;
          imageElementBighit.height = 215;

          setTimeout(() => {
            const newTop2 = 120;
            const newLeft2 = 220;
            setBoxPositionBighit({ top: newTop2, left: newLeft2 });

            imageElementBighit.width = 109;
            imageElementBighit.height = 109;

            setTimeout(() => {
              const newTop3 = 200;
              const newLeft3 = 260;
              setBoxPositionBighit({ top: newTop3, left: newLeft3 });

              imageElementBighit.width = 294;
              imageElementBighit.height = 294;
            }, 500);
          }, 500);
        }, 500);
      }

      if (currentWidth === 215 && currentHeight === 215) {
        setTimeout(() => {
          const newTop5 = 120;
          const newLeft5 = 220;

          setBoxPositionBighit({ top: newTop5, left: newLeft5 });
          imageElementBighit.width = 109;
          imageElementBighit.height = 109;

          setTimeout(() => {
            const newTop6 = 200;
            const newLeft6 = 260;

            setBoxPositionBighit({ top: newTop6, left: newLeft6 });
            imageElementBighit.width = 294;
            imageElementBighit.height = 294;
          }, 500);
        }, 500);
      }
    }

    if (imageElementSM) {
      const currentWidth = imageElementSM.width;
      const currentHeight = imageElementSM.height;

      if (currentWidth === 215 && currentHeight === 215) {
        setTimeout(() => {
          const newTop = 120;
          const newLeft = 220;

          setBoxPositionSM({ top: newTop, left: newLeft });
          imageElementSM.width = 109;
          imageElementSM.height = 109;
        }, 500);
      }

      if (currentWidth === 294 && currentHeight === 294) {
        setTimeout(() => {
          const newTop = 320;
          const newLeft = 100;
          setBoxPositionSM({ top: newTop, left: newLeft });
          imageElementSM.width = 165;
          imageElementSM.height = 165;

          setTimeout(() => {
            const newTop1 = 110;
            const newLeft1 = 0;
            setBoxPositionSM({ top: newTop1, left: newLeft1 });
            imageElementSM.width = 215;
            imageElementSM.height = 215;

            setTimeout(() => {
              const newTop2 = 120;
              const newLeft2 = 220;
              setBoxPositionSM({ top: newTop2, left: newLeft2 });
              imageElementSM.width = 109;
              imageElementSM.height = 109;
            }, 500);
          }, 500);
        }, 500);
      }

      if (currentWidth === 165 && currentHeight === 165) {
        setTimeout(() => {
          const newTop = 110;
          const newLeft = 0;
          setBoxPositionSM({ top: newTop, left: newLeft });
          imageElementSM.width = 215;
          imageElementSM.height = 215;

          setTimeout(() => {
            const newTop1 = 120;
            const newLeft1 = 220;
            setBoxPositionSM({ top: newTop1, left: newLeft1 });
            imageElementSM.width = 109;
            imageElementSM.height = 109;
          }, 500);
        }, 500);
      }
    }

    if (imageElementWecan) {
      const currentWidth = imageElementWecan.width;
      const currentHeight = imageElementWecan.height;

      if (currentWidth === 165 && currentHeight === 165) {
        setTimeout(() => {
          const newTop = 110;
          const newLeft = 0;
          setBoxPositionWecan({ top: newTop, left: newLeft });
          imageElementWecan.width = 215;
          imageElementWecan.height = 215;
        }, 500);
      }

      if (currentWidth === 294 && currentHeight === 294) {
        setTimeout(() => {
          const newTop1 = 320;
          const newLeft1 = 100;
          setBoxPositionWecan({ top: newTop1, left: newLeft1 });
          imageElementWecan.width = 165;
          imageElementWecan.height = 165;
          setTimeout(() => {
            const newTop2 = 110;
            const newLeft2 = 0;
            setBoxPositionWecan({ top: newTop2, left: newLeft2 });
            imageElementWecan.width = 215;
            imageElementWecan.height = 215;
          }, 500);
        }, 500);
      }

      if (currentWidth === 109 && currentHeight === 109) {
        setTimeout(() => {
          const newTop = 200;
          const newLeft = 260;
          setBoxPositionWecan({ top: newTop, left: newLeft });
          imageElementWecan.width = 294;
          imageElementWecan.height = 294;

          setTimeout(() => {
            const newTop1 = 320;
            const newLeft1 = 100;
            setBoxPositionWecan({ top: newTop1, left: newLeft1 });
            imageElementWecan.width = 165;
            imageElementWecan.height = 165;

            setTimeout(() => {
              const newTop2 = 110;
              const newLeft2 = 0;
              setBoxPositionWecan({ top: newTop2, left: newLeft2 });
              imageElementWecan.width = 215;
              imageElementWecan.height = 215;
            }, 500);
          }, 500);
        }, 500);
      }
    }

    if (imageElementAP) {
      const currentWidth = imageElementAP.width;
      const currentHeight = imageElementAP.height;

      if (currentWidth === 294 && currentHeight === 294) {
        setTimeout(() => {
          const newTop = 320;
          const newLeft = 100;
          setBoxPositionAP({ top: newTop, left: newLeft });
          imageElementAP.width = 165;
          imageElementAP.height = 165;
        }, 500);
      }

      if (currentWidth === 215 && currentHeight === 215) {
        setTimeout(() => {
          const newTop1 = 120;
          const newLeft1 = 220;
          setBoxPositionAP({ top: newTop1, left: newLeft1 });
          imageElementAP.width = 109;
          imageElementAP.height = 109;

          setTimeout(() => {
            const newTop2 = 200;
            const newLeft2 = 260;
            setBoxPositionAP({ top: newTop2, left: newLeft2 });
            imageElementAP.width = 294;
            imageElementAP.height = 294;

            setTimeout(() => {
              const newTop3 = 320;
              const newLeft3 = 100;
              setBoxPositionAP({ top: newTop3, left: newLeft3 });
              imageElementAP.width = 165;
              imageElementAP.height = 165;
            }, 500);
          }, 500);
        }, 500);
      }

      if (currentWidth === 109 && currentHeight === 109) {
        setTimeout(() => {
          const newTop = 200;
          const newLeft = 260;
          setBoxPositionAP({ top: newTop, left: newLeft });
          imageElementAP.width = 294;
          imageElementAP.height = 294;

          setTimeout(() => {
            const newTop1 = 320;
            const newLeft1 = 100;
            setBoxPositionAP({ top: newTop1, left: newLeft1 });
            imageElementAP.width = 165;
            imageElementAP.height = 165;
          }, 500);
        }, 500);
      }
    }
    setTimeout(() => {
      setTabAP(false);
      setTabBighit(true);
      setTabSM(false);
      setTabWecan(false);
    }, 500);
  };

  /* useEffect(() => {
    const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

    const autoLoopPartner = async () => {
      while (true) {
        await handleImageClickBighit();
        await delay(5000);

        await handleImageClickSM();
        await delay(5000);

        await handleImageClickWecan();
        await delay(5000);

        await handleImageClickAP();
        await delay(5000);
      }
    };

    autoLoopPartner();

    return () => {};
  }, []); */

  return (
    <>
      <ThemeProvider theme={Responsive}>
        <Box
          id="Partner-section"
          sx={{ marginTop: "auto", height: "81px", backgroundColor: "#F4FFFA" ,'@media screen and (min-width: 820px) and (max-width: 1140px)': { 
            display: "flex" 
          },
          '@media screen and (max-width: 819px), (min-width: 1141px)': { 
            display: "none" 
          }}}
        ></Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            width: "100vw",
            height: "100%",
            backgroundColor: "#F4FFFA",
            flexDirection: "column",
            pb:"60px",
            overflow:"hidden",
            '@media screen and (min-width: 820px) and (max-width: 1140px)': { 
                display: "flex" 
              },
              '@media screen and (max-width: 819px), (min-width: 1141px)': { 
                display: "none" 
              }
          }}
        >
          <Typography sx={{ fontSize: 30, fontWeight: 700, color: "#007DFC" }}className={noto_Sans_Thai.className}>
            PARTNER
          </Typography>

          <Grid container spacing={2} sx={{display: "flex",
                justifyContent: "center",
                alignItems:"center",}}>
            <Grid
              xs={12}
              xxl={6}
              sx={{
                
                mt: -10,
                display: "flex",
                justifyContent: "center",
                alignItems:"center",
                px:
      windowWidth < 850
        ? 20
        : windowWidth < 925
        ? 25
        : windowWidth < 1020
        ? 30
        : 35,
              }}
            >
              <Box
                sx={{
                  position: "relative",
                  width: "100%",
                  height: "100%",
                  
                }}
              >
                <Box
                  sx={{
                    position: "absolute",
                    transition: "left 1s, top 1s",
                    top: boxPositionSM.top,
                    left: boxPositionSM.left,
                  }}
                >
                  <Image
                    id="SMImg"
                    src={SmPartner}
                    object-fit="fill"
                    width={215}
                    height={215}
                    style={{
                      cursor: "pointer",
                      transition: "width 1s, height 1s",
                    }}
                    onClick={handleImageClickSM}
                    alt="LogoPartner"
                  />
                </Box>

                <Box
                  sx={{
                    position: "absolute",
                    left: boxPositionWecan.left,
                    top: boxPositionWecan.top,
                    transition: "left 1s, top 1s",
                  }}
                >
                  <Image
                    id="WecanImg"
                    src={WecanPartner}
                    object-fit="fill"
                    width={165}
                    height={165}
                    style={{
                      cursor: "pointer",
                      transition: "width 1s, height 1s",
                    }}
                    onClick={handleImageClickWecan}alt="LogoPartner"
                  />
                </Box>

                <Box
                  sx={{
                    position: "absolute",
                    top: boxPositionBighit.top,
                    left: boxPositionBighit.left,
                    transition: "top 1s, left 1s",
                  }}
                >
                  <Image
                    id="BighitImg"
                    src={BighitPartner}
                    object-fit="fill"
                    width={109}
                    height={109}
                    style={{
                      cursor: "pointer",
                      transition: "width 1s, height 1s",
                    }}
                    onClick={() => {
                      handleImageClickBighit();
                    }}alt="LogoPartner"
                  />
                </Box>
                <Box
                  sx={{
                    position: "absolute",
                    top: boxPositionAP.top,
                    left: boxPositionAP.left,
                    transition: "top 1s, left 1s",
                  }}
                >
                  <Image
                    id="APImg"
                    src={ApPartner}
                    object-fit="fill"
                    width={294}
                    height={294}
                    style={{
                      cursor: "pointer",
                      transition: "width 1s, height 1s",
                    }}alt="LogoPartner"
                    onClick={handleImageClickAP}
                  />
                </Box>
              </Box>
            </Grid>

            <Grid

              xs={12}
              xxl={6}
              sx={{
                display: "flex",
                justifyContent: "start",
                flexDirection: "column",
                mt: {md:windowHeight < 1000 ? "60vh" : "45vh"},
                px: {md:10,lg:15,xl:20,xxl:10},
                height:{md:"30vh"},
                  
              }}
            >
              {tabWecan && <Wecan />}
              {tabSM && <Sm />}
              {tabAP && <Ap />}
              {tabBighit && <Bighit />}
            </Grid>

           
           
          </Grid>
          <Box
            sx={{
              width:"100%",
              mt:15,
              display:"flex",
              justifyContent:"center"
            }}
          >
            <FiberManualRecordIcon
              sx={{
                color: tabAP ? "#007DFC" : "#CDCDCD",
                cursor: "pointer",mr:-0.5
              }}
              onClick={handleImageClickAP}
            />
            <FiberManualRecordIcon
              sx={{
                color: tabBighit ? "#007DFC" : "#CDCDCD",
                cursor: "pointer",mr:-0.5
              }}
              onClick={() => {
                handleImageClickBighit();
              }}
            />
            <FiberManualRecordIcon
              sx={{
                color: tabSM ? "#007DFC" : "#CDCDCD",
                cursor: "pointer",mr:-0.5
              }}
              onClick={handleImageClickSM}
            />
            <FiberManualRecordIcon
              sx={{
                color: tabWecan ? "#007DFC" : "#CDCDCD",
                cursor: "pointer",mr:-0.5
              }}
              onClick={handleImageClickWecan}
            />
          </Box>
            
        </Box>
      </ThemeProvider>
    </>
  );
}
