$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
    // toggleGrid();


    // TODO 2 - Create Platforms
    createPlatform(400, 650, 200, 20);
    createPlatform(700, 550, 200, 20);
    createPlatform(400, 450, 200, 20);
    createPlatform(700, 350, 200, 20);
    createPlatform(400, 250, 200, 20);

    // TODO 3 - Create Collectables
    createCollectable("diamond", 480, 550);
    createCollectable("diamond", 480, 350);
    createCollectable("diamond", 480, 150);
    createCollectable("diamond", 780, 450);
    createCollectable("diamond", 780, 250);


    // TODO 4 - Create Cannons 
    createCannon("left", 480, 1000);
    createCannon("right", 400, 1000);
    createCannon("top", 715, 1500);
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
