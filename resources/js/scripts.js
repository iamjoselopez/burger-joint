var menuMobile = document.getElementById('menu-mobile');
var menuOpen = document.getElementById('menu-toggle');
var menuClose = document.getElementById('menu-close');

// Listen for menu open click
menuOpen.addEventListener('click', function(){
    // Add open class to menu
    menuMobile.classList.add('mobile_active');
});

// Listen for menu close click
menuClose.addEventListener('click', function(){
    // Add open class to menu
    menuMobile.classList.remove('mobile_active');
});