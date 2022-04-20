var squareArray = [];
const Y_AXIS = 1;
const X_AXIS = 2;

function setup() {
  createCanvas(3840, 2160);
  frameRate(2);
}

function draw() {
  background(220);
  var squares = 1800;
  for (var i = 0; i < squares; i++) {
    var squareX = random(width);
    var squareY = random(height);
    var squareSize = random(10, 100);
    noStroke();
    setGradient(squareX-squareSize, squareY-squareSize, squareX+squareSize, squareY+squareSize, color(random(255),random(255),random(255)), color(random(255),random(255),random(255)), Y_AXIS);
    square(squareX, squareY, squareSize);
  }
  noLoop();
  saveCanvas('myCanvas', 'png');
}

function setGradient(x, y, w, h, c1, c2, axis) {
  noFill();

  if (axis === Y_AXIS) {
    // Top to bottom gradient
    for (let i = y; i <= y + h; i++) {
      let inter = map(i, y, y + h, 0, 1);
      let c = lerpColor(c1, c2, inter);
      stroke(c);
      line(x, i, x + w, i);
    }
  } else if (axis === X_AXIS) {
    // Left to right gradient
    for (let i = x; i <= x + w; i++) {
      let inter = map(i, x, x + w, 0, 1);
      let c = lerpColor(c1, c2, inter);
      stroke(c);
      line(i, y, i, y + h);
    }
  }
}
