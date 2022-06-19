require([
    "esri/config",
     "esri/Map",
     "esri/views/MapView",
     "esri/layers/FeatureLayer"
   ], function (esriConfig, Map, MapView, FeatureLayer) {

     esriConfig.apiKey = "AAPK1e3ebdd5b86e4a33a971c0eec506737bbnn3HG6AAUCpX2PPnwdlKpi0tms7hvS0XCLduZlYWSUNWhoh4c5UOURk7FTz2p6P";
     const map = new Map({
       basemap: "arcgis-topographic" // Basemap layer
     });
     const url = "https://services9.arcgis.com/q5uyFfTZo3LF04P/arcgis/rest/services/survey123_0954ef4";
     const view = new MapView({
       map: map,
       center: [4.824167, 7.033611],
       zoom: 13, // scale: 72223.819286
       container: "viewDiv",
       constraints: {
         snapToZoom: false
       }
     }); 
   });