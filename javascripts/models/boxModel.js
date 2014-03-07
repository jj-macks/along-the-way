var app = app || {};

app.Box = function Box(rbox) {
  var rbox = rbox;
  var places = [];
  var self = constructor.prototype;

  function constructor() { };

  constructor.prototype.getPlaces = function() {
    var request = {
      bounds: rbox,
      keyword: app.keywords,
      minprice: app.minPrice,
      maxprice: app.maxPrice,
      types: app.filters,
      rankby: app.distance
    }
    app.places.placesService.nearbySearch(request, self.buildPlaces);
  };

  constructor.prototype.buildPlaces = function(results, status) {
    for (var i = 0; i < results.length; i++) {
      var place = new app.Place(results[i], self);
      place.createMarker();
      place.addMarkerListener();
      places.push(place);
    }
  };

  constructor.prototype.logBox = function ( data ) {
    for (key in data) {
      console.log(key + " : " + data[key] + " something");
    }
  };

  constructor.prototype.populateAccordion = function () {
    var boxResults = [];
    for (var i = 0; i < places.length; i++) {
      if (places[i]) {
        boxResults.push(places[i].getData());
      }
    }
    console.log(boxResults);
    makeTemplate(boxResults);
  }

  constructor.prototype.getBox = function() {
    return rbox;
  };

  constructor.prototype.clearPlaces = function() {
    for (var i = 0; i < places.length; i++) {
      places[i].getMarker().setMap(null);
      places[i] = null;
    }
  };

  return new constructor();
};
