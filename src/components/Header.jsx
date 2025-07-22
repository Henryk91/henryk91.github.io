import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { NavDirContext } from "../App"; // adjust the import path as needed

const icons = [
  { to: "/", label: "Home", icon: "whiteHouseIcon.png" },
  { to: "/about", label: "About", icon: "whiteProfileIcon.png" },
  { to: "/projects", label: "Projects", icon: "whiteGearIcon.png" },
  { to: "/contact", label: "Contact", icon: "whiteMailIcon.png" }
];

export default function Header() {
  const location = useLocation();
  const navigate = useNavigate();
  const { setDirection } = React.useContext(NavDirContext);

  function handleNav(to) {
    const pageRoutes = ["/", "/about", "/projects", "/contact"];
    const currIdx = pageRoutes.indexOf(location.pathname);
    const newIdx = pageRoutes.indexOf(to);
    if (newIdx > currIdx || (newIdx === 0 && currIdx === pageRoutes.length - 1)) {
      setDirection(1);
    } else if (newIdx < currIdx || (newIdx === pageRoutes.length - 1 && currIdx === 0)) {
      setDirection(-1);
    } else {
      setDirection(1); // Default to forward
    }
    navigate(to);
  }

  return (
    <header>
      <nav>
        {icons.map(({ to, label, icon }) => (
          <div
            className="icon"
            key={to}
            style={{ cursor: "pointer" }}
            onClick={() => handleNav(to)}
          >
            <img
              src={`/icons/${icon}`}
              alt={`${label.toLowerCase()}-icon`}
              style={location.pathname === to ? {
                background: "rgb(94, 164, 255,0.4)",
                borderRadius: "50%",
                boxShadow: "0 0 60px 1px rgb(94, 164, 255, 0.6)"
              } : {}}
            />
            <p className="navText">{label}</p>
          </div>
        ))}
        <a href="https://henryk.co.za/Covid-19-dash/" target="_blank" rel="noopener noreferrer">
          <div className="icon">
            <img src="/icons/dashboard-48.png" alt="dash-icon" />
            <p className="navText">Dash</p>
          </div>
        </a>
      </nav>
    </header>
  );
}
