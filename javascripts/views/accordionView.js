// Create accordion template
function makeTemplate() {
  var accordion_template = $('#accordion-template').html();
  var template = Handlebars.compile( accordion_template );
  var data = {
    places: results
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

var results = [
        {
         "geometry" : {
            "location" : {
               "lat" : -33.87054,
               "lng" : 151.198815
            }
         },
         "icon" : "http://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png",
         "id" : "c71365287e7606bd21a3311d21fda087830b7813",
         "name" : "Pancakes on the Rocks",
         "opening_hours" : {
            "open_now" : true
         },
         "photos" : [
            {
               "height" : 1224,
               "html_attributions" : [ "From a Google User" ],
               "raw_reference" : {
                  "fife_url" : "https://lh4.googleusercontent.com/-75WfBLZ72qE/UTmX7RuJiNI/AAAAAAAAAUs/WPTeNp7bJvU/s0/2013-03-07"
               },
               "width" : 1632
            }
         ],
         "price_level" : 2,
         "rating" : 3.7,
         "reference" : "CoQBdgAAAPx2hdQySoYhqisjoL8fo3HCJryGj36tmlxWLrvSujyZg_VAqWAfgJpTH_yYcSQHvv4xRGrcRbQ8zw3mC3C5nSkaLltUwdXrQbttPaAzjxf1uSNF6ZfWE4ig_2FGMnlL7h5rWjV3lcpXjPzxYGfQvwHnHksvSgEmEOqByL5uC5g0EhDlPg1oUCe8a_QhZ88Sx2arGhTf8FPULrkopNl2oDMJfvcHEpXcTg",
         "types" : [ "bakery", "store", "meal_takeaway", "food", "establishment" ],
         "vicinity" : "Harbourside Shopping Centre,Darling Harbour,227/229-230 Darling Dr, Sydney"
      },
      {
         "geometry" : {
            "location" : {
               "lat" : -33.867217,
               "lng" : 151.192465
            }
         },
         "icon" : "http://maps.gstatic.com/mapfiles/place_api/icons/generic_business-71.png",
         "id" : "989df9aadca97a738b18e81d11d05603015cafc9",
         "name" : "John St Square Supermarket",
         "reference" : "CoQBewAAAATCZI7SvN6NuyOh5sBCnDMdgloh2oR_xkYteIUMSgnJmiosBUCeoHbuu9km3O0tSun3YTRN08OF7K4VCAmdHfN9weyGFnlqxSdlaWV6BHIYzFtjfzejNZAM6rsSwdsJxYzYLE_ru9Gq0XTTT8yr9rOCPrCjudffqwZ05RVvlNepEhCq-nLMQ-qff8SIE53zQj8oGhTm2enAZan7xVTRoTwXeGoMDLGJcQ",
         "types" : [ "food", "store", "establishment" ],
         "vicinity" : "45 Harris St, Pyrmont"
      },
      {
         "geometry" : {
            "location" : {
               "lat" : -33.870779,
               "lng" : 151.198959
            }
         },
         "icon" : "http://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png",
         "id" : "8bcbe06e54aee1530f383ff96c83f5d9bbaee54d",
         "name" : "Hurricane's Grill",
         "opening_hours" : {
            "open_now" : false
         },
         "photos" : [
            {
               "height" : 612,
               "html_attributions" : [ "From a Google User" ],
               "raw_reference" : {
                  "fife_url" : "https://lh6.googleusercontent.com/-472944WGTLE/UTM5tIHuMuI/AAAAAAAAACI/Je0eZ5PaXto/s0/Hurricane%2527s%2BGrill%2B%2526%2BBar"
               },
               "width" : 816
            }
         ],
         "price_level" : 3,
         "rating" : 4.1,
         "reference" : "CoQBcwAAADKw7yU-K63qz8GBas3dEIiOFCE5OAmuWearPw4nvwHKDjK0sYU1M78P1qxoFxbiGcSoCrfdXNMgOdTUYDZafL7XgrpaFj9Cu-dyP4BXjGGVNOdtvqlg450zJUqppmg6AbNdlmUpqaPF5ZNftcVwnGN0FBd690pAcBldX30dI313EhD_0vKtBDNOGAG-lZ9y7I5ZGhR7sXgF6yYSTirKt-LQc2Yd16z8dw",
         "types" : [ "store", "restaurant", "food", "establishment" ],
         "vicinity" : "Harbourside Shopping Centre Shops 433-436, Level 2/Darling Dr, Darling Harbour"
      }];

