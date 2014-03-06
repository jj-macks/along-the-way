var app = app || {};

// Create the map object and store its components
app.map = {
  // Create a mapOptions object to store parameters to pass in the map
  // we want to create
  mapOptions: {
    zoom: 4,
    // Create a LatLng object to use as the center for the map
    // ** Eventually, switch out to search for user's location
    center: new google.maps.LatLng(41.850033, -87.6500523)
  },
  
  map: null,

  init: function() {
    // Instatiate the map and place it in the DOM at the map-canvas div
    this.map = new google.maps.Map(document.getElementById("map-canvas"), this.mapOptions);
  }
};
