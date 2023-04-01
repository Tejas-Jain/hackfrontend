import React from "react";
import Navbar from "./Navbar";
import { Box, Typography } from "@mui/material";
import "../css/home.css";
import heart from "../images/heart_img.jpg";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Box
        sx={{
          marginTop: "20px",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Box className="left">
          <Typography className="txt">In pursuit </Typography>
          <Typography className="txt"> of better Heart </Typography>
          <Typography>One beat at a time</Typography>
        </Box>
        <Box className="right">
          <img id="imh" src={heart} alt="heart" />
        </Box>
      </Box>
    </div>
  );
};

export default Home;
