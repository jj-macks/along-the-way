  //compiles checkbox values into one string
function getTypes() {
  var typesParameters = [];
  var types = $("input[name=types]");
  for (var i = 0; i < types.length; i++) {
    if (types[i].checked) {
      var array = (types[i].value).split(",")
      typesParameters = typesParameters.concat(array);
    }
  }
  return typesParameters;
}

//turns search radius miles into kilometers and returns value
function getRadius() {
  var kilometers = $("#radius option:selected").val() * 1.60934;
  return kilometers;
}
