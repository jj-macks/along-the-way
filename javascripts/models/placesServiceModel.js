var app = app || {};

app.places = {
  
  placesService: null,

  init: function() {
    //Create a places service for doing various
    //places api calls
    this.placesService = new google.maps.places.PlacesService(app.map.map);

  }
};
