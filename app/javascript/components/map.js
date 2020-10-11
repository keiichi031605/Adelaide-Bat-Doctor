import mapboxgl from 'mapbox-gl';

const showMap = () => {
  const map_div = document.getElementById('map');
  if (map_div) {
    mapboxgl.accessToken = process.env.MAPBOX_API_KEY
      window.map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11',
      });
    }
  };

export default showMap;
