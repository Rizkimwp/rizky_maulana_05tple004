// routes/Routes.tsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import NotFound from "./components/NotFound";
import Jabatan from "./pages/Jabatan";
import Karyawan from "./pages/Karyawan";
import Divisi from "./pages/Divisi";
import Absensi from "./pages/Absensi";
import Izin from "./pages/Izin";
import Lembur from "./pages/Lembur";

import MaintenanceMode from "./components/Maintenance";

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/karyawan" element={<Karyawan />} />
      <Route path="/jabatan" element={<Jabatan />} />
      <Route path="/divisi" element={<Divisi />} />
      <Route path="/absensi" element={<Absensi />} />
      <Route path="/izin" element={<Izin />} />
      <Route path="/lembur" element={<Lembur />} />
      <Route path="/slip-gaji" element={<MaintenanceMode />} />
      <Route path="/cetak-slip" element={<MaintenanceMode />} />
      <Route path="/cetak-laporan" element={<MaintenanceMode />} />
      <Route path="/pengguna" element={<MaintenanceMode />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;
