var menuExitButton = document.getElementById('menu__exit');
var menuWindow = document.getElementById('menu__window');

menuExitButton.onclick = function menuExit() {
    menuWindow.setAttribute("style","opacity:0; -moz-opacity:0; filter:alpha(opacity=0)");
    menuWindow.style.transition = "all ease-in 0.5s";
    setTimeout(function hideMenu(){menuWindow.style.display = "none";}, 1000);
};