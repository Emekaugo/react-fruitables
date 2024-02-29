// import React from "react";

const Navbar = () => {
  return (
    <>
      <header id="header-one">
        <nav className="nav-primary">
          <div className="primary-one">
            <span>
              <i className="fa-solid fa-location-dot"></i>&nbsp; &nbsp;123
              street, St. Lucia
            </span>
            &nbsp;&nbsp;
            <span>
              <i className="fa-solid fa-envelope"></i>&nbsp;&nbsp;
              bervarni@ivwobe.com
            </span>
          </div>

          <div className="primary-two">
            <a href="#">privacy policy </a> / <a href="#"> Teams of Use </a> /
            <a href="#">Sales and Refund</a>
          </div>
        </nav>
      </header>

      <div className="container px-0">
        <nav className="navbar navbar-light bg-white navbar-expand-xl">
          <a href="index.html" className="navbar-brand">
            <h1 className="brand-logo">Fruitables</h1>
          </a>
          <button
            className="navbar-toggler py-2 px-3"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
          >
            <span className="fa fa-bars"></span>
          </button>
          <div
            className="collapse navbar-collapse bg-white"
            id="navbarCollapse"
          >
            <div className="navbar-nav mx-auto">
              <a href="#" className="nav-item nav-link active navbar-menu-item">
                Home
              </a>
              <a href="#" className="nav-item nav-link navbar-menu-item">
                Shop
              </a>
              <a href="#" className="nav-item nav-link navbar-menu-item">
                Shop Detail
              </a>
              <div className="nav-item dropdown">
                <a
                  href="#"
                  className="nav-link dropdown-toggle navbar-menu-item"
                  data-bs-toggle="dropdown"
                >
                  Pages
                </a>
                <div className="dropdown-menu m-0 bg-secondary rounded-0">
                  <a href="#" className="dropdown-item">
                    Cart
                  </a>
                  <a href="#" className="dropdown-item">
                    Chackout
                  </a>
                  <a href="#" className="dropdown-item">
                    Testimonial
                  </a>
                  <a href="#" className="dropdown-item">
                    404 Page
                  </a>
                </div>
              </div>
              <a href="#" className="nav-item nav-link navbar-menu-item">
                Contact
              </a>
            </div>
            <div className="d-flex m-3 me-0">
              <button
                className="btn-search btn border border-secondary btn-md-square rounded-circle bg-white me-4"
                data-bs-toggle="modal"
                data-bs-target="#searchModal"
              >
                <i className="fas fa-search"></i>
              </button>
              <a href="#" className="position-relative me-4 my-auto">
                <i className="fa fa-shopping-bag fa-2x"></i>
              </a>
              <a href="#" className="my-auto">
                <i className="fas fa-user fa-2x"></i>
              </a>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
