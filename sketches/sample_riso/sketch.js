let blue, red;
let img;

function preload() {
  img = loadImage("image.jpg");
}

function setup() {
  createCanvas(img.width / 2, img.height / 2);

  blue = new Riso("yellow");
  red = new Riso("magenta");
  pixelDensity(1);
  noLoop();
}

function draw() {
  background("whitesmoke");

  clearRiso();

  let reds = extractCMYKChannel(img, "magenta");
  let blues = extractCMYKChannel(img, "yellow");

  blue.imageMode(CENTER);
  red.imageMode(CENTER);

  blue.image(blues, width / 2, height / 2, img.width / 2, img.height / 2);
  red.image(reds, width / 2, height / 2, img.width / 2, img.height / 2);

  drawRiso();
}
