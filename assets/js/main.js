const header = document.querySelector('header');
const menuButton = document.querySelector('.menu');
const menuIcon = menuButton.querySelector('span');
const navigation = document.querySelector('#links');
const navigationLinks = [...navigation.querySelectorAll('a[href^="#"]:not(.btn)')];
const sections = navigationLinks.map(link => document.querySelector(link.hash)).filter(Boolean);

function closeMenu({ restoreFocus = false } = {}) {
  navigation.classList.remove('open');
  menuButton.setAttribute('aria-expanded', 'false');
  menuButton.setAttribute('aria-label', 'Open navigation menu');
  menuIcon.textContent = '☰';
  document.body.classList.remove('locked');
  if (restoreFocus) menuButton.focus();
}

menuButton.addEventListener('click', () => {
  const opening = menuButton.getAttribute('aria-expanded') !== 'true';
  navigation.classList.toggle('open', opening);
  menuButton.setAttribute('aria-expanded', String(opening));
  menuButton.setAttribute('aria-label', opening ? 'Close navigation menu' : 'Open navigation menu');
  menuIcon.textContent = opening ? '×' : '☰';
  document.body.classList.toggle('locked', opening);
});

navigation.querySelectorAll('a').forEach(link => link.addEventListener('click', () => closeMenu()));
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && navigation.classList.contains('open')) closeMenu({ restoreFocus: true });
});

function updateNavigation() {
  header.classList.toggle('fixed', window.scrollY > 30);
  let activeId = 'home';
  sections.forEach(section => { if (window.scrollY >= section.offsetTop - 140) activeId = section.id; });
  navigationLinks.forEach(link => {
    if (link.hash === `#${activeId}`) link.setAttribute('aria-current', 'page');
    else link.removeAttribute('aria-current');
  });
}

window.addEventListener('scroll', updateNavigation, { passive: true });
window.addEventListener('resize', () => { if (window.innerWidth > 760) closeMenu(); });
updateNavigation();
document.getElementById('year').textContent = new Date().getFullYear();
