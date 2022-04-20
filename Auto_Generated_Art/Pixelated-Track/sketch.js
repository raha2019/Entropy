/*

let img;

function preload() { img = loadImage('./AustinPrepAssets/APTrack.jpeg'); }

function setup() {
  createCanvas(img.width, img.height);
  noLoop();
}


function draw() { 
  drawMosaic(5);
  // saveCanvas('track', 'png');
}

const columnWidth = (dotRadius) => dotRadius * 3;

const numberOfColumns = (dotRadius) =>
  Math.ceil(width / columnWidth(dotRadius));

  function drawColumnDots(dotRadius, offsetX) {
    // [TODO] Replace the line with a column of dots
    // line(offsetX, 0, offsetX, height);
  
    let dotDiameter = 2 * dotRadius;
    let dotHeightWithPadding = dotDiameter + 0;
    let numDotsInColumn = Math.floor(height / dotHeightWithPadding);
  
    let topY = Math.floor(random(10));

    for (let i = 0; i < numDotsInColumn; i++) {
      let centerX = Math.floor(random(
        offsetX + dotRadius,
        offsetX + columnWidth(dotRadius) - dotRadius,
      ))
  
      let centerY = topY + i * dotHeightWithPadding + dotRadius;
  
      let dotColor = img.get(centerX, centerY);
      // noStroke()
      fill(dotColor);
    
      ellipse(centerX, centerY, dotDiameter, dotDiameter);
    }
  }

function drawMosaic(dotRadius) {
  for (let i = 0; i < numberOfColumns(dotRadius); i++) {
    offsetX = i * columnWidth(dotRadius);
    drawColumnDots(dotRadius, offsetX);
  }
} 
*/

let img;
let cnv;

function preload() {
  img = loadImage('./AustinPrepAssets/APTrack.jpeg');
}

function setup() {
  cnv = createCanvas(img.width, img.height);
  background(33,33,36);
  let newCanvasX = (windowWidth - img.width)/2;
  let newCanvasY = (windowHeight - img.height)/2;
  cnv.position(newCanvasX,newCanvasY);
  for(let col = 0; col < img.width; col +=45) {
    for(let row = 0; row < img.height; row+=45) {
      let c = img.get(col, row);
      fill(color(c));
      rect(col,row,40,40);
      noStroke();
    }
  }
  filter(ERODE);
  // saveCanvas('APTrack', 'png');
}