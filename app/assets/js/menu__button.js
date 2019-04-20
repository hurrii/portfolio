var menuButton = document.getElementById('menuButton');
var menuWindow = document.getElementById('menuWindow');



menuButton.onclick = function showMenuWindow() {
    menuWindow.classList.toggle('menu__container_active');
}