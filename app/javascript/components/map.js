import mapboxgl from 'mapbox-gl';

const showMap = () => {
  const map_div = document.getElementById('map');
    if (map_div) {
    mapboxgl.accessToken = process.env.MAPBOX_API_KEY
    var center_point = [138.594709,
    -34.976377]
    window.map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v11',
      center: center_point,
      zoom: 12
    });
      var marker = new mapboxgl.Marker()
      var abd_point = [138.594709,
    -34.976377]

      var popup = new mapboxgl.Popup({ offset: 25 }).setHTML(
        "<strong>Adelaid Bat Doctor</strong><p>We Are Here!</p>"
        );

      new mapboxgl.Marker(marker)
      .setLngLat(abd_point)
      .setPopup(popup)
      .addTo(map);

    }
  };

export default showMap;
