const toggleMenu = document.querySelector('.toggle-menu');
const image = document.querySelector('.toggle');
const nav = document.querySelector('nav');

toggleMenu.addEventListener('click', () => {
  nav.classList.toggle('active');
})
