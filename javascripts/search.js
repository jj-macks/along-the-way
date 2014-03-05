// An array that contains the list of places entered by the user
// places[0] contains the start destination
// places[1] contains the end destination
var places = [];
var index = 2;

// Stores start and end destinations entered by user
// Then removes the overlay containing the form
$("#go").click(function(e) {

    // If the form is populated with both start and end destinations,
    // store the values in the places array
    if ($("#start-destination").val() !== '' &&
        $("#end-destination").val() !== '') {
        places[0] = $("#start-destination").val();
        places[1] = $("#end-destination").val();

        console.log(places);    // debugger [Can remove from final version]

        $("#destinations").html(
"<label>Destinations</label><input id='add-destination' type='text'           placeholder='Add more here'></input><input id='go2' type='button' value='Go!'/><label id='party-list'>Party list:</label><ul></ul>");
        $("ul").append("<li>" + places[0] + "</li>");
        $("ul").append("<li>" + places[1] + "</li>");

        //$("#initial-destinations-overlay").remove();    // removes the overlay containing the form
        calcRoute(places);                  // draws the initial route between the start and end destinations
        //locationMarker.setMap(null);                    // removes the giant pin marker
        //draw_initialRoute(places[0], places[1]);        // draws the initial route between the start and end destinations

        console.log(places);    // debugger [Can remove from final version]

        e.preventDefault();

    // if either or both the start and end destinations are not populated,
    // a prompt will alert the user to enter the needed information
    } else {
        alert("Please enter both destinations!");
        e.preventDefault();
    };
});

$(document).on("click", "#go2", function(e) {
  if (places.length > 10) {
    alert("Exceeded maximum number of places: 10");
  } else if ($("#add-destination").val() !== '') {
    var place = $("#add-destination").val();
    places[index] = place;
    index++;
    $("ul").append("<li>" + place + "</li>");
    $("#add-destination").val('');
    directionsDisplay.set('directions', null);
    calcRoute(places);

    console.log(places);

    e.preventDefault();
  } else {
    alert("Please enter a destination!");
    e.preventDefault();
  };
});

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


// Searches set of 10 "route boxes" on click
$("#next-box-results").click(function(e) {

  e.preventDefault();

  searchTenBoxes(boxes);
});

// Add click listener to the left side arrow to open and close
// the advanced search panel
$('#pull').click( function(e) {
   e.preventDefault();
   // Toggle the advanced search form
   $('#adv_search').fadeToggle();
   // Toggle the opening and closing of the search panel
   $('#search-panel').toggleClass('expandSearch');
});

// Add click listener to left side for filter accordion
$('#filter-accordion label').click(function(e) {
  if($('#filter-accordion').is(':visible')) {
    console.log($('#filter-accordion').is(':visible'));
    document.getElementById('filter-label').innerHTML = 'Filtering &#8593;';
    $(e.target).next('div').slideToggle('fast');
  } else if ($('#filter-accordion').is(':hidden')) {
    document.getElementById('filter-label').innerHTML = 'Filtering &#8595;';
    $(e.target).next('div').slideToggle('fast');
  }
});

// Displays on inital expansion a collapsed filter accordian
$('#filter-accordion label').next('div').slideUp();




