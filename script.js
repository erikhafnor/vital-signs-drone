// Navigation toggle
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.getElementById('nav-links');
if (navToggle) {
	navToggle.addEventListener('click', () => {
		const open = navLinks.classList.toggle('open');
		navToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
	});
}

// Dynamic year in footer
const yEl = document.getElementById('year');
if (yEl) yEl.textContent = new Date().getFullYear();

// Intersection fade-in observer
const observer = new IntersectionObserver((entries) => {
	entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('in-view'); });
},{ threshold:0.15 });
document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
