let seed = Math.random() * 1000000;

let colorPalettes = takawoColorPalettes;
let colorPalette;

let targetx = null,
  targety = null;
let tinypeople = [];

function setup() {
  createCanvas(windowWidth, windowHeight);

  colorPalette =
    colorPalettes[Math.floor(Math.random() * colorPalettes.length)];

  for (let i = 0; i < 20; i++) {
    let x = random(width);
    let y = random(height);
    let scl = random(0.5, 1.5);

    let tinyPerson = new TinyPerson(x, y, scl);
    tinypeople.push(tinyPerson);
  }
}

function draw() {
  background(colorPalette[0]);
  randomSeed(seed);

  for (let i = 0; i < tinypeople.length; i++) {
    let tinyPerson = tinypeople[i];

    tinyPerson.draw();
  }
}

function mouseClicked() {
  targetx = mouseX;
  targety = mouseY;

  for (let i = 0; i < tinypeople.length; i++) {
    let tp = tinypeople[i];

    let nx = (noise(tp.x * 0.01, tp.y * 0.01) * 2 - 1) * 100;
    let ny = (noise(tp.y * 0.01, tp.x * 0.01) * 2 - 1) * 100;

    // targetx += nx;
    // targety += ny;

    tp.walkTo(random(nx + width), random(ny + height));
  }
}

function mousePressed() {
  targetx = mouseX;
  targety = mouseY;
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  background(random(colorPalette));
}
