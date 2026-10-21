const header = document.querySelector('.site-header');
const toggle = document.querySelector('.menu-toggle');

toggle?.addEventListener('click', () => {
  const isOpen = header.classList.toggle('open');
  toggle.setAttribute('aria-expanded', String(isOpen));
});

document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', () => {
    header?.classList.remove('open');
    toggle?.setAttribute('aria-expanded', 'false');
  });
});

const year = document.getElementById('year');
if (year) year.textContent = new Date().getFullYear();
