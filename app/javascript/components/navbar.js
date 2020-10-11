 // Navbar Scroll-Effect
 // const navbar = document.querySelector('#navbar-wrapper');
 // window.onscroll = () => {
 //   if (document.documentElement.scrollTop >= 50 ) {
 //     navbar.style.background = "#e0e0e0";
 //     navbar.style.transition = '0.8s ease'
 //   }
 //   else {
 //     navbar.style.background = "transparent";
 //   }
 // };


const navSlide = () => {
   const burger = document.querySelector('.burger');
   const nav = document.querySelector('.navbar-list');
   const navbar = document.querySelector('#navbar-wrapper');

   burger.addEventListener('click', () => {
     nav.classList.toggle('nav-active');
     navbar.style.background = "f6f6f6";
     burger.classList.toggle('toggle');
   });
 };

 export default navSlide;
