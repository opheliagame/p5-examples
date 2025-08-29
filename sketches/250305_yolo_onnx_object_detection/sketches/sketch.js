let canvas;
let video;
let tex;
let canvasForInference;

let model;
let objects = [];

function preload() {
  tex = loadImage("../../assets/buildings.jpg");
}

function setup() {
  createCanvas(1080 / 3, 1920 / 3, WEBGL);
  pixelDensity(1);

  canvasForInference = createGraphics(
    width,
    height,
    P2D,
    document.getElementById("canvas-for-inference")
  );
  canvasForInference.pixelDensity(1);
  // console.log(canvasForInference);

  video = createVideo("../../assets/walking.mp4");
  video.hide();
  video.loop();

  background("black");
  textSize(24);
}

function draw() {
  canvasForInference.image(
    video,
    0,
    0,
    canvasForInference.width,
    canvasForInference.height
  );

  // tint("red");
  push();
  translate(-width / 2, -height / 2);

  tint(255, 20);
  image(video, 0, 0, width, height);

  // fill(0, 20);
  // rect(0, 0, width, height);

  pop();

  // for (let box of window.boxes) {
  //   let [x1, y1, x2, y2, label] = box;

  //   x1 = abs(x1);
  //   x2 = abs(x2);
  //   y1 = abs(y1);
  //   y2 = abs(y2);

  //   // stroke("green");
  //   // noFill();
  //   // rect(x1, y1, x2 - x1, y2 - y1);

  //   let detectedObject = canvasForInference.get(x1, y1, x2 - x1, y2 - y1);
  //   push();
  //   translate(-width / 2, -height / 2);
  //   image(detectedObject, x1, y1, x2 - x1, y2 - y1);
  //   pop();

  //   // fill("blue");
  //   // text(label, x1, y1);

  //   push();
  //   translate(-width / 2, -height / 2);
  //   // for every box, draw a box with left, top and right corners of the screen
  //   drawCornerBoxes(x1, y1, x2, y2);
  //   pop();
  // }

  // noTint();
}

function mousePressed() {
  video.loop();
}

function drawCornerBoxes(x1, y1, x2, y2) {
  noStroke();
  stroke("red");
  strokeWeight(3);
  textureMode(NORMAL);
  texture(tex);

  // left
  beginShape();
  vertex(0, height, 0, 0);
  vertex(0, 0, 1, 0);
  vertex(x1, y1, 1, 1);
  vertex(x1, y2, 0, 1);
  endShape(CLOSE);

  // top
  beginShape();
  vertex(0, 0, 0, 0);
  vertex(width, 0, 1, 0);
  vertex(x2, y1, 1, 1);
  vertex(x1, y1, 0, 1);
  endShape(CLOSE);

  // right
  beginShape();
  vertex(width, 0, 0, 0);
  vertex(width, height, 1, 0);
  vertex(x2, y2, 1, 1);
  vertex(x2, y1, 0, 1);
  endShape(CLOSE);
}
