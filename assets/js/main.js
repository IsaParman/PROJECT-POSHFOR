document.addEventListener("DOMContentLoaded", () => {
  /* =====================
     LOAD HEADER & FOOTER
  ===================== */
  function loadHTML(elementId, filePath, callback) {
    const element = document.getElementById(elementId);
    if (!element) return;

    fetch(filePath, { cache: "no-store" })
      .then((res) => {
        if (!res.ok) throw new Error(`Failed to load ${filePath}`);
        return res.text();
      })
      .then((html) => {
        element.innerHTML = html;
        if (typeof callback === "function") callback();
      })
      .catch((err) => console.error(err));
  }

  function setActiveMenu() {
    const currentPage = location.pathname.split("/").pop() || "index.html";
    document.querySelectorAll("nav a").forEach((link) => {
      const href = link.getAttribute("href");
      if (href === currentPage || href === `/${currentPage}`) {
        link.classList.add("active");
      }
    });
  }

  loadHTML("header-container", "/partials/header.html", setActiveMenu);
  loadHTML("footer-container", "/partials/footer.html");
});

/* =====================
   FADE UP ON SCROLL
===================== */
const fadeElements = document.querySelectorAll(".fade-up");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
      }
    });
  },
  { threshold: 0.15 }
);

fadeElements.forEach((el) => observer.observe(el));