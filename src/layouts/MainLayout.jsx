import { Outlet, Link, NavLink } from "react-router-dom";
import { useState } from "react";

function MainLayout() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <div className="container">
      <nav className="siteLogo">
        <img src="/assets/logot.svg" alt="" />
        <div className={`pagesHome ${menuOpen ? "open" : ""}`}>
          <NavLink className="home" to="/">
            Home
          </NavLink>
          <NavLink className="about" to="about">
            About
          </NavLink>
          <NavLink className="contact" to="recipes">
            Recipes
          </NavLink>
          <button className="btn homeBtn">Browse recipes</button>
        </div>
        <button className="burger" onClick={toggleMenu}>
          ☰
        </button>
      </nav>
      <Outlet />
    </div>
  );
}

export default MainLayout;
