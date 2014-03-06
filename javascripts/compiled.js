var boxes,
    startAtBox = 0;
var rboxer = new RouteBoxer();  // draws boxes around the route
var distance = 5;              // km, we need to set this to be filled by an event listener

// Draw the array of boxes as polylines on the map
function drawBoxes(boxes) {
  boxpolys = new Array(boxes.length);
  for (var i = 0; i < boxes.length; i++) {
    boxpolys[i] = new google.maps.Rectangle({
      bounds: boxes[i],
      fillOpacity: 0,
      strokeOpacity: 1.0,
      strokeColor: '#000000',
      strokeWeight: 1,
      map: map
    });
  }
}

// Clear boxes currently on the map
function clearBoxes() {
  if (boxpolys !== null) {
    for (var i = 0; i < boxpolys.length; i++) {
      boxpolys[i].setMap(null);
    }
  }
  boxpolys = null;
}

function searchTenBoxes(boxes) {
  for (var i = startAtBox; i < startAtBox + 10; i++) {
    var bounds = boxes[i];
    var request = {bounds: bounds,
      keyword: $("input[id=keywords]").val(),
      minprice: $("#min-price option:selected").val(),
      maxprice: $("#max-price option:selected").val(),
      types: getTypes(),
      rankby: distance};
    $("#next-box-results").prop("disabled", true);
    console.log(startAtBox);
    placesService.nearbySearch(request, placesCallback);
  }
  startAtBox += 10;
  setTimeout(function(){
    //use this to turn off button until all boxes are loaded
    searchTenBoxes(boxes);
    //use this to have user click after delay for next 10 boxes
    //$("#next-box-results").prop("disabled", false);
  },6000);
}

function calcRoute(places) {

  placesService = new google.maps.places.PlacesService(map);

  var start = places[0];
  var end = places[ places.length - 1 ];
  var waypts = [];
  for (var i = 2; i < places.length; i++) {
    var point = {};
    point.location = places[i];
    waypts.push(point);
  }
  //var waypts = [{location: '855 N 80th Street, seattle, wa'}, {location: 'university of washington, seattle, wa'}];

  var request = {
    origin: start,
    destination: end,
    waypoints: waypts,
    travelMode: google.maps.TravelMode.DRIVING
  };
  directionsService.route(request, function(result, status) {
    if (status == google.maps.DirectionsStatus.OK) {
      directionsDisplay.setDirections(result); //puts the line on the map
      // Box the overview path of the first route
      var path = result.routes[0].overview_path;  // Contains all the GPS coordinates
      centers = path;
      boxes = rboxer.box(path, distance);     // Creates all the route boxes with the given radius (distance)
      drawBoxes(boxes);
      searchTenBoxes(boxes);
    }
  });
}

  //compiles checkbox values into one string
function getTypes() {
  var typesParameters = [];
  var types = $("input[name=types]");
  for (var i = 0; i < types.length; i++) {
    if (types[i].checked) {
      var array = (types[i].value).split(",")
      typesParameters = typesParameters.concat(array);
    }
  }
  return typesParameters;
}

var directionsDisplay,
    map; 
    
var directionsService = new google.maps.DirectionsService();

function initialize() {
  directionsDisplay = new google.maps.DirectionsRenderer();
  var chicago = new google.maps.LatLng(41.850033, -87.6500523);
  var mapOptions = {
    zoom: 4,
    center: chicago // this needs to be dynamically defined based on center of route
  }
  map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);
  directionsDisplay.setMap(map);
}

google.maps.event.addDomListener(window, 'load', initialize);

var markers = [];

var tripResults = [],
    placesService, // have to wait for map to be defined to define;
    isFirst = true; 

function placesCallback(results, status){
  if (isFirst) {
    //console.log(results.length);
    for (var i = 0; i < results.length; i++) {
      tripResults.push([]);
    }
    isFirst = false;
  }
  if (status == google.maps.places.PlacesServiceStatus.OK) {
    console.log("placesCallback");

    for (var i = 0; i < results.length; i++) {
    //now only returns the first five places for each box
      var place = results[i];
      createMarker(place);
      //now logs the name of each place in the console
      if(!tripResults[i]) {
        tripResults[i] = [];
      }
      createMarker(place);
      tripResults[i].push(place);
    }
    makeTemplate();
  }
}

// creates markers for each result, but can also get result[icon] or whatever
function createMarker(place) {
  var placeLoc = place.geometry.location;
  var marker = new google.maps.Marker({
      map: map,
      position: placeLoc,
      title: place.name
  });

  markers.push(marker);

  // Cooper, stop slacking!!!
  google.maps.event.addListener(marker, 'click', function() {
      infowindow.setContent(place.name);
      infowindow.open(map, this);
  });
}

// Deletes all markers in the array by removing references to them.
function deleteMarkers( callback, places ) {
  for(var i = 0; i < markers.length; i++) {
      markers[i].setMap(null);
  }
  markers = [];

  if( callback ) {
    callback( places );
  }
}

// An array that contains the list of places entered by the user
// places[0] contains the start destination
// places[1] contains the end destination
var places = [];
var index = 2;

// Stores start and end destinations entered by user
// Then removes the overlay containing the form
$("#go").click(function(e) {

    // If the form is populated with both start and end destinations,
    // store the values in the places array
    if ($("#start-destination").val() !== '' &&
        $("#end-destination").val() !== '') {
        places[0] = $("#start-destination").val();
        places[1] = $("#end-destination").val();

        console.log(places);    // debugger [Can remove from final version]

        $("#destinations").html("<label>Destinations</label><input id='add-destination' type='text' placeholder='Add more here'></input><input id='go2' type='button' value='Go!'/><label id='party-list'>Party list:</label><ul></ul>");
        $("ul").append("<li>" + places[0] + "</li>");
        $("ul").append("<li>" + places[1] + "</li>");

        calcRoute(places);      // draws the initial route between the start and end destinations

        console.log(places);    // debugger [Can remove from final version]

        e.preventDefault();

    // if either or both the start and end destinations are not populated,
    // a prompt will alert the user to enter the needed information
    } else {
        alert("Please enter both destinations!");
        e.preventDefault();
    };
});

$(document).on("click", "#go2", function(e) {
  if (places.length > 10) {
    alert("Exceeded maximum number of places: 10");
  } else if ($("#add-destination").val() !== '') {
    var place = $("#add-destination").val();
    places[index] = place;
    index++;
    $("ul").append("<li>" + place + "</li>");
    $("#add-destination").val('');
    directionsDisplay.set('directions', null);
    clearBoxes();
    calcRoute(places);

    console.log(places);

    e.preventDefault();
  } else {
    alert("Please enter a destination!");
    e.preventDefault();
  };
});

$(document).on("click", "li", function(e) {
  var place = $(this).text();

  console.log(place);           // debugger [Can remove from final version]

  _.pull(places, place);
  index--;

  console.log(places);          // debugger [Can remove from final version]

  $(this).remove();
  directionsDisplay.set('directions', null);
  clearBoxes();
  deleteMarkers();
  calcRoute(places);
  e.preventDefault();
});

// Add click listener to the left side arrow to open and close
// the advanced search panel
$('#pull').click( function(e) {
   e.preventDefault();
   // Toggle the advanced search form
   $('#adv_search').fadeToggle();
   // Toggle the opening and closing of the search panel
   $('#search-panel').toggleClass('expandSearch');
});

// Add click listener to left side for filter accordion
$('#filter-accordion label').click(function(e) {
  if($('#filter-accordion').is(':visible')) {
    console.log($('#filter-accordion').is(':visible'));
    document.getElementById('filter-label').innerHTML = 'Filtering &#8593;';
    $(e.target).next('div').slideToggle('fast');
  } else if ($('#filter-accordion').is(':hidden')) {
    document.getElementById('filter-label').innerHTML = 'Filtering &#8595;';
    $(e.target).next('div').slideToggle('fast');
  }
});

// Displays on inital expansion a collapsed filter accordian
$('#filter-accordion label').next('div').slideUp();


function makeTemplate() {
  var accordion_template = $('#accordion-template').html();
  var template = Handlebars.compile( accordion_template );
  var data = {
    places: tripResults[0]
  };
  $('#accordion').html( template( data ) );
}

// Add click listener to the right side arrow to open and close
// the advanced search panel
$('#push').click( function(e) {
  e.preventDefault();
  // Toggle displaying the results
  $('#results-view').fadeToggle();
  // Toggle opening and close the results window
  $('#results-window').toggleClass('expandResults');
  // Instantiate the accordion
  $( "#accordion" ).accordion();
});





