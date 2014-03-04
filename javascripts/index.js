var directionsDisplay,
    map; 
    
var directionsService = new google.maps.DirectionsService();

function initialize() {
  directionsDisplay = new google.maps.DirectionsRenderer();
  var chicago = new google.maps.LatLng(41.850033, -87.6500523);
  var mapOptions = {
    zoom: 4,
    center: chicago // this needs to be dynamically defined based on center of route
  }
  map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);
  directionsDisplay.setMap(map);
}

google.maps.event.addDomListener(window, 'load', initialize);

