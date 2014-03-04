function makeTemplate() {
  var accordion_template = $('#accordion-template').html();
  var template = Handlebars.compile( accordion_template );
  var data = {
    places: tripResults[0]
  };
  $('#accordion').html( template( data ) );
}

// Add click listener to the right side arrow to open and close
// the advanced search panel
$('#push').click( function(e) {
  e.preventDefault();
  // Toggle displaying the results
  $('#results-view').fadeToggle();
  // Toggle opening and close the results window
  $('#results-window').toggleClass('expandResults');
  // Instantiate the accordion
  $( "#accordion" ).accordion();
});
