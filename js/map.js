// Declaring Global variables
let map = "";
let markersGroup = "";
let markers_array = [];

function createMap() {
    // Find the map div
    const map_div = document.getElementById('osm-map');

    // Create a Leaflet map in map_div
    // The below code to create the map was taken from a stack overflow answer at 
    // https://stackoverflow.com/questions/925164/openstreetmap-embedding-map-in-webpage-like-google-maps
    // by the user 'totymedli'
    map = L.map(map_div);
    // Add OSM tile layer to the Leaflet map
    L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);
    
    // a layer group, used here like a container for markers
    markersGroup = L.layerGroup();
    map.addLayer(markersGroup);

    // Set the map to centre on a set location, with zoom of 5
    const location1 = L.latLng('51.751887', '-1.257726');
    map.setView(location1, 5);

    // Add any markers already in array
    addMarkers();
}

function getMarkerInfo(markerForm) {
    // Get marker info from form
    latitude = markerForm.latitude.value;
    longitude = markerForm.longitude.value;
    markerName = markerForm.markerName.value;

    // Add marker to array
    let markerInfo = [markerName, latitude, longitude]
    markers_array.push(markerInfo);

    // Call addMarkers
    addMarkers();
}

function addMarkers() {
    // Clear existing markers so the same markers aren't continuously placed over each other
    markersGroup.clearLayers();

    // For each marker in markers array
    for (let marker of markers_array) {
        // Get marker info
        marker_Name = marker[0]
        markerLatitude = marker[1]
        markerLongitude = marker[2]

        // Add marker to map
        let markerCoords = L.latLng(markerLatitude, markerLongitude);
        markerAdded = L.marker(markerCoords);
        markerAdded.addTo(markersGroup)

        // Give marker its name
        markerAdded.bindPopup(marker_Name);
    }
}