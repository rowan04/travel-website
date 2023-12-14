// Find the map div
const map_div = document.getElementById('osm-map');

// Create a Leaflet map in map_div
let map = L.map(map_div);
// Add OSM tile layer to the Leaflet map
L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

// Set map to centre on a set location, with zoom of 11
const location1 = L.latLng('51.751887', '-1.257726');
map.setView(location1, 11);
// Place a marker on the same location
L.marker(location1).addTo(map);