let pg;

function setup() {
  createCanvas(710, 400, WEBGL);
  // pg = createImage(710, 400);
}

function draw() {
  background(0);
  normalMaterial();
  // pg.normalMaterial();
  angleMode(DEGREES);
  // rotateY(75);
  // rotateX(115);
  // rotateZ(0);
  // torus(150, 5);
  // sphere(70);
  var planets = 100;
  for (var i = 0; i < planets; i++) {
    circleX = random(-width/2, width/2);
    circleY = random(-height/2, height/2);
    circleSize = random(5,20);
    translate(00,0,00);
    ellipse(circleX, circleY, circleSize);
  }
  // image(pg, -width/2, -height/2);
  rotateY(75);
  rotateX(115);
  rotateZ(0);
  torus(150, 5);
  sphere(70);

  noLoop();

}