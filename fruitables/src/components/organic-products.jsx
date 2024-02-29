// import React from "react";

const OrganicProducts = () => {
  return (
    <>
      <div className="container-fluid fruite py-5">
        <div className="container py-5">
          <div className="tab-class text-center">
            <div className="row g-4">
              <div className="col-lg-4 text-start">
                <h1>Our Organic Products</h1>
              </div>

              <div className="col-lg-8 text-end">
                <ul className="nav nav-pills d-inline-flex text-center mb-5">
                  <li className="nav-item">
                    <a
                      className="d-flex m-2 py-2 bg-light rounded-pill active"
                      data-bs-toggle="pill"
                      href="#tab-1"
                    >
                      <span className="text-dark" style={{ width: "130px" }}>
                        All Products
                      </span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="d-flex py-2 m-2 bg-light rounded-pill"
                      data-bs-toggle="pill"
                      href="#tab-2"
                    >
                      <span className="text-dark" style={{ width: "130px" }}>
                        Vegetables
                      </span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="d-flex m-2 py-2 bg-light rounded-pill"
                      data-bs-toggle="pill"
                      href="#tab-3"
                    >
                      <span
                        className="text-dark"
                        // style="width: 130px"
                        style={{ width: "130px" }}
                      >
                        Fruits
                      </span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="d-flex m-2 py-2 bg-light rounded-pill"
                      data-bs-toggle="pill"
                      href="#tab-4"
                    >
                      <span
                        className="text-dark"
                        // style="width: 130px"
                        style={{ width: "130px" }}
                      >
                        Bread
                      </span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="d-flex m-2 py-2 bg-light rounded-pill"
                      data-bs-toggle="pill"
                      href="#tab-5"
                    >
                      <span
                        className="text-dark"
                        // style="width: 130px"
                        style={{ width: "130px" }}
                      >
                        Meat
                      </span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="tab-content">
              <div id="tab-1" className="tab-pane fade show p-0 active">
                <div className="row g-4">
                  <div className="col-lg-12">
                    <div className="row g-4">
                      <div className="col-md-6 col-lg-4 col-xl-3">
                        <div className="rounded position-relative fruite-item">
                          <div className="fruite-img">
                            <img
                              src="https://res.cloudinary.com/ilove2support/image/upload/v1702555828/Fruitable/fruite-item-5_e8wtyf.jpg"
                              className="img-fluid w-100 rounded-top"
                              alt="grapes"
                            />
                          </div>
                          <div
                            className="label-txt text-white bg-warning px-3 py-1 rounded position-absolute"
                            // style="top: 10px; left: 10px"
                            style={{ top: "10px", left: "10px" }}
                          >
                            Fruits
                          </div>
                          <div className="p-4 border border-secondary border-top-0 rounded-bottom">
                            <h4>Grapes</h4>
                            <p>
                              Lorem ipsum dolor sit amet consectetur adipisicing
                              elit sed do eiusmod te incididunt
                            </p>
                            <div className="d-flex justify-content-between flex-lg-wrap">
                              <p className="text-dark fs-5 fw-bold mb-0">
                                $4.99 / kg
                              </p>
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

                      <div className="col-md-6 col-lg-4 col-xl-3">
                        <div className="rounded position-relative fruite-item">
                          <div className="fruite-img">
                            <img
                              src="https://res.cloudinary.com/ilove2support/image/upload/v1702555828/Fruitable/fruite-item-5_e8wtyf.jpg"
                              className="img-fluid w-100 rounded-top"
                              alt="grapes"
                            />
                          </div>
                          <div
                            className="label-txt text-white bg-warning px-3 py-1 rounded position-absolute"
                            // style="top: 10px; left: 10px"
                            style={{ top: "10px", left: "10px" }}
                          >
                            Fruits
                          </div>
                          <div className="p-4 border border-secondary border-top-0 rounded-bottom">
                            <h4>Grapes</h4>
                            <p>
                              Lorem ipsum dolor sit amet consectetur adipisicing
                              elit sed do eiusmod te incididunt
                            </p>
                            <div className="d-flex justify-content-between flex-lg-wrap">
                              <p className="text-dark fs-5 fw-bold mb-0">
                                $4.99 / kg
                              </p>
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

                      <div className="col-md-6 col-lg-4 col-xl-3">
                        <div className="rounded position-relative fruite-item">
                          <div className="fruite-img">
                            <img
                              src="https://res.cloudinary.com/ilove2support/image/upload/v1702555849/Fruitable/fruite-item-2_gi5fff.jpg"
                              className="img-fluid w-100 rounded-top"
                              alt="Raspberries"
                            />
                          </div>
                          <div
                            className="label-txt text-white bg-warning px-3 py-1 rounded position-absolute"
                            // style="top: 10px; left: 10px"
                            style={{ top: "10px", left: "10px" }}
                          >
                            Fruits
                          </div>
                          <div className="p-4 border border-secondary border-top-0 rounded-bottom">
                            <h4>Raspberries</h4>
                            <p>
                              Lorem ipsum dolor sit amet consectetur adipisicing
                              elit sed do eiusmod te incididunt
                            </p>
                            <div className="d-flex justify-content-between flex-lg-wrap">
                              <p className="text-dark fs-5 fw-bold mb-0">
                                $4.99 / kg
                              </p>
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

                      <div className="col-md-6 col-lg-4 col-xl-3">
                        <div className="rounded position-relative fruite-item">
                          <div className="fruite-img">
                            <img
                              src="https://res.cloudinary.com/ilove2support/image/upload/v1702555855/Fruitable/fruite-item-4_gupiwx.jpg"
                              className="img-fluid w-100 rounded-top"
                              alt="apricot"
                            />
                          </div>
                          <div
                            className="label-txt text-white bg-warning px-3 py-1 rounded position-absolute"
                            // style="top: 10px; left: 10px"
                            style={{ top: "10px", left: "10px" }}
                          >
                            Fruits
                          </div>
                          <div className="p-4 border border-secondary border-top-0 rounded-bottom">
                            <h4>Apricots</h4>
                            <p>
                              Lorem ipsum dolor sit amet consectetur adipisicing
                              elit sed do eiusmod te incididunt
                            </p>
                            <div className="d-flex justify-content-between flex-lg-wrap">
                              <p className="text-dark fs-5 fw-bold mb-0">
                                $4.99 / kg
                              </p>
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

                      <div className="col-md-6 col-lg-4 col-xl-3">
                        <div className="rounded position-relative fruite-item">
                          <div className="fruite-img">
                            <img
                              src="https://res.cloudinary.com/ilove2support/image/upload/v1702555976/Fruitable/vegetable-item-3_zshc4a.png"
                              className="img-fluid w-100 rounded-top"
                              alt="banana"
                            />
                          </div>
                          <div
                            className="label-txt text-white bg-warning px-3 py-1 rounded position-absolute"
                            // style="top: 10px; left: 10px"
                            style={{ top: "10px", left: "10px" }}
                          >
                            Fruits
                          </div>
                          <div className="p-4 border border-secondary border-top-0 rounded-bottom">
                            <h4>Banana</h4>
                            <p>
                              Lorem ipsum dolor sit amet consectetur adipisicing
                              elit sed do eiusmod te incididunt
                            </p>
                            <div className="d-flex justify-content-between flex-lg-wrap">
                              <p className="text-dark fs-5 fw-bold mb-0">
                                $4.99 / kg
                              </p>
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

                      <div className="col-md-6 col-lg-4 col-xl-3">
                        <div className="rounded position-relative fruite-item">
                          <div className="fruite-img">
                            <img
                              src="https://res.cloudinary.com/ilove2support/image/upload/v1702556041/Fruitable/fruite-item-1_iojnev.jpg"
                              className="img-fluid w-100 rounded-top"
                              alt="oranges"
                            />
                          </div>
                          <div
                            className="label-txt text-white bg-warning px-3 py-1 rounded position-absolute"
                            // style="top: 10px; left: 10px"
                            style={{ top: "10px", left: "10px" }}
                          >
                            Fruits
                          </div>
                          <div className="p-4 border border-secondary border-top-0 rounded-bottom">
                            <h4>Oranges</h4>
                            <p>
                              Lorem ipsum dolor sit amet consectetur adipisicing
                              elit sed do eiusmod te incididunt
                            </p>
                            <div className="d-flex justify-content-between flex-lg-wrap">
                              <p className="text-dark fs-5 fw-bold mb-0">
                                $4.99 / kg
                              </p>
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

                      <div className="col-md-6 col-lg-4 col-xl-3">
                        <div className="rounded position-relative fruite-item">
                          <div className="fruite-img">
                            <img
                              src="https://res.cloudinary.com/ilove2support/image/upload/v1702556060/Fruitable/fruite-item-2_bzlfnf.jpg"
                              className="img-fluid w-100 rounded-top"
                              alt="Raspberries"
                            />
                          </div>
                          <div
                            className="label-txt text-white bg-warning px-3 py-1 rounded position-absolute"
                            // style="top: 10px; left: 10px"
                            style={{ top: "10px", left: "10px" }}
                          >
                            Fruits
                          </div>
                          <div className="p-4 border border-secondary border-top-0 rounded-bottom">
                            <h4>Raspberries</h4>
                            <p>
                              Lorem ipsum dolor sit amet consectetur adipisicing
                              elit sed do eiusmod te incididunt
                            </p>
                            <div className="d-flex justify-content-between flex-lg-wrap">
                              <p className="text-dark fs-5 fw-bold mb-0">
                                $4.99 / kg
                              </p>
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

                      <div className="col-md-6 col-lg-4 col-xl-3">
                        <div className="rounded position-relative fruite-item">
                          <div className="fruite-img">
                            <img
                              src="https://res.cloudinary.com/ilove2support/image/upload/v1702555828/Fruitable/fruite-item-5_e8wtyf.jpg"
                              className="img-fluid w-100 rounded-top"
                              alt="grapes"
                            />
                          </div>
                          <div
                            className="label-txt text-white bg-warning px-3 py-1 rounded position-absolute"
                            // style="top: 10px; left: 10px"
                            style={{ top: "10px", left: "10px" }}
                          >
                            Fruits
                          </div>
                          <div className="p-4 border border-secondary border-top-0 rounded-bottom">
                            <h4>Grapes</h4>
                            <p>
                              Lorem ipsum dolor sit amet consectetur adipisicing
                              elit sed do eiusmod te incididunt
                            </p>
                            <div className="d-flex justify-content-between flex-lg-wrap">
                              <p className="text-dark fs-5 fw-bold mb-0">
                                $4.99 / kg
                              </p>
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
                    </div>
                  </div>
                </div>
              </div>

              <div id="tab-2" className="tab-pane fade show p-0">
                <div className="row g-4">
                  <div className="col-lg-12">
                    <div className="row g-4">
                      <div className="col-md-6 col-lg-4 col-xl-3">
                        <div className="rounded position-relative fruite-item">
                          <div className="fruite-img">
                            <img
                              src="https://res.cloudinary.com/ilove2support/image/upload/v1702555828/Fruitable/fruite-item-5_e8wtyf.jpg"
                              className="img-fluid w-100 rounded-top"
                              alt="grapes"
                            />
                          </div>
                          <div
                            className="label-txt text-white bg-warning px-3 py-1 rounded position-absolute"
                            // style="top: 10px; left: 10px"
                            style={{ top: "10px", left: "10px" }}
                          >
                            Fruits
                          </div>
                          <div className="p-4 border border-secondary border-top-0 rounded-bottom">
                            <h4>Grapes</h4>
                            <p>
                              Lorem ipsum dolor sit amet consectetur adipisicing
                              elit sed do eiusmod te incididunt
                            </p>
                            <div className="d-flex justify-content-between flex-lg-wrap">
                              <p className="text-dark fs-5 fw-bold mb-0">
                                $4.99 / kg
                              </p>
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
                      <div className="col-md-6 col-lg-4 col-xl-3">
                        <div className="rounded position-relative fruite-item">
                          <div className="fruite-img">
                            <img
                              src="https://res.cloudinary.com/ilove2support/image/upload/v1702555849/Fruitable/fruite-item-2_gi5fff.jpg"
                              className="img-fluid w-100 rounded-top"
                              alt="Raspberries"
                            />
                          </div>
                          <div
                            className="label-txt text-white bg-warning px-3 py-1 rounded position-absolute"
                            // style="top: 10px; left: 10px"
                            style={{ top: "10px", left: "10px" }}
                          >
                            Fruits
                          </div>
                          <div className="p-4 border border-secondary border-top-0 rounded-bottom">
                            <h4>Raspberries</h4>
                            <p>
                              Lorem ipsum dolor sit amet consectetur adipisicing
                              elit sed do eiusmod te incididunt
                            </p>
                            <div className="d-flex justify-content-between flex-lg-wrap">
                              <p className="text-dark fs-5 fw-bold mb-0">
                                $4.99 / kg
                              </p>
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
                    </div>
                  </div>
                </div>
              </div>

              <div id="tab-3" className="tab-pane fade show p-0">
                <div className="row g-4">
                  <div className="col-lg-12">
                    <div className="row g-4">
                      <div className="col-md-6 col-lg-4 col-xl-3">
                        <div className="rounded position-relative fruite-item">
                          <div className="fruite-img">
                            <img
                              src="https://res.cloudinary.com/ilove2support/image/upload/v1702556041/Fruitable/fruite-item-1_iojnev.jpg"
                              className="img-fluid w-100 rounded-top"
                              alt="oranges"
                            />
                          </div>
                          <div
                            className="label-txt text-white bg-warning px-3 py-1 rounded position-absolute"
                            // style="top: 10px; left: 10px"
                            style={{ top: "10px", left: "10px" }}
                          >
                            Fruits
                          </div>
                          <div className="p-4 border border-secondary border-top-0 rounded-bottom">
                            <h4>Oranges</h4>
                            <p>
                              Lorem ipsum dolor sit amet consectetur adipisicing
                              elit sed do eiusmod te incididunt
                            </p>
                            <div className="d-flex justify-content-between flex-lg-wrap">
                              <p className="text-dark fs-5 fw-bold mb-0">
                                $4.99 / kg
                              </p>
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

                      <div className="col-md-6 col-lg-4 col-xl-3">
                        <div className="rounded position-relative fruite-item">
                          <div className="fruite-img">
                            <img
                              src="https://res.cloudinary.co"
                              className="img-fluid w-100 rounded-top"
                              alt="apples"
                            />
                          </div>
                          <div
                            className="label-txt text-white bg-warning px-3 py-1 rounded position-absolute"
                            // style="top: 10px; left: 10px"
                            style={{ top: "10px", left: "10px" }}
                          >
                            Fruits
                          </div>
                          <div className="p-4 border border-secondary border-top-0 rounded-bottom">
                            <h4>Apple</h4>
                            <p>
                              Lorem ipsum dolor sit amet consectetur adipisicing
                              elit sed do eiusmod te incididunt
                            </p>
                            <div className="d-flex justify-content-between flex-lg-wrap">
                              <p className="text-dark fs-5 fw-bold mb-0">
                                $4.99 / kg
                              </p>
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
                    </div>
                  </div>
                </div>
              </div>

              <div id="tab-4" className="tab-pane fade show p-0">
                <div className="row g-4">
                  <div className="col-lg-12">
                    <div className="row g-4">
                      <div className="col-md-6 col-lg-4 col-xl-3">
                        <div className="rounded position-relative fruite-item">
                          <div className="fruite-img">
                            <img
                              src="https://res.cloudinary.com/ilove2support/image/upload/v1702555828/Fruitable/fruite-item-5_e8wtyf.jpg"
                              className="img-fluid w-100 rounded-top"
                              alt="grapes"
                            />
                          </div>
                          <div
                            className="label-txt text-white bg-warning px-3 py-1 rounded position-absolute"
                            // style="top: 10px; left: 10px"
                            style={{ top: "10px", left: "10px" }}
                          >
                            Fruits
                          </div>
                          <div className="p-4 border border-secondary border-top-0 rounded-bottom">
                            <h4>Grapes</h4>
                            <p>
                              Lorem ipsum dolor sit amet consectetur adipisicing
                              elit sed do eiusmod te incididunt
                            </p>
                            <div className="d-flex justify-content-between flex-lg-wrap">
                              <p className="text-dark fs-5 fw-bold mb-0">
                                $4.99 / kg
                              </p>
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

                      <div className="col-md-6 col-lg-4 col-xl-3">
                        <div className="rounded position-relative fruite-item">
                          <div className="fruite-img">
                            <img
                              src="https://res.cloudinary.com/ilove2support/image/upload/v1702555855/Fruitable/fruite-item-4_gupiwx.jpg"
                              className="img-fluid w-100 rounded-top"
                              alt="apricot"
                            />
                          </div>
                          <div
                            className="label-txt text-white bg-warning px-3 py-1 rounded position-absolute"
                            // style="top: 10px; left: 10px"
                            style={{ top: "10px", left: "10px" }}
                          >
                            Fruits
                          </div>
                          <div className="p-4 border border-secondary border-top-0 rounded-bottom">
                            <h4>Apricots</h4>
                            <p>
                              Lorem ipsum dolor sit amet consectetur adipisicing
                              elit sed do eiusmod te incididunt
                            </p>
                            <div className="d-flex justify-content-between flex-lg-wrap">
                              <p className="text-dark fs-5 fw-bold mb-0">
                                $4.99 / kg
                              </p>
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
                    </div>
                  </div>
                </div>
              </div>
              <div id="tab-5" className="tab-pane fade show p-0">
                <div className="row g-4">
                  <div className="col-lg-12">
                    <div className="row g-4">
                      <div className="col-md-6 col-lg-4 col-xl-3">
                        <div className="rounded position-relative fruite-item">
                          <div className="fruite-img">
                            <img
                              src="https://res.cloudinary.com/ilove2support/image/upload/v1702555976/Fruitable/vegetable-item-3_zshc4a.png"
                              className="img-fluid w-100 rounded-top"
                              alt="banana"
                            />
                          </div>
                          <div
                            className="label-txt text-white bg-warning px-3 py-1 rounded position-absolute"
                            // style="top: 10px; left: 10px"
                            style={{ top: "10px", left: "10px" }}
                          >
                            Fruits
                          </div>
                          <div className="p-4 border border-secondary border-top-0 rounded-bottom">
                            <h4>Banana</h4>
                            <p>
                              Lorem ipsum dolor sit amet consectetur adipisicing
                              elit sed do eiusmod te incididunt
                            </p>
                            <div className="d-flex justify-content-between flex-lg-wrap">
                              <p className="text-dark fs-5 fw-bold mb-0">
                                $4.99 / kg
                              </p>
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
                      <div className="col-md-6 col-lg-4 col-xl-3">
                        <div className="rounded position-relative fruite-item">
                          <div className="fruite-img">
                            <img
                              src="https://res.cloudinary.com/ilove2support/image/upload/v1702555849/Fruitable/fruite-item-2_gi5fff.jpg"
                              className="img-fluid w-100 rounded-top"
                              alt="Raspberries"
                            />
                          </div>
                          <div
                            className="label-txt text-white bg-warning px-3 py-1 rounded position-absolute"
                            // style="top: 10px; left: 10px"
                            style={{ top: "10px", left: "10px" }}
                          >
                            Fruits
                          </div>
                          <div className="p-4 border border-secondary border-top-0 rounded-bottom">
                            <h4>Raspberries</h4>
                            <p>
                              Lorem ipsum dolor sit amet consectetur adipisicing
                              elit sed do eiusmod te incididunt
                            </p>
                            <div className="d-flex justify-content-between flex-lg-wrap">
                              <p className="text-dark fs-5 fw-bold mb-0">
                                $4.99 / kg
                              </p>
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
                      <div className="col-md-6 col-lg-4 col-xl-3">
                        <div className="rounded position-relative fruite-item">
                          <div className="fruite-img">
                            <img
                              src="https://res.cloudinary.com/ilove2support/image/upload/v1702556041/Fruitable/fruite-item-1_iojnev.jpg"
                              className="img-fluid w-100 rounded-top"
                              alt="oranges"
                            />
                          </div>
                          <div
                            className="label-txt text-white bg-warning px-3 py-1 rounded position-absolute"
                            // style="top: 10px; left: 10px"
                            style={{ top: "10px", left: "10px" }}
                          >
                            Fruits
                          </div>
                          <div className="p-4 border border-secondary border-top-0 rounded-bottom">
                            <h4>Oranges</h4>
                            <p>
                              Lorem ipsum dolor sit amet consectetur adipisicing
                              elit sed do eiusmod te incididunt
                            </p>
                            <div className="d-flex justify-content-between flex-lg-wrap">
                              <p className="text-dark fs-5 fw-bold mb-0">
                                $4.99 / kg
                              </p>
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
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OrganicProducts;
