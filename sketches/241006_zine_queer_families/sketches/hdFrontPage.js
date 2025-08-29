// NOTE: maybe a scale up is not needed for making a pdf 

// Exports a high-resolution image when 'e' key is pressed.
// On my M1 laptop, the largest possible export is 16384 × 16384.

let outputScale = 16;
let currentScale;
let myScaledCanvas;
let canvas;
let XDIM = 1748;
let YDIM = 2480;

//=================================================================
function setup() {
  // setup
  canvas = createCanvas(XDIM, YDIM, WEBGL);
  noStroke();
  pixelDensity(1);
  myScaledCanvas = createGraphics(XDIM, YDIM);
  myScaledCanvas.pixelDensity(1);
  currentScale = 1; // initialize to 1; don't touch
}

function draw() {
  // Don't touch the contents of the draw loop!
  // Instead, modify the guts of the drawMyDesign() function.
  myScaledCanvas.clear();
  myScaledCanvas.push();
  myScaledCanvas.scale(currentScale);
  drawMyDesign();
  myScaledCanvas.pop();
  translate(-width/2, -height/2)
  image(myScaledCanvas, 0, 0); // Show on the main canvas
  noLoop();
}

// Scale up graphics before exporting
function exportHighResolution() {
  currentScale = outputScale; // High-Res Export
  myScaledCanvas = createGraphics(currentScale * XDIM, currentScale * YDIM);
  draw();
  save(myScaledCanvas, "highResImage", "png");
  currentScale = 1; // Reset to default scale 1:1
  myScaledCanvas = createGraphics(XDIM, YDIM);
  draw();
}

function keyReleased() {
  if (key == "e") exportHighResolution();
}


// GLOBALS
let text1 = "queeringfamilies".repeat(20).split("").join(" ");
// PARAMETERS
let subdivision = 4;
let distortion;
let subdivisionCols = Math.pow(2, subdivision);
let subdivisionRows = Math.pow(2, subdivision);
let distortWidth, distortHeight;

//=================================================================
function drawMyDesign() {
  // Draw your design in this function -- into the scaled canvas.
  // Notice how all drawing functions begin with "myScaledCanvas."

  myScaledCanvas.background(random(palette));

  // DISPLAYING TEXT
  let textCanvas = createGraphics(width * 2, height * 2);
  spaceOut(text1, textCanvas);

  // push()
  // translate(width/2, height/2)
  // scale(0.6)
  // imageMode(CENTER)
  // image(textCanvas, 0, 0)
  // pop()

  distortion = random(250, 350);
  distortWidth = width * 0.8;
  distortHeight = height * 0.8;
  let dverts1 = getDistortedVertices();
  wrapTexture(textCanvas, dverts1, this);
}
