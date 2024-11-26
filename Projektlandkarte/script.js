// IKI Projekte Daten-Struktur
const ikiProjects = [
    {
        name: "Waldschutz und nachhaltige Ressourcennutzung",
        coordinates: [-3.7319, -73.2479],
        country: "Peru",
        description: "Nachhaltiges Waldmanagement im Amazonasgebiet",
        budget: "5.2 Mio EUR",
        duration: "2020-2024"
    },
    // Beispielprojekt - bitte durch echte IKI Projekte ersetzen
    {
        name: "Klimaanpassung in Küstenregionen",
        coordinates: [14.0583, 108.2772],
        country: "Vietnam",
        description: "Mangrovenaufforstung und Küstenschutz",
        budget: "3.8 Mio EUR",
        duration: "2021-2025"
    }
];

// Karte initialisieren
const map = L.map('map').setView([20, 0], 2);

// OpenStreetMap Layer hinzufügen
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

// Projekte zur Karte und Liste hinzufügen
const projectsList = document.getElementById('locations');

ikiProjects.forEach(project => {
    // Custom Icon für IKI Projekte
    const projectIcon = L.divIcon({
        className: 'project-marker',
        html: '<div class="marker-pin"></div>',
        iconSize: [30, 30],
        iconAnchor: [15, 30]
    });

    // Marker zur Karte hinzufügen
    const marker = L.marker(project.coordinates, { icon: projectIcon })
        .bindPopup(`
            <div class="project-popup">
                <h3>${project.name}</h3>
                <p><strong>Land:</strong> ${project.country}</p>
                <p><strong>Beschreibung:</strong> ${project.description}</p>
                <p><strong>Budget:</strong> ${project.budget}</p>
                <p><strong>Laufzeit:</strong> ${project.duration}</p>
            </div>
        `)
        .addTo(map);

    // Projekt zur Liste hinzufügen
    const listItem = document.createElement('li');
    listItem.innerHTML = `
        <strong>${project.name}</strong>
        <br>
        ${project.country} | ${project.duration}
    `;
    
    // Klick-Event für Listeneinträge
    listItem.addEventListener('click', () => {
        map.setView(project.coordinates, 8);
        marker.openPopup();
    });
    
    projectsList.appendChild(listItem);
}); 