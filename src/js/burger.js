const burgerBtn = document.querySelector('.burger-menu');
const closeBtn = document.querySelector('.burger-close');
const nav = document.querySelector('.header-navigation');

function openMenu() {
  nav.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeMenu() {
  nav.classList.remove('active');
  document.body.style.overflow = '';
}

burgerBtn.addEventListener('click', openMenu);
closeBtn.addEventListener('click', closeMenu);

document.addEventListener('click', (event) => {
  if (!nav.contains(event.target) && !burgerBtn.contains(event.target)) {
    closeMenu();
  }

  nav.addEventListener('click', (e) => {
    e.stopPropagation();
  });
});

document.querySelectorAll('.header-navigation-link').forEach(link => {
  link.addEventListener('click', function(e) {
    if (!this.classList.contains('external-link')) {
      e.preventDefault();

      const targetId = this.getAttribute('href').substring(1);
      const targetSection = document.getElementById(targetId);

      if (targetSection) {
        targetSection.scrollIntoView({ behavior: 'smooth' });
      }

      closeMenu();
    } else {
      closeMenu();
    }
  });
});

