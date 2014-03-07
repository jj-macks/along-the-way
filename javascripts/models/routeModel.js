var app = app || {};

app.Route = function Route(map) {
  var path;
  var boxes = [];
  var boxpolys;
  var startAtBox = 0;
  var self = constructor.prototype;

  function constructor() { };

  constructor.prototype.createRoute = function() {
    self.createPath( function() {
      self.createBoxes( self.getPath(), function() {
        self.drawBoxes( self.getBoxes());
      });
    });
  };

  constructor.prototype.createPath = function( callback ) {
    var destinations = app.destinations,
        length = destinations.length,
        start = destinations[0],
        end = destinations[ length - 1 ];

    var waypoints = self.grabWaypoints( destinations );

    var request = {
      origin: start,
      destination: end,
      waypoints: waypoints,
      travelMode: google.maps.TravelMode.DRIVING
    };

    // Request and build the path from Google maps
    self.buildPath( request, callback );
  };

  constructor.prototype.buildPath = function( request, callback ) {
    app.directions.directionsService.route( request, function( result, status ) {
      if ( status == google.maps.DirectionsStatus.OK ) {
        app.directions.directionsRenderer.setDirections( result );

        path = result.routes[0].overview_path;

        callback();
      }
      // Add error handler
    });
  };

  // Take the waypoints out the destinations array
  constructor.prototype.grabWaypoints = function( destinations ) {
    var waypoints = [],
        point;

    for( var i = 1; i < destinations.length - 1; i++ ) {
      point = {
        location: destinations[i],
      };

      waypoints.push( point );
    }

    return waypoints;
  };

  constructor.prototype.createBoxes = function(path, cb) {
    var rboxer = new RouteBoxer();
    var newBoxes = rboxer.box(path, app.distance);
    for (var i = 0; i < newBoxes.length; i++) {
      var box = new app.Box(newBoxes[i]);
      boxes.push(box);
    }
    self.searchTenBoxes(boxes);
    cb();
  };

  constructor.prototype.drawBoxes = function(boxes) {
    boxpolys = new Array(boxes.length);//make sure all methods can access
    for (var i = 0; i < boxes.length; i++) {
      boxpolys[i] = new google.maps.Rectangle({
        bounds: boxes[i].getBox(),
        fillOpacity: 0,
        strokeOpacity: 1.0,
        strokeColor: '#000000',
        strokeWeight: 1,
        map: app.map.map
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

  constructor.prototype.clearPlaces = function() {
    for (var i = 0; i < boxes.length; i++) {
      boxes[i].clearPlaces();
    }
  };

  constructor.prototype.getPath = function() {
    return path;
  };

  constructor.prototype.setPath = function(newPath) {
    path = newPath;
  };

  constructor.prototype.getBoxes = function() {
    return boxes;
  };

  constructor.prototype.setBoxes = function(newBoxes) {
    boxes = newBoxes;
  };

  constructor.prototype.searchTenBoxes = function(boxes) {
    for (var i = startAtBox; i < startAtBox + 10; i++) {
      boxes[i].getPlaces();
    }
    startAtBox += 10;
    setTimeout(function(){
      self.searchTenBoxes(boxes);

    }, 6000);
  };

  constructor.prototype.clearRoute = function() {
    self.clearPlaces();
    self.clearBoxes();
    self.setBoxes(null);  
    app.directions.directionsRenderer.setMap(null);
  };

  return new constructor();
};
