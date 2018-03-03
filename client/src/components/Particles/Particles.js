import React, { Component } from "react";
import Particles from "react-particles-js";

class NewParticles extends Component {
  render() {
    return (
      <Particles
        params={{
          particles: {
            line_linked: {
              shadow: {
                enable: true,
                color: "#3CA9D1",
                blur: 5
              }
            }
          },
          interactivity: {
            detect_on: "canvas",
            events: {
              onhover: {
                enable: true,
                mode: "repulse"
              }
            }
          }
        }}
        style={{
          width: "100%",
          backgroundImage: `url("https://i0.wp.com/hansonmusic.co.uk/shop/wp-content/uploads/2017/10/Catelinet-HC41Y-trombone-5.jpg")`,
          backgroundRepeat: "no-repeat"
        }}
        height="70vh"
      />
    );
  }
}

export default NewParticles;
