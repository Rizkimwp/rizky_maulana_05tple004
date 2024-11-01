// BaseLayout.js
import React from "react";
import Header from "./Header";

interface BaseLayoutProps {
  children: React.ReactNode;
  sidebarOpen: boolean;
  toggleSidebar: () => void;
}

const BaseLayout: React.FC<BaseLayoutProps> = ({ children, sidebarOpen }) => {
  return (
    <div
      className="flex-grow-1"
      style={{
        marginLeft: sidebarOpen ? "250px" : "0",
        transition: "margin-left 0.3s ease",
      }}
    >
      <Header />

      {children}
    </div>
  );
};

export default BaseLayout;
