console.log('JS is on!')

//===//
// FUNCTIONS WE WILL USE TO MANIPULATE DOM OBJETS //
//===//

var toggleVanish = function (object) {
  if (object.style.display !== "none") {
    object.style.display = "none"
  } else
    object.style.display = ""
};

//===//
// CAPTURING THE DOM ELEMENTS WE WANT TO WORK WITH //
//===//

var user = document.querySelector(".user");

var poiOne = document.querySelector(".poi-one");

var poiTwo = document.querySelector(".poi-two");

var poiThree = document.querySelector(".poi-three");

var routeOne = document.querySelector(".route-one");

var poiOneInfo = document.querySelector(".poi-one-info");

var goButton = document.querySelector(".go-button");

var directions = document.querySelector(".directions");

var disruption = document.querySelector(".disruption");

var disruptionInfo = document.querySelector(".disruption-info")

var phoneScreen = document.querySelector(".phone-screen");

var allObjects = phoneScreen.childNodes;


//==
// THIS IS FOR THE MOCKUP
//==
var userPoint = document.querySelector(".user-point");
var somePoint = document.querySelector(".some-point");





//===//
// ADDING EVENT LISTENERS TO DOM OBJECTS //
//===//

// click on point of interest one
poiOne.addEventListener("click", function() {
  toggleVanish(routeOne);
  toggleVanish(poiOneInfo);
  toggleVanish(goButton);
  goButton.style.display = routeOne.style.display;
  if (directions.style.display === "") {
    directions.style.display = "none"
  }
});
//click on go button from point of interest one
goButton.addEventListener("click", function() {
  toggleVanish(goButton);
  toggleVanish(directions)
});
// click on disruption
disruption.addEventListener("click", function() {
  toggleVanish(disruptionInfo)
})





