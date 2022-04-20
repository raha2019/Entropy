function setup() {
  createCanvas(3840, 2160);
  frameRate(2);
}

function draw() {
  background(220);
  var circles = 48000;
  for (var i = 0; i < circles; i++) {
    var circleX = random(width);
    var circleY = random(height);
    var circleSize = random(10, 100);
    noStroke();
    fill(random(250), random(250), random(250));  
    ellipse(circleX, circleY, circleSize);
  }
  noLoop();
  saveCanvas('circles', 'png');
}
