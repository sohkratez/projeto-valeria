const btnMenu = document.getElementById('btn-menu');
const menu = document.getElementById('menu-mobile');
const overlay = document.getElementById('overlay-menu');
const btnFechar = menu.querySelector('.btn-fechar');
const menuLinks = menu.querySelectorAll('nav ul li a')

function abrirMenu() {
    menu.classList.add('abrir-menu');
    overlay.style.display = 'block';
}

function fecharMenu() {
    menu.classList.remove('abrir-menu');
    overlay.style.display = 'none';
}

menuLinks.forEach(link => {
    link.addEventListener('click', fecharMenu);
})

btnMenu.addEventListener('click', abrirMenu);
btnFechar.addEventListener('click', fecharMenu);
overlay.addEventListener('click', fecharMenu);
