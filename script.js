// First animation for welcome text
gsap.from("#animated-text", {
  x: -200,
  opacity: 0,
  duration: 1.5,
  ease: "power2.out",
  delay: 0.5,
});

// Running text animation (Marquee Effect)
function startRunningText() {
  let text = document.querySelector("#running-text");
  gsap.to(text, {
    x: "-100%", // Moves the text fully to the left
    duration: 50, // Time to complete one run
    ease: "linear",
    repeat: -1, // Infinite repeat
    delay: 2,
  });
}

startRunningText();


const scrollToTopBtn = document.getElementById("scrollToTop");

window.addEventListener("scroll", () => {
  if (window.scrollY > 200) {
    scrollToTopBtn.classList.add("show");
  } else {
    scrollToTopBtn.classList.remove("show");
  }
});

scrollToTopBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
