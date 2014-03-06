// Credits: 
// Majority of the code has been adapted from sample codes available at:
// https://developers.google.com/maps/documentation/javascript/examples/
// Code for draw_initialRoute adapted from: 
// http://www.sitepoint.com/find-a-route-using-the-geolocation-and-the-google-maps-api/

var map;
var locationMarker;
var route;

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

    route = new Route(map);
    /*
    route.createPath(['seattle', 'tacoma, wa'], function() {
        route.createBoxes(route.getPath(), 5, function() {
            route.drawBoxes(route.getBoxes()); 
        });
    });
    */
    route.createRoute(route, ['seattle', 'tacoma, wa'], 5);

};

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
