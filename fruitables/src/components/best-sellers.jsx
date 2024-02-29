import React from "react";
// Make sure to create a CSS file with the same name

class BestSellers extends React.Component {
  // Constructor for initializing state, props or binding methods if necessary
  constructor(props) {
    super(props);
    this.state = {
      // Initialize your state here
    };
  }

  // Lifecycle methods, event handlers and other methods can be defined here

  render() {
    // JSX to be returned by the render method
    return (
      <>
        <div className="container-fluid py-5">
          <div className="container py-5">
            <div
              className="text-center mx-auto mb-5"
              // style="max-width: 700px"
              style={{ maxWidth: "700px" }}
            >
              <h1 className="display-4">Bestseller Products</h1>
              <p>
                Latin words, combined with a handful of model sentence
                structures, to generate Lorem Ipsum which looks reasonable.
              </p>
            </div>
            <div className="row g-4">
              <div className="col-lg-6 col-xl-4">
                <div className="p-4 rounded bg-light">
                  <div className="row align-items-center">
                    <div className="col-6">
                      <img
                        src="https://res.cloudinary.com/ilove2support/image/upload/v1702556041/Fruitable/fruite-item-1_iojnev.jpg"
                        className="img-fluid rounded-circle w-60 bestseller-img"
                        alt="tomatoes"
                      />
                    </div>
                    <div className="col-6">
                      <a href="#" className="h5">
                        Organic Tomato
                      </a>
                      <div className="d-flex my-3">
                        <i
                          className="fas fa-star "
                          // style="color: #81c408 !important"
                          style={{ color: "#81c408 !important" }}
                        ></i>
                        <i
                          className="fas fa-star"
                          // style="color: #81c408 !important"
                          style={{ color: "#81c408 !important" }}
                        ></i>
                        <i
                          className="fas fa-star"
                          // style="color: #81c408 !important"
                          style={{ color: "#81c408 !important" }}
                        ></i>
                        <i
                          className="fas fa-star"
                          // style="color: #81c408 !important"
                          style={{ color: "#81c408 !important" }}
                        ></i>
                        <i className="fas fa-star"></i>
                      </div>
                      <h4 className="mb-3">3.12 $</h4>
                      <a
                        href="#"
                        className="btn border border-secondary rounded-pill px-3 text-primary"
                      >
                        <i className="fa fa-shopping-bag me-2 text-primary"></i>{" "}
                        Add to cart
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-xl-4">
                <div className="p-4 rounded bg-light">
                  <div className="row align-items-center">
                    <div className="col-6">
                      <img
                        src="https://res.cloudinary.com/ilove2support/image/upload/v1702556060/Fruitable/fruite-item-2_bzlfnf.jpg"
                        className="img-fluid rounded-circle w-60 bestseller-img"
                        alt="tomato"
                      />
                    </div>
                    <div className="col-6">
                      <a href="#" className="h5">
                        Organic Tomato
                      </a>
                      <div className="d-flex my-3">
                        <i
                          className="fas fa-star"
                          // style="color: #81c408 !important"
                          style={{ color: "#81c408 !important" }}
                        ></i>
                        <i
                          className="fas fa-star"
                          // style="color: #81c408 !important"
                          style={{ color: "#81c408 !important" }}
                        ></i>
                        <i
                          className="fas fa-star"
                          // style="color: #81c408 !important"
                          style={{ color: "#81c408 !important" }}
                        ></i>
                        <i
                          className="fas fa-star"
                          // style="color: #81c408 !important"
                          style={{ color: "#81c408 !important" }}
                        ></i>
                        <i className="fas fa-star"></i>
                      </div>
                      <h4 className="mb-3">3.12 $</h4>
                      <a
                        href="#"
                        className="btn border border-secondary rounded-pill px-3 text-primary"
                      >
                        <i className="fa fa-shopping-bag me-2 text-primary"></i>{" "}
                        Add to cart
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-xl-4">
                <div className="p-4 rounded bg-light">
                  <div className="row align-items-center">
                    <div className="col-6">
                      <img
                        src="https://res.cloudinary.com/ilove2support/image/upload/v1702556071/Fruitable/fruite-item-3_qfps1f.jpg"
                        className="img-fluid rounded-circle w-60 bestseller-img"
                        alt="Tomato"
                      />
                    </div>
                    <div className="col-6">
                      <a href="#" className="h5">
                        Organic Tomato
                      </a>
                      <div className="d-flex my-3">
                        <i
                          className="fas fa-star"
                          // style="color: #81c408 !important"
                          style={{ color: "#81c408 !important" }}
                        ></i>
                        <i
                          className="fas fa-star"
                          // style="color: #81c408 !important"
                          style={{ color: "#81c408 !important" }}
                        ></i>
                        <i
                          className="fas fa-star"
                          // style="color: #81c408 !important"
                          style={{ color: "#81c408 !important" }}
                        ></i>
                        <i
                          className="fas fa-star"
                          // style="color: #81c408 !important"
                          style={{ color: "#81c408 !important" }}
                        ></i>
                        <i className="fas fa-star"></i>
                      </div>
                      <h4 className="mb-3">3.12 $</h4>
                      <a
                        href="#"
                        className="btn border border-secondary rounded-pill px-3 text-primary"
                      >
                        <i className="fa fa-shopping-bag me-2 text-primary"></i>{" "}
                        Add to cart
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-xl-4">
                <div className="p-4 rounded bg-light">
                  <div className="row align-items-center">
                    <div className="col-6">
                      <img
                        src="https://res.cloudinary.com/ilove2support/image/upload/v1702555855/Fruitable/fruite-item-4_gupiwx.jpg"
                        className="img-fluid rounded-circle w-60 bestseller-img"
                        alt="Tomato"
                      />
                    </div>
                    <div className="col-6">
                      <a href="#" className="h5">
                        Organic Tomato
                      </a>
                      <div className="d-flex my-3">
                        <i
                          className="fas fa-star"
                          // style="color: #81c408 !important"
                          style={{ color: "#81c408 !important" }}
                        ></i>
                        <i
                          className="fas fa-star"
                          // style="color: #81c408 !important"
                          style={{ color: "#81c408 !important" }}
                        ></i>
                        <i
                          className="fas fa-star"
                          // style="color: #81c408 !important"
                          style={{ color: "#81c408 !important" }}
                        ></i>
                        <i
                          className="fas fa-star"
                          // style="color: #81c408 !important"
                          style={{ color: "#81c408 !important" }}
                        ></i>
                        <i className="fas fa-star"></i>
                      </div>
                      <h4 className="mb-3">3.12 $</h4>
                      <a
                        href="#"
                        className="btn border border-secondary rounded-pill px-3 text-primary"
                      >
                        <i className="fa fa-shopping-bag me-2 text-primary"></i>{" "}
                        Add to cart
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-xl-4">
                <div className="p-4 rounded bg-light">
                  <div className="row align-items-center">
                    <div className="col-6">
                      <img
                        src="https://res.cloudinary.com/ilove2support/image/upload/v1702555828/Fruitable/fruite-item-5_e8wtyf.jpg"
                        className="img-fluid rounded-circle w-60 bestseller-img"
                        alt="Tomato"
                      />
                    </div>
                    <div className="col-6">
                      <a href="#" className="h5">
                        Organic Tomato
                      </a>
                      <div className="d-flex my-3">
                        <i
                          className="fas fa-star"
                          // style="color: #81c408 !important"
                          style={{ color: "#81c408 !important" }}
                        ></i>
                        <i
                          className="fas fa-star"
                          // style="color: #81c408 !important"
                          style={{ color: "#81c408 !important" }}
                        ></i>
                        <i
                          className="fas fa-star"
                          // style="color: #81c408 !important"
                          style={{ color: "#81c408 !important" }}
                        ></i>
                        <i
                          className="fas fa-star"
                          // style="color: #81c408 !important"
                          style={{ color: "#81c408 !important" }}
                        ></i>
                        <i className="fas fa-star"></i>
                      </div>
                      <h4 className="mb-3">3.12 $</h4>
                      <a
                        href="#"
                        className="btn border border-secondary rounded-pill px-3 text-primary"
                      >
                        <i className="fa fa-shopping-bag me-2 text-primary"></i>{" "}
                        Add to cart
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-xl-4">
                <div className="p-4 rounded bg-light">
                  <div className="row align-items-center">
                    <div className="col-6">
                      <img
                        src="https://res.cloudinary.com/ilove2support/image/upload/v1702556071/Fruitable/fruite-item-3_qfps1f.jpg"
                        className="img-fluid rounded-circle w-60 bestseller-img"
                        alt="tomato"
                      />
                    </div>
                    <div className="col-6">
                      <a href="#" className="h5">
                        Organic Tomato
                      </a>
                      <div className="d-flex my-3">
                        <i
                          className="fas fa-star"
                          // style="color: #81c408 !important"
                          style={{ color: "#81c408 !important" }}
                        ></i>
                        <i
                          className="fas fa-star"
                          // style="color: #81c408 !important"
                          style={{ color: "#81c408 !important" }}
                        ></i>
                        <i
                          className="fas fa-star"
                          // style="color: #81c408 !important"
                          style={{ color: "#81c408 !important" }}
                        ></i>
                        <i
                          className="fas fa-star"
                          // style="color: #81c408 !important"
                          style={{ color: "#81c408 !important" }}
                        ></i>
                        <i className="fas fa-star"></i>
                      </div>
                      <h4 className="mb-3">3.12 $</h4>
                      <a
                        href="#"
                        className="btn border border-secondary rounded-pill px-3 text-primary"
                      >
                        <i className="fa fa-shopping-bag me-2 text-primary"></i>{" "}
                        Add to cart
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-6 col-xl-3">
                <div className="text-center">
                  <img
                    src="https://res.cloudinary.com/ilove2support/image/upload/v1702556041/Fruitable/fruite-item-1_iojnev.jpg"
                    className="img-fluid rounded"
                    alt="tomato"
                  />
                  <div className="py-4">
                    <a href="#" className="h5">
                      Organic Tomato
                    </a>
                    <div className="d-flex my-3 justify-content-center">
                      <i
                        className="fas fa-star"
                        // style="color: #81c408 !important"
                        style={{ color: "#81c408 !important" }}
                      ></i>
                      <i
                        className="fas fa-star"
                        // style="color: #81c408 !important"
                        style={{ color: "#81c408 !important" }}
                      ></i>
                      <i
                        className="fas fa-star"
                        // style="color: #81c408 !important"
                        style={{ color: "#81c408 !important" }}
                      ></i>
                      <i
                        className="fas fa-star"
                        // style="color: #81c408 !important"
                        style={{ color: "#81c408 !important" }}
                      ></i>
                      <i className="fas fa-star"></i>
                    </div>
                    <h4 className="mb-3">3.12 $</h4>
                    <a
                      href="#"
                      className="btn border border-secondary rounded-pill px-3 text-primary"
                    >
                      <i className="fa fa-shopping-bag me-2 text-primary"></i>{" "}
                      Add to cart
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-6 col-xl-3">
                <div className="text-center">
                  <img
                    src="https://res.cloudinary.com/ilove2support/image/upload/v1702556060/Fruitable/fruite-item-2_bzlfnf.jpg"
                    className="img-fluid rounded"
                    alt="tomato"
                  />
                  <div className="py-4">
                    <a href="#" className="h5">
                      Organic Tomato
                    </a>
                    <div className="d-flex my-3 justify-content-center">
                      <i
                        className="fas fa-star"
                        // style="color: #81c408 !important"

                        style={{ color: "#81c408 !important" }}
                      ></i>
                      <i
                        className="fas fa-star"
                        // style="color: #81c408 !important"
                        style={{ color: "#81c408 !important" }}
                      ></i>
                      <i
                        className="fas fa-star"
                        // style="color: #81c408 !important"
                        style={{ color: "#81c408 !important" }}
                      ></i>
                      <i
                        className="fas fa-star"
                        // style="color: #81c408 !important"
                        style={{ color: "#81c408 !important" }}
                      ></i>
                      <i className="fas fa-star"></i>
                    </div>
                    <h4 className="mb-3">3.12 $</h4>
                    <a
                      href="#"
                      className="btn border border-secondary rounded-pill px-3 text-primary"
                    >
                      <i className="fa fa-shopping-bag me-2 text-primary"></i>{" "}
                      Add to cart
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-6 col-xl-3">
                <div className="text-center">
                  <img
                    src="https://res.cloudinary.com/ilove2support/image/upload/v1702556071/Fruitable/fruite-item-3_qfps1f.jpg"
                    className="img-fluid rounded"
                    alt="tomatoe"
                  />
                  <div className="py-4">
                    <a href="#" className="h5">
                      Organic Tomato
                    </a>
                    <div className="d-flex my-3 justify-content-center">
                      <i
                        className="fas fa-star"
                        // style="color: #81c408 !important"
                        style={{ color: "#81c408 !important" }}
                      ></i>
                      <i
                        className="fas fa-star"
                        // style="color: #81c408 !important"
                        style={{ color: "#81c408 !important" }}
                      ></i>
                      <i
                        className="fas fa-star"
                        // style="color: #81c408 !important"

                        style={{ color: "#81c408 !important" }}
                      ></i>
                      <i
                        className="fas fa-star"
                        // style="color: #81c408 !important"
                        style={{ color: "#81c408 !important" }}
                      ></i>
                      <i className="fas fa-star"></i>
                    </div>
                    <h4 className="mb-3">3.12 $</h4>
                    <a
                      href="#"
                      className="btn border border-secondary rounded-pill px-3 text-primary"
                    >
                      <i className="fa fa-shopping-bag me-2 text-primary"></i>{" "}
                      Add to cart
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-6 col-xl-3">
                <div className="text-center">
                  <img
                    src="https://res.cloudinary.com/ilove2support/image/upload/v1702555855/Fruitable/fruite-item-4_gupiwx.jpg"
                    className="img-fluid rounded"
                    alt="tomatoe"
                  />
                  <div className="py-2">
                    <a href="#" className="h5">
                      Organic Tomato
                    </a>
                    <div className="d-flex my-3 justify-content-center">
                      <i
                        className="fas fa-star"
                        // style="color: #81c408 !important"

                        style={{ color: "#81c408 !important" }}
                      ></i>
                      <i
                        className="fas fa-star"
                        // style="color: #81c408 !important"
                        style={{ color: "#81c408 !important" }}
                      ></i>
                      <i
                        className="fas fa-star"
                        // style="color: #81c408 !important"
                        style={{ color: "#81c408 !important" }}
                      ></i>
                      <i
                        className="fas fa-star"
                        // style="color: #81c408 !important"
                        style={{ color: "#81c408 !important" }}
                      ></i>
                      <i className="fas fa-star"></i>
                    </div>
                    <h4 className="mb-3">3.12 $</h4>
                    <a
                      href="#"
                      className="btn border border-secondary rounded-pill px-3 text-primary"
                    >
                      <i className="fa fa-shopping-bag me-2 text-primary"></i>{" "}
                      Add to cart
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default BestSellers;
