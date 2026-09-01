// ============================================================
// Footer year
// ============================================================
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

// ============================================================
// Mobile nav toggle
// ============================================================
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('primaryNav');

if (navToggle && navLinks) {
  navToggle.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });

  // Close the mobile menu after choosing a link
  navLinks.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

// ============================================================
// Login modal
// ============================================================
const loginBtn = document.getElementById('loginBtn');
const modal = document.getElementById('loginModal');
const closeModal = document.getElementById('closeModal');
const loginForm = document.getElementById('loginForm');
let lastFocusedElement = null;

function openModal() {
  lastFocusedElement = document.activeElement;
  modal.classList.remove('hidden');
  const firstField = modal.querySelector('input');
  if (firstField) firstField.focus();
  document.addEventListener('keydown', onModalKeydown);
}

function closeModalFn() {
  modal.classList.add('hidden');
  document.removeEventListener('keydown', onModalKeydown);
  if (lastFocusedElement) lastFocusedElement.focus();
}

function onModalKeydown(e) {
  if (e.key === 'Escape') closeModalFn();
}

if (loginBtn && modal) {
  loginBtn.addEventListener('click', openModal);
  closeModal.addEventListener('click', closeModalFn);
  modal.querySelectorAll('[data-close-modal]').forEach((el) => {
    el.addEventListener('click', closeModalFn);
  });
}

if (loginForm) {
  loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const username = document.getElementById('username').value.trim();
    const status = loginForm.querySelector('.form-status');
    status.textContent = `Welcome, ${username}. This is a demo — no account was created.`;
    loginForm.reset();
    setTimeout(closeModalFn, 1400);
  });
}

// ============================================================
// Contact form
// ============================================================
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const status = contactForm.querySelector('.form-status');
    status.textContent = 'Thank you — we\u2019ll be in touch within two business days.';
    contactForm.reset();
  });
}
