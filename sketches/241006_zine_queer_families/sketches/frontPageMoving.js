let text1 = "queeringfamilies".repeat(20).split("").join(" ");

// PARAMETERS
let subdivision = 4;
let distortion;

let subdivisionCols = Math.pow(2, subdivision);
let subdivisionRows = Math.pow(2, subdivision);
let distortWidth, distortHeight;

var pdf; // create a variable for a pdf object

let scaleRes = 0.4 

let textCanvas

function setup() {
  createCanvas(1748*scaleRes, 2480*scaleRes, WEBGL);
  noStroke();



  // DISPLAYING TEXT
  // textAlign()

  textCanvas = createGraphics(width * 2, height * 2);
  // textCanvas.textSize(92*2)
  textCanvas.background(0, 50)
  spaceOut(text1, textCanvas, false, 72, 86);

  // push()
  // translate(width/2, height/2)
  // scale(0.6)
  // imageMode(CENTER)
  // image(textCanvas, 0, 0)
  // pop()


 
}

function draw() {
  // background(random(palette));
  // background('transparent');
  // background(255, 20)


  distortion = random(250, 350);
  distortWidth = width * 0.8;
  distortHeight = height * 0.8;

  let t = millis()*0.0004
  let dverts1 = getDistortedVertices(t);

  push()
  // scale(1.2)
  // scale(noise(t*2)*2)
  // wrapTexture(textCanvas, dverts1, this);
  // background(255)
  // scale(0.8)
  wrapTexture(textCanvas, dverts1, this);

  pop()
}
