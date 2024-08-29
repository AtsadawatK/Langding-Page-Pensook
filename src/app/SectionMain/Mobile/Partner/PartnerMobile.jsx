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
import WecanPartner from "../../../../assets/Wecan_Partner.png"
import SmPartner from "../../../../assets/SM_Partner.png"
import BighitPartner from "../../../../assets/BigHit_Partner.png"
import ApPartner from "../../../../assets/AP_Partner.png"



export default function PartnerMobile() {
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
    top: 110,
    left: 300,
  });

  const [boxPositionSM, setBoxPositionSM] = useState({
    top: 110,
    left: 135,
  });

  const [boxPositionAP, setBoxPositionAP] = useState({
    top: 190,
    left: 290,
  });

  const [boxPositionWecan, setBoxPositionWecan] = useState({
    top: 270,
    left: 175,
  });

  const handleImageClickAP = () => {
    const imageElementBighit = document.getElementById("BighitImg");
    const imageElementSM = document.getElementById("SMImg");
    const imageElementWecan = document.getElementById("WecanImg");
    const imageElementAP = document.getElementById("APImg");

    if (imageElementAP) {
      const currentWidth = imageElementAP.width;
      const currentHeight = imageElementAP.height;

      if (currentWidth === 113 && currentHeight === 113) {
        setTimeout(() => {
          const newTop = 110;
          const newLeft = 135;
          setBoxPositionAP({ top: newTop, left: newLeft });
          imageElementAP.width = 149;
          imageElementAP.height = 149;

          setTimeout(() => {
            const newTop1 = 110;
            const newLeft1 = 300;
            setBoxPositionAP({ top: newTop1, left: newLeft1 });
            imageElementAP.width = 79;
            imageElementAP.height = 79;

            setTimeout(() => {
              const newTop2 = 190;
              const newLeft2 = 290;
              setBoxPositionAP({ top: newTop2, left: newLeft2 });
              imageElementAP.width = 196;
              imageElementAP.height = 196;
            }, 500);
          }, 500);
        }, 500);
      }

      if (currentWidth === 149 && currentHeight === 149) {
        setTimeout(() => {
          const newTop1 = 110;
          const newLeft1 = 300;
          setBoxPositionAP({ top: newTop1, left: newLeft1 });
          imageElementAP.width = 79;
          imageElementAP.height = 79;

          setTimeout(() => {
            const newTop2 = 190;
            const newLeft2 = 290;
            setBoxPositionAP({ top: newTop2, left: newLeft2 });
            imageElementAP.width = 196;
            imageElementAP.height = 196;
          }, 500);
        }, 500);
      }

      if (currentWidth === 79 && currentHeight === 79) {
        setTimeout(() => {
          const newTop2 = 190;
          const newLeft2 = 290;
          setBoxPositionAP({ top: newTop2, left: newLeft2 });
          imageElementAP.width = 196;
          imageElementAP.height = 196;
        }, 500);
      }
    }

    if (imageElementBighit) {
      const currentWidth = imageElementBighit.width;
      const currentHeight = imageElementBighit.height;

      if (currentWidth === 196 && currentHeight === 196) {
        setTimeout(() => {
          const newTop = 270;
          const newLeft = 175;
          setBoxPositionBighit({ top: newTop, left: newLeft });
          imageElementBighit.width = 113;
          imageElementBighit.height = 113;

          setTimeout(() => {
            const newTop1 = 110;
            const newLeft1 = 135;
            setBoxPositionBighit({ top: newTop1, left: newLeft1 });
            imageElementBighit.width = 149;
            imageElementBighit.height = 149;

            setTimeout(() => {
              const newTop2 = 110;
              const newLeft2 = 300;
              setBoxPositionBighit({ top: newTop2, left: newLeft2 });
              imageElementBighit.width = 79;
              imageElementBighit.height = 79;
            }, 500);
          }, 500);
        }, 500);
      }

      if (currentWidth === 113 && currentHeight === 113) {
        setTimeout(() => {
          const newTop = 110;
          const newLeft = 135;
          setBoxPositionBighit({ top: newTop, left: newLeft });
          imageElementBighit.width = 149;
          imageElementBighit.height = 149;

          setTimeout(() => {
            const newTop2 = 110;
            const newLeft2 = 300;
            setBoxPositionBighit({ top: newTop2, left: newLeft2 });
            imageElementBighit.width = 79;
            imageElementBighit.height = 79;
          }, 500);
        }, 500);
      }

      if (currentWidth === 149 && currentHeight === 149) {
        setTimeout(() => {
          const newTop2 = 110;
          const newLeft2 = 300;
          setBoxPositionBighit({ top: newTop2, left: newLeft2 });
          imageElementBighit.width = 79;
          imageElementBighit.height = 79;
        }, 500);
      }
    }

    if (imageElementSM) {
      const currentWidth = imageElementSM.width;
      const currentHeight = imageElementSM.height;

      if (currentWidth === 196 && currentHeight === 196) {
        setTimeout(() => {
          const newTop = 270;
          const newLeft = 175;
          setBoxPositionSM({ top: newTop, left: newLeft });
          imageElementSM.width = 113;
          imageElementSM.height = 113;

          setTimeout(() => {
            const newTop1 = 110;
            const newLeft1 = 135;
            setBoxPositionSM({ top: newTop1, left: newLeft1 });
            imageElementSM.width = 149;
            imageElementSM.height = 149;
          }, 500);
        }, 500);
      }

      if (currentWidth === 113 && currentHeight === 113) {
        setTimeout(() => {
          const newTop1 = 110;
          const newLeft1 = 135;
          setBoxPositionSM({ top: newTop1, left: newLeft1 });
          imageElementSM.width = 149;
          imageElementSM.height = 149;
        }, 500);
      }

      if (currentWidth === 79 && currentHeight === 79) {
        setTimeout(() => {
          const newTop = 190;
          const newLeft = 290;
          setBoxPositionSM({ top: newTop, left: newLeft });
          imageElementSM.width = 196;
          imageElementSM.height = 196;

          setTimeout(() => {
            const newTop1 = 270;
            const newLeft1 = 175;
            setBoxPositionSM({ top: newTop1, left: newLeft1 });
            imageElementSM.width = 113;
            imageElementSM.height = 113;

            setTimeout(() => {
              const newTop2 = 110;
              const newLeft2 = 135;
              setBoxPositionSM({ top: newTop2, left: newLeft2 });
              imageElementSM.width = 149;
              imageElementSM.height = 149;
            }, 500);
          }, 500);
        }, 500);
      }
    }

    if (imageElementWecan) {
      const currentWidth = imageElementWecan.width;
      const currentHeight = imageElementWecan.height;

      if (currentWidth === 149 && currentHeight === 149) {
        setTimeout(() => {
          const newTop = 110;
          const newLeft = 300;
          setBoxPositionWecan({ top: newTop, left: newLeft });
          imageElementWecan.width = 79;
          imageElementWecan.height = 79;

          setTimeout(() => {
            const newTop1 = 190;
            const newLeft1 = 290;
            setBoxPositionWecan({ top: newTop1, left: newLeft1 });
            imageElementWecan.width = 196;
            imageElementWecan.height = 196;

            setTimeout(() => {
              const newTop2 = 270;
              const newLeft2 = 175;
              setBoxPositionWecan({ top: newTop2, left: newLeft2 });
              imageElementWecan.width = 113;
              imageElementWecan.height = 113;
            }, 500);
          }, 500);
        }, 500);
      }
      if (currentWidth === 79 && currentHeight === 79) {
        setTimeout(() => {
          const newTop = 190;
          const newLeft = 290;
          setBoxPositionWecan({ top: newTop, left: newLeft });
          imageElementWecan.width = 196;
          imageElementWecan.height = 196;

          setTimeout(() => {
            const newTop1 = 270;
            const newLeft1 = 175;
            setBoxPositionWecan({ top: newTop1, left: newLeft1 });
            imageElementWecan.width = 113;
            imageElementWecan.height = 113;
          }, 500);
        }, 500);
      }

      if (currentWidth === 196 && currentHeight === 196) {
        setTimeout(() => {
          const newTop1 = 270;
          const newLeft1 = 175;
          setBoxPositionWecan({ top: newTop1, left: newLeft1 });
          imageElementWecan.width = 113;
          imageElementWecan.height = 113;
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

      if (currentWidth ===  113 && currentHeight === 113) {
        setTimeout(() => {
          const newTop = 110;
          const newLeft = 135;
          setBoxPositionWecan({ top: newTop, left: newLeft });
          imageElementWecan.width = 149;
          imageElementWecan.height = 149;

          setTimeout(() => {
            const newTop1 = 110;
            const newLeft1 = 300;

            setBoxPositionWecan({ top: newTop1, left: newLeft1 });
            imageElementWecan.width = 79;
            imageElementWecan.height = 79;

            setTimeout(() => {
              const newTop2 = 190;
              const newLeft2 = 290;

              setBoxPositionWecan({ top: newTop2, left: newLeft2 });
              imageElementWecan.width = 196;
              imageElementWecan.height = 196;
            }, 500);
          }, 500);
        }, 500);
      }

      if (currentWidth === 149 && currentHeight === 149) {
        setTimeout(() => {
          const newTop = 110;
          const newLeft = 300;
          setBoxPositionWecan({ top: newTop, left: newLeft });
          imageElementWecan.width = 79;
          imageElementWecan.height = 79;

          setTimeout(() => {
            const newTop1 = 190;
            const newLeft1 = 290;

            setBoxPositionWecan({ top: newTop1, left: newLeft1 });
            imageElementWecan.width = 196;
            imageElementWecan.height = 196;
          }, 500);
        }, 500);
      }
      if (currentWidth === 79 && currentHeight === 79) {
        setTimeout(() => {
          const newTop2 = 190;
          const newLeft2 = 290;
          setBoxPositionWecan({ top: newTop2, left: newLeft2 });
          imageElementWecan.width = 196;
          imageElementWecan.height = 196;
        }, 500);
      }
    }

    if (imageElementBighit) {
      const currentWidth = imageElementBighit.width;
      const currentHeight = imageElementBighit.height;

      if (currentWidth === 79 && currentHeight === 79) {
        setTimeout(() => {
          const newTop = 190;
          const newLeft = 290;
          setBoxPositionBighit({ top: newTop, left: newLeft });
          imageElementBighit.width = 196;
          imageElementBighit.height = 196;

          setTimeout(() => {
            const newTop1 = 270;
            const newLeft1 = 175;
            setBoxPositionBighit({ top: newTop1, left: newLeft1 });
            imageElementBighit.width = 113;
            imageElementBighit.height = 113;

            setTimeout(() => {
              const newTop2 = 110;
              const newLeft2 = 135;
              setBoxPositionBighit({ top: newTop2, left: newLeft2 });
              imageElementBighit.width = 149;
              imageElementBighit.height = 149;
            }, 500);
          }, 500);
        }, 500);
      }

      if (currentWidth === 196 && currentHeight === 196) {
        setTimeout(() => {
          const newTop = 270;
          const newLeft = 175;
          setBoxPositionBighit({ top: newTop, left: newLeft });
          imageElementBighit.width = 113;
          imageElementBighit.height = 113;

          setTimeout(() => {
            const newTop1 = 110;
            const newLeft1 = 135;
            setBoxPositionBighit({ top: newTop1, left: newLeft1 });
            imageElementBighit.width = 149;
            imageElementBighit.height = 149;
          }, 500);
        }, 500);
      }

      if (currentWidth === 113 && currentHeight === 113) {
        setTimeout(() => {
          const newTop = 110;
          const newLeft = 135;
          setBoxPositionBighit({ top: newTop, left: newLeft });
          imageElementBighit.width = 149;
          imageElementBighit.height = 149;
        }, 500);
      }
    }

    if (imageElementSM) {
      const currentWidth = imageElementSM.width;
      const currentHeight = imageElementSM.height;

      if (currentWidth === 149 && currentHeight === 149) {
        setTimeout(() => {
          const newTop = 110;
          const newLeft = 300;
          setBoxPositionSM({ top: newTop, left: newLeft });
          imageElementSM.width = 79;
          imageElementSM.height = 79;

          setTimeout(() => {
            const newTop1 = 190;
            const newLeft1 = 290;
            setBoxPositionSM({ top: newTop1, left: newLeft1 });
            imageElementSM.width = 196;
            imageElementSM.height = 196;

            setTimeout(() => {
              const newTop2 = 270;
              const newLeft2 = 175;
              setBoxPositionSM({ top: newTop2, left: newLeft2 });
              imageElementSM.width = 113;
              imageElementSM.height = 113;
            }, 500);
          }, 500);
        }, 500);
      }

      if (currentWidth === 79 && currentHeight === 79) {
        setTimeout(() => {
          const newTop = 190;
          const newLeft = 290;
          setBoxPositionSM({ top: newTop, left: newLeft });
          imageElementSM.width = 196;
          imageElementSM.height = 196;

          setTimeout(() => {
            const newTop1 = 270;
            const newLeft1 = 175;
            setBoxPositionSM({ top: newTop1, left: newLeft1 });
            imageElementSM.width = 113;
            imageElementSM.height = 113;
          }, 500);
        }, 500);
      }

      if (currentWidth === 196 && currentHeight === 196) {
        setTimeout(() => {
          const newTop = 270;
          const newLeft = 175;
          setBoxPositionSM({ top: newTop, left: newLeft });
          imageElementSM.width = 113;
          imageElementSM.height = 113;
        }, 500);
      }
    }

    if (imageElementAP) {
      const currentWidth = imageElementAP.width;
      const currentHeight = imageElementAP.height;

      if (currentWidth === 196 && currentHeight === 196) {
        setTimeout(() => {
          const newTop = 270;
          const newLeft = 175;
          setBoxPositionAP({ top: newTop, left: newLeft });
          imageElementAP.width = 113;
          imageElementAP.height = 113;

          setTimeout(() => {
            const newTop1 = 110;
            const newLeft1 = 135;
            setBoxPositionAP({ top: newTop1, left: newLeft1 });
            imageElementAP.width = 149;
            imageElementAP.height = 149;

            setTimeout(() => {
              const newTop2 = 110;
              const newLeft2 = 300;
              setBoxPositionAP({ top: newTop2, left: newLeft2 });
              imageElementAP.width = 79;
              imageElementAP.height = 79;
            }, 500);
          }, 500);
        }, 500);
      }

      if (currentWidth === 113 && currentHeight === 113) {
        setTimeout(() => {
          const newTop = 110;
          const newLeft = 135;
          setBoxPositionAP({ top: newTop, left: newLeft });
          imageElementAP.width = 149;
          imageElementAP.height = 149;

          setTimeout(() => {
            const newTop1 = 110;
            const newLeft1 = 300;
            setBoxPositionAP({ top: newTop1, left: newLeft1 });
            imageElementAP.width = 79;
            imageElementAP.height = 79;
          }, 500);
        }, 500);
      }

      if (currentWidth === 149 && currentHeight === 149) {
        setTimeout(() => {
          const newTop = 110;
          const newLeft = 300;
          setBoxPositionAP({ top: newTop, left: newLeft });
          imageElementAP.width = 79;
          imageElementAP.height = 79;
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

      if (currentWidth === 149 && currentHeight === 149) {
        setTimeout(() => {
          const newTop = 110;
          const newLeft = 300;
          setBoxPositionSM({ top: newTop, left: newLeft });
          imageElementSM.width = 79;
          imageElementSM.height = 79;

          setTimeout(() => {
            const newTop2 = 190;
            const newLeft2 = 290;

            setBoxPositionSM({ top: newTop2, left: newLeft2 });
            imageElementSM.width = 196;
            imageElementSM.height = 196;
          }, 500);
        }, 500);
      }

      if (currentWidth === 79 && currentHeight === 79) {
        setTimeout(() => {
          const newTop = 190;
          const newLeft = 290;
          setBoxPositionSM({ top: newTop, left: newLeft });
          imageElementSM.width = 196;
          imageElementSM.height = 196;
        }, 500);
      }

      if (currentWidth === 113 && currentHeight === 113) {
        setTimeout(() => {
          const newTop = 110;
          const newLeft = 135;
          setBoxPositionSM({ top: newTop, left: newLeft });
          imageElementSM.width = 149;
          imageElementSM.height = 149;

          setTimeout(() => {
            const newTop1 = 110;
            const newLeft1 = 300;
            setBoxPositionSM({ top: newTop1, left: newLeft1 });
            imageElementSM.width = 79;
            imageElementSM.height = 79;

            setTimeout(() => {
              const newTop2 = 190;
              const newLeft2 = 290;
              setBoxPositionSM({ top: newTop2, left: newLeft2 });
              imageElementSM.width = 196;
              imageElementSM.height = 196;
            }, 500);
          }, 500);
        }, 500);
      }

      if (imageElementBighit) {
        const currentWidth = imageElementBighit.width;
        const currentHeight = imageElementBighit.height;

        if (currentWidth === 79 && currentHeight === 79) {
          setTimeout(() => {
            const newTop = 190;
            const newLeft = 290;
            setBoxPositionBighit({ top: newTop, left: newLeft });
            imageElementBighit.width = 196;
            imageElementBighit.height = 196;

            setTimeout(() => {
              const newTop1 = 270;
              const newLeft1 = 175;
              setBoxPositionBighit({ top: newTop1, left: newLeft1 });
              imageElementBighit.width = 113;
              imageElementBighit.height = 113;
            }, 500);
          }, 500);
        }

        if (currentWidth === 196 && currentHeight === 196) {
          setTimeout(() => {
            const newTop = 270;
            const newLeft = 175;
            setBoxPositionBighit({ top: newTop, left: newLeft });
            imageElementBighit.width = 113;
            imageElementBighit.height = 113;
          }, 500);
        }

        if (currentWidth === 149 && currentHeight === 149) {
          setTimeout(() => {
            const newTop = 110;
            const newLeft = 300;

            setBoxPositionBighit({ top: newTop, left: newLeft });
            imageElementBighit.width = 79;
            imageElementBighit.height = 79;

            setTimeout(() => {
              const newTop1 = 190;
              const newLeft1 = 290;

              setBoxPositionBighit({ top: newTop1, left: newLeft1 });
              imageElementBighit.width = 196;
              imageElementBighit.height = 196;

              setTimeout(() => {
                const newTop2 = 270;
                const newLeft2 = 175;

                setBoxPositionBighit({ top: newTop2, left: newLeft2 });
                imageElementBighit.width = 113;
                imageElementBighit.height = 113;
              }, 500);
            }, 500);
          }, 500);
        }
      }

      if (imageElementAP) {
        const currentWidth = imageElementAP.width;
        const currentHeight = imageElementAP.height;

        if (currentWidth === 196 && currentHeight === 196) {
          setTimeout(() => {
            const newTop = 270;
            const newLeft = 175;
            setBoxPositionAP({ top: newTop, left: newLeft });
            imageElementAP.width = 113;
            imageElementAP.height = 113;

            setTimeout(() => {
              const newTop1 = 110;
              const newLeft1 = 135;
              setBoxPositionAP({ top: newTop1, left: newLeft1 });
              imageElementAP.width = 149;
              imageElementAP.height = 149;
            }, 500);
          }, 500);
        }

        if (currentWidth === 113 && currentHeight === 113) {
          setTimeout(() => {
            const newTop = 110;
            const newLeft = 135;
            setBoxPositionAP({ top: newTop, left: newLeft });
            imageElementAP.width = 149;
            imageElementAP.height = 149;
          }, 500);
        }

        if (currentWidth === 79 && currentHeight === 79) {
          setTimeout(() => {
            const newTop = 190;
            const newLeft = 290;
            setBoxPositionAP({ top: newTop, left: newLeft });
            imageElementAP.width = 196;
            imageElementAP.height = 196;

            setTimeout(() => {
              const newTop1 = 270;
              const newLeft1 = 175;
              setBoxPositionAP({ top: newTop1, left: newLeft1 });
              imageElementAP.width = 113;
              imageElementAP.height = 113;

              setTimeout(() => {
                const newTop2 = 110;
                const newLeft2 = 135;
                setBoxPositionAP({ top: newTop2, left: newLeft2 });
                imageElementAP.width = 149;
                imageElementAP.height = 149;
              }, 500);
            }, 500);
          }, 500);
        }
      }

      if (imageElementWecan) {
        const currentWidth = imageElementWecan.width;
        const currentHeight = imageElementWecan.height;

        if (currentWidth === 113 && currentHeight === 113) {
          setTimeout(() => {
            const newTop = 110;
            const newLeft = 135;
            setBoxPositionWecan({ top: newTop, left: newLeft });
            imageElementWecan.width = 149;
            imageElementWecan.height = 149;

            setTimeout(() => {
              const newTop = 110;
              const newLeft = 300;
              setBoxPositionWecan({ top: newTop, left: newLeft });
              imageElementWecan.width = 79;
              imageElementWecan.height = 79;
            }, 500);
          }, 500);
        }

        if (currentWidth === 149 && currentHeight === 149) {
          setTimeout(() => {
            const newTop = 110;
            const newLeft = 300;
            setBoxPositionWecan({ top: newTop, left: newLeft });
            imageElementWecan.width = 79;
            imageElementWecan.height = 79;
          }, 500);
        }

        if (currentWidth === 196 && currentHeight === 196) {
          setTimeout(() => {
            const newTop = 270;
            const newLeft = 175;
            setBoxPositionWecan({ top: newTop, left: newLeft });
            imageElementWecan.width = 113;
            imageElementWecan.height = 113;

            setTimeout(() => {
              const newTop1 = 110;
              const newLeft1 = 135;
              setBoxPositionWecan({ top: newTop1, left: newLeft1 });
              imageElementWecan.width = 149;
              imageElementWecan.height = 149;

              setTimeout(() => {
                const newTop2 = 110;
                const newLeft2 = 300;
                setBoxPositionWecan({ top: newTop2, left: newLeft2 });
                imageElementWecan.width = 79;
                imageElementWecan.height = 79;
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

      if (currentWidth === 79 && currentHeight === 79) {
        setTimeout(() => {
          const newTop = 190;
          const newLeft = 290;
          setBoxPositionBighit({ top: newTop, left: newLeft });
          imageElementBighit.width = 196;
          imageElementBighit.height = 196;
        }, 500);
      }

      if (currentWidth === 113 && currentHeight === 113) {
        setTimeout(() => {
          const newTop1 = 110;
          const newLeft1 = 135;
          setBoxPositionBighit({ top: newTop1, left: newLeft1 });

          imageElementBighit.width = 149;
          imageElementBighit.height = 149;

          setTimeout(() => {
            const newTop2 = 110;
            const newLeft2 = 300;
            setBoxPositionBighit({ top: newTop2, left: newLeft2 });

            imageElementBighit.width = 79;
            imageElementBighit.height = 79;

            setTimeout(() => {
              const newTop3 = 190;
              const newLeft3 = 290;
              setBoxPositionBighit({ top: newTop3, left: newLeft3 });

              imageElementBighit.width = 196;
              imageElementBighit.height = 196;
            }, 500);
          }, 500);
        }, 500);
      }

      if (currentWidth === 149 && currentHeight === 149) {
        setTimeout(() => {
          const newTop5 = 110;
          const newLeft5 = 300;

          setBoxPositionBighit({ top: newTop5, left: newLeft5 });
          imageElementBighit.width = 79;
          imageElementBighit.height = 79;

          setTimeout(() => {
            const newTop6 = 190;
            const newLeft6 = 290;

            setBoxPositionBighit({ top: newTop6, left: newLeft6 });
            imageElementBighit.width = 196;
            imageElementBighit.height = 196;
          }, 500);
        }, 500);
      }
    }

    if (imageElementSM) {
      const currentWidth = imageElementSM.width;
      const currentHeight = imageElementSM.height;

      if (currentWidth === 149 && currentHeight === 149) {
        setTimeout(() => {
          const newTop = 110;
          const newLeft = 300;

          setBoxPositionSM({ top: newTop, left: newLeft });
          imageElementSM.width = 79;
          imageElementSM.height = 79;
        }, 500);
      }

      if (currentWidth === 196 && currentHeight === 196) {
        setTimeout(() => {
          const newTop = 270;
          const newLeft = 175;
          setBoxPositionSM({ top: newTop, left: newLeft });
          imageElementSM.width = 113;
          imageElementSM.height = 113;

          setTimeout(() => {
            const newTop1 = 110;
            const newLeft1 = 135;
            setBoxPositionSM({ top: newTop1, left: newLeft1 });
            imageElementSM.width = 149;
            imageElementSM.height = 149;

            setTimeout(() => {
              const newTop2 = 110;
              const newLeft2 = 300;
              setBoxPositionSM({ top: newTop2, left: newLeft2 });
              imageElementSM.width = 79;
              imageElementSM.height = 79;
            }, 500);
          }, 500);
        }, 500);
      }

      if (currentWidth === 113 && currentHeight === 113) {
        setTimeout(() => {
          const newTop = 110;
          const newLeft = 135;
          setBoxPositionSM({ top: newTop, left: newLeft });
          imageElementSM.width = 149;
          imageElementSM.height = 149;

          setTimeout(() => {
            const newTop1 = 110;
            const newLeft1 = 300;
            setBoxPositionSM({ top: newTop1, left: newLeft1 });
            imageElementSM.width = 79;
            imageElementSM.height = 79;
          }, 500);
        }, 500);
      }
    }

    if (imageElementWecan) {
      const currentWidth = imageElementWecan.width;
      const currentHeight = imageElementWecan.height;

      if (currentWidth === 113 && currentHeight === 113) {
        setTimeout(() => {
          const newTop = 110;
          const newLeft = 135;
          setBoxPositionWecan({ top: newTop, left: newLeft });
          imageElementWecan.width = 149;
          imageElementWecan.height = 149;
        }, 500);
      }

      if (currentWidth === 196 && currentHeight === 196) {
        setTimeout(() => {
          const newTop1 = 270;
          const newLeft1 = 175;
          setBoxPositionWecan({ top: newTop1, left: newLeft1 });
          imageElementWecan.width = 113;
          imageElementWecan.height = 113;
          setTimeout(() => {
            const newTop2 = 110;
            const newLeft2 = 135;
            setBoxPositionWecan({ top: newTop2, left: newLeft2 });
            imageElementWecan.width = 149;
            imageElementWecan.height = 149;
          }, 500);
        }, 500);
      }

      if (currentWidth === 79 && currentHeight === 79) {
        setTimeout(() => {
          const newTop = 190;
          const newLeft = 290;
          setBoxPositionWecan({ top: newTop, left: newLeft });
          imageElementWecan.width = 196;
          imageElementWecan.height = 196;

          setTimeout(() => {
            const newTop1 = 270;
            const newLeft1 = 175;
            setBoxPositionWecan({ top: newTop1, left: newLeft1 });
            imageElementWecan.width = 113;
            imageElementWecan.height = 113;

            setTimeout(() => {
              const newTop2 = 110;
              const newLeft2 = 135;
              setBoxPositionWecan({ top: newTop2, left: newLeft2 });
              imageElementWecan.width = 149;
              imageElementWecan.height = 149;
            }, 500);
          }, 500);
        }, 500);
      }
    }

    if (imageElementAP) {
      const currentWidth = imageElementAP.width;
      const currentHeight = imageElementAP.height;

      if (currentWidth === 196 && currentHeight === 196) {
        setTimeout(() => {
          const newTop = 270;
          const newLeft = 175;
          setBoxPositionAP({ top: newTop, left: newLeft });
          imageElementAP.width = 113;
          imageElementAP.height = 113;
        }, 500);
      }

      if (currentWidth === 149 && currentHeight === 149) {
        setTimeout(() => {
          const newTop1 = 110;
          const newLeft1 = 300;
          setBoxPositionAP({ top: newTop1, left: newLeft1 });
          imageElementAP.width = 79;
          imageElementAP.height = 79;

          setTimeout(() => {
            const newTop2 = 190;
            const newLeft2 = 290;
            setBoxPositionAP({ top: newTop2, left: newLeft2 });
            imageElementAP.width = 196;
            imageElementAP.height = 196;

            setTimeout(() => {
              const newTop3 = 270;
              const newLeft3 = 175;
              setBoxPositionAP({ top: newTop3, left: newLeft3 });
              imageElementAP.width = 113;
              imageElementAP.height = 113;
            }, 500);
          }, 500);
        }, 500);
      }

      if (currentWidth === 79 && currentHeight === 79) {
        setTimeout(() => {
          const newTop = 190;
          const newLeft = 290;
          setBoxPositionAP({ top: newTop, left: newLeft });
          imageElementAP.width = 196;
          imageElementAP.height = 196;

          setTimeout(() => {
            const newTop1 = 270;
            const newLeft1 = 175;
            setBoxPositionAP({ top: newTop1, left: newLeft1 });
            imageElementAP.width = 113;
            imageElementAP.height = 113;
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
          sx={{ marginTop: "auto", height: "17px", backgroundColor: "#F4FFFA" ,
          
          '@media screen and (max-width: 499px)': { 
            display: "none"
          },
          '@media screen and (min-width: 500px) and (max-width: 819px)': { 
            display: "flex"
          },
          '@media screen and (min-width: 820px)': { 
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
            pt: 2,
            pb:10,
            overflow:"hidden",
            '@media screen and (max-width: 499px)': { 
              display: "none"
            },
            '@media screen and (min-width: 500px) and (max-width: 819px)': { 
              display: "flex"
            },
            '@media screen and (min-width: 820px)': { 
              display: "none"
            }
          }}
        >
          <Typography sx={{ fontSize: 24, fontWeight: 700, color: "#007DFC" }}>
            PARTNER
          </Typography>

          <Grid container spacing={2}>
            <Grid
              xs={12}
              xxl={6}
              sx={{
                
                mt: -6,
                display: "flex",
                justifyContent: "center",
               
                  px : windowWidth < 550 ? 0 :(windowWidth < 600 ? 4.5 :(windowWidth < 650 ? 6 :(windowWidth < 750 ? 10 : (windowWidth < 820 ? 15 : 10)))), 
                
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
                    width={149}
                    height={149}
                    style={{
                      cursor: "pointer",
                      transition: "width 1s, height 1s",
                    }}
                    onClick={handleImageClickSM} alt="LogoPartner"
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
                    width={113}
                    height={113}
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
                    width={79}
                    height={79}
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
                    width={196}
                    height={196}
                    style={{
                      cursor: "pointer",
                      transition: "width 1s, height 1s",
                    }}
                    onClick={handleImageClickAP}alt="LogoPartner"
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
                mt: windowHeight > 900 ? "40vh" : "50vh",
                px: 7,
              }}
            >
              {tabWecan && <Wecan />}
              {tabSM && <Sm />}
              {tabAP && <Ap />}
              {tabBighit && <Bighit />}
            </Grid>

            <Grid

              xs={12}
              
              sx={{
                mt:20,
                display:"flex",
                justifyContent:"center"
              }}
            >
              <Box
            sx={{
              position: "absolute",
           
            }}
          >
            <FiberManualRecordIcon
              sx={{
                color: tabAP ? "#007DFC" : "#CDCDCD",
                cursor: "pointer",
              }}
              onClick={handleImageClickAP}
            />
            <FiberManualRecordIcon
              sx={{
                color: tabBighit ? "#007DFC" : "#CDCDCD",
                cursor: "pointer",
              }}
              onClick={() => {
                handleImageClickBighit();
              }}
            />
            <FiberManualRecordIcon
              sx={{
                color: tabSM ? "#007DFC" : "#CDCDCD",
                cursor: "pointer",
              }}
              onClick={handleImageClickSM}
            />
            <FiberManualRecordIcon
              sx={{
                color: tabWecan ? "#007DFC" : "#CDCDCD",
                cursor: "pointer",
              }}
              onClick={handleImageClickWecan}
            />
          </Box>
            </Grid> 
          </Grid>
          
        </Box>
      </ThemeProvider>
    </>
  );
}
