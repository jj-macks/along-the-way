var app = app || {};

app.Place = function Place(placeData) {
  var data = placeData; 
  var marker;
  var self = constructor.prototype;

  function constructor() { };

  constructor.prototype.createMarker = function(){
    var placeLoc = data.geometry.location;
    var newMarker = new google.maps.Marker({
      map: app.map.map,
        position: placeLoc,
        title: data.name
    });
    marker = newMarker;
  };

  constructor.prototype.addMarkerListener = function(){
    google.maps.event.addListener(
        marker, 'click', function() {
          /***********************
            Add opener for accordion element
           ************************/
          console.log('works');
        });
  };

  constructor.prototype.setMarker = function(value){
    marker = value;
  };
  constructor.prototype.getMarker = function(value){
    return marker;
  };

  return new constructor(); 
};
