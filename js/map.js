//Placement de la carte dans la fenêtre
let map = L.map('map').setView([47.476898, -0.552305], 13);

//Ajout du calque "carte" d'Open Street Map
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

//Ajout du marker à l'adresse du restaurant fictif
let marker = L.marker([47.476898, -0.552305]).addTo(map);

//Ajout de la popup avec les coordonnées du restaurant
marker.bindPopup("<b>My Don Restaurant</b><br>Bv Ayrault, 49100 Angers<br>+33 1 24 35 68 97").openPopup();