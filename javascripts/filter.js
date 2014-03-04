var typesFilter = "types: ";
var types = $("input[name=types]");
for (var i = 0; i < types.length; i++) {
  if (types[i].checked) {
    if(typesFilter === "types: ") {
      typesFilter += types[i].value;
    }
    else{
      typesFilter += (", " + types[i].value);
    }
  }
}
console.log(typesFilter);

var masterFilter = "";
if(typesFilter !== "types: ") {
  masterFilter += typesFilter;
}

if($("input[id=keywords]").val() !== "") {
  masterFilter += ("keywords: " + $("input[id=keywords]").val());
}

console.log(masterFilter);
