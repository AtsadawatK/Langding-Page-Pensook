"use client";

import { Box, Grid, Typography } from "@mui/material";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import Wecan from "./components/Wecan";
import Bighit from "./components/Bighit";
import Sm from "./components/Sm";
import Ap from "./components/Ap";

export default function Partner() {
  const [tabBighit, setTabBighit] = useState(false);
  const [tabSM, setTabSM] = useState(false);
  const [tabWecan, setTabWecan] = useState(false);
  const [tabAP, setTabAP] = useState(true);
  const [boxPositionBighit, setBoxPositionBighit] = useState({
    top: 110,
    left: 410,
  });

  const [boxPositionSM, setBoxPositionSM] = useState({
    top: 110,
    left: 60,
  });

  const [boxPositionAP, setBoxPositionAP] = useState({
    top: 250,
    left: 400,
  });

  const [boxPositionWecan, setBoxPositionWecan] = useState({
    top: 460,
    left: 130,
  });

  const handleImageClickAP = () => {
    const imageElementBighit = document.getElementById("BighitImg");
    const imageElementSM = document.getElementById("SMImg");
    const imageElementWecan = document.getElementById("WecanImg");
    const imageElementAP = document.getElementById("APImg");

    if (imageElementAP) {
      const currentWidth = imageElementAP.width;
      const currentHeight = imageElementAP.height;

      if (currentWidth === 256 && currentHeight === 256) {
        setTimeout(() => {
          const newTop = 110;
          const newLeft = 60;
          setBoxPositionAP({ top: newTop, left: newLeft });
          imageElementAP.width = 348;
          imageElementAP.height = 348;

          setTimeout(() => {
            const newTop1 = 110;
            const newLeft1 = 410;
            setBoxPositionAP({ top: newTop1, left: newLeft1 });
            imageElementAP.width = 156;
            imageElementAP.height = 156;

            setTimeout(() => {
              const newTop2 = 250;
              const newLeft2 = 400;
              setBoxPositionAP({ top: newTop2, left: newLeft2 });
              imageElementAP.width = 453;
              imageElementAP.height = 453;
            }, 500);
          }, 500);
        }, 500);
      }

      if (currentWidth === 348 && currentHeight === 348) {
        setTimeout(() => {
          const newTop1 = 110;
          const newLeft1 = 410;
          setBoxPositionAP({ top: newTop1, left: newLeft1 });
          imageElementAP.width = 156;
          imageElementAP.height = 156;

          setTimeout(() => {
            const newTop2 = 250;
            const newLeft2 = 400;
            setBoxPositionAP({ top: newTop2, left: newLeft2 });
            imageElementAP.width = 453;
            imageElementAP.height = 453;
          }, 500);
        }, 500);
      }

      if (currentWidth === 156 && currentHeight === 156) {
        setTimeout(() => {
          const newTop2 = 250;
          const newLeft2 = 400;
          setBoxPositionAP({ top: newTop2, left: newLeft2 });
          imageElementAP.width = 453;
          imageElementAP.height = 453;
        }, 500);
      }
    }

    if (imageElementBighit) {
      const currentWidth = imageElementBighit.width;
      const currentHeight = imageElementBighit.height;

      if (currentWidth === 453 && currentHeight === 453) {
        setTimeout(() => {
          const newTop = 460;
          const newLeft = 130;
          setBoxPositionBighit({ top: newTop, left: newLeft });
          imageElementBighit.width = 256;
          imageElementBighit.height = 256;

          setTimeout(() => {
            const newTop1 = 110;
            const newLeft1 = 60;
            setBoxPositionBighit({ top: newTop1, left: newLeft1 });
            imageElementBighit.width = 348;
            imageElementBighit.height = 348;

            setTimeout(() => {
              const newTop2 = 110;
              const newLeft2 = 410;
              setBoxPositionBighit({ top: newTop2, left: newLeft2 });
              imageElementBighit.width = 156;
              imageElementBighit.height = 156;
            }, 500);
          }, 500);
        }, 500);
      }

      if (currentWidth === 256 && currentHeight === 256) {
        setTimeout(() => {
          const newTop = 110;
          const newLeft = 60;
          setBoxPositionBighit({ top: newTop, left: newLeft });
          imageElementBighit.width = 348;
          imageElementBighit.height = 348;

          setTimeout(() => {
            const newTop2 = 110;
            const newLeft2 = 410;
            setBoxPositionBighit({ top: newTop2, left: newLeft2 });
            imageElementBighit.width = 156;
            imageElementBighit.height = 156;
          }, 500);
        }, 500);
      }

      if (currentWidth === 348 && currentHeight === 348) {
        setTimeout(() => {
          const newTop2 = 110;
          const newLeft2 = 410;
          setBoxPositionBighit({ top: newTop2, left: newLeft2 });
          imageElementBighit.width = 156;
          imageElementBighit.height = 156;
        }, 500);
      }
    }

    if (imageElementSM) {
      const currentWidth = imageElementSM.width;
      const currentHeight = imageElementSM.height;

      if (currentWidth === 453 && currentHeight === 453) {
        setTimeout(() => {
          const newTop = 460;
          const newLeft = 130;
          setBoxPositionSM({ top: newTop, left: newLeft });
          imageElementSM.width = 256;
          imageElementSM.height = 256;

          setTimeout(() => {
            const newTop1 = 110;
            const newLeft1 = 60;
            setBoxPositionSM({ top: newTop1, left: newLeft1 });
            imageElementSM.width = 348;
            imageElementSM.height = 348;
          }, 500);
        }, 500);
      }

      if (currentWidth === 256 && currentHeight === 256) {
        setTimeout(() => {
          const newTop1 = 110;
          const newLeft1 = 60;
          setBoxPositionSM({ top: newTop1, left: newLeft1 });
          imageElementSM.width = 348;
          imageElementSM.height = 348;
        }, 500);
      }

      if (currentWidth === 156 && currentHeight === 156) {
        setTimeout(() => {
          const newTop = 250;
          const newLeft = 400;
          setBoxPositionSM({ top: newTop, left: newLeft });
          imageElementSM.width = 453;
          imageElementSM.height = 453;

          setTimeout(() => {
            const newTop1 = 460;
            const newLeft1 = 130;
            setBoxPositionSM({ top: newTop1, left: newLeft1 });
            imageElementSM.width = 256;
            imageElementSM.height = 256;

            setTimeout(() => {
              const newTop2 = 110;
              const newLeft2 = 60;
              setBoxPositionSM({ top: newTop2, left: newLeft2 });
              imageElementSM.width = 348;
              imageElementSM.height = 348;
            }, 500);
          }, 500);
        }, 500);
      }
    }

    if (imageElementWecan) {
      const currentWidth = imageElementWecan.width;
      const currentHeight = imageElementWecan.height;

      if (currentWidth === 348 && currentHeight === 348) {
        setTimeout(() => {
          const newTop = 110;
          const newLeft = 410;
          setBoxPositionWecan({ top: newTop, left: newLeft });
          imageElementWecan.width = 156;
          imageElementWecan.height = 156;

          setTimeout(() => {
            const newTop1 = 250;
            const newLeft1 = 400;
            setBoxPositionWecan({ top: newTop1, left: newLeft1 });
            imageElementWecan.width = 453;
            imageElementWecan.height = 453;

            setTimeout(() => {
              const newTop2 = 460;
              const newLeft2 = 130;
              setBoxPositionWecan({ top: newTop2, left: newLeft2 });
              imageElementWecan.width = 256;
              imageElementWecan.height = 256;
            }, 500);
          }, 500);
        }, 500);
      }
      if (currentWidth === 156 && currentHeight === 156) {
        setTimeout(() => {
          const newTop = 250;
          const newLeft = 400;
          setBoxPositionWecan({ top: newTop, left: newLeft });
          imageElementWecan.width = 453;
          imageElementWecan.height = 453;

          setTimeout(() => {
            const newTop1 = 460;
            const newLeft1 = 130;
            setBoxPositionWecan({ top: newTop1, left: newLeft1 });
            imageElementWecan.width = 256;
            imageElementWecan.height = 256;
          }, 500);
        }, 500);
      }

      if (currentWidth === 453 && currentHeight === 453) {
        setTimeout(() => {
          const newTop1 = 460;
          const newLeft1 = 130;
          setBoxPositionWecan({ top: newTop1, left: newLeft1 });
          imageElementWecan.width = 256;
          imageElementWecan.height = 256;
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

      if (currentWidth === 256 && currentHeight === 256) {
        setTimeout(() => {
          const newTop = 110;
          const newLeft = 60;
          setBoxPositionWecan({ top: newTop, left: newLeft });
          imageElementWecan.width = 348;
          imageElementWecan.height = 348;

          setTimeout(() => {
            const newTop1 = 110;
            const newLeft1 = 410;

            setBoxPositionWecan({ top: newTop1, left: newLeft1 });
            imageElementWecan.width = 156;
            imageElementWecan.height = 156;

            setTimeout(() => {
              const newTop2 = 250;
              const newLeft2 = 400;

              setBoxPositionWecan({ top: newTop2, left: newLeft2 });
              imageElementWecan.width = 453;
              imageElementWecan.height = 453;
            }, 500);
          }, 500);
        }, 500);
      }

      if (currentWidth === 348 && currentHeight === 348) {
        setTimeout(() => {
          const newTop = 110;
          const newLeft = 410;
          setBoxPositionWecan({ top: newTop, left: newLeft });
          imageElementWecan.width = 156;
          imageElementWecan.height = 156;

          setTimeout(() => {
            const newTop1 = 250;
            const newLeft1 = 400;

            setBoxPositionWecan({ top: newTop1, left: newLeft1 });
            imageElementWecan.width = 453;
            imageElementWecan.height = 453;
          }, 500);
        }, 500);
      }
      if (currentWidth === 156 && currentHeight === 156) {
        setTimeout(() => {
          const newTop2 = 250;
          const newLeft2 = 400;
          setBoxPositionWecan({ top: newTop2, left: newLeft2 });
          imageElementWecan.width = 453;
          imageElementWecan.height = 453;
        }, 500);
      }
    }

    if (imageElementBighit) {
      const currentWidth = imageElementBighit.width;
      const currentHeight = imageElementBighit.height;

      if (currentWidth === 156 && currentHeight === 156) {
        setTimeout(() => {
          const newTop = 250;
          const newLeft = 400;
          setBoxPositionBighit({ top: newTop, left: newLeft });
          imageElementBighit.width = 453;
          imageElementBighit.height = 453;

          setTimeout(() => {
            const newTop1 = 460;
            const newLeft1 = 130;
            setBoxPositionBighit({ top: newTop1, left: newLeft1 });
            imageElementBighit.width = 256;
            imageElementBighit.height = 256;

            setTimeout(() => {
              const newTop2 = 110;
              const newLeft2 = 60;
              setBoxPositionBighit({ top: newTop2, left: newLeft2 });
              imageElementBighit.width = 348;
              imageElementBighit.height = 348;
            }, 500);
          }, 500);
        }, 500);
      }

      if (currentWidth === 453 && currentHeight === 453) {
        setTimeout(() => {
          const newTop = 460;
          const newLeft = 130;
          setBoxPositionBighit({ top: newTop, left: newLeft });
          imageElementBighit.width = 256;
          imageElementBighit.height = 256;

          setTimeout(() => {
            const newTop1 = 110;
            const newLeft1 = 60;
            setBoxPositionBighit({ top: newTop1, left: newLeft1 });
            imageElementBighit.width = 348;
            imageElementBighit.height = 348;
          }, 500);
        }, 500);
      }

      if (currentWidth === 256 && currentHeight === 256) {
        setTimeout(() => {
          const newTop = 110;
          const newLeft = 60;
          setBoxPositionBighit({ top: newTop, left: newLeft });
          imageElementBighit.width = 348;
          imageElementBighit.height = 348;
        }, 500);
      }
    }

    if (imageElementSM) {
      const currentWidth = imageElementSM.width;
      const currentHeight = imageElementSM.height;

      if (currentWidth === 348 && currentHeight === 348) {
        setTimeout(() => {
          const newTop = 110;
          const newLeft = 410;
          setBoxPositionSM({ top: newTop, left: newLeft });
          imageElementSM.width = 156;
          imageElementSM.height = 156;

          setTimeout(() => {
            const newTop1 = 250;
            const newLeft1 = 400;
            setBoxPositionSM({ top: newTop1, left: newLeft1 });
            imageElementSM.width = 453;
            imageElementSM.height = 453;

            setTimeout(() => {
              const newTop2 = 460;
              const newLeft2 = 130;
              setBoxPositionSM({ top: newTop2, left: newLeft2 });
              imageElementSM.width = 256;
              imageElementSM.height = 256;
            }, 500);
          }, 500);
        }, 500);
      }

      if (currentWidth === 156 && currentHeight === 156) {
        setTimeout(() => {
          const newTop = 250;
          const newLeft = 400;
          setBoxPositionSM({ top: newTop, left: newLeft });
          imageElementSM.width = 453;
          imageElementSM.height = 453;

          setTimeout(() => {
            const newTop1 = 460;
            const newLeft1 = 130;
            setBoxPositionSM({ top: newTop1, left: newLeft1 });
            imageElementSM.width = 256;
            imageElementSM.height = 256;
          }, 500);
        }, 500);
      }

      if (currentWidth === 453 && currentHeight === 453) {
        setTimeout(() => {
          const newTop = 460;
          const newLeft = 130;
          setBoxPositionSM({ top: newTop, left: newLeft });
          imageElementSM.width = 256;
          imageElementSM.height = 256;
        }, 500);
      }
    }

    if (imageElementAP) {
      const currentWidth = imageElementAP.width;
      const currentHeight = imageElementAP.height;

      if (currentWidth === 453 && currentHeight === 453) {
        setTimeout(() => {
          const newTop = 460;
          const newLeft = 130;
          setBoxPositionAP({ top: newTop, left: newLeft });
          imageElementAP.width = 256;
          imageElementAP.height = 256;

          setTimeout(() => {
            const newTop1 = 110;
            const newLeft1 = 60;
            setBoxPositionAP({ top: newTop1, left: newLeft1 });
            imageElementAP.width = 348;
            imageElementAP.height = 348;

            setTimeout(() => {
              const newTop2 = 110;
              const newLeft2 = 410;
              setBoxPositionAP({ top: newTop2, left: newLeft2 });
              imageElementAP.width = 156;
              imageElementAP.height = 156;
            }, 500);
          }, 500);
        }, 500);
      }

      if (currentWidth === 256 && currentHeight === 256) {
        setTimeout(() => {
          const newTop = 110;
          const newLeft = 60;
          setBoxPositionAP({ top: newTop, left: newLeft });
          imageElementAP.width = 348;
          imageElementAP.height = 348;

          setTimeout(() => {
            const newTop1 = 110;
            const newLeft1 = 410;
            setBoxPositionAP({ top: newTop1, left: newLeft1 });
            imageElementAP.width = 156;
            imageElementAP.height = 156;
          }, 500);
        }, 500);
      }

      if (currentWidth === 348 && currentHeight === 348) {
        setTimeout(() => {
          const newTop = 110;
          const newLeft = 410;
          setBoxPositionAP({ top: newTop, left: newLeft });
          imageElementAP.width = 156;
          imageElementAP.height = 156;
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

      if (currentWidth === 348 && currentHeight === 348) {
        setTimeout(() => {
          const newTop = 110;
          const newLeft = 410;
          setBoxPositionSM({ top: newTop, left: newLeft });
          imageElementSM.width = 156;
          imageElementSM.height = 156;

          setTimeout(() => {
            const newTop2 = 250;
            const newLeft2 = 400;

            setBoxPositionSM({ top: newTop2, left: newLeft2 });
            imageElementSM.width = 453;
            imageElementSM.height = 453;
          }, 500);
        }, 500);
      }

      if (currentWidth === 156 && currentHeight === 156) {
        setTimeout(() => {
          const newTop = 250;
          const newLeft = 400;
          setBoxPositionSM({ top: newTop, left: newLeft });
          imageElementSM.width = 453;
          imageElementSM.height = 453;
        }, 500);
      }

      if (currentWidth === 256 && currentHeight === 256) {
        setTimeout(() => {
          const newTop = 110;
          const newLeft = 60;
          setBoxPositionSM({ top: newTop, left: newLeft });
          imageElementSM.width = 348;
          imageElementSM.height = 348;

          setTimeout(() => {
            const newTop1 = 110;
            const newLeft1 = 410;
            setBoxPositionSM({ top: newTop1, left: newLeft1 });
            imageElementSM.width = 156;
            imageElementSM.height = 156;

            setTimeout(() => {
              const newTop2 = 250;
              const newLeft2 = 400;
              setBoxPositionSM({ top: newTop2, left: newLeft2 });
              imageElementSM.width = 453;
              imageElementSM.height = 453;
            }, 500);
          }, 500);
        }, 500);
      }

      if (imageElementBighit) {
        const currentWidth = imageElementBighit.width;
        const currentHeight = imageElementBighit.height;

        if (currentWidth === 156 && currentHeight === 156) {
          setTimeout(() => {
            const newTop = 250;
            const newLeft = 400;
            setBoxPositionBighit({ top: newTop, left: newLeft });
            imageElementBighit.width = 453;
            imageElementBighit.height = 453;

            setTimeout(() => {
              const newTop1 = 460;
              const newLeft1 = 130;
              setBoxPositionBighit({ top: newTop1, left: newLeft1 });
              imageElementBighit.width = 256;
              imageElementBighit.height = 256;
            }, 500);
          }, 500);
        }

        if (currentWidth === 453 && currentHeight === 453) {
          setTimeout(() => {
            const newTop = 460;
            const newLeft = 130;
            setBoxPositionBighit({ top: newTop, left: newLeft });
            imageElementBighit.width = 256;
            imageElementBighit.height = 256;
          }, 500);
        }

        if (currentWidth === 348 && currentHeight === 348) {
          setTimeout(() => {
            const newTop = 110;
            const newLeft = 410;

            setBoxPositionBighit({ top: newTop, left: newLeft });
            imageElementBighit.width = 156;
            imageElementBighit.height = 156;

            setTimeout(() => {
              const newTop1 = 250;
              const newLeft1 = 400;

              setBoxPositionBighit({ top: newTop1, left: newLeft1 });
              imageElementBighit.width = 453;
              imageElementBighit.height = 453;

              setTimeout(() => {
                const newTop2 = 460;
                const newLeft2 = 130;

                setBoxPositionBighit({ top: newTop2, left: newLeft2 });
                imageElementBighit.width = 256;
                imageElementBighit.height = 256;
              }, 500);
            }, 500);
          }, 500);
        }
      }

      if (imageElementAP) {
        const currentWidth = imageElementAP.width;
        const currentHeight = imageElementAP.height;

        if (currentWidth === 453 && currentHeight === 453) {
          setTimeout(() => {
            const newTop = 460;
            const newLeft = 130;
            setBoxPositionAP({ top: newTop, left: newLeft });
            imageElementAP.width = 256;
            imageElementAP.height = 256;

            setTimeout(() => {
              const newTop1 = 110;
              const newLeft1 = 60;
              setBoxPositionAP({ top: newTop1, left: newLeft1 });
              imageElementAP.width = 348;
              imageElementAP.height = 348;
            }, 500);
          }, 500);
        }

        if (currentWidth === 256 && currentHeight === 256) {
          setTimeout(() => {
            const newTop = 110;
            const newLeft = 60;
            setBoxPositionAP({ top: newTop, left: newLeft });
            imageElementAP.width = 348;
            imageElementAP.height = 348;
          }, 500);
        }

        if (currentWidth === 156 && currentHeight === 156) {
          setTimeout(() => {
            const newTop = 250;
            const newLeft = 400;
            setBoxPositionAP({ top: newTop, left: newLeft });
            imageElementAP.width = 453;
            imageElementAP.height = 453;

            setTimeout(() => {
              const newTop1 = 460;
              const newLeft1 = 130;
              setBoxPositionAP({ top: newTop1, left: newLeft1 });
              imageElementAP.width = 256;
              imageElementAP.height = 256;

              setTimeout(() => {
                const newTop2 = 110;
                const newLeft2 = 60;
                setBoxPositionAP({ top: newTop2, left: newLeft2 });
                imageElementAP.width = 348;
                imageElementAP.height = 348;
              }, 500);
            }, 500);
          }, 500);
        }
      }

      if (imageElementWecan) {
        const currentWidth = imageElementWecan.width;
        const currentHeight = imageElementWecan.height;

        if (currentWidth === 256 && currentHeight === 256) {
          setTimeout(() => {
            const newTop = 110;
            const newLeft = 60;
            setBoxPositionWecan({ top: newTop, left: newLeft });
            imageElementWecan.width = 348;
            imageElementWecan.height = 348;

            setTimeout(() => {
              const newTop = 110;
              const newLeft = 410;
              setBoxPositionWecan({ top: newTop, left: newLeft });
              imageElementWecan.width = 156;
              imageElementWecan.height = 156;
            }, 500);
          }, 500);
        }

        if (currentWidth === 348 && currentHeight === 348) {
          setTimeout(() => {
            const newTop = 110;
            const newLeft = 410;
            setBoxPositionWecan({ top: newTop, left: newLeft });
            imageElementWecan.width = 156;
            imageElementWecan.height = 156;
          }, 500);
        }

        if (currentWidth === 453 && currentHeight === 453) {
          setTimeout(() => {
            const newTop = 460;
            const newLeft = 130;
            setBoxPositionWecan({ top: newTop, left: newLeft });
            imageElementWecan.width = 256;
            imageElementWecan.height = 256;

            setTimeout(() => {
              const newTop1 = 110;
              const newLeft1 = 60;
              setBoxPositionWecan({ top: newTop1, left: newLeft1 });
              imageElementWecan.width = 348;
              imageElementWecan.height = 348;

              setTimeout(() => {
                const newTop2 = 110;
                const newLeft2 = 410;
                setBoxPositionWecan({ top: newTop2, left: newLeft2 });
                imageElementWecan.width = 156;
                imageElementWecan.height = 156;
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

      if (currentWidth === 156 && currentHeight === 156) {
        setTimeout(() => {
          const newTop = 250;
          const newLeft = 400;
          setBoxPositionBighit({ top: newTop, left: newLeft });
          imageElementBighit.width = 453;
          imageElementBighit.height = 453;
        }, 500);
      }

      if (currentWidth === 256 && currentHeight === 256) {
        setTimeout(() => {
          const newTop1 = 110;
          const newLeft1 = 60;
          setBoxPositionBighit({ top: newTop1, left: newLeft1 });

          imageElementBighit.width = 348;
          imageElementBighit.height = 348;

          setTimeout(() => {
            const newTop2 = 110;
            const newLeft2 = 410;
            setBoxPositionBighit({ top: newTop2, left: newLeft2 });

            imageElementBighit.width = 156;
            imageElementBighit.height = 156;

            setTimeout(() => {
              const newTop3 = 250;
              const newLeft3 = 400;
              setBoxPositionBighit({ top: newTop3, left: newLeft3 });

              imageElementBighit.width = 453;
              imageElementBighit.height = 453;
            }, 500);
          }, 500);
        }, 500);
      }

      if (currentWidth === 348 && currentHeight === 348) {
        setTimeout(() => {
          const newTop5 = 110;
          const newLeft5 = 410;

          setBoxPositionBighit({ top: newTop5, left: newLeft5 });
          imageElementBighit.width = 156;
          imageElementBighit.height = 156;

          setTimeout(() => {
            const newTop6 = 250;
            const newLeft6 = 400;

            setBoxPositionBighit({ top: newTop6, left: newLeft6 });
            imageElementBighit.width = 453;
            imageElementBighit.height = 453;
          }, 500);
        }, 500);
      }
    }

    if (imageElementSM) {
      const currentWidth = imageElementSM.width;
      const currentHeight = imageElementSM.height;

      if (currentWidth === 348 && currentHeight === 348) {
        setTimeout(() => {
          const newTop = 110;
          const newLeft = 410;

          setBoxPositionSM({ top: newTop, left: newLeft });
          imageElementSM.width = 156;
          imageElementSM.height = 156;
        }, 500);
      }

      if (currentWidth === 453 && currentHeight === 453) {
        setTimeout(() => {
          const newTop = 460;
          const newLeft = 130;
          setBoxPositionSM({ top: newTop, left: newLeft });
          imageElementSM.width = 256;
          imageElementSM.height = 256;

          setTimeout(() => {
            const newTop1 = 110;
            const newLeft1 = 60;
            setBoxPositionSM({ top: newTop1, left: newLeft1 });
            imageElementSM.width = 348;
            imageElementSM.height = 348;

            setTimeout(() => {
              const newTop2 = 110;
              const newLeft2 = 410;
              setBoxPositionSM({ top: newTop2, left: newLeft2 });
              imageElementSM.width = 156;
              imageElementSM.height = 156;
            }, 500);
          }, 500);
        }, 500);
      }

      if (currentWidth === 256 && currentHeight === 256) {
        setTimeout(() => {
          const newTop = 110;
          const newLeft = 60;
          setBoxPositionSM({ top: newTop, left: newLeft });
          imageElementSM.width = 348;
          imageElementSM.height = 348;

          setTimeout(() => {
            const newTop1 = 110;
            const newLeft1 = 410;
            setBoxPositionSM({ top: newTop1, left: newLeft1 });
            imageElementSM.width = 156;
            imageElementSM.height = 156;
          }, 500);
        }, 500);
      }
    }

    if (imageElementWecan) {
      const currentWidth = imageElementWecan.width;
      const currentHeight = imageElementWecan.height;

      if (currentWidth === 256 && currentHeight === 256) {
        setTimeout(() => {
          const newTop = 110;
          const newLeft = 60;
          setBoxPositionWecan({ top: newTop, left: newLeft });
          imageElementWecan.width = 348;
          imageElementWecan.height = 348;
        }, 500);
      }

      if (currentWidth === 453 && currentHeight === 453) {
        setTimeout(() => {
          const newTop1 = 460;
          const newLeft1 = 130;
          setBoxPositionWecan({ top: newTop1, left: newLeft1 });
          imageElementWecan.width = 256;
          imageElementWecan.height = 256;
          setTimeout(() => {
            const newTop2 = 110;
            const newLeft2 = 60;
            setBoxPositionWecan({ top: newTop2, left: newLeft2 });
            imageElementWecan.width = 348;
            imageElementWecan.height = 348;
          }, 500);
        }, 500);
      }

      if (currentWidth === 156 && currentHeight === 156) {
        setTimeout(() => {
          const newTop = 250;
          const newLeft = 400;
          setBoxPositionWecan({ top: newTop, left: newLeft });
          imageElementWecan.width = 453;
          imageElementWecan.height = 453;

          setTimeout(() => {
            const newTop1 = 460;
            const newLeft1 = 130;
            setBoxPositionWecan({ top: newTop1, left: newLeft1 });
            imageElementWecan.width = 256;
            imageElementWecan.height = 256;

            setTimeout(() => {
              const newTop2 = 110;
              const newLeft2 = 60;
              setBoxPositionWecan({ top: newTop2, left: newLeft2 });
              imageElementWecan.width = 348;
              imageElementWecan.height = 348;
            }, 500);
          }, 500);
        }, 500);
      }
    }

    if (imageElementAP) {
      const currentWidth = imageElementAP.width;
      const currentHeight = imageElementAP.height;

      if (currentWidth === 453 && currentHeight === 453) {
        setTimeout(() => {
          const newTop = 460;
          const newLeft = 130;
          setBoxPositionAP({ top: newTop, left: newLeft });
          imageElementAP.width = 256;
          imageElementAP.height = 256;
        }, 500);
      }

      if (currentWidth === 348 && currentHeight === 348) {
        setTimeout(() => {
          const newTop1 = 110;
          const newLeft1 = 410;
          setBoxPositionAP({ top: newTop1, left: newLeft1 });
          imageElementAP.width = 156;
          imageElementAP.height = 156;

          setTimeout(() => {
            const newTop2 = 250;
            const newLeft2 = 400;
            setBoxPositionAP({ top: newTop2, left: newLeft2 });
            imageElementAP.width = 453;
            imageElementAP.height = 453;

            setTimeout(() => {
              const newTop3 = 460;
              const newLeft3 = 130;
              setBoxPositionAP({ top: newTop3, left: newLeft3 });
              imageElementAP.width = 256;
              imageElementAP.height = 256;
            }, 500);
          }, 500);
        }, 500);
      }

      if (currentWidth === 156 && currentHeight === 156) {
        setTimeout(() => {
          const newTop = 250;
          const newLeft = 400;
          setBoxPositionAP({ top: newTop, left: newLeft });
          imageElementAP.width = 453;
          imageElementAP.height = 453;

          setTimeout(() => {
            const newTop1 = 460;
            const newLeft1 = 130;
            setBoxPositionAP({ top: newTop1, left: newLeft1 });
            imageElementAP.width = 256;
            imageElementAP.height = 256;
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
      <Box
        id="Partner-section"
        sx={{
          display: "flex",
          alignItems: "center",
          width: "100vw",
          height: "calc(1080px - 80px)",
          backgroundColor: "#F4FFFA",
          flexDirection: "column",
        }}
      >
        <Typography
          sx={{ fontSize: 50, fontWeight: 700, color: "#007DFC", pt: "90px" }}
        >
          PARTNER
        </Typography>

        <Grid container spacing={2}>
          <Grid
            xs={6}
            sx={{
              pl: 10,
              mt: -6,
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
                  src={require("../../../assets/SM_Partner.png")}
                  object-fit="fill"
                  width={348}
                  height={348}
                  style={{
                    cursor: "pointer",
                    transition: "width 1s, height 1s",
                  }}
                  onClick={handleImageClickSM}
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
                  src={require("../../../assets/Wecan_Partner.png")}
                  object-fit="fill"
                  width={256}
                  height={256}
                  style={{
                    cursor: "pointer",
                    transition: "width 1s, height 1s",
                  }}
                  onClick={handleImageClickWecan}
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
                  src={require("../../../assets/BigHit_Partner.png")}
                  object-fit="fill"
                  width={156}
                  height={156}
                  style={{
                    cursor: "pointer",
                    transition: "width 1s, height 1s",
                  }}
                  onClick={() => {
                    handleImageClickBighit();
                  }}
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
                  src={require("../../../assets/AP_Partner.png")}
                  object-fit="fill"
                  width={453}
                  height={453}
                  style={{
                    cursor: "pointer",
                    transition: "width 1s, height 1s",
                  }}
                  onClick={handleImageClickAP}
                />
              </Box>
            </Box>
          </Grid>

          <Grid
            xs={6}
            sx={{
              display: "flex",
              justifyContent: "start",
              flexDirection: "column",
              mt: 7,
              px: 10,
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
            position: "absolute",
            mt: "98vh",
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
      </Box>
    </>
  );
}
