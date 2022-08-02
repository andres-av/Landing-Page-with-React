import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar bg-dark">
      <div className="container-fluid">
        <h5 className="text-white">
          Navbar
        </h5>
        <ul className="navbar-nav me-auto mb-2 mb-lg-0 navBarFlex-container">
          <li className="nav-item">
            <a className="nav-link active text-white" aria-current="page" href="#">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link active text-white" aria-current="page" href="#">
              About
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link active text-white" aria-current="page" href="#">
              Services
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link active text-white" aria-current="page" href="#">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;