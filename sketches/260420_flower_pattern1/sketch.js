let flower;

let t,
  seed = Math.random() * 10000;
let SIZE = 60;

let straightLinePoints = [];
let a, b, c, d;

let points = [];
let prevMouseX = 0,
  prevMouseY = 0;

function preload() {
  flower = loadImage("0420 flower bud 1.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background("black");

  // mods
  t = millis() / 1000;

  if (straightLinePoints.length == 0 && points.length == 0) {
    textSize(32);
    textFont("Arial");
    textStyle(BOLD);
    textAlign(CENTER, CENTER);
    fill("whitemouse");
    text("drag mouse to start drawing", width / 2, height / 2);
  }

  if (a != null && b != null) {
    stroke("whitesmoke");
    line(a, b, mouseX, mouseY);
  }

  for (let i = 0; i < straightLinePoints.length; i++) {
    let p = straightLinePoints[i];

    drawStraightLine(p[0], p[1], p[2], p[3], SIZE, (index) => {
      push();
      if (index % 2 == 0) {
        // rotate(-PI / 5);
        // scale(1, -1);
      } else {
        // rotate(PI / 5);
        // scale(1, 1);
      }

      let s = noise(index * 0.1, t) * SIZE + SIZE / 2;

      drawFlower(s, 0);

      pop();
    });
  }

  if (points.length != 0) {
    drawPoints(points);
  }
}

function drawStraightLine(a, b, c, d, w, drawFn) {
  let distance = dist(a, b, c, d);
  let steps = floor(distance / w);

  let off = (distance - steps * w) / distance;

  let offx = lerp(a, c, off);
  let offy = lerp(b, d, off);

  push();
  translate(0, 0);

  for (let i = 0; i < steps; i++) {
    let x = lerp(a, c, i / steps);
    let y = lerp(b, d, i / steps);

    push();
    translate(x, y);

    drawFn(i);

    pop();
  }

  pop();
}

function drawPoints(points, drawFn) {
  for (let i = 0; i < points.length; i++) {
    let p = points[i];
    let x = p.x ?? p[0];
    let y = p.y ?? p[1];
    push();
    translate(x, y);
    let s = noise(i, t) * SIZE + SIZE / 2;

    drawFlower(s, 0);
    pop();
  }
}

function drawFlower(s) {
  imageMode(CENTER);
  image(flower, 0, 0, s, s);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function mouseClicked() {
  resetState();
}

function resetState() {
  if (c == null && d == null && a != null && b != null) {
    c = mouseX;
    d = mouseY;

    straightLinePoints.push([a, b, c, d]);
    a = null;
    b = null;
    c = null;
    d = null;
  } else {
    a = mouseX;
    b = mouseY;

    c = null;
    d = null;
    // points = [];
  }
}

function mouseDragged() {
  fill("black");
  stroke("black");
  point(mouseX, mouseY, 2);

  let speed = 1;
  let dx = abs(mouseX - pmouseX);
  let dy = abs(mouseY - pmouseY);
  if (dx > speed && dy > speed) {
    points.push([mouseX, mouseY]);
  }
}
