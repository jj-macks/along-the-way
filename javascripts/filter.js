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
