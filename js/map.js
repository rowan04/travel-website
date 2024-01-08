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

    // Set the map to centre on a set location, with zoom of 11
    const location1 = L.latLng('51.751887', '-1.257726');
    map.setView(location1, 5);
}

function addMarker(markerForm) {
    markersGroup.clearLayers();
    latitude = markerForm.latitude.value;
    longitude = markerForm.longitude.value;
    markerName = markerForm.markerName.value;
    markerInfo = [markerName, latitude, longitude]
    // let addMarker = L.latLng(latitude, longitude);
    markers_array.push(markerInfo);
    // L.marker(addMarker).addTo(map);
    for (let marker of markers_array) {
        // L.marker(marker).addTo(map);

        // let markerNew = new L.Marker(marker);
        // map.addLayer(markerNew);

        marker_Name = marker[0]
        markerLatitude = marker[1]
        markerLongitude = marker[2]

        let markerCoords = L.latLng(markerLatitude, markerLongitude);
        markerAdded = L.marker(markerCoords);
        markerAdded.addTo(markersGroup)
        markerAdded.bindPopup(marker_Name);
    }
}