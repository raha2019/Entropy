
let img;
let cnv;

function preload() {
  img = loadImage('./AustinPrepAssets/icecream.png');
}

function setup() {
  // img.resize(800, 800);
  cnv = createCanvas(img.width, img.height);
  background(33,33,36);
  let newCanvasX = (windowWidth - img.width)/2;
  let newCanvasY = (windowHeight - img.height)/2;
  cnv.position(newCanvasX,newCanvasY);
  for(let col = 0; col < img.width; col +=40) { //20
    for(let row = 0; row < img.height; row+=40) { //20
      let c = img.get(col, row);
      fill(color(c));
      rect(col,row,35,35);
      noStroke();
    }
  }
  filter(ERODE);
  // saveCanvas('APBaseball', 'png');
}