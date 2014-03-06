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
      boxes = rboxer.box(path, distance);     // Creates all the route boxes with the given radius (distance)
      drawBoxes(boxes);
      searchTenBoxes(boxes);
    }
  });
}

