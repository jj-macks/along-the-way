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
