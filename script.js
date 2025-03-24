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
    "hate",
    "violence",
    "kill",
    "attack",
    "curse",
    "racist",
    "hell",
    "stupid",
    "idiot",
    "moron",
    "dumb",
    "bastard",
    "asshole",
    "shit",
    "fuck",
    "slut",
    "whore",
    "bitch",
    "cunt",
    "damn",
    "piss",
    "dick",
    "cock",
    "faggot",
    "nazi",
    "jihad",
    "infidel",
    "blasphemy",
    "kafir",
    "christ-killer",
    "heathen",
    "devil-worshipper",
    "allah-hater",
    "muslim-hater",
    "hindu-hater",
    "christian-hater",
    "jew-hater",
    "buddhist-hater",
    "sikh-hater",
    "temple-attacker",
    "mosque-destroyer",
    "church-burner",
    "quran-burner",
    "bible-burner",
    "gita-burner",
    "guru-hater",
  ])
);

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

// Cursor pointer

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

// Parallex

window.addEventListener("scroll", function () {
  document.querySelectorAll(".parallax-image").forEach((element) => {
    let speedFactor = 0.4;
    let yOffset = window.scrollY * speedFactor;
    element.style.transform = `translateY(${yOffset}px)`;
  });
});

// logout

document.getElementById("logoutBtn").addEventListener("click", () => {
  auth
    .signOut()
    .then(() => {
      alert("Logged out successfully!");
      window.location.href = "login.html"; // Redirect after logout
    })
    .catch((error) => {
      console.error("Logout Error: ", error);
    });
});

// Blog & Resources functionalty

document.addEventListener("DOMContentLoaded", function () {
  const articlesTab = document.querySelector('[data-tab="articles"]');
  const guidesTab = document.querySelector('[data-tab="guides"]');
  const blogSection = document.querySelector(".resource-cards");

  // Create the Downloadable Guides Section
  const guidesSection = document.createElement("div");
  guidesSection.className = "container";
  guidesSection.id = "resources";
  guidesSection.style.display = "none"; // Initially hidden
  guidesSection.innerHTML = `
      <div class="header"><h2 id="faq-heading">Resources</h2></div>
      <p class="subtext">Curated content for fostering peace and religious tolerance.</p>

      <div class="highlight-section">
          <div class="highlight-text">
              <h2>Promoting Religious Harmony</h2>
              <p>Resources that help build an inclusive and respectful society.</p>
              <a href="#" class="resource-link" style="color: white">Explore →</a>
          </div>
      </div>

      <div class="latest">Latest</div>
      <div class="latest-section">
          <div class="resource-item">
              <img src="/assets/article.jpg" alt="Educational Materials" />
              <div class="resource-content">
                  <h3>Educational Materials (शैक्षिक सामग्री)</h3>
                  <p>Articles, videos, and reports explaining the effects of communalism and ways to counter it.</p>
                  <a href="#" class="resource-link">Read More</a>
              </div>
          </div>

          <div class="resource-item">
              <img src="/assets/religious-tolerance.jpg" alt="Religious Tolerance Guide" />
              <div class="resource-content">
                  <h3>Religious Tolerance Guide (धार्मिक सहिष्णुता गाइड)</h3>
                  <p>A guide explaining how to engage with different religions respectfully.</p>
                  <a href="#" class="resource-link">Download Guide</a>
              </div>
          </div>
      </div>
  `;

  // Insert the guides section after the blog section
  blogSection.parentNode.insertBefore(guidesSection, blogSection.nextSibling);

  // Function to switch to Guides
  guidesTab.addEventListener("click", function () {
      blogSection.style.display = "none"; // Hide Blog Articles
      guidesSection.style.display = "block"; // Show Guides
      articlesTab.classList.remove("active");
      guidesTab.classList.add("active");
  });

  // Function to switch to Blog Articles (refreshes the page)
  articlesTab.addEventListener("click", function () {
      window.location.reload(); // Refresh the page to reset everything
  });
});
