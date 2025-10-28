// Simple image slider
document.addEventListener("DOMContentLoaded", function() {
  const slider = document.getElementById('examSlider');
  if (!slider) return;
  const slides = slider.querySelectorAll('img');
  const dots = document.getElementById('sliderDots').querySelectorAll('.slider-btn');
  let current = 0;
  let timer;
  function showSlide(idx) {
    slides.forEach((img, i) => { img.style.opacity = (i === idx) ? '1' : '0'; });
    dots.forEach((dot, i) => { dot.classList.toggle('active', i === idx) });
    current = idx;
  }
  function nextSlide() {
    showSlide((current + 1) % slides.length);
  }
  dots.forEach((dot, i) => dot.addEventListener('click', () => { showSlide(i); resetTimer(); }));
  function resetTimer() {
    clearInterval(timer);
    timer = setInterval(nextSlide, 3400);
  }
  timer = setInterval(nextSlide, 3400);
});

// Footer year update (works for all products)
document.addEventListener("DOMContentLoaded",function(){
  var y=document.getElementById('year');
  if(y)y.textContent=new Date().getFullYear();
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


/* ==========================================
   IMAGE ZOOM + GALLERY NAVIGATION
   ========================================== */
document.addEventListener("DOMContentLoaded", function() {
  const modal = document.getElementById("imageModal");
  const modalImg = document.getElementById("modalImage");
  const zoomableImgs = document.querySelectorAll(".zoomable-img");
  const closeBtn = document.querySelector(".close-modal");
  const prevArrow = document.querySelector(".nav-arrow.prev");
  const nextArrow = document.querySelector(".nav-arrow.next");
  
  let currentIndex = 0;

  function showImage(index) {
    if (index < 0) index = zoomableImgs.length - 1;
    if (index >= zoomableImgs.length) index = 0;
    currentIndex = index;
    modalImg.src = zoomableImgs[index].src;
  }

  zoomableImgs.forEach((img, i) => {
    img.addEventListener("click", () => {
      modal.style.display = "block";
      showImage(i);
      document.body.classList.add("no-scroll");
    });
  });

  closeBtn.onclick = () => {
    modal.style.display = "none";
    document.body.classList.remove("no-scroll");
  };

  prevArrow.onclick = () => {
    showImage(currentIndex - 1);
  };

  nextArrow.onclick = () => {
    showImage(currentIndex + 1);
  };

  modal.onclick = (e) => {
    if (e.target === modal) {
      modal.style.display = "none";
      document.body.classList.remove("no-scroll");
    }
  };

  document.addEventListener("keydown", (e) => {
    if (modal.style.display === "block") {
      if (e.key === "ArrowLeft") showImage(currentIndex - 1);
      if (e.key === "ArrowRight") showImage(currentIndex + 1);
      if (e.key === "Escape") {
        modal.style.display = "none";
        document.body.classList.remove("no-scroll");
      }
    }
  });
});
