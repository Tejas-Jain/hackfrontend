import React from "react";
import { Box } from "@mui/material";
import Home from "./components/Home";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/h" element={<h1>heknnkk</h1>} />
    </Routes>
  );
};

export default App;
