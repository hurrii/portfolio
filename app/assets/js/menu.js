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

function showMenuWindow() {
    menuWindow.classList.toggle('menu__container_active');
}


function menuLinks() {
    var menuLink = document.getElementsByClassName("menu__link");

    menuLink.addEventListener("click", showMenuWindow, false);
}



// Menu window background color changes on scroll
//var blocksScrollHeight = ;
//alert((blockAbout.scrollHeight + blockMyWorks.scrollHeight));


window.onscroll = function changeBackgroundOnScroll() {
    // Page block variables
    var blockAbout = document.getElementById('blockAbout').scrollHeight;
    var blockMyWorks = document.getElementById('blockMyWorks').scrollHeight;
    var blockSkills = document.getElementById('blockSkills').scrollHeight;


    //  Scroll position
    var scrollPosition = document.documentElement.scrollTop;



if (scrollPosition >= (blockAbout + blockMyWorks - 50)) {
        menuWindow.classList.add('bg-navyblue');
    }

    else {
        menuWindow.classList.remove('bg-navyblue');
    }
}

