const burgerBtn = document.querySelector('.burger-menu');
const closeBtn = document.querySelector('.burger-close');
const nav = document.querySelector('.header-navigation');

function openMenu() {
  nav.classList.add('active');
}

function closeMenu() {
  nav.classList.remove('active');
}

burgerBtn.addEventListener('click', openMenu);
closeBtn.addEventListener('click', closeMenu);

document.addEventListener('click', (event) => {
  if (!nav.contains(event.target) && !burgerBtn.contains(event.target)) {
    closeMenu();
  }
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
