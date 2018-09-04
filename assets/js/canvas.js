var canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
// c is for context
var c = canvas.getContext('2d');
var mouse = {
  x: undefined,
  y: undefined
}
var maxRadius = 50;

window.addEventListener('mousemove', function(event) {
  mouse.x = event.x;
  mouse.y = event.y;
});

window.addEventListener("resize", function(){
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  //call init to generate a circles array anytime we resize the page
  init();
});

// Animation

//Create a circle object so that we can create multiple circles without repeating code
//Object Oriented JavaScript
function Circle(x, y, dx, dy, radius, color) {
  this.x = x;
  this.y = y;
  this.dx = dx;
  this.dy = dy;
  this.radius = radius;
  this.minRadius = radius;

  //draw the circle
  this.draw = function() {
    c.beginPath();
    c.arc( this.x , this.y, this.radius, 0, Math.PI * 2, false);
    c.strokeStyle = color;
    c.fillStyle = color;
    c.fill();
    c.stroke();
  }

  //Where our circle object will travel on the screen
  this.update = function() {
    //once our circle reaches the end of the x-axis, we want it to go in the opposite direction
    /*The circle goes by its center, we need to add the radius so that the edge of the circle
    hits the screen & bounces back rather than the center of the circle*/
    if (this.x + this.radius > innerWidth || this.x - this.radius < 0) {
      this.dx = -this.dx;
    }

    //y axis bounce back
    if (this.y + this.radius > innerHeight || this.y - this.radius < 0) {
      this.dy = -this.dy;
    }

    //velocity
    this.x += this.dx;
    this.y += this.dy;

    // Interactivity
    /* We need the distance between the mouse positioning and circles positioning
    If our mouse is within 50 pixels of our circle, we want the circle to grow.
    To do this we must compare the mouse x & y coordinates with the Circles x &
    y coordinates.  Follow up with the else if statement to ensure the circles that
    are not near the mouse return to their smaller size.
    */
    if (mouse.x - this.x < 50 && mouse.x - this.x > -50 && mouse.y - this.y < 50
    && mouse.y - this.y > -50) {
      if (this.radius < maxRadius) {
          this.radius += 1;
      }
    } else if (this.radius > this.minRadius){
      this.radius -= 1;
    }

    //call draw function to draw the circle
    this.draw();

  }
}

//random color generator
function random_color(){
    var color = "";
    switch(Math.floor(Math.random() * 2)){
      case 0:
        color = "#FF5565";
        return color;
        break;
      case 1:
        color = "#55d6be";
        return color;
        break;
    }
  }

//Animate Circles
function animate(){
  requestAnimationFrame(animate);
  //clear canvas//
  c.clearRect(0, 0, innerWidth, innerHeight);
  //motion blur
  /*c.fillStyle = 'rgba(255, 255, 255, 0.4)';
  c.fillRect(0, 0, innerWidth, innerHeight);*/
  //Draw the Circles
  for(var i=0; i<circleArray.length; i++){
    circleArray[i].update();
  }
}

//Create circle objects and place them within a single array
var circleArray = [];

function init() {
  //generate a circles array
  /*reset the circleArray to empty so we don't continue stacking Circles onto the
  array anytime we resize our window*/
  circleArray = [];

  function coordinates(){
      console.log('coordinates called');
      var radius = Math.random() * 3 + 1;
      var x = Math.random() * (innerWidth - radius * 2) + radius;
      var y = Math.random() * (innerHeight - radius * 2) + radius;
      //dx velocity the speed at which it moves in pixels along the x-axis
      //dy velocity the speed at which it moves in pixels along the y-axis
      var dx = (Math.random() - 0.5) * 2;
      var dy = (Math.random() - 0.5) * 2;
      var color = random_color();

      //Create new circle object
      circleArray.push(new Circle(x, y, dx, dy, radius, color));
  }

  if(window.innerWidth < 450){
    console.log("inner width is less than 450");
    for (var i = 0; i < 200; i++){
      coordinates();
    }
  }
  else if(window.innerWidth > 450){
    console.log("inner width is greater than 400");
    for (var i = 0; i < 800; i++){
      coordinates();
    }
  }
}

init();
animate();
