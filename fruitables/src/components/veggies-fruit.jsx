// import React from "react";

const VeggiesFruit = () => {
  return (
    <>
      <div className="container py-5">
        <div className="row align-items-center">
          <div className="col-md-12 col-lg-6 section-one-left">
            <h4 className="mb-3 first-txt">100% Organic Foods</h4>
            <h1 className="mb-5 display-3 second-txt">
              Organic Veggies &amp; Fruits Foods
            </h1>

            <div className="position-relative mx-auto">
              <input
                className="food-input form-control border-2 w-75 py-3 px-4 rounded-pill"
                type="number"
                placeholder="Search"
              />
              <button
                type="submit"
                className="food-btn btn btn-primary border-2 border-secondary py-3 px-4 position-absolute rounded-pill text-white h-100"
                style={{ top: "0", right: "25%" }}
              >
                Submit Now
              </button>
            </div>
          </div>

          <div className="col-md-12 col-lg-6 section-one-right">
            <div
              id="carouselExampleCaptions"
              className="carousel slide"
              data-bs-ride="carousel"
            >
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img
                    src="https://res.cloudinary.com/ilove2support/image/upload/v1702555676/Fruitable/hero-img-1_pzqrnc.png"
                    className="d-block w-100"
                    alt="fruit"
                  />
                  <div className="carousel-caption d-none d-md-block">
                    <button
                      type="button"
                      className="carousel-txt btn btn-warning"
                    >
                      Fruit
                    </button>
                  </div>
                </div>
                <div className="carousel-item">
                  <img
                    src="https://res.cloudinary.com/ilove2support/image/upload/v1702555698/Fruitable/hero-img-2_rfyrd9.jpg"
                    className="d-block w-100"
                    alt="vegetables"
                  />
                  <div className="carousel-caption d-none d-md-block">
                    <button
                      type="button"
                      className="carousel-txt btn btn-warning"
                    >
                      Vegetable
                    </button>
                  </div>
                </div>
              </div>
              <button
                className="carousel-control-prev carousel-left-btn"
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next carousel-right-btn"
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default VeggiesFruit;
