// Call to action

gsap.to(".cta-card", { duration: 1.2, opacity: 1, y: 0, ease: "power3.out" });

// What we do

gsap.to(".what-we-do", { duration: 1.2, opacity: 1, y: 0, ease: "power3.out" });

// Scrolling to top

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

// Force update the banned words list on every page load
localStorage.setItem(
  "bannedWordsList",
  JSON.stringify([
    "hate", "violence", "kill", "attack", "curse", "racist",
    "hell", "stupid", "idiot", "moron", "dumb", "bastard", "asshole", 
    "shit", "fuck", "slut", "whore", "bitch", "cunt", "damn", "piss", 
    "dick", "cock", "faggot", "nazi", "jihad", "infidel", "blasphemy", 
    "kafir", "christ-killer", "heathen", "devil-worshipper", "allah-hater", 
    "muslim-hater", "hindu-hater", "christian-hater", "jew-hater", 
    "buddhist-hater", "sikh-hater", "temple-attacker", "mosque-destroyer",
    "church-burner", "quran-burner", "bible-burner", "gita-burner", "guru-hater"
  ])
);

function checkComment() {
  let comment = document.getElementById("commentInput").value.trim().toLowerCase();
  let alertBox = document.getElementById("commentAlert");
  let bannedWords = JSON.parse(localStorage.getItem("bannedWordsList"));

  // Check using regex for exact word matching
  let foundWords = bannedWords.filter((word) => new RegExp(`\\b${word}\\b`, "i").test(comment));

  console.log("Found Words:", foundWords); // Debugging

  if (foundWords.length > 0) {
    alertBox.innerHTML = `⚠️ Warning! Your comment contains: <b>${foundWords.join(", ")}</b>`;
    alertBox.className = "comment-alert alert-danger";
    alertBox.style.display = "block";
    gsap.fromTo(alertBox, { opacity: 0, y: -20 }, { opacity: 1, y: 0, duration: 0.5, ease: "bounce" });
  } else {
    alertBox.innerHTML = "✅ Your comment is clean!";
    alertBox.className = "comment-alert alert-success";
    alertBox.style.display = "block";
    gsap.fromTo(alertBox, { opacity: 0, scale: 0.5 }, { opacity: 1, scale: 1, duration: 0.5, ease: "elastic" });
  }
}


// Faqs

document.querySelectorAll(".faq-item").forEach((item) => {
  let question = item.querySelector(".faq-question");
  let answer = item.querySelector(".faq-answer");
  let icon = item.querySelector(".icon");

  gsap.set(answer, { height: 0, opacity: 0, display: "none" });

  question.addEventListener("click", () => {
    let isOpen = answer.style.display === "block";

    document.querySelectorAll(".faq-answer").forEach((ans) => {
      if (ans !== answer) {
        gsap.to(ans, {
          height: 0,
          opacity: 0,
          duration: 0.4,
          onComplete: () => (ans.style.display = "none"),
        });
      }
    });

    document.querySelectorAll(".icon").forEach((icn) => {
      if (icn !== icon) {
        gsap.to(icn, { rotate: 0, duration: 0.3 });
      }
    });

    if (!isOpen) {
      answer.style.display = "block";
      let autoHeight = answer.scrollHeight; // Get actual height before animating
      gsap.to(answer, { height: autoHeight, opacity: 1, duration: 0.4 });
      gsap.to(icon, { rotate: 45, duration: 0.3 });
    } else {
      gsap.to(answer, {
        height: 0,
        opacity: 0,
        duration: 0.4,
        onComplete: () => (answer.style.display = "none"),
      });
      gsap.to(icon, { rotate: 0, duration: 0.3 });
    }
  });
});


window.addEventListener("scroll", function () {
  var scrollToTopBtn = document.getElementById("scrollToTop");
  if (window.scrollY > 300) {
    scrollToTopBtn.style.display = "block";
  } else {
    scrollToTopBtn.style.display = "none";
  }
});

// Scroll to Top Functionality
document.getElementById("scrollToTop").addEventListener("click", function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
});


document.addEventListener("DOMContentLoaded", () => {
  const cursor = document.querySelector(".custom-cursor");

  document.addEventListener("mousemove", (e) => {
    requestAnimationFrame(() => {
      cursor.style.left = `${e.clientX}px`;
      cursor.style.top = `${e.clientY}px`;
    });
  });

  document.addEventListener("mousedown", () => {
    cursor.classList.add("click-effect");
    setTimeout(() => cursor.classList.remove("click-effect"), 200);
  });
});
