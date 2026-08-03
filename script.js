const body = document.body;
const page = body.dataset.page;
const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('.main-nav');

document.querySelectorAll('[data-year]').forEach((item) => {
  item.textContent = new Date().getFullYear();
});

document.querySelector(`[data-nav="${page}"]`)?.classList.add('active');

menuButton?.addEventListener('click', () => {
  const open = menuButton.getAttribute('aria-expanded') === 'true';
  menuButton.setAttribute('aria-expanded', String(!open));
  nav.classList.toggle('open', !open);
  body.style.overflow = open ? '' : 'hidden';
});

document.querySelectorAll('.main-nav a').forEach((link) => link.addEventListener('click', () => {
  body.style.overflow = '';
}));
