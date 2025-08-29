let canvas;
let img1, img2, img;
let images = [];
let index = 0;

let canvasForInference, segmentationCanvas, tempCanvas;

let model;
let objects = [];

function preload() {
  img1 = loadImage("assets/selfie.jpeg");
  img2 = loadImage("assets/image1.jpeg");
}

function setup() {
  window.boxes = [];
  createCanvas(900 / 2, 1600 / 2);
  pixelDensity(1);

  canvasForInference = createGraphics(
    width,
    height,
    document.getElementById("canvas-for-inference")
  );
  segmentationCanvas = createGraphics(
    width,
    height,
    document.getElementById("segmentation-canvas")
  );
  tempCanvas = createGraphics(160, 160, document.getElementById("temp-canvas"));
  // console.log(canvasForInference);

  background("black");
  textSize(24);

  images.push(img1);
  images.push(img2);
  img = images[0];

  // segmentationCanvas.image(
  //   img,
  //   0,
  //   0,
  //   segmentationCanvas.width,
  //   segmentationCanvas.height
  // );
}

function draw() {
  if (frameCount % 10 == 0) {
    img = images[index % images.length];
    index++;
  }

  canvasForInference.image(
    img,
    0,
    0,
    canvasForInference.width,
    canvasForInference.height
  );

  // tint("red");
  // image(img, 0, 0, width, height);

  // for (let box of window.boxes) {
  //   let [x1, y1, x2, y2, label] = box;

  //   // stroke("green");
  //   // noFill();
  //   // rect(x1, y1, x2 - x1, y2 - y1);

  //   let detectedObject = canvasForInference.get(x1, y1, x2 - x1, y2 - y1);
  //   noTint();
  //   image(detectedObject, x1, y1, x2 - x1, y2 - y1);

  //   fill("blue");
  //   text(label, x1, y1);
  // }

  noTint();
  image(segmentationCanvas, 0, 0, width, height);
  // noTint();
}
