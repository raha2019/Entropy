var angle = 0;
var x, y, a, b;

function setup() {
  createCanvas(800, 800);
  background(0);
  strokeWeight(20);
  x = 0;
  y = 0;
  a = 30;
  b = 1;
  angleMode(DEGREES);
}

function draw() {
  // draw a sine wave
  stroke(random(255), random(255), random(255));
  var dy = random(30)*sin(angle);
  // for (let i = 0; i < 900; i+100) {
  //   point(x,i-dy);
  // }
  point(x,0-dy);
  // point(x,50-dy);
  point(x,100-dy);
  // point(x,150-dy);
  point(x,200-dy);
  // point(x,250-dy);
  point(x,300-dy);
  // point(x,350-dy);
  point(x,400-dy);
  // point(x,450-dy);
  point(x,500-dy);
  // point(x,550-dy);
  point(x,600-dy);
  // point(x,650-dy);
  point(x,700-dy);
  // point(x,750-dy);
  point(x,800-dy);

  stroke(random(255), random(255), random(255));
  var dx = random(30)*cos(angle);
  point(0-dx,y);
  point(100-dx,y);
  point(200-dx,y);
  point(300-dx,y);
  point(400-dx,y);
  point(500-dx,y);
  point(600-dx,y);
  point(700-dx,y);
  point(800-dx,y);

  
  // draw a cosine wave
  
  // increment for next points
  angle++;
  x++;
  y++;
}