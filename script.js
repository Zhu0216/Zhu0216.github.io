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

// Use the latest POS reference image without making the project card itself a link.
document.querySelectorAll('.project-photo[src="assets/project-pos-alt.jpg"]').forEach((image) => {
  image.src = 'assets/project-pos-alt2.jpg';
  image.alt = 'POS 點餐系統畫面';
});
