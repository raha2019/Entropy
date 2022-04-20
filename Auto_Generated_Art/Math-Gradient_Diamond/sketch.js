let img;

function preload() {
  teapot = loadModel('Diamond.stl', true);
  img = loadImage('Earth.jpeg');
  img.resize(5,5);
}

function setup() {
  createCanvas(1750, 1750, WEBGL);
  background(0);
}

function draw() {
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  rotateZ(frameCount * 0.01);
  // normalMaterial(); // For effect
  scale(5);
  // stroke(1);
  texture(img);
  model(teapot);
  // noLoop();
}