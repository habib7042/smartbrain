import React from 'react'
import Particles from "react-tsparticles";

const partStyle = {
          fpsLimit: 60,
          interactivity: {
            detectsOn: "canvas",
            events: {
              onClick: {
                enable: true,
                mode: "push",
              },
              onHover: {
                enable: true,
                mode: "repulse",
              },
              resize: true,
            },
            modes: {
              bubble: {
                distance: 400,
                duration: 2,
                opacity: 1,
                size: 60,
              },
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: "#8B0000",
            },
            links: {
              color: "#0000FF",
              distance: 150,
              enable: true,
              opacity: 0,
              width: 2,
            },
            collisions: {
              enable: true,
            },
            move: {
              direction: "none",
              enable: true,
              outMode: "bounce",
              random: false,
              speed: 6,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                value_area: 500,
              },
              value: 50,
            },
            opacity: {
              value: 0.8,
            },
            shape: {
                 type: "circle",
              },
            size: {
              random: true,
              value: 8,
            },
          },
          detectRetina: true,
        }
const Style =() => {
    return (
      <Particles className = 'particles'
        id="tsparticles"
        options={partStyle}
      />
    );
}

export default Style;
