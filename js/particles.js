particlesJS("particles-js", {
    particles: {
      number: { value: 150, density: { enable: true, value_area: 900 } }, 
      color: { value: "#00aaff" },
      shape: {
        type: "circle",
        stroke: { width: 0, color: "#000000" },
      },
      opacity: {
        value: 0.9,
        random: true,
        anim: { enable: false },
      },
      size: {
        value: 7,
        random: true,
        anim: { enable: false },
      },
      move: {
        enable: true,
        speed: 6,
        direction: "bottom",
        random: false,
        straight: true,
        out_mode: "out",
        bounce: false,
      },
      line_linked: { enable: false },
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: { enable: true, mode: "bubble" },
        onclick: { enable: false },
        resize: true,
      },
      modes: {
        bubble: {
          distance: 65,
          size: 135,
          duration: 0.9,
          opacity: 0,
          speed: 3,
        },
      },
    },
    retina_detect: true,
  });
  