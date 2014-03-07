var app = app || {};

app.Place = function Place(placeData, box) {
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

  constructor.prototype.getData = function() {
    return data;
  }

  // Listens for click of any place's marker and gets detailed info for that place.
  constructor.prototype.addMarkerListener = function(){
    google.maps.event.addListener(marker, 'click', function() {
      var requestDeets = {
        reference: data.reference
      };
      box.populateAccordion();
      //box.logBox( data );
      app.places.placesService.getDetails(requestDeets, getDetailsCallback);
    });

    function getDetailsCallback (place, status) {
      if (status == google.maps.places.PlacesServiceStatus.OK) {
        //console.log(place.name + " : " + place.id);
        var accordion_details_template = $('#accordion-details-template').html();
        var template = Handlebars.compile( accordion_details_template );
        // var data = {
        //   place: place
        // };
        IDreference = place.id;
        //var active = $('#accordion').accordion('option', 'active');
        //also make the accordion closed at init and only open when one is clicked so we have details

        var divIndexID = $('#accordion').find('#' + IDreference).prev('h4').attr('id');
        $('#' + IDreference).css( "height", "100%" );
        //console.log(divIndexID);
        var numberRegex = /\d+/g;
        var divIndex = parseInt(divIndexID.match(numberRegex));
        //var divIndex = parseInt(divIndexID[divIndexID.length - 1]);
        console.log(divIndex);
        console.log(place);
        $('#accordion').accordion('option', 'active', divIndex); //this works!
        $('#accordion').find('#' + IDreference + ' ul').html('');
        $('#accordion').find('#' + IDreference + ' ul').html( template( place ) );
        
      } else {
        console.log("Places details error:  " + status);
      }

    };
  };

  constructor.prototype.setMarker = function(value){
    marker = value;
  };
  constructor.prototype.getMarker = function(value){
    return marker;
  };

  return new constructor();
};
