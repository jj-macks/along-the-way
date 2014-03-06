// Run methods to initialize app
(function initializeApp() {
  // Initialize and draw the map
  app.map.init();

  // Initialize the objects to handle directions
  app.directions.init();

  app.distance = 10;

  // An array that contains the list of places entered by the user.
  // The places should be in the order the user entered them.
  app.destinations = [];

  // Initialize the controller, which add listeners to run app
  app.appController.init();
})();

