(function () {
  "use strict";

  /* Mobile nav toggle */
  const mobileNavToggleBtn = document.querySelector(".mobile-nav-toggle");

  function mobileNavToggle() {
    document.querySelector("body").classList.toggle("mobile-nav-active");
    mobileNavToggleBtn.classList.toggle("bi-list");
    mobileNavToggleBtn.classList.toggle("bi-x");
  }

  if (mobileNavToggleBtn) {
    mobileNavToggleBtn.addEventListener("click", mobileNavToggle);
  }

  document.querySelectorAll("#lab-navmenu a").forEach((navLink) => {
    navLink.addEventListener("click", () => {
      if (document.querySelector(".mobile-nav-active")) {
        mobileNavToggle();
      }
    });
  });

  /* Dropdown toggle on mobile */
  document.querySelectorAll(".lab-navmenu .toggle-dropdown").forEach((btn) => {
    btn.addEventListener("click", function (e) {
      e.preventDefault();
      this.parentNode.classList.toggle("active");
      this.parentNode.nextElementSibling.classList.toggle("dropdown-active");
      e.stopImmediatePropagation();
    });
  });

  /* Scroll top button */
  const scrollTopBtn = document.querySelector(".scroll-top-btn");

  function toggleScrollTop() {
    if (scrollTopBtn) {
      window.scrollY > 100
        ? scrollTopBtn.classList.add("active")
        : scrollTopBtn.classList.remove("active");
    }
  }

  if (scrollTopBtn) {
    scrollTopBtn.addEventListener("click", (e) => {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
    window.addEventListener("load", toggleScrollTop);
    document.addEventListener("scroll", toggleScrollTop);
  }

  /* AOS init */
  function aosInit() {
    AOS.init({ duration: 600, easing: "ease-in-out", once: true, mirror: false });
  }
  window.addEventListener("load", aosInit);

  /* News expand/collapse */
  const newsToggleBtn = document.querySelector("#news-toggle-btn");
  const newsContent = document.querySelector(".news-content");
  const newsTable = document.querySelector(".news-table");
  const NEWS_MIN_ITEMS = 10;
  let newsExpanded = true;

  function newsToggle() {
    if (!newsToggleBtn || !newsContent || !newsTable) return;

    const rows = newsTable.querySelector("tbody").children;

    if (rows.length < NEWS_MIN_ITEMS) {
      newsToggleBtn.style.display = "none";
    } else {
      if (newsExpanded) {
        newsExpanded = false;
        newsToggleBtn.textContent = "Show More";
        for (let i = NEWS_MIN_ITEMS; i < rows.length; i++) {
          rows[i].style.display = "none";
        }
      } else {
        newsExpanded = true;
        newsToggleBtn.textContent = "Show Less";
        for (let i = NEWS_MIN_ITEMS; i < rows.length; i++) {
          rows[i].style.display = "";
        }
      }
    }

    newsContent.style.maxHeight = newsTable.offsetHeight.toString() + "px";

    if (typeof AOS !== "undefined") AOS.refresh();
  }

  window.addEventListener("load", newsToggle);
  if (newsToggleBtn) {
    newsToggleBtn.addEventListener("click", newsToggle);
  }
})();
