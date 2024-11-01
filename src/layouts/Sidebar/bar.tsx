import React from "react";
import { FaBars } from "react-icons/fa";

const Bar: React.FC<{
  toggleSidebar: () => void;
  sidebarOpen: boolean;
}> = ({ toggleSidebar, sidebarOpen }) => {
  return (
    <div
      className="d-flex justify-content-between align-items-center p-4 "
      style={{
        backgroundColor: sidebarOpen ? "rgba(18,105,219,1)" : "white",
      }}
    >
      <div className="d-flex align-items-center">
        {sidebarOpen && (
          <span className="text-white">Universitas Bung Karno</span>
        )}
      </div>
      <div
        className={`d-flex align-items-center ${sidebarOpen && "text-white"}`}
      >
        <FaBars className="h-20 w-20" onClick={toggleSidebar} />
      </div>
    </div>
  );
};

export default Bar;
