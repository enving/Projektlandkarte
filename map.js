let map;
let markers = [];

// Beispiel-Projektdaten
const projects = [
    {
        id: 1,
        name: "Projekt 1",
        description: "Beschreibung des Projekts 1",
        coordinates: [49.646, 6.597],
        address: "Musterstraße 1, 12345 Stadt"
    }
    // Weitere Projekte hier hinzufügen
];

function initMap() {
    map = L.map('map').setView([49.646, 6.597], 8);
    
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors'
    }).addTo(map);

    addProjectMarkers();
}

function addProjectMarkers() {
    projects.forEach(project => {
        const marker = L.marker(project.coordinates)
            .bindPopup(createPopupContent(project))
            .addTo(map);
            
        marker.on('click', () => showProjectDetails(project));
        markers.push(marker);
    });
}

function createPopupContent(project) {
    return `
        <div class="marker-popup">
            <h3>${project.name}</h3>
            <p>${project.address}</p>
        </div>
    `;
}

function showProjectDetails(project) {
    const detailsDiv = document.getElementById('project-details');
    detailsDiv.innerHTML = `
        <h3>${project.name}</h3>
        <p>${project.description}</p>
        <p><strong>Adresse:</strong> ${project.address}</p>
    `;
}

// Karte initialisieren
window.onload = initMap; 