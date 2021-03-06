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
                distance: 600,
                duration: 5,
                opacity: 1,
                size: 100,
              },
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 200,
                duration: 0.7,
              },
            },
          },
          particles: {
            color: {
              value: [
              "#ff0000",
              "#06ad22",
              "#800080",
              "#000000"
              ],
            },
            destroy: {
      mode: "split",
      split: {
        count: 3,
        factor: {
          value: 9,
          random: {
            enable: true,
            minimumValue: 2
          }
        },
        rate: {
          value: 10,
          random: {
            enable: true,
            minimumValue: 5
          }
        },
        particles: {
          collisions: {
            enable: true
          },
          destroy: {
            mode: "none"
          },
          life: {
            count: 1,
            duration: {
              value: 1
            }
          }
        }
      }
    },
            links: {
              color: "#000080",
              distance: 200,
              enable: true,
              opacity: 0.5,
              width: 1,
            },
            collisions: {
              enable: true,
            },
            move: {
              direction: "none",
              enable: true,
              outMode: "bounce",
              random: true,
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
              value: 10,
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
