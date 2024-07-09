export var Opciones = {
              background: {
                color: {
                  value: "none",
                },
              },
              fpsLimit: 60,
              interactivity: {
                events: {
                  onClick: {
                    enable: true,
                    mode: "repulse",
                  },
                  onHover: {
                    enable: true,
                    mode: "grab",
                  },
                },
                modes: {
                  push: {
                    quantity: 4,
                  },
                  repulse: {
                    distance: 160,
                    duration: 0.4,
                  },
                },
              },
              particles: {
                color: {
                  value: "rgba(100,100,200,1)",
                },
                links: {
                  color: "rgba(90,90,200,1)",
                  distance: 150,
                  enable: true,
                  opacity: 0.5,
                  width: 1,
                },
                move: {
                  direction: "none",
                  enable: true,
                  outModes: {
                    default: "bounce",
                  },
                  random: false,
                  speed: 2,
                  straight: false,
                },
                number: {
                  density: {
                    enable: true,
                  },
                  value: 80,
                },
                opacity: {
                  value: 0.5,
                },
                shape: {
                  type: "circle",
                },
                size: {
                  value: { min: 3, max: 5 },
                },
              },
              detectRetina: true,
            }
