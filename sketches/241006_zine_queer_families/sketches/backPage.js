let text1 = "queeringfamilies".repeat(60).split("").join(" ");
let text2 = "The hope is that by assembling these texts – most of which aren’t otherwise available online – and placing them next to each other, they might interact in useful ways. And ultimately, the point is to understand the conditions in which we live and “put a weapon in the hands of workers.”"
let text3 = " - caringlabor.wordpress.com"
let text4 = "a queer zine series by opheliagame"

// PARAMETERS
let subdivision = 4;
let distortion;

let subdivisionCols = Math.pow(2, subdivision);
let subdivisionRows = Math.pow(2, subdivision);
let distortWidth, distortHeight;

// var pdf; // create a variable for a pdf object

function setup() {
  createCanvas(1748, 2480, WEBGL);
  noStroke();

  pixelDensity(2);

  // pdf = createPDF(); // initialize the PDF creation
  // pdf.beginRecord();

  background(random(palette));

  // DISPLAYING TEXT
  // textAlign()

  let textCanvas = createGraphics(width * 3, height * 3);
  let font1 = random(fonts)
  console.log("font ", font1)
  textCanvas.textFont(font1)
  // textCanvas.textSize(92*2)
  // textCanvas.noBackground()
  spaceOut(text1, textCanvas);

  // push()
  // translate(width/2, height/2)
  // scale(0.6)
  // imageMode(CENTER)
  // image(textCanvas, 0, 0)
  // pop()

  let textCanvas1 = createGraphics(width, height, WEBGL)
  textCanvas1.noStroke()
  distortion = random(250, 350);
  distortWidth = textCanvas1.width;
  distortHeight = textCanvas1.height;
  let dverts1 = getDistortedVertices();
  wrapTexture(textCanvas, dverts1, textCanvas1);

  push()
  // translate(-width/2, -height/2)
  scale(1.2, 1.2)
  imageMode(CENTER)
  image(textCanvas1, 0, 0, width, height)
  pop()


  // DISPLAYING TEXT ON TOP
  let textCanvas2 = createGraphics(width * 3, height * 3);
  let font2 = random(fonts)
  console.log("font ", font2)
  textCanvas2.textFont(font2)
  // textCanvas.textSize(92*2)
  // textCanvas.noBackground()
  spaceOut(text2, textCanvas2, true);

  let textCanvas3 = createGraphics(width, height, WEBGL)
  textCanvas3.noStroke()
  distortion = random(250, 350);
  distortWidth = textCanvas3.width;
  distortHeight = textCanvas3.height;
  let dverts2 = getDistortedVertices();
  wrapTexture(textCanvas2, dverts2, textCanvas3);

  push()
  let rx = random(100, width/2)
  let ry = random(100, height/2)
  translate(-width/2, -height/2)
  translate(rx, ry)
  // imageMode(CENTER)
  image(textCanvas3, 0, 0, width-rx, height-ry)
  pop()


  

  let textCanvas4 = createGraphics(width/2, 100);
  let font4 = random(fonts)
  console.log("font ", font4)
  textCanvas4.textFont(font4)
  // textCanvas.textSize(32)
  // textCanvas.noBackground()
  spaceOut(text4, textCanvas4, true, 32, 40);
  push()
  // translate(-width/2, -height/2 + 100)
  translate(0, height/2 - 100)
  imageMode(CENTER)
  image(textCanvas4, 0, 0, textCanvas4.width, textCanvas4.height)
  pop()

}

// function keyPressed() {
//   if (key === "r") {
//     console.log("saving as pdf");

//     let timestamp = millis().toString();

//     pdf.save({
//       filename: `qzine-${timestamp}`, //change filename to whatever makes sense
//     });
//   }
// }
