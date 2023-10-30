// index.js - purpose and description here
// Author: Maya Anderson
// Created: 29 October

//Define Variables
myTransport = ["Mazda Mazda3", "bus", "legs", "ebike"];

//create an object for my main ride
var myMainRide = {
  make: "Mazda",
  model: "Mazda 3",
  color: "white",
  year: 2016,
  //we can define a function within our object (called a method)
  //that uses the value of year above using this.year)
  age: function() {
      return 2023 - this.year;
  }
}

//output
document.writeln("Kinds of transporation I use: ", myTransport, "</br>");
//this little trick allows us to write an object to the document
document.writeln("My Main Ride: <pre>",
      JSON.stringify(myMainRide, null, '\t'), "</pre>");