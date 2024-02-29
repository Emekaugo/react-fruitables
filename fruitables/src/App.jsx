/* eslint-disable no-unused-vars */
// import { useState } from "react";
import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

import Navbar from "./components/navbar";
import VeggiesFruit from "./components/veggies-fruit";
import FruitableAdsOne from "./components/fruitable-ads-one";
import OrganicProducts from "./components/organic-products";
import FruitableAdsTwo from "./components/fruitable-ads-two";
import OrganicVegetables from "./components/organic-vegetables";
import ExoticFruits from "./components/exotic-fruits";
import BestSellers from "./components/best-sellers";
import FruitableAdsThree from "./components/fruitable-ads-three";
import Testimonials from "./components/testimonials";
import Footer from "./components/footer";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <div className="container-fluid">
        <Navbar />
        <VeggiesFruit />
        <FruitableAdsOne />
        <OrganicProducts />
        <FruitableAdsTwo />
        <OrganicVegetables />
        <ExoticFruits />
        <BestSellers />
        <FruitableAdsThree />
        <Testimonials />
        <Footer />
      </div>
    </>
  );
}

export default App;
