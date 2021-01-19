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
<<<<<<< HEAD
                size: 200,
=======
                size: 100,
>>>>>>> 53024336b1568abd496fff4429e078fba4212696
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
              "#06ad22"
              ],
            },
            destroy: {
      mode: "split",
      split: {
<<<<<<< HEAD
        count: 3,
=======
        count: 1,
>>>>>>> 53024336b1568abd496fff4429e078fba4212696
        factor: {
          value: 9,
          random: {
            enable: true,
<<<<<<< HEAD
            minimumValue: 2
=======
            minimumValue: 4
>>>>>>> 53024336b1568abd496fff4429e078fba4212696
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
<<<<<<< HEAD
            enable: true
=======
            enable: false
>>>>>>> 53024336b1568abd496fff4429e078fba4212696
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
