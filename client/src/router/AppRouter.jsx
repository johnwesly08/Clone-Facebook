import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "../components/Register";
import DashBoard from "../components/Dashboard";

function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={Register} />
        <Route path="/register" element={Register} />
        <Route path="/dashboard" element={DashBoard} />
      </Routes>
      <Outlet />
    </Router>
  );
}

export default AppRouter;