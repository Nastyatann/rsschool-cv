const menuBurger =  document.querySelector('.burger') ;
const menuNav = document.querySelector('.nav');
menuBurger.addEventListener("click", function (e) {
    menuBurger.classList.toggle('active');
    menuNav.classList.toggle('active');
    document.body.classList.toggle('lock');
})

const menuItems = document.querySelectorAll('.nav__item');

menuItems.forEach(menuItem => {
    menuItem.addEventListener("click", onMenuClick);
})

function onMenuClick(e) {
   if (menuBurger.classList.contains('active')) {
    menuBurger.classList.remove('active');
    menuNav.classList.remove('active');
    document.body.classList.remove('lock'); 
   }
}