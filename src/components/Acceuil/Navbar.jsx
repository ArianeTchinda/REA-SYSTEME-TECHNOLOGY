import React, { useState } from "react";
import { useLocation, Link } from "react-router-dom";
import "../../styles/Navbar.css";

const Navbar = () => {
  const location = useLocation();
  const [dropdown, setDropdown] = useState(null);

  const handleMouseEnter = (menu) => {
    setDropdown(menu);
  };

  const handleMouseLeave = (event, menu) => {
    
    if (!event.currentTarget.contains(event.relatedTarget)) {
      setDropdown(null);
    }
  };

  const menuItems = [
    { name: "Acceuil", path: "/" },
    { name: "À propos", path: "/à-propos" },
    {
      name: "Services",
      path: "/services",
      dropdown: ["Consulting", "Branding", "SEO/SEA", "Formation"]
    },
    {
      name: "Produits",
      path: "/produits",
      dropdown: ["Extincteurs", "controle d'acces", "Video Surveillance", "Securité Hydraulique"]
    },
    { name: "Blog", path: "/Blog" },
  ];

  return (
    <nav className="navbar">
      
      <div className="menu">
        {menuItems.map((item) => {
          const isActive = location.pathname === item.path;
          const isDropdownOpen = dropdown === item.name;

          return (
            <div
              key={item.name}
              className="menu-item"
              onMouseEnter={() => handleMouseEnter(item.name)}
              onMouseLeave={(event) => handleMouseLeave(event, item.name)}
            >
              <Link
                to={item.path}
                className={`menu-link ${isActive ? "active" : ""}`}
              >
                {item.name}
                <span className="underline"></span>
              </Link>

              {/* Sous-menu pour Services et Produits */}
              {item.dropdown && isDropdownOpen && (
                <div className="dropdown">
                  {item.dropdown.map((subItem) => (
                    <Link
                      key={subItem}
                      to={`${item.path}/${subItem.toLowerCase().replace(/\s/g, '-')}`}
                      className="dropdown-link"
                    >
                      {subItem}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </nav>
  );
};

export default Navbar;
