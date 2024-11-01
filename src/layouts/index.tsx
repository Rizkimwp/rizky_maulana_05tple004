// layout/index.tsx
import React, { useState } from "react";

import BaseLayout from "./BaseLayout";
import Sidebar from "./Sidebar";
import AppRoutes from "../Routes";

const Layout: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="d-flex">
      <Sidebar sidebarOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
      <BaseLayout sidebarOpen={sidebarOpen} toggleSidebar={toggleSidebar}>
        <AppRoutes />
      </BaseLayout>
    </div>
  );
};

export default Layout;
