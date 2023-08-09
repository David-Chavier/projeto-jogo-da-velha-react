import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Registro from "../pages/Registro";

const AppRoutes: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Registro />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
