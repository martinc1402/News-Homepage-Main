
// Target the pop out side nav on mobile
const sideNav = document.getElementById('side-nav');

//When the user clicks the open hamburger, display the side nav
document.querySelector('.icon-menu').onclick = function(){
 sideNav.style.display = 'block';
}

// When the user clicks the close icon, hide the side nav
document.querySelector('.menu-close').onclick = function(){
  sideNav.style.display = 'none';
}

// Variable for the Side Menu
let sideMenu = document.getElementById('side-nav');

// Variable for the hamburger icon
let hamburger = document.getElementById('menu-open');

//Event listener for the hamburger icon
hamburger.addEventListener("click", sideMenuTransform);

function sideMenuTransform() {
  sideMenu.style.transform = `translateX(0)`;
}
  
  
    
    
    
    
    
  