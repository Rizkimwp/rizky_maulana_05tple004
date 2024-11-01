import React from "react";
import { NavLink } from "react-router-dom";
interface NavItemProps {
  to: string;
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  sidebarOpen: boolean;
}
const NavItem: React.FC<NavItemProps> = ({
  to,
  icon: Icon,
  label,
  sidebarOpen,
}) => {
  return (
    <li className="nav-item">
      <NavLink
        to={to}
        className={({ isActive }) =>
          `nav-link d-flex ${sidebarOpen ? "align-items-center" : "justify-content-center"} ${isActive ? "bg-primary text-white rounded" : "text-secondary"}`
        }
        style={{ padding: "0.75rem 1rem", margin: "0.25rem 0" }}
      >
        <Icon className={sidebarOpen ? "me-2" : ""} />
        {sidebarOpen && <span>{label}</span>}
      </NavLink>
    </li>
  );
};

export default NavItem;
