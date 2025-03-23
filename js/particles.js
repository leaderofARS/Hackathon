particlesJS("particles-js", {
  particles: {
      number: { value: 100, density: { enable: true, value_area: 800 } }, 
      color: { value: ["#ffffff", "#a370f0", "#4293f5"] }, 
      shape: {
          type: "circle",
          stroke: { width: 0, color: "#000000" },
      },
      opacity: {
          value: 1,
          random: true,
          anim: { enable: true, speed: 0.6, opacity_min: 0.5, sync: false },
      },
      size: {
          value: 10, 
          random: true,
          anim: { enable: true, speed: 5, size_min: 2, sync: false },
      },
      line_linked: { enable: false },
      move: {
          enable: true,
          speed: 1.5,
          direction: "none",
          random: true,
          straight: false,
          out_mode: "out",
          bounce: false,
      },
  },
  interactivity: {
      detect_on: "canvas",
      events: {
          onhover: { enable: true, mode: "repulse" },
          onclick: { enable: false },
          resize: true,
      },
      modes: {
          repulse: { distance: 200, duration: 0.5 }, 
      },
  },
  retina_detect: true,
});
