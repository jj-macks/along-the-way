var tripResults = [],
    placesService, // have to wait for map to be defined to define;
    isFirst = true; 

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
  // Cooper, stop slacking!!!
  google.maps.event.addListener(marker, 'click', function() {
    infowindow.setContent(place.name);
    infowindow.open(map, this);
  });
}

