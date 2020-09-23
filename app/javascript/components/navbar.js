// Navbar Scroll-Effect
 const navbar = document.querySelector('#navbar-abd');
 window.onscroll = () => {
   if (document.documentElement.scrollTop >= 50 ) {
     navbar.style.background = "white";
     navbar.style.transition = '0.8s ease'
   }
   else {
     navbar.style.background = "transparent";
   }
 };

const navSlide = () => {
   const burger = document.querySelector('.burger');
   const nav = document.querySelector('.navbar-list');
   const navbar = document.querySelector('#navbar-abd');

   burger.addEventListener('click', () => {
     nav.classList.toggle('nav-active');
     navbar.style.background = "black";
     burger.classList.toggle('toggle');
   });
 };

 export default navbar;
 export default navSlide;

