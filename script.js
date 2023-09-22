
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

    
    
    
    
    
    
    
    
  