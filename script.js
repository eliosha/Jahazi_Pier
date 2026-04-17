// ── Nav scroll
const navbar = document.getElementById('navbar');
const floatCta = document.getElementById('floatCta');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 60);
  if (floatCta) floatCta.classList.toggle('visible', window.scrollY > 400);
});

// ── Hero parallax + load
const heroBg = document.getElementById('heroBg');
if (heroBg) {
  setTimeout(() => heroBg.classList.add('loaded'), 50);
  window.addEventListener('scroll', () => {
    heroBg.style.transform = `translateY(${window.scrollY * 0.25}px)`;
  });
}

// ── Intersection Observer
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => entry.target.classList.add('visible'), i * 80);
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });
document.querySelectorAll('.fade-in-up').forEach(el => observer.observe(el));

// ── Lightbox
function openLightbox(src) {
  document.getElementById('lightboxImg').src = src;
  document.getElementById('lightbox').classList.add('active');
  document.body.style.overflow = 'hidden';
}
function closeLightbox() {
  document.getElementById('lightbox').classList.remove('active');
  document.body.style.overflow = '';
}

// ── Menu Page (overlay on main site)
function openMenu() {
  window.location.href = 'menu.html';
  return false;
}
function closeMenu() {
  document.getElementById('menu-page') && document.getElementById('menu-page').classList.remove('active');
  document.body.style.overflow = '';
}

// ── Keyboard shortcuts
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') { closeLightbox(); }
});

// ── Menu page tab switching (menu.html)
function showMenuSection(id, btn) {
  const sections = document.querySelectorAll('.menu-section');
  const tabs = document.querySelectorAll('.menu-tab');
  if (!sections.length) return;
  sections.forEach(s => s.classList.remove('active'));
  tabs.forEach(t => t.classList.remove('active'));
  const target = document.getElementById('section-' + id);
  if (target) target.classList.add('active');
  if (btn) btn.classList.add('active');
}

// ── Mobile menu
function toggleMobileMenu() {
  const links = document.querySelector('.nav-links');
  if (!links) return;
  links.style.display = links.style.display === 'flex' ? 'none' : 'flex';
  links.style.flexDirection = 'column';
  links.style.position = 'absolute';
  links.style.top = '64px';
  links.style.left = '0';
  links.style.right = '0';
  links.style.background = 'rgba(250,247,242,0.98)';
  links.style.padding = '1.5rem 2rem';
  links.style.gap = '1.2rem';
  links.style.backdropFilter = 'blur(12px)';
}
