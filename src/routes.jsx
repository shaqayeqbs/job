import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Home from "./pages";
import MainLayout from "./components/layouts";
const RoutesList = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
      </Route>
      <Route path="*" element={<div>not found</div>} />
    </Routes>
  );
};

export default RoutesList;
