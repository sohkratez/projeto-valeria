const menuToggle = document.querySelector('.menu-toggle');
const menuItems = document.querySelector('.menu-items');

menuToggle.addEventListener('click', () => {
    menuItems.classList.toggle('expanded');
})