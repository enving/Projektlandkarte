Liferay.Portlet.extend({
    initialize: function() {
        // Hier können Sie die Karte initialisieren
        initMap();
    },
    
    // Methode zum Abrufen der Projektdaten aus Liferay
    fetchProjects: function() {
        Liferay.Service(
            '/your-service-endpoint',
            function(result) {
                // Projektdaten verarbeiten
                projects = result;
                addProjectMarkers();
            }
        );
    }
}); 