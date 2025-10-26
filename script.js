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


/* ==========================
   HERO SLIDER
   ========================== */
const slides = document.querySelectorAll('.hero-slide');
const sliderContainer = document.querySelector('.slider-container');
const dotsContainer = document.querySelector('.dots');
let currentSlide = 0;

// Create dots dynamically
slides.forEach((_, index) => {
  const dot = document.createElement('button');
  dot.addEventListener('click', () => goToSlide(index));
  dotsContainer.appendChild(dot);
});
const dots = dotsContainer.querySelectorAll('button');

function updateDots() {
  dots.forEach(dot => dot.classList.remove('active'));
  dots[currentSlide].classList.add('active');
}

function showSlide(index) {
  sliderContainer.style.transform = `translateX(-${index * 100}%)`;
  updateDots();
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

function prevSlide() {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  showSlide(currentSlide);
}

function goToSlide(index) {
  currentSlide = index;
  showSlide(currentSlide);
}

function openLink(url) {
  window.open(url, "_blank");
}

// Initialize slider
showSlide(0);
setInterval(nextSlide, 6000);


/* ==========================
   EMAIL JS FORM
   ========================== */
document.getElementById('emailForm')?.addEventListener('submit', function (e) {
  e.preventDefault();

  const email = document.getElementById('userEmail').value.trim();
  const message = document.getElementById('message').value.trim();
  const statusDiv = document.getElementById('status');

  if (email === '' || message === '') {
    statusDiv.innerText = 'Please fill in all fields.';
    return;
  }

  statusDiv.innerText = 'Sending...';

  // Replace below with your EmailJS credentials
  emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', {
    from_email: email,
    message: message,
    to_email: 'shabbirtawar786@gmail.com'
  }, 'YOUR_PUBLIC_KEY')
    .then(() => {
      statusDiv.innerText = 'Message sent successfully!';
      document.getElementById('emailForm').reset();
    })
    .catch(() => {
      statusDiv.innerText = 'Failed to send message. Please try again.';
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


/* ==========================
   COOKIE MODAL
   ========================== */
function setCookie(name, value, days) {
  const d = new Date();
  d.setTime(d.getTime() + (days * 24 * 60 * 60 * 1000));
  document.cookie = `${name}=${value};expires=${d.toUTCString()};path=/`;
}

function getCookie(name) {
  const cname = name + "=";
  const decodedCookie = decodeURIComponent(document.cookie);
  const ca = decodedCookie.split(';');
  for (let c of ca) {
    while (c.charAt(0) === ' ') c = c.substring(1);
    if (c.indexOf(cname) === 0) return c.substring(cname.length);
  }
  return "";
}

window.onload = function () {
  if (!getCookie('cookiePrefs')) {
    document.getElementById('cookieModal')?.style.setProperty('display', 'flex');
  } else {
    document.getElementById('cookieModal')?.style.setProperty('display', 'none');
  }
};


/* ==========================
   FOOTER COPYRIGHT YEAR
   ========================== */
document.getElementById('year').textContent = new Date().getFullYear();


/* ==========================
   BRAND SLIDER HOVER EFFECT
   ========================== */
const brandSlider = document.getElementById('brandSlider');
if (brandSlider) {
  brandSlider.addEventListener('mouseover', () => {
    brandSlider.style.animationPlayState = 'paused';
  });
  brandSlider.addEventListener('mouseout', () => {
    brandSlider.style.animationPlayState = 'running';
  });
}
