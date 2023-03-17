import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import React from "react";
import Login from "../login/login";
import Registrasi from "../registrasi/registrasi";
import AdminDashboard from "../Admin-Dashboard/AdminDashboard";

export default function RouterSiakad() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/registrasi" element={<Registrasi />} />
        <Route path="/AdminDashboard" element={<AdminDashboard />} />
      </Routes>
    </Router>
  );
}
