// import React from "react";

import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const OrganicVegetables = () => {
  const options = {
    loop: true,
    autoplay: true,
    autoplayTimeout: 4000,
    animateOut: "slideOutUp",
    dots: false,
    margin: 10,
    nav: false,
    responsive: {
      1100: {
        items: 3,
      },
      724: {
        items: 1,
      },
      500: {
        items: 1,
      },
      170: {
        items: 1,
        innerWidth: "100%",
        outerWidth: "100%",
      },
    },
  };

  return (
    <>
      <div className="container-fluid vesitable py-5">
        <div className="container py-5">
          <h1 className="mb-0">Fresh Organic Vegetables</h1>
        </div>
      </div>
      <OwlCarousel
        {...options}
        loop
        margin={10}
        className="owl-theme vesitable "
        nav
      >
        <div className="item">
          <div className="post-slide">
            <div className="post-img">
              <img
                src="https://res.cloudinary.com/ilove2support/image/upload/v1702556041/Fruitable/fruite-item-1_iojnev.jpg"
                alt=""
              />

              <div
                className="label-txt text-white  px-3 py-1 rounded position-absolute"
                // style="top: 35px; left: 170px"
                style={{ top: "35px", left: "170px" }}
              >
                Vegetables
              </div>
            </div>
            <div className="post-content">
              <h3 className="post-title">
                <a href="#">Lorem ipsum dolor sit amet.</a>
              </h3>
              <p className="post-description">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Aperiam consectetur cumque dolorum, ex incidunt ipsa laudantium
                necessitatibus neque quae tempora......
              </p>

              <div className="d-flex justify-content-between flex-lg-wrap">
                <p className="text-dark fs-5 fw-bold mb-0">$4.99 / kg</p>
                <a
                  href="#"
                  className="btn border border-secondary rounded-pill px-3 text-primary"
                >
                  <i className="fa fa-shopping-bag me-2 text-primary"></i>
                  Add to cart
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="item">
          <div className="post-slide">
            <div className="post-img">
              <img
                src="https://res.cloudinary.com/ilove2support/image/upload/v1702556060/Fruitable/fruite-item-2_bzlfnf.jpg"
                alt=""
              />

              <div
                className="label-txt text-white  px-3 py-1 rounded position-absolute"
                // style="top: 35px; left: 170px"
                style={{ top: "35px", left: "170px" }}
              >
                Vegetables
              </div>
            </div>
            <div className="post-content">
              <h3 className="post-title">
                <a href="#">Lorem ipsum dolor sit amet.</a>
              </h3>
              <p className="post-description">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Aperiam consectetur cumque dolorum, ex incidunt ipsa laudantium
                necessitatibus neque quae tempora......
              </p>

              <div className="d-flex justify-content-between flex-lg-wrap">
                <p className="text-dark fs-5 fw-bold mb-0">$4.99 / kg</p>
                <a
                  href="#"
                  className="btn border border-secondary rounded-pill px-3 text-primary"
                >
                  <i className="fa fa-shopping-bag me-2 text-primary"></i>
                  Add to cart
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="item">
          <div className="post-slide">
            <div className="post-img">
              <img
                src="https://res.cloudinary.com/ilove2support/image/upload/v1702556071/Fruitable/fruite-item-3_qfps1f.jpg"
                alt=""
              />

              <div
                className="label-txt text-white  px-3 py-1 rounded position-absolute"
                // style="top: 35px; left: 170px"
                style={{ top: "35px", left: "170px" }}
              >
                Vegetables
              </div>
            </div>
            <div className="post-content">
              <h3 className="post-title">
                <a href="#">Lorem ipsum dolor sit amet.</a>
              </h3>
              <p className="post-description">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Aperiam consectetur cumque dolorum, ex incidunt ipsa laudantium
                necessitatibus neque quae tempora......
              </p>

              <div className="d-flex justify-content-between flex-lg-wrap">
                <p className="text-dark fs-5 fw-bold mb-0">$4.99 / kg</p>
                <a
                  href="#"
                  className="btn border border-secondary rounded-pill px-3 text-primary"
                >
                  <i className="fa fa-shopping-bag me-2 text-primary"></i>
                  Add to cart
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="item">
          <div className="post-slide">
            <div className="post-img">
              <img
                src="https://res.cloudinary.com/ilove2support/image/upload/v1702555855/Fruitable/fruite-item-4_gupiwx.jpg"
                alt=""
              />

              <div
                className="label-txt text-white  px-3 py-1 rounded position-absolute"
                // style="top: 35px; left: 170px"
                style={{ top: "35px", left: "170px" }}
              >
                Vegetables
              </div>
            </div>
            <div className="post-content">
              <h3 className="post-title">
                <a href="#">Lorem ipsum dolor sit amet.</a>
              </h3>
              <p className="post-description">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Aperiam consectetur cumque dolorum, ex incidunt ipsa laudantium
                necessitatibus neque quae tempora......
              </p>

              <div className="d-flex justify-content-between flex-lg-wrap">
                <p className="text-dark fs-5 fw-bold mb-0">$4.99 / kg</p>
                <a
                  href="#"
                  className="btn border border-secondary rounded-pill px-3 text-primary"
                >
                  <i className="fa fa-shopping-bag me-2 text-primary"></i>
                  Add to cart
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="item">
          <div className="post-slide">
            <div className="post-img">
              <img
                src="https://res.cloudinary.com/ilove2support/image/upload/v1702555828/Fruitable/fruite-item-5_e8wtyf.jpg"
                alt=""
              />

              <div
                className="label-txt text-white  px-3 py-1 rounded position-absolute"
                // style="top: 35px; left: 170px"
                style={{ top: "35px", left: "170px" }}
              >
                Vegetables
              </div>
            </div>
            <div className="post-content">
              <h3 className="post-title">
                <a href="#">Lorem ipsum dolor sit amet.</a>
              </h3>
              <p className="post-description">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Aperiam consectetur cumque dolorum, ex incidunt ipsa laudantium
                necessitatibus neque quae tempora......
              </p>

              <div className="d-flex justify-content-between flex-lg-wrap">
                <p className="text-dark fs-5 fw-bold mb-0">$4.99 / kg</p>
                <a
                  href="#"
                  className="btn border border-secondary rounded-pill px-3 text-primary"
                >
                  <i className="fa fa-shopping-bag me-2 text-primary"></i>
                  Add to cart
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="item">
          <div className="post-slide">
            <div className="post-img">
              <img
                src="https://res.cloudinary.com/ilove2support/image/upload/v1702556041/Fruitable/fruite-item-1_iojnev.jpg"
                alt=""
              />

              <div
                className="label-txt text-white px-3 py-1 rounded position-absolute"
                // style="top: 35px; left: 170px"
                style={{ top: "35px", left: "170px" }}
              >
                Vegetables
              </div>
            </div>
            <div className="post-content">
              <h3 className="post-title">
                <a href="#">Lorem ipsum dolor sit amet.</a>
              </h3>
              <p className="post-description">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Aperiam consectetur cumque dolorum, ex incidunt ipsa laudantium
                necessitatibus neque quae tempora......
              </p>

              <div className="d-flex justify-content-between flex-lg-wrap">
                <p className="text-dark fs-5 fw-bold mb-0">$4.99 / kg</p>
                <a
                  href="#"
                  className="btn border border-secondary rounded-pill px-3 text-primary"
                >
                  <i className="fa fa-shopping-bag me-2 text-primary"></i>
                  Add to cart
                </a>
              </div>
            </div>
          </div>
        </div>
      </OwlCarousel>
    </>
  );
};

export default OrganicVegetables;
