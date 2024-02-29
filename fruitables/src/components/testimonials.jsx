// import React from "react";
// Make sure to create a CSS file with the same name

import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const Testimonials = () => {
  const options = {
    loop: true,
    autoplay: true,
    autoplayTimeout: 4000,
    animateOut: "slideOutUp",
    dots: false,
    margin: 10,
    nav: true,
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
      <div className="container-fluid testimonial py-5">
        <div className="container py-5">
          <div className="testimonial-header text-center">
            <h4 className="text-testimonials">Our Testimonial</h4>
            <h1 className="display-5 mb-5 text-dark text-clients">
              Our Client Saying!
            </h1>
          </div>
        </div>
      </div>

      <OwlCarousel
        className="owl-theme owl-testimonial"
        {...options}
        loop
        margin={10}
        nav
      >
        <div className="item">
          <div className="card bg-light" style={{ width: "30rem" }}>
            <div className="card-body">
              <div
                className="mb-4 pb-4    card-txt-area"
                style={{ borderBottom: "1px solid yellow !important" }}
              >
                <p className="mb-0">
                  Lorem Ipsum is simply dummy text of the printing Ipsum has
                  been the industrys standard dummy text ever since the 1500s,
                </p>
              </div>

              <div className="container">
                <div className="row">
                  <div className="col-8">
                    <div className="d-flex align-items-center flex-nowrap">
                      <div className="bg-light rounded">
                        <img
                          src="https://res.cloudinary.com/ilove2support/image/upload/v1677073192/ecommerce/Hair-salon/longhair_mmexcd.png"
                          className="img-fluid rounded"
                          style={{ width: "100px", height: "100px" }}
                          alt=""
                        />
                      </div>
                      <div className="ms-4 d-block">
                        <h4 className="text-dark">Client Name</h4>
                        <p className="m-0 pb-3">Profession</p>
                        <div className="d-flex pe-5">
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-4">
                    <i
                      className="fa fa-quote-right fa-2x position-absolute"
                      // style="bottom: 30px; right: 0;"
                      style={{ bottom: "30px", right: "35px" }}
                    ></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="item">
          <div className="card bg-light" style={{ width: "30rem" }}>
            <div className="card-body">
              <div
                className="mb-4 pb-4     card-txt-area"
                style={{ borderBottom: "1px solid yellow !important" }}
              >
                <p className="mb-0">
                  Lorem Ipsum is simply dummy text of the printing Ipsum has
                  been the industrys standard dummy text ever since the 1500s,
                </p>
              </div>

              <div className="container">
                <div className="row">
                  <div className="col-8">
                    <div className="d-flex align-items-center flex-nowrap">
                      <div className="bg-light rounded">
                        <img
                          src="https://res.cloudinary.com/ilove2support/image/upload/v1677073192/ecommerce/Hair-salon/longhair_mmexcd.png"
                          className="img-fluid rounded"
                          style={{ width: "100px", height: "100px" }}
                          alt=""
                        />
                      </div>
                      <div className="ms-4 d-block">
                        <h4 className="text-dark">Client Name</h4>
                        <p className="m-0 pb-3">Profession</p>
                        <div className="d-flex pe-5">
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-4">
                    <i
                      className="fa fa-quote-right fa-2x position-absolute"
                      // style="bottom: 30px; right: 0;"
                      style={{ bottom: "30px", right: "35px" }}
                    ></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="item">
          <div className="card bg-light" style={{ width: "30rem" }}>
            <div className="card-body">
              <div
                className="mb-4 pb-4    card-txt-area "
                style={{ borderBottom: "1px solid yellow !important" }}
              >
                <p className="mb-0">
                  Lorem Ipsum is simply dummy text of the printing Ipsum has
                  been the industrys standard dummy text ever since the 1500s,
                </p>
              </div>

              <div className="container">
                <div className="row">
                  <div className="col-8">
                    <div className="d-flex align-items-center flex-nowrap">
                      <div className="bg-light rounded">
                        <img
                          src="https://res.cloudinary.com/ilove2support/image/upload/v1677073192/ecommerce/Hair-salon/longhair_mmexcd.png"
                          className="img-fluid rounded"
                          style={{ width: "100px", height: "100px" }}
                          alt=""
                        />
                      </div>
                      <div className="ms-4 d-block">
                        <h4 className="text-dark">Client Name</h4>
                        <p className="m-0 pb-3">Profession</p>
                        <div className="d-flex pe-5">
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-4">
                    <i
                      className="fa fa-quote-right fa-2x position-absolute"
                      // style="bottom: 30px; right: 0;"
                      style={{ bottom: "30px", right: "35px" }}
                    ></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="item">
          <div className="card bg-light" style={{ width: "30rem" }}>
            <div className="card-body">
              <div
                className="mb-4 pb-4     card-txt-area"
                style={{ borderBottom: "1px solid yellow !important" }}
              >
                <p className="mb-0">
                  Lorem Ipsum is simply dummy text of the printing Ipsum has
                  been the industrys standard dummy text ever since the 1500s,
                </p>
              </div>

              <div className="container">
                <div className="row">
                  <div className="col-8">
                    <div className="d-flex align-items-center flex-nowrap">
                      <div className="bg-light rounded">
                        <img
                          src="https://res.cloudinary.com/ilove2support/image/upload/v1677073192/ecommerce/Hair-salon/longhair_mmexcd.png"
                          className="img-fluid rounded"
                          style={{ width: "100px", height: "100px" }}
                          alt=""
                        />
                      </div>
                      <div className="ms-4 d-block">
                        <h4 className="text-dark">Client Name</h4>
                        <p className="m-0 pb-3">Profession</p>
                        <div className="d-flex pe-5">
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-4">
                    <i
                      className="fa fa-quote-right fa-2x position-absolute"
                      // style="bottom: 30px; right: 0;"
                      style={{ bottom: "30px", right: "35px" }}
                    ></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="item">
          <div className="card bg-light" style={{ width: "30rem" }}>
            <div className="card-body">
              <div
                className="mb-4 pb-4     card-txt-area"
                style={{ borderBottom: "1px solid yellow !important" }}
              >
                <p className="mb-0">
                  Lorem Ipsum is simply dummy text of the printing Ipsum has
                  been the industrys standard dummy text ever since the 1500s,
                </p>
              </div>

              <div className="container">
                <div className="row">
                  <div className="col-8">
                    <div className="d-flex align-items-center flex-nowrap">
                      <div className="bg-light rounded">
                        <img
                          src="https://res.cloudinary.com/ilove2support/image/upload/v1677073192/ecommerce/Hair-salon/longhair_mmexcd.png"
                          className="img-fluid rounded"
                          style={{ width: "100px", height: "100px" }}
                          alt=""
                        />
                      </div>
                      <div className="ms-4 d-block">
                        <h4 className="text-dark">Client Name</h4>
                        <p className="m-0 pb-3">Profession</p>
                        <div className="d-flex pe-5">
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-4">
                    <i
                      className="fa fa-quote-right fa-2x position-absolute"
                      // style="bottom: 30px; right: 0;"
                      style={{ bottom: "30px", right: "35px" }}
                    ></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="item">
          <div className="card bg-light" style={{ width: "30rem" }}>
            <div className="card-body">
              <div
                className="mb-4 pb-4     card-txt-area  "
                style={{ borderBottom: "1px solid yellow !important" }}
              >
                <p className="mb-0">
                  Lorem Ipsum is simply dummy text of the printing Ipsum has
                  been the industrys standard dummy text ever since the 1500s,
                </p>
              </div>

              <div className="container">
                <div className="row">
                  <div className="col-8">
                    <div className="d-flex align-items-center flex-nowrap">
                      <div className="bg-light rounded">
                        <img
                          src="https://res.cloudinary.com/ilove2support/image/upload/v1677073192/ecommerce/Hair-salon/longhair_mmexcd.png"
                          className="img-fluid rounded"
                          style={{ width: "100px", height: "100px" }}
                          alt=""
                        />
                      </div>
                      <div className="ms-4 d-block">
                        <h4 className="text-dark">Client Name</h4>
                        <p className="m-0 pb-3">Profession</p>
                        <div className="d-flex pe-5">
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-4">
                    <i
                      className="fa fa-quote-right fa-2x position-absolute"
                      // style="bottom: 30px; right: 0;"
                      style={{ bottom: "30px", right: "35px" }}
                    ></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </OwlCarousel>
    </>
  );
};

export default Testimonials;
