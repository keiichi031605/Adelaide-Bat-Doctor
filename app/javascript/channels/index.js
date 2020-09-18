// Load all the channels within this directory and all subdirectories.
// Channel files must be named *_channel.js.

const channels = require.context('.', true, /_channel\.js$/)
channels.keys().forEach(channels)

 // Navbar Scroll-Effect
 const navbar = document.querySelector('#navbar-wrapper');
 window.onscroll = () => {
   if (document.documentElement.scrollTop >= 50 ) {
     navbar.style.background = "white";
     navbar.style.transition = '0.8s ease'
   }
   else {
     navbar.style.background = "transparent";
   }
 };
