# OpenStreetMap Karte erstellen

## 1. Basis-Setup mit Leaflet.js

### HTML Struktur

## 1. OpenStreetMap Map Composer

1. Besuchen Sie https://openmaptiles.com/maps/
2. Klicken Sie auf "Design custom map"
3. Im Map Composer:
   - Wählen Sie "Basic" als Basiskarte
   - Passen Sie die Farben und Stile an:
     * Landmassen: #f5f5f5
     * Wasser: #b3d1ff
     * Administrativgrenzen: #666666
     * Beschriftungen: #333333

### Style-Anpassungen
1. Unter "Layers":
   - Aktivieren Sie "Administrative boundaries"
   - Wählen Sie "Country borders" für klare Ländergrenzen
   - Aktivieren Sie "Place labels" für Städte und Länder
   
2. Unter "Custom Style":
   ```css
   {
     "version": 8,
     "name": "IKI Projects",
     "metadata": {
       "mapbox:autocomposite": false
     },
     "sources": {
       "openmaptiles": {
         "type": "vector",
         "url": "https://api.maptiler.com/tiles/v3/tiles.json?key=YOUR_KEY"
       }
     }
   }
   ```

### Kartendarstellung
1. Setzen Sie den initialen Zoom:
   - Zoom Level: 2 (Weltansicht)
   - Center: [20, 0] (Äquator-Fokus)

2. Aktivieren Sie wichtige Features:
   - Zoom Controls
   - Scale Bar
   - Full Screen Option

## 2. Export & Integration

### Als Standalone-Karte
1. Exportieren Sie die Karte als Style JSON
2. Nutzen Sie den Code in Ihrem Projekt: