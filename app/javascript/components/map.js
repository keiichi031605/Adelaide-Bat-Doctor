import mapboxgl from 'mapbox-gl';

const showMap = () => {
  const map_div = document.getElementById('map');
    if (map_div) {
    mapboxgl.accessToken = process.env.MAPBOX_API_KEY
    var center_point = [138.594709, -34.976377]
    window.map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v11',
      center: center_point,
      zoom: 11
    });
      var marker = new mapboxgl.Marker()
      var abd_point = [138.594709, -34.976377]

      var popup = new mapboxgl.Popup({ offset: 25 }).setHTML(
        '<strong>Adelaid Bat Doctor</strong><p>We Are <a href="https://www.google.com/maps/dir/-37.791367,144.9281504/-34.97638,138.59471/@-36.2795437,137.2639272,6z/data=!3m1!4b1!4m4!4m3!1m1!4e1!1m0" target="_blank">Here!</a></p>'
        );
      new mapboxgl.Marker(marker)
      .setLngLat(abd_point)
      .setPopup(popup)
      .addTo(map);
    }
  };

export default showMap;
