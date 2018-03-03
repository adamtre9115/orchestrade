import React, { Component } from "react";
import Tilt from "react-tilt";
import About from "../../components/About";
import Testimony from "../../components/Testimony";
import Footer from "../../components/Footer";
// import "./HomePage.css";

class HomePage extends Component {
  render() {
    return (
      <div>
        <div className="fadeIn">
          <Tilt className="Tilt" options={{ max: 10, scale: 1 }}>
            <section className="text-center Tilt-inner jumbotron">
              <div className="orgName">
                <h1>Orchestrade</h1>
                <p className="lead">Musica Vivit In Aeternum</p>
                <div className="startBtn">
                  <a className="btn btn-dark" href="/signup">
                    Get Started
                  </a>
                </div>
              </div>
            </section>
          </Tilt>
          <blockquote className="blockquote quote text-center">
            <div className="py-4">
              <p className="mb-0 lead">The true beauty of music is that it connects people. It carries a message, and we, the musicians, are the messengers.</p>
              <footer className="blockquote-footer">Roy Ayers</footer>
            </div>
          </blockquote>
          <About />
          {/* <div id="carouselSection">
            <div id="theCarousel">
            <Carousel />
            </div>
          </div> */}
          <Testimony />
          <Footer />
        </div>
      </div>
    );
  }
}

export default HomePage;

