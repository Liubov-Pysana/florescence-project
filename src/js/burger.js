const burgerBtn = document.querySelector('.burger-menu');
const closeBtn = document.querySelector('.burger-close');
const nav = document.querySelector('.header-navigation');
const body = document.body;

function openMenu() {
  nav.classList.add('active');
  body.classList.add('is-hidden');
}

function closeMenu() {
  nav.classList.remove('active');
  body.classList.remove('is-hidden');
}

burgerBtn.addEventListener('click', openMenu);
closeBtn.addEventListener('click', closeMenu);

document.addEventListener('click', (event) => {
  if (!nav.contains(event.target) && !burgerBtn.contains(event.target)) {
    closeMenu();
  }
});