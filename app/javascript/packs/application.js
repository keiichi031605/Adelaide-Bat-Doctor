// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

require("@rails/ujs").start()
require("turbolinks").start()
require("@rails/activestorage").start()
require("channels")

//= require rails-ujs
//= require_tree .


// Uncomment to copy all static images under ../images to the output folder and reference
// them with the image_pack_tag helper in views (e.g <%= image_pack_tag 'rails.png' %>)
// or the `imagePath` JavaScript helper below.
//
// const images = require.context('../images', true)
// const imagePath = (name) => images(name, true)


// ----------------------------------------------------
// Note(lewagon): ABOVE IS RAILS DEFAULT CONFIGURATION
// WRITE YOUR OWN JS STARTING FROM HERE 👇
// ----------------------------------------------------

// External imports
import "bootstrap";
import ProductCarousel from "../components/products_carousel";
import navSlide from "../components/navbar";
// import navbar from "../components/navbar";
import 'mapbox-gl/dist/mapbox-gl.css';
import { showMap } from './plugins/map';

document.addEventListener('turbolinks:load', () => {
  const initPlugin = (querySelector, Component) => {
    const els = document.querySelectorAll(querySelector);
    if (els) {
      els.forEach(el => {
        Component(el);
      });
    }
  };
navSlide();
initPlugin(".js-products-carousel", ProductCarousel);
// initSelect2();
showMap();
});
