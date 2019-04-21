var menuButton = document.getElementById('menuButton');
var menuWindow = document.getElementById('menuWindow');



// Menu slides to the right
menuButton.onclick = function showMenuWindow() {
    menuWindow.classList.toggle('menu__container_active');
}

// Menu window background color changes on scroll
//var blocksScrollHeight = ;
//alert((blockAbout.scrollHeight + blockMyWorks.scrollHeight));


window.onscroll = function changeBackgroundOnScroll() {
    // Page block variables
    var blockAbout = document.getElementById('blockAbout').scrollHeight;
    var blockMyWorks = document.getElementById('blockMyWorks').scrollHeight;
    var blockSkills = document.getElementById('blockSkills').scrollHeight;

    //
    

    //  Scroll position
    var scrollPosition = document.documentElement.scrollTop;



    if (scrollPosition >= (blockAbout + blockMyWorks + blockSkills - 50)) {
        menuWindow.classList.add('bg-silver');
    }

    else if (scrollPosition >= (blockAbout + blockMyWorks - 50)) {
        menuWindow.classList.add('bg-navyblue');
    }


    else {
        menuWindow.classList.remove('bg-navyblue');
        menuWindow.classList.remove('bg-silver');
    }
}

//         menuWindow.classList.toggle('bg-navyblue')
