// ========================================
// Dark Mode Toggle
// ========================================

const themeToggle = document.getElementById('theme-toggle');
const root = document.documentElement;

// Apply saved preference, or fall back to OS preference
function getPreferredTheme() {
  const saved = localStorage.getItem('theme');
  if (saved) return saved;
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

function applyTheme(theme) {
  root.setAttribute('data-theme', theme);
  localStorage.setItem('theme', theme);
}

applyTheme(getPreferredTheme());

themeToggle.addEventListener('click', () => {
  const next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
  applyTheme(next);
});

// ========================================
// Mobile Navigation Toggle
// ========================================

const navToggle = document.getElementById('nav-toggle');
const navLinks = document.getElementById('nav-links');

navToggle.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('active');
  navToggle.classList.toggle('active');
  navToggle.setAttribute('aria-expanded', isOpen);
});

// Close mobile menu when a link is tapped
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('active');
    navToggle.classList.remove('active');
    navToggle.setAttribute('aria-expanded', 'false');
  });
});

// ========================================
// Scroll-based Fade-In (IntersectionObserver)
// ========================================

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.15,
    rootMargin: '0px 0px -40px 0px'
  }
);

document.querySelectorAll('.fade-in').forEach(el => {
  observer.observe(el);
});

// ========================================
// Nav Border on Scroll
// ========================================

const nav = document.getElementById('nav');
let lastScrollState = false;

window.addEventListener('scroll', () => {
  const shouldShow = window.scrollY > 10;
  if (shouldShow !== lastScrollState) {
    nav.classList.toggle('scrolled', shouldShow);
    lastScrollState = shouldShow;
  }
}, { passive: true });

// ========================================
// Active Navigation Link
// ========================================

const sections = document.querySelectorAll('section[id]');
const navAnchors = document.querySelectorAll('.nav-links a:not(.btn-nav)');

function updateActiveLink() {
  const scrollY = window.scrollY + 120;

  let currentId = '';
  sections.forEach(section => {
    if (scrollY >= section.offsetTop) {
      currentId = section.getAttribute('id');
    }
  });

  navAnchors.forEach(link => {
    link.classList.toggle(
      'active',
      link.getAttribute('href') === `#${currentId}`
    );
  });
}

window.addEventListener('scroll', updateActiveLink, { passive: true });
updateActiveLink();
