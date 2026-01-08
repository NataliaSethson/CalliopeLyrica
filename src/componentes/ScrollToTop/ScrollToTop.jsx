import React, { useState, useEffect } from "react";
import { IconButton, Zoom } from "@mui/material";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";

const ScrollToTop = () => {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY || document.documentElement.scrollTop;
            const windowHeight = window.innerHeight;
            const docHeight = document.documentElement.scrollHeight;


            if (scrollTop + windowHeight >= docHeight * 0.95) {
                setVisible(true);
            } else {
                setVisible(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
<Zoom in={visible}>
  <IconButton
    onClick={scrollToTop}
    sx={{
      position: "fixed",
      bottom: { xs: "120px", md: "20vh" }, // más arriba en pantallas chicas
      right: { xs: "16px", md: "6vw" },

      backgroundColor: "#C5A059",
      color: "#fff",
      zIndex: 9999,

      width: 48,
      height: 48,
      boxShadow: "0 8px 20px rgba(0,0,0,0.25)",

      transition: "all 0.3s ease",

      "&:hover": {
        backgroundColor: "#C5A059",
        transform: "translateY(-4px)",
        boxShadow: "0 12px 28px rgba(0,0,0,0.35)",
      },
    }}
  >
    <ArrowUpwardIcon sx={{ fontSize: 22 }} />
  </IconButton>
</Zoom>


    );
};

export default ScrollToTop;