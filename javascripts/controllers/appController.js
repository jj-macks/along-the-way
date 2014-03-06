var app = app || {};

// Create controller object in app
app.appController = {

  init: function() {
    // Listener for click initiating search
    this.listenForGo();

    // Listener for client removing destination
    this.removeDestinationListener();
  },

  listenForGo: function() { 
    var self = this;
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
        self.appendDestinations( app.destinations[0] );
        self.appendDestinations( app.destinations[1] );

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
        self.appendDestinations( newDestination );

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
  },

  // Appends the list of destinations with the new destination
  appendDestinations: function ( destination ) {
    $("#party-list").append("<li>" + destination + "</li>");
  },

  // Listens for user click on destination in list, removes it, and
  // refreshes the map
  removeDestinationListener: function() {
    // Bind a click listener to each li element in '#party-list'
    $('#party-list').delegate( 'li', 'click', function( event ) {
      _.pull( app.destinations, this.innerHTML );
      console.log('Clicked ' + app.destinations );
      $(this).remove();
    });
  }
};








