var app = app || {};

app.Box = function Box(rbox) {
  var rbox = rbox;
  var places = [];
  var self = constructor.prototype;

  function constructor() { };

  constructor.prototype.getPlaces = function() {
    var request = {
      bounds: rbox,
      keyword: $("input[id=keywords]").val(),
      minprice: $("#min-price option:selected").val(),
      maxprice: $("#max-price option:selected").val(),
      types: getTypes(),
      rankby: distance
    };
    app.places.placesService.nearbySearch(request, self.buildPlaces);
  };

  constructor.prototype.buildPlaces = function(results, status) {
    for (var i = 0; i < results.length; i++) {
      var place = new Place(results[i]);
      self.places.push(place); 
    }
  };
  return new constructor();
}
