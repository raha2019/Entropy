function setup() {
  createCanvas(3840, 2160);
  frameRate(2);
}

function draw() {
  background(220);
  var circles = 100;
  for (var i = 0; i < circles; i++) {
    noStroke();
    fill(random(250), random(250), random(250));
    // arc(50, 55, 50, 50, 0, HALF_PI);  
    arc(random(width), random(height), random(width), random(height), 0, HALF_PI);
  }
  noLoop();
  saveCanvas('arc', 'png');
}
