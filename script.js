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

// Safe Comment checker

// Store banned words in local storage (only if not already set)
if (!localStorage.getItem("bannedWordsList")) {
  localStorage.setItem(
    "bannedWordsList",
    JSON.stringify([
      "hate",
      "violence",
      "kill",
      "attack",
      "curse",
      "racist",
      "terrorist",
    ])
  );
}

function checkComment() {
  let comment = document
    .getElementById("commentInput")
    .value.trim()
    .toLowerCase();
  let alertBox = document.getElementById("commentAlert");
  let bannedWords = JSON.parse(localStorage.getItem("bannedWordsList"));

  // Check using regex for exact word matching
  let foundWords = bannedWords.filter((word) =>
    new RegExp(`\\b${word}\\b`, "i").test(comment)
  );

  console.log("Found Words:", foundWords); // Debugging

  if (foundWords.length > 0) {
    alertBox.innerHTML = `⚠️ Warning! Your comment contains: <b>${foundWords.join(
      ", "
    )}</b>`;
    alertBox.className = "comment-alert alert-danger";
    alertBox.style.display = "block";
    gsap.fromTo(
      alertBox,
      { opacity: 0, y: -20 },
      { opacity: 1, y: 0, duration: 0.5, ease: "bounce" }
    );
  } else {
    alertBox.innerHTML = "✅ Your comment is clean!";
    alertBox.className = "comment-alert alert-success";
    alertBox.style.display = "block";
    gsap.fromTo(
      alertBox,
      { opacity: 0, scale: 0.5 },
      { opacity: 1, scale: 1, duration: 0.5, ease: "elastic" }
    );
  }
}
