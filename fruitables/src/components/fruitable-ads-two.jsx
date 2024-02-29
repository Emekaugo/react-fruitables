import React from "react";
// Make sure to create a CSS file with the same name

class FruitableAdsTwo extends React.Component {
  render() {
    // You can add your ad content or logic here
    return (
      <>
        <div className="container-fluid service py-5">
          <div className="container py-5">
            <div className="row g-4 justify-content-center">
              <div className="col-md-6 col-lg-4">
                <a href="#">
                  <div className="service-item rounded border border-secondary">
                    <img
                      src="https://res.cloudinary.com/ilove2support/image/upload/v1702555911/Fruitable/featur-1_jpqici.jpg"
                      className="img-fluid rounded-top w-100"
                      alt="apples"
                    />
                    <div className="px-4 rounded-bottom">
                      <div className="service-content  text-center p-4 rounded">
                        <h5 className="text-white">Fresh Apples</h5>
                        <h3 className="mb-0 discount">20% OFF</h3>
                      </div>
                    </div>
                  </div>
                </a>
              </div>

              <div className="col-md-6 col-lg-4">
                <a href="#">
                  <div className="service-item service-item-berry bg-secondary rounded border border-dark">
                    <img
                      src="https://res.cloudinary.com/ilove2support/image/upload/v1702555920/Fruitable/featur-2_mqiw8k.jpg"
                      className="img-fluid rounded-top w-100"
                      alt="strawberry"
                    />
                    <div className="px-4 rounded-bottom">
                      <div className="service-content service-content-berry  text-center p-4 rounded">
                        <h5 className="text-primary">Tasty Fruits</h5>
                        <h3
                          className="mb-0"
                          // style="color: #45595b;"
                          style={{ color: "#45595b" }}
                        >
                          Free delivery
                        </h3>
                      </div>
                    </div>
                  </div>
                </a>
              </div>

              <div className="col-md-6 col-lg-4">
                <a href="#">
                  <div className="service-item rounded border border-primary">
                    <img
                      src="https://res.cloudinary.com/ilove2support/image/upload/v1702555925/Fruitable/featur-3_jou9cr.jpg"
                      className="img-fluid rounded-top w-100"
                      alt="broccoli"
                    />
                    <div className="px-4 rounded-bottom">
                      <div className="service-content  text-center p-4 rounded">
                        <h5 className="text-white">Exotic Vegitable</h5>
                        <h3 className="mb-0">Discount 30$</h3>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default FruitableAdsTwo;
