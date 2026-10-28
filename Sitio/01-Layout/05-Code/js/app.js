const mburger = document.getElementById('mburger');
const options = document.querySelector('nav.options');

function setMenu(open) {
    mburger.classList.toggle('active', open);
    options.classList.toggle('open', open);
    mburger.setAttribute('aria-expanded', open);
}

mburger.addEventListener('click', () => {
    setMenu(!mburger.classList.contains('active'));
});

// Cierra el menú al elegir una opción (son anclas de la misma página)
options.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => setMenu(false));
});

// Si la pantalla vuelve a ser grande, deja el menú cerrado y limpio
window.matchMedia('(min-width: 769px)').addEventListener('change', e => {
    if (e.matches) setMenu(false);
});
