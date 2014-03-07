var app = app || {};

app.Box = function Box(rbox) {
  var rbox = rbox;
  var places = [];
  var self = constructor.prototype;

  function constructor() { };

  constructor.prototype.getPlaces = function() {
    var request = {
      bounds: rbox
      // keyword: $("input[id=keywords]").val(),
      // minprice: $("#min-price option:selected").val(),
      // maxprice: $("#max-price option:selected").val(),
      // types: ['Starbucks'],
      // rankby: app.distance
    };
    app.places.placesService.nearbySearch(request, self.buildPlaces);
  };

  constructor.prototype.buildPlaces = function(results, status) {
    for (var i = 0; i < results.length; i++) {
      var place = new app.Place(results[i]);
      place.createMarker();
      place.addMarkerListener();
      places.push(place); 
    }
  };

  constructor.prototype.getBox = function() {
    return rbox;
  };
  
  return new constructor();
};
