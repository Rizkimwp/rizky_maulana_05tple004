import React from "react";
import { FaTools } from "react-icons/fa"; // Optional: Use an icon library for maintenance icon

const MaintenanceMode: React.FC = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        backgroundColor: "#f8f9fa",
        color: "#333",
        textAlign: "center",
        padding: "20px",
      }}
    >
      <FaTools size={50} color="#1571e6" style={{ marginBottom: "20px" }} />
      <h1>System Under Maintenance</h1>
      <p style={{ maxWidth: "500px", margin: "0 auto", fontSize: "1.1em" }}>
        We are currently performing scheduled maintenance. We apologize for any
        inconvenience and appreciate your patience. Please check back later.
      </p>
    </div>
  );
};

export default MaintenanceMode;
