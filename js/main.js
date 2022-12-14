// DOM Elements
const mobileMenu = document.querySelector(".menu-mobile");

let menuOpen = false;

function openMenu(){
    mobileMenu.style.transform = "translateX(0)";
    menuOpen = true;
}

function closeMenu(){
    mobileMenu.style.transform = "translateX(100%)";
    menuOpen = false;
}

addEventListener('scroll', (event) => {
    // IF the user are scrolling and menu is open, menu closes.
    if(menuOpen){
        closeMenu();
    }
});