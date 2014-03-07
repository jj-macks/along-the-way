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

// Add click listener to the left side arrow to open and close
// the advanced search panel
$('#pull').click( function(e) {
   e.preventDefault();
   // Toggle the advanced search form
   $('#adv_search').fadeToggle();
   // Toggle the opening and closing of the search panel
   $('#search-panel').toggleClass('collapseSearch');
});

autoCompletion('add-destination');
autoCompletion('end-destination');
autoCompletion('start-destination');
