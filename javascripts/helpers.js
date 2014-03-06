var input3;

function validateInput (input) {
  return (/^[a-zA-Z\d(,. )]+$/.test(input));
}

function autoCompletion (id) {
  input3 = document.getElementById(id);
  new google.maps.places.Autocomplete(input3);
}
