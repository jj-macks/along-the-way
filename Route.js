var Route = function Route(map){
  this.map = map;
  var path;
  var boxes = [];
  var boxpolys;

  function constructor() { };

  constructor.prototype.createRoute = function(newRoute, places, distance) {
    newRoute.createPath(places, function() {
      newRoute.createBoxes(newRoute.getPath(), distance, function() {
       // newRoute.drawBoxes(newRoute.getBoxes());
      })
    });
  };

  constructor.prototype.createPath = function(places, cb) {
    var directionsService = new google.maps.DirectionsService();//call app.something instead
    var path1;
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
    //call app.something here too
    directionsService.route(request, function(result, status) {
      if (status == google.maps.DirectionsStatus.OK) {
        new google.maps.DirectionsRenderer({
                    map: map,
                    directions: result          
        });
        path = result.routes[0].overview_path; //Ask how to get out of function closure
        console.log(path);
        cb();      
      }
    })
  };

  constructor.prototype.createBoxes = function(path, distance, cb) {
    var rboxer = new RouteBoxer();
    var newBoxes = rboxer.box(path, distance);
    boxes = newBoxes;
    cb();
  };

  constructor.prototype.drawBoxes = function(boxes) {
    boxpolys = new Array(boxes.length);//make sure all methods can access
    for (var i = 0; i < boxes.length; i++) {
      boxpolys[i] = new google.maps.Rectangle({
        bounds: boxes[i],
        fillOpacity: 0,
        strokeOpacity: 1.0,
        strokeColor: '#000000',
        strokeWeight: 1,
        map: map
      });
    };
  };

  constructor.prototype.clearBoxes = function() {
    if (boxpolys != null) {
      for (var i = 0; i < boxpolys.length; i++) {
        boxpolys[i].setMap(null);
      }
    }
    boxpolys = null;
  };

  constructor.prototype.getPath = function() {
    return path;
  }

  constructor.prototype.setPath = function(newPath) {
    path = newPath;
  }

  constructor.prototype.getBoxes = function() {
    return boxes;
  }

  constructor.prototype.setBoxes = function(newBoxes) {
    boxes = newBoxes;
  }

  return new constructor();
};
