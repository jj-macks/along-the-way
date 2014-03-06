var input3;

function validateInput (input) {
  if (input !== "" && (/^[a-zA-Z\d(,. )]+$/.test(input)) === true) {
    return true;
  }
}

function autoCompletion (id) {
  input3 = document.getElementById(id);
  new google.maps.places.Autocomplete(input3);
}
