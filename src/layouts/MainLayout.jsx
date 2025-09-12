import { Outlet, Link, NavLink } from "react-router-dom";

function MainLayout() {
  return (
    <div className="container">
      <nav>
        <img src="/assets/logot.svg" alt="" />
        <div className="pagesHome">
          <NavLink className="home" to="/">
            Home
          </NavLink>
          <NavLink className="about" to="about">
            About
          </NavLink>
          <NavLink className="contact" to="contact">
            Contact
          </NavLink>
        </div>
      </nav>
      <Outlet />
    </div>
  );
}

export default MainLayout;
