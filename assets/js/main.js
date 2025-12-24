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

  /* =====================
     SCROLL ANIMATION (FIX)
  ===================== */

  const animatedElements = document.querySelectorAll(
    ".fade-up, .fade-left, .fade-right, .fade-zoom"
  );

  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    animatedElements.forEach((el) => observer.observe(el));
  } else {
    /* Fallback: langsung aktif */
    animatedElements.forEach((el) => el.classList.add("active"));
  }
});
