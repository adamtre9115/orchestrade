import React, { Component } from "react";
import Navi from "../../components/Navi";
import Jumbo from "../../components/Jumbo";
import Carousel from "../../components/Carousel";
import AboutUs from "../../components/AboutUs";
import Testimony from "../../components/Testimony";
import Footer from "../../components/Footer";


class IndexPage extends Component {
  render() {
    return (
      <div>
        <Jumbo />
        <AboutUs />
        <Footer />
      </div>
    );
  }
}

export default IndexPage;
