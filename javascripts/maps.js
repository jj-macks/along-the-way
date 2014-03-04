var directionsDisplay, 
    map,
    boxes, 
    centers,
    startAtBox = 0,
    startAtCenter = 0,
    tripResults = [],
    placesService, // have to wait for map to be defined to define
    isFirst = true;
var placesService;              // have to wait for map to be defined to define
var directionsService = new google.maps.DirectionsService();
var rboxer = new RouteBoxer();  // draws boxes around the route
var distance = 5;              // km, we need to set this to be filled by an event listener

function initialize() {
  directionsDisplay = new google.maps.DirectionsRenderer();
  var chicago = new google.maps.LatLng(41.850033, -87.6500523);
  var mapOptions = {
    zoom: 7,
    center: chicago // this needs to be dynamically defined based on center of route
  }
  map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);
  directionsDisplay.setMap(map);
}

function calcRoute(places) {
  placesService = new google.maps.places.PlacesService(map);
  var start = places[0];
  var end = places[1];
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
    }
  });
}
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
  if (boxpolys != null) {
    for (var i = 0; i < boxpolys.length; i++) {
      boxpolys[i].setMap(null);
    }
  }
  boxpolys = null;
}
function placesCallback(results, status){
  if (isFirst) {
    console.log(results.length);
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
      console.log("json " + results[i].name);
      createMarker(place);
      tripResults[i].push(place);
    }
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
  google.maps.event.addListener(marker, 'click', function() {
    infowindow.setContent(place.name);
    infowindow.open(map, this);
  });
}

function searchTenBoxes(boxes) {
  for (var i = startAtBox; i < startAtBox + 10; i++) {
    var bounds = boxes[i];
    var request = {bounds: bounds,
      keyword: 'starbucks',
      rankby: distance};
    //placesService.nearbySearch(request, placesCallback);
    placesService.radarSearch(request, placesCallback);
    var bounds = boxes[i]; //boxes around route that boxer returned
    var request = {bounds: bounds, keyword: ['store']};
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
};

function searchTenCircles(centers) {
  for (var i = startAtCenter; i < startAtCenter + 10; i += 1) {
    console.log(i);
    var center = new google.maps.LatLng(centers[i].d, centers[i].e, true);
    var request = {location: center, radius: 30};
    placesService.nearbySearch(request, placesCallback);
  }
  startAtCenter += 10;
}
google.maps.event.addDomListener(window, 'load', initialize);



/*
// Credits:
// Majority of the code has been adapted from sample codes available at:
// https://developers.google.com/maps/documentation/javascript/examples/
// Code for draw_initialRoute adapted from:
// http://www.sitepoint.com/find-a-route-using-the-geolocation-and-the-google-maps-api/

var map;
var locationMarker;

// initializes Google Maps with the map centered on Seattle
function initialize_map() {

var MY_MAPTYPE_ID = 'custom_style';
var seattle = new google.maps.LatLng(47.6062090, -122.3320710);

var featureOpts = [
{
stylers: [
{ hue: '#AEBE91' },
{ visibility: 'simplified' },
{ gamma: 0.5 },
{ weight: 0.5 }
]
},
{
elementType: 'labels',
stylers: [
{ visibility: 'on' }
]
},
{
featureType: 'water',
stylers: [
{ color: '#355EA0' }
]
}
];

var mapOptions = {
zoom: 12,
center: seattle,
mapTypeControlOptions: {
mapTypeIds: [google.maps.MapTypeId.ROADMAP, MY_MAPTYPE_ID]
},
mapTypeId: MY_MAPTYPE_ID
};

map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

var styledMapOptions = {
name: 'Custom Style'
};

var customMapType = new google.maps.StyledMapType(featureOpts, styledMapOptions);
map.mapTypes.set(MY_MAPTYPE_ID, customMapType);

// Adds giant pin marker at the center of Seattle
var image = 'images/pushpin_azure.png';
locationMarker = new google.maps.Marker({
position: seattle,
map: map,
icon: image
});

// Shifts the map slight lower than original center [Can remove]
var newCenter = new google.maps.LatLng(47.643108, -122.346656);
map.setCenter(newCenter);

}

// Updates map to show initial route between the start and end destinations
function draw_initialRoute(start, end) {

  //locationMarker.setIcon('images/Robot_Heart_by_Zeax82.png');

  var directionsService = new google.maps.DirectionsService();
  var directionsRequest = {
    origin: start,
    destination: end,
    travelMode: google.maps.DirectionsTravelMode.DRIVING,
    unitSystem: google.maps.UnitSystem.IMPERIAL
  };

  directionsService.route(
      directionsRequest,
      function(response, status) {

        if(status == google.maps.DirectionsStatus.OK) {
          new google.maps.DirectionsRenderer({
            map: map,
            directions: response,
            //suppressMarkers: true,
            markerOptions: {
              icon: 'images/Robot_Heart_by_Zeax82.png'
            }
          });

        } else {
          alert("Sorry - unable to retrieve your route.");
        }
      }
      );

}

// Onload handler to fire off the map
google.maps.event.addDomListener(window, 'load', initialize_map);
*/
