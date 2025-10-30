/* ==========================
   NAVBAR FUNCTIONALITY
   ========================== */

// Elements
const hamburger = document.getElementById("navbar-hamburger");
const navLinks = document.getElementById("navbar-links");
const overlay = document.getElementById("menu-overlay");
const dropdownToggles = document.querySelectorAll(".dropdown-toggle");
const body = document.body;

// Toggle mobile menu open/close
hamburger.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");
  overlay.classList.toggle("show");
  body.classList.toggle("no-scroll");

  // Switch icon between bars and close
  hamburger.innerHTML = isOpen
    ? '<i class="fas fa-times"></i>'
    : '<i class="fas fa-bars"></i>';
});

// Close menu when overlay is clicked
overlay.addEventListener("click", () => {
  navLinks.classList.remove("open");
  overlay.classList.remove("show");
  body.classList.remove("no-scroll");
  hamburger.innerHTML = '<i class="fas fa-bars"></i>';
});

// Dropdown expand/collapse on mobile
dropdownToggles.forEach(toggle => {
  toggle.addEventListener("click", (e) => {
    e.preventDefault();
    const parent = toggle.parentElement;
    parent.classList.toggle("open");

    // Rotate dropdown icon
    const icon = toggle.querySelector(".dropdown-icon");
    if (icon) icon.classList.toggle("rotate");
  });
});

// Close nav when product dropdown links clicked (mobile UX improvement)
document.querySelectorAll('.dropdown-menu a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    overlay.classList.remove('show');
    body.classList.remove('no-scroll');
    hamburger.innerHTML = '<i class="fas fa-bars"></i>';
  });
});

// ================================
// NESTED DROPDOWN (Development)
// ================================
document.querySelectorAll('.dropdown-sub-toggle').forEach(toggle => {
  toggle.addEventListener('click', (e) => {
    if (window.innerWidth <= 700) {
      e.preventDefault();
      const parent = toggle.parentElement;
      parent.classList.toggle('open');
    }
  });
});



/* ==========================
   SOCIAL BAR CLICK TRACKING
   ========================== */
document.querySelectorAll('.social-bar a').forEach(elem => {
  elem.addEventListener('click', () => {
    // Optional analytics tracking
    // console.log('Navigating to:', elem.href);
  });
});