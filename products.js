const dropdownBtn = document.getElementById("dropdownButton");
const dropdownContent = document.getElementById("dropdownContent");
const productDetails = document.getElementById("productDetails");

// Toggle dropdown
dropdownBtn.addEventListener("click", () => {
  dropdownContent.style.display =
    dropdownContent.style.display === "block" ? "none" : "block";
});

// Close dropdown when clicking outside
window.addEventListener("click", (e) => {
  if (!dropdownBtn.contains(e.target)) dropdownContent.style.display = "none";
});

// Product data
const products = {
  paysoft: {
    title: "PaySoft — Staff Payroll Management",
    desc: "Automate payroll, manage employee records, and generate accurate salary reports with PaySoft, designed for educational institutions.",
  },
  feesoft: {
    title: "FeeSoft — Student Fee & Record Management",
    desc: "Streamline fee collection, receipt generation, and student data handling — all with secure and easy-to-use features.",
  },
  examsoft: {
    title: "ExamSoft — Exam & Result Tracking",
    desc: "Designed as per DOE and CCE guidelines, ExamSoft simplifies exam scheduling, evaluation, and results processing.",
  },
  libsoft: {
    title: "LibSoft — Library Management System",
    desc: "Organize and track books, manage lending, and improve access with an efficient digital library system.",
  },
  levsoft: {
    title: "LevSoft — Staff Leave Management",
    desc: "Simplify leave requests, approvals, and reporting with our intuitive LevSoft system.",
  },
  stusoft: {
    title: "StuSoft — Student Administration Tracking",
    desc: "Manage student profiles, attendance, and progress seamlessly in one centralized platform.",
  },
  contax: {
    title: "Contax — TDS Management Software",
    desc: "Easily handle TDS for contractors and professionals with accurate auto-calculations and quarterly reporting.",
  },
};

// Display product details
document.querySelectorAll(".dropdown-content a").forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const key = e.target.dataset.product;
    const product = products[key];
    dropdownContent.style.display = "none";
    dropdownBtn.innerHTML = `${product.title.split("—")[0]} <span>▼</span>`;

    productDetails.classList.remove("active");
    setTimeout(() => {
      productDetails.innerHTML = `
        <h2>${product.title}</h2>
        <p>${product.desc}</p>
      `;
      productDetails.classList.add("active");
    }, 200);
  });
});

// Auto-load product if linked from hero section
window.addEventListener("DOMContentLoaded", () => {
  const hash = window.location.hash.replace("#", "");
  if (hash && products[hash]) {
    const product = products[hash];
    dropdownBtn.innerHTML = `${product.title.split("—")[0]} <span>▼</span>`;
    productDetails.innerHTML = `
      <h2>${product.title}</h2>
      <p>${product.desc}</p>
    `;
    productDetails.classList.add("active");
    window.scrollTo({ top: 250, behavior: "smooth" });
  }
});

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


