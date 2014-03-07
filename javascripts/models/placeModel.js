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

  // Listens for click of any place's marker and gets detailed info for that place.
  constructor.prototype.addMarkerListener = function(){
    google.maps.event.addListener(marker, 'click', function() {
      var requestDeets = {
        reference: data.reference
      };
      app.places.placesService.getDetails(requestDeets, getDetailsCallback);
    });

    function getDetailsCallback (place, status) {
      if (status == google.maps.places.PlacesServiceStatus.OK) {
        console.log(place.name + " : " + place.formatted_phone_number);
        //any property in the detailed object can be accessed similarly
      } else {
        console.log("Places details error:  " + status);
      }

    };
  };
 return new constructor();
};


