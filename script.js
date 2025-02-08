// Load GSAP & ScrollTrigger
document.addEventListener("DOMContentLoaded", function () {
  gsap.registerPlugin(ScrollTrigger);

  // Select the .pera element
  let pera = document.querySelector(".pera");

  // Split text into words and wrap them in spans
  let words = pera.innerText.split(" ");
  pera.innerHTML = words.map(word => `<span class="word">${word} </span>`).join("");

  // Select all word spans
  let wordSpans = document.querySelectorAll(".word");

  // Animate each word
  gsap.fromTo(wordSpans, 
    { opacity: 0.5, y: 50 }, // Initial state: hidden & moved down
    {
      opacity: 1, 
      y: 0, 
      stagger: 0.1, // Animate words one after another
      scrollTrigger: {
        trigger: ".pera",
        start: "top 70%", // Adjust to start animation at desired point
        end: "bottom 30%",
        scrub: true, // Smooth animation on scroll
      }
    }
  );
  gsap.from(".box", {
    opacity: 0,
    y: 50,
    stagger: 0.2,
    duration: 0.8,
    scrollTrigger: {
      trigger: ".contain",
      start: "top 85%",
      end:"top 30%",
      scrub:true,
      toggleActions: "play none none none"
    }
  });  
});








document.querySelectorAll(".box").forEach((box) => {
  box.addEventListener("mouseenter", () => {
    gsap.to(box, {
      scale: 1.1,
      y: -20,
      rotateX: 25,
      rotateY: 20,
      duration: 0.1,
      ease: "power2.out",
    });
  });

  box.addEventListener("mouseleave", () => {
    gsap.to(box, {
      scale: 1,
      y: 0,
      rotateX: 0,
      rotateY: 0,
      duration: 0.3,
      ease: "power2.out",
    });
  });
});


document.querySelectorAll(".role h1").forEach((h1) => {
  h1.addEventListener("mouseenter", () => {
    h1.style.animation = "tiltBounce 1s infinite ease-in-out";
  });

  h1.addEventListener("mouseleave", () => {
    h1.style.animation = "none";
    h1.style.transform = "rotateX(0deg) rotateY(0deg) translateY(0)";
  });
});



gsap.from(".page5 img", {
  scrollTrigger: {
    trigger: ".page5 img",
    start: "top 70%",
    end: "top 15%",
    scrub: 1, // Makes the animation more fluid
  },
  rotateX: 360,
  rotateY: 360,
  scale: 0,
  opacity: 0,
  duration: 2, 
  ease: "power3.out", // Adds a smooth ease effect
  transformOrigin: "center center", // Ensures smooth rotation around the center
  willChange: "transform, opacity", // Optimizes performance for smoother animation
});








