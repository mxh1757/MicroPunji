// Login modal
const loginBtn = document.getElementById('loginBtn');
const modal = document.getElementById('loginModal');
const closeModal = document.getElementById('closeModal');
const form = document.getElementById('loginForm');

loginBtn.addEventListener('click', () => modal.classList.remove('hidden'));
closeModal.addEventListener('click', () => modal.classList.add('hidden'));

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const user = document.getElementById('username').value;
  localStorage.setItem('microPunjiUser', user);
  alert('Welcome, ' + user + '! (Demo login successful)');
  modal.classList.add('hidden');
});

// Contact form demo
document.getElementById('contactForm').addEventListener('submit', (e) => {
  e.preventDefault();
  alert('Thank you for contacting MicroPunji! We will respond soon.');
  e.target.reset();
});
