r = height * 0.45;

function setup() {
  createCanvas(3840, 2160);
  frameRate(2);
}

function draw() {
  background(225);
  var squares = 40;
  for (var i = 0; i < squares; i++) {
    let x = r * cos(i);
    let y = r * sin(i);
    ellipseMode(CENTER);
    noStroke();
    fill(200);
    ellipse(x, y, 32, 32);
  }
  noLoop();
}