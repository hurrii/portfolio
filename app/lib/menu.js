var menuButton = document.getElementById('menuButton');
var menuWindow = document.getElementById('menuWindow');



// Menu slides to the right
menuButton.addEventListener("click", showMenuWindow, false);

(function eventListenersOnLinks(){
    var menuLinkArr = document.getElementsByClassName("menu__link");
    var menuLinkArrLength = menuLinkArr.length;

    for(var i = 0; i < menuLinkArrLength; i++) {
        menuLinkArr[i].addEventListener("click", showMenuWindow, false);

    }
})();


function showMenuWindow() {
    menuWindow.classList.toggle('menu__container_active');
}


function menuLinks() {
    var menuLink = document.getElementsByClassName("menu__link");

    menuLink.addEventListener("click", showMenuWindow, false);
}

// Change the color of menu window on page scroll
window.onscroll = function changeBackgroundOnScroll() {
    
    // Page block variables
    var blockAboutPosition = document.getElementById('blockAbout').scrollHeight;
    var blockMyWorksPosition = document.getElementById('blockMyWorks').scrollHeight;

    //  Scroll position
    var scrollPosition = window.pageYOffset;

if (scrollPosition >= (blockAboutPosition + blockMyWorksPosition)) {
        menuWindow.classList.add('bg-navyblue');
    }

    else {
        menuWindow.classList.remove('bg-navyblue');
    }

}

