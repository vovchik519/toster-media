const burgerBtn = document.getElementById('burger-btn');
const menu = document.getElementById('menu');
const header = document.getElementById('header');

burgerBtn.addEventListener('click', () => {
  const expanded = burgerBtn.getAttribute('aria-expanded') === 'true' || false;
  const assertive = expanded ? 'off' : 'assertive';
  burgerBtn.setAttribute('aria-expanded', !expanded);
  menu.setAttribute('aria-hidden', String(expanded));
  header.setAttribute('aria-live', assertive);

  document.body.style.overflow = expanded ? 'auto' : 'hidden';
});