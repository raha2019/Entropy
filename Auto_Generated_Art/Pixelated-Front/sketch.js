let img;
let cnv;

function preload() {
  img = loadImage('./AustinPrepAssets/APFront.png');
}

function setup() {
  cnv = createCanvas(img.width, img.height);
  background(33,33,36);
  let newCanvasX = (windowWidth - img.width)/2;
  let newCanvasY = (windowHeight - img.height)/2;
  cnv.position(newCanvasX,newCanvasY);
  for(let col = 0; col < img.width; col +=15) {
    for(let row = 0; row < img.height; row+=15) {
      let c = img.get(col, row);
      fill(color(c));
      rect(col,row,12.5,12.5);
      noStroke();
    }
  }
  filter(ERODE);
  // saveCanvas('APFront', 'png');
}