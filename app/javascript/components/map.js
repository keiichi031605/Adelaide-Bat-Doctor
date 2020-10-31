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
        '<strong>Adelaid Bat Doctor</strong><p>We Are <a href="https://www.google.com/maps/place/Westbourne+Park+SA+5041/@-34.9724376,138.5909269,16z/data=!4m5!3m4!1s0x6ab0cfcc392bf9b1:0xb1754a681c1e1918!8m2!3d-34.9763598!4d138.5948521">Here!</a></p>'
        );
      new mapboxgl.Marker(marker)
      .setLngLat(abd_point)
      .setPopup(popup)
      .addTo(map);
    }
  };

export default showMap;
