import React from "react";

interface HeaderProps {
  title?: string;
  description?: string;
}

const HeaderTemplate: React.FC<HeaderProps> = ({ description, title }) => {
  return (
    <div
      className="container-fluid"
      style={{
        background: "linear-gradient(90deg, #1571e6, #0e5abc)",
        padding: title ? "3rem" : "1rem", // Responsive padding that scales
        color: "white",
      }}
    >
      <div className="container-fluid text-center text-md-start">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default HeaderTemplate;
