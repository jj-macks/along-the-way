var app = app || {};

(function initializeApp() {
  // Initialize and draw the map
  app.map.init();

  // Initialize the objects to handle directions
  app.directions.init();
})();

// An array that contains the list of places entered by the user.
// The places should be in the order the user entered them.
app.destinations = [];

// Listen for the user hitting the go button. If there is a start and end
// destination, save and draw the route. If there is a new destination,
// add that destination to the route. Otherwise, alert the user that
// their input was invalid.
$("#go").click( function(e) {
  var start = $("#start-destination"),
      end = $("#end-destination"),
      addDest = $('#add-destination');

  // If the form is populated with both start and end destinations,
  // store the values in the places array
  if ( start.val() !== '' && end.val() !== '') {

    // the starting point
    app.destinations[0] = start.val();
    // the ending point
    app.destinations[1] = end.val();

    // Reset the values in the form
    start.val('');
    end.val('');

    // Hide the initial destination inputs
    $('#initial-destinations').hide();
    // Show the add destinations inputs and ul
    $('#add-destinations').show();
    
    // Add the destinations to the ul element holding the destinations
    appendDestinations( app.destinations[0] );
    appendDestinations( app.destinations[1] );

    /*********************************
    Start the process of creating the route object
    and everything that goes with it.
    **********************************/
    //calcRoute(places);     // draws the initial route between the start and end destinations

  
  } 
  // If either or both the start and end destinations are not populated,
  // check if a destination was added.
  else if ($("#add-destination").val() !== '') {
    // Get the value for the new destination to be added
    var newDestination = addDest.val();

    // push the new destination to the destinations array
    app.destinations.push( newDestination );

    // Reset the add destination input
    addDest.val('');

    // Add this to the destinations ul
    appendDestinations( newDestination );

    /************************
    Update the route, clear route if necessary
    Maybe add 'Start Over' button?
    *************************/
  }
  // Else, let the user know that their input was invalid
  else {
      // Ideally, we'd just make a message show up in the page
      // rather and an alert message
      alert("Please enter both destinations!");
  };
});

// Appends the list of destinations with the new destination
/************************
Add a click handler to remove the li
************************/
function appendDestinations( destination ) {
  $("#party-list").append("<li>" + destination + "</li>");
};

/*********************************
We should make both go actions to be handled as by the
same click handler.
**********************************/
/*
$(document).on("click", "#go2", function(e) {
  if (places.length > 10) {
    alert("Exceeded maximum number of places: 10");
  } else if ($("#add-destination").val() !== '') {
    var place = $("#add-destination").val();
    places[index] = place;
    index++;

    $("ul").append("<li>" + place + "</li>");
    $("#add-destination").val('');

   */ /*******************************
    Whenever we create a route, we should delete what's already there
    ********************************/ /*
    directionsDisplay.set('directions', null);
    calcRoute(places);

  } else {
    alert("Please enter a destination!");
  };
});
*/

/**********************************
This should be revised to not grab all list elements, but 
on the ones that we want
***********************************/
/*
$(document).on("click", "li", function(e) {
  var place = $(this).text();

  console.log(place);           // debugger [Can remove from final version]

  _.pull(places, place);

  console.log(places);          // debugger [Can remove from final version]

  $(this).remove();
  directionsDisplay.set('directions', null);
  calcRoute(places);
  e.preventDefault();
});
*/

/*********************************
Need a button to step through the route
**********************************/









