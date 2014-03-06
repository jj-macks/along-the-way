

function searchTenBoxes(boxes) {
  for (var i = startAtBox; i < startAtBox + 10; i++) {
    var bounds = boxes[i];
    var request = {bounds: bounds,
      keyword: $("input[id=keywords]").val(),
      minprice: $("#min-price option:selected").val(),
      maxprice: $("#max-price option:selected").val(),
      types: getTypes(),
      rankby: distance};
    $("#next-box-results").prop("disabled", true);
    console.log(startAtBox);
    placesService.nearbySearch(request, placesCallback);
  }
  startAtBox += 10;
  setTimeout(function(){
    //use this to turn off button until all boxes are loaded
    searchTenBoxes(boxes);
    //use this to have user click after delay for next 10 boxes
    //$("#next-box-results").prop("disabled", false);
  },6000);
}

