const navSlide = () => {
   const burger = document.querySelector('.burger');
   const nav = document.querySelector('.navbar-list');
   const navbar = document.querySelector('#navbar-wrapper');

   burger.addEventListener('click', () => {
     nav.classList.toggle('nav-active');
     navbar.style.background = "white";
     burger.classList.toggle('toggle');
   });
 };

 export default navSlide;
