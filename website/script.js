// Simple interactions & progressive enhancements
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.getElementById('nav-links');
if (navToggle) {
  navToggle.addEventListener('click', () => {
    const open = navLinks.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
}

// Dynamic year in footer
document.getElementById('year').textContent = new Date().getFullYear();

// Intersection fade-in fallback if prefers-reduced-motion is not set
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('in-view');
    }
  });
},{ threshold: 0.15 });

document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
