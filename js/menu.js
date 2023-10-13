const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('show');
});

// Para cerrar el menú al hacer clic en un enlace (opcional)
const navLinksList = document.querySelectorAll('.nav__link--menu a');

navLinksList.forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('show');
    });
});