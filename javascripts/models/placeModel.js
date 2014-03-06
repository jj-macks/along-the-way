var app = app || {};

app.Place = function Place(placeData) {
  var data = placeData; 
  var marker;
  var self = constructor.prototype;

  function constructor() { };

  constructor.prototype.createMarker = function(){
    var placeLoc = self.placeData.geometry.location;
    var marker = new google.maps.Marker({
      map: app.map.map,
      position: placeLoc,
      title: self.placeData.name
    });
    
    self.marker = marker;

  };

  constructor.prototype.addMarkerListener = function(){
    google.maps.event.addListener(
      self.marker, 'click', function() {
        //add some stuff to happen when marker clicked
        //perhaps infowindow stuff
    });
  };
 return new constructor(); 
};
