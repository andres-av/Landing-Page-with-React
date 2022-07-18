import React from "react";

const Navbar = () => {
  return (
    <nav class="navbar bg-dark">
      <div class="container-fluid">
        <h5 class="text-white">
          Navbar
        </h5>
        <ul class="navbar-nav me-auto mb-2 mb-lg-0 navBarFlex-container">
          <li class="nav-item">
            <a class="nav-link active text-white" aria-current="page" href="#">
              Home
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link active text-white" aria-current="page" href="#">
              About
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link active text-white" aria-current="page" href="#">
              Services
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link active text-white" aria-current="page" href="#">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;