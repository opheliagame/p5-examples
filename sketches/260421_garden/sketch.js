let things = [];
let numberOfThings;
let n = 10;
let seed = Math.random() * 1000;
let t;

function preload() {
  for (let i = 0; i < 4; i++) {
    let img = loadImage(`2-${i + 1}.png`);
    things.push(img);
  }

  numberOfThings = things.length;
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  blendMode(SCREEN);
}

function draw() {
  background("aqua");
  blendMode(SCREEN);

  t = millis() / 1000;
  randomSeed(seed);

  if (frameCount % 20 == 0) {
    n = (n + 1) % 1000;
  }

  let movex = 0;
  let movey = 60;

  for (let i = 0; i < n; i++) {
    let modn = sin(i + t / 100) * tan(i);
    let n1 = noise(modn * 20);

    let x = random(width) + noise(i, t) * movex;
    let y = random(height);
    let img = random(things);
    let sx = random(1, 2);
    let sy = 1 + n1;

    let s = 3;
    let w = 120 * s;
    let h = 100 * s;
    let sw = w * n1;
    let sh = h;

    push();
    translate(x, y);
    // scale(1, sy);
    if (i % 3 == 0) {
      blendMode(EXCLUSION);
    } else {
      blendMode(LIGHTEST);
    }
    imageMode(CENTER);
    image(img, 0, 0, sw, sh);

    pop();
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
