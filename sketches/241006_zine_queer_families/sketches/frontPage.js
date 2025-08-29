let text1 = "queeringfamilies".repeat(20).split("").join(" ");

// PARAMETERS
let subdivision = 4;
let distortion;

let subdivisionCols = Math.pow(2, subdivision);
let subdivisionRows = Math.pow(2, subdivision);
let distortWidth, distortHeight;

var pdf; // create a variable for a pdf object

function setup() {
  createCanvas(1748, 2480, WEBGL);
  noStroke();

  pixelDensity(2);

  pdf = createPDF(); // initialize the PDF creation
  pdf.beginRecord();

  // background(random(palette));
  background("white");

  // DISPLAYING TEXT
  // textAlign()

  let textCanvas = createGraphics(width * 2, height * 2);
  // textCanvas.textSize(92*2)
  // textCanvas.noBackground()
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

function keyPressed() {
  if (key === "r") {
    console.log("saving as pdf");

    let timestamp = millis().toString();

    pdf.save({
      filename: `qzine-${timestamp}`, //change filename to whatever makes sense
    });
  }
}
