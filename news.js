// Wait for DOM
document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.querySelector(".hamburger");
  const navLinks = document.querySelector(".nav-links");
  const overlay = document.querySelector(".menu-overlay");
  const dropdownToggles = document.querySelectorAll(".dropdown > a");
  const subDropdownToggles = document.querySelectorAll(".dropdown-sub-toggle");

  /* ------------------------------
     Hamburger Menu Toggle
  ------------------------------ */
  hamburger.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("open");
    overlay.classList.toggle("show", isOpen);
    document.body.classList.toggle("no-scroll", isOpen);
  });

  /* ------------------------------
     Overlay Close on Click
  ------------------------------ */
  overlay.addEventListener("click", () => {
    navLinks.classList.remove("open");
    overlay.classList.remove("show");
    document.body.classList.remove("no-scroll");
  });

  /* ------------------------------
     Dropdown Toggle (Mobile Only)
  ------------------------------ */
  dropdownToggles.forEach(toggle => {
    toggle.addEventListener("click", e => {
      const parent = toggle.parentElement;
      const icon = toggle.querySelector(".dropdown-icon");

      // Only run on mobile
      if (window.innerWidth <= 700) {
        e.preventDefault();

        // Toggle the dropdown open/close
        parent.classList.toggle("open");
        if (icon) icon.classList.toggle("rotate");
      }
    });
  });

  /* ------------------------------
     Sub-Dropdown (Mobile Only)
  ------------------------------ */
  subDropdownToggles.forEach(subToggle => {
    subToggle.addEventListener("click", e => {
      const parent = subToggle.parentElement;

      if (window.innerWidth <= 700) {
        e.preventDefault();
        parent.classList.toggle("open");
      }
    });
  });

  /* ------------------------------
     Close mobile menu when resizing to desktop
  ------------------------------ */
  window.addEventListener("resize", () => {
    if (window.innerWidth > 700) {
      navLinks.classList.remove("open");
      overlay.classList.remove("show");
      document.body.classList.remove("no-scroll");
      document
        .querySelectorAll(".dropdown, .dropdown-sub")
        .forEach(el => el.classList.remove("open"));
    }
  });
});
