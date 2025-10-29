// ===============================
//  NAVIGATION & HAMBURGER MENU
// ===============================
const hamburger = document.getElementById("navbar-hamburger");
const navLinks = document.getElementById("navbar-links");
const overlay = document.getElementById("menu-overlay");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("open");
  overlay.classList.toggle("show");
  document.body.classList.toggle("no-scroll");
});

overlay.addEventListener("click", () => {
  navLinks.classList.remove("open");
  overlay.classList.remove("show");
  document.body.classList.remove("no-scroll");
});

// Mobile dropdown open/close
document.querySelectorAll(".dropdown > a").forEach(link => {
  link.addEventListener("click", e => {
    if (window.innerWidth <= 700) {
      e.preventDefault();
      const parent = link.parentElement;
      parent.classList.toggle("open");
    }
  });
});

// ===============================
//  IMAGE SLIDER / CAROUSEL
// ===============================
const track = document.getElementById("sliderTrack");
const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");

let index = 0;
const totalSlides = slides.length;

function updateSlider(newIndex) {
  index = (newIndex + totalSlides) % totalSlides;
  track.style.transform = `translateX(-${index * 100}%)`;
  dots.forEach(dot => dot.classList.remove("active"));
  dots[index].classList.add("active");
}

dots.forEach(dot => {
  dot.addEventListener("click", () => updateSlider(parseInt(dot.dataset.index)));
});

// Auto-slide
setInterval(() => updateSlider(index + 1), 5000);

// ===============================
//  LIGHTBOX (fullscreen view)
// ===============================
const lightbox = document.getElementById("lightbox");
const lbImage = document.getElementById("lbImage");
const lbPrev = document.getElementById("lbPrev");
const lbNext = document.getElementById("lbNext");
const lbClose = document.getElementById("lbClose");
const lbOverlay = document.getElementById("lbOverlay");

slides.forEach((slide, i) => {
  slide.addEventListener("click", () => openLightbox(i));
});

function openLightbox(i) {
  lightbox.classList.add("open");
  lbImage.src = slides[i].querySelector("img").src;
  lbImage.dataset.index = i;
}

function closeLightbox() {
  lightbox.classList.remove("open");
}

lbClose.addEventListener("click", closeLightbox);
lbOverlay.addEventListener("click", closeLightbox);

lbPrev.addEventListener("click", () => {
  let i = parseInt(lbImage.dataset.index);
  i = (i - 1 + totalSlides) % totalSlides;
  openLightbox(i);
});

lbNext.addEventListener("click", () => {
  let i = parseInt(lbImage.dataset.index);
  i = (i + 1) % totalSlides;
  openLightbox(i);
});

// ===============================
// === DEMO REQUEST MODAL ===
const modal = document.getElementById("demoModal");
const modalClose = document.getElementById("modalClose");
const modalBackdrop = document.getElementById("modalBackdrop");
const modalCancel = document.getElementById("modalCancel");
const modalSend = document.getElementById("modalSend");

const demoButtons = document.querySelectorAll("#requestDemoBtn, #requestDemoBtnBottom");

demoButtons.forEach(btn => {
  if (btn) {
    btn.addEventListener("click", () => {
      modal.classList.add("open");
      document.body.classList.add("no-scroll");
    });
  }
});

function closeModal() {
  modal.classList.remove("open");
  document.body.classList.remove("no-scroll");
}

[modalClose, modalBackdrop, modalCancel].forEach(el => {
  el.addEventListener("click", closeModal);
});

modalSend.addEventListener("click", () => {
  const email = document.getElementById("demoEmail").value.trim();
  if (!email) {
    alert("Please enter your email before sending!");
    return;
  }
  alert("✅ Thank you! Your demo request has been submitted.");
  closeModal();
});


// ===============================
//  FOOTER YEAR AUTO UPDATE
// ===============================
document.getElementById("year").textContent = new Date().getFullYear();

