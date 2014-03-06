var Place = function Place(data) {
  this.data = data;

}

Place.prototype = {
  printData: function printData() {
    console.log(this.data.location);
  }
}
var data = { location: "Seattle" };
var place = new Place(data);

place.printData();
