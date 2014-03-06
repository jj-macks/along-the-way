var Route = function Route(map){
  this.map = map;
};

Route.prototype = {
  createPath : function createPath(places) {
    var directionsService = new google.maps.DirectionsService();
    var path;
    var start = places[0];
    var end = places[ places.length - 1 ];
    var waypts = [];
    for (var i = 2; i < places.length; i++) {
      var point = {};
      point.location = places[i];
      waypts.push(point);
    }
    var request = {
      origin: start,
      destination: end,
      waypoints: waypts,
      travelMode: google.maps.TravelMode.DRIVING
    };
    directionsService.route(request, function(result, status) {
      if (status == google.maps.DirectionsStatus.OK) {
        directionsDisplay.setDirections(result); 
        path = result.routes[0].overview_path;  
      }
    });
    return path;
  },

  createBoxes: function createBoxes(path, distance) {
    var boxes = rboxer.box(path, distance);
    return boxes;
  },

  drawBoxes: function drawBoxes(boxes) {
    boxpolys = new Array(boxes.length);//make sure all methods can access
    for (var i = 0; i < boxes.length; i++) {
      boxpolys[i] = new google.maps.Rectangle({
        bounds: boxes[i],
        fillOpacity: 0,
        strokeOpacity: 1.0,
        strokeColor: '#000000',
        strokeWeight: 1,
        map: this.map
      });
    }
  },

  clearBoxes: function clearBoxes(){
    if (boxpolys != null) {
      for (var i = 0; i < boxpolys.length; i++) {
        boxpolys[i].setMap(null);
      }
    }
    boxpolys = null;
  }
}
