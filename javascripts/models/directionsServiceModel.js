var app = app || {};

// Create the directions object and store its components
app.directions = {

  directionsService: null,

  directionsRenderer: null,

  init: function() {
    // Create a directions service for computing directions between
    // two or more places
    this.directionsService = new google.maps.DirectionsService();

    // Set up a directions renderer object that allows directions to be rendered
    // on the map.
    this.directionsRenderer = new google.maps.DirectionsRenderer();

    // Specify the map that directions will be rendered on
    this.directionsRenderer.setMap(app.map.map);
  }
}
