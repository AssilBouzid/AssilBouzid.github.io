
const toggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.site-nav');

if (toggle && nav) {
  toggle.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(open));
  });
}

document.querySelectorAll('.site-nav a').forEach((link) => {
  if (link.getAttribute('href') === window.location.pathname.split('/').pop() || (window.location.pathname.endsWith('/') && link.getAttribute('href') === 'index.html')) {
    link.classList.add('active');
  }
});
