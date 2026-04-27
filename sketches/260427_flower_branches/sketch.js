// https://happycoding.io/tutorials/p5js/creating-classes/bonsai-tree?ref=gorillasun.de

// all of these are required params, check before deleting
const nodeBorder = 10;
const minBranchLength = 50;
const maxBranchLength = 200;
const minSizeMultiplier = 0.5;

let nodeCount = 0;

let plants = [];
let grid;
let t;

function setup() {
  createCanvas(windowWidth, windowHeight);

  grid = new Grid(width, height, 100);

  let pn = 1;
  for (let i = 0; i < pn; i++) {
    let plantX = (width * i) / pn + width / pn / 2;
    let plantY = height;
    let plant = new GridNode(
      null,
      150,
      random(200, 255),
      radians(random(-100, -60)),
      plantX,
      plantY,
    );
    grid.addParticle(plant);
    plants.push(plant);
  }
}

function draw() {
  background("brown");

  t = millis() / 100;

  for (let plant of plants) {
    plant.draw((node) => {
      drawLeaf(node);
    });
    plant.maybeGrow(radians(60));
  }

  if (frameCount > 200) {
    noLoop();

    console.log(nodeCount);
    console.log(grid.particles.length);
  }
}

function drawLeaf(node) {
  for (const child of node.children) {
    // branches
    stroke("beige");
    strokeWeight(node.size / 3);
    // strokeWeight(12);
    strokeCap(SQUARE);
    line(node.x, node.y, child.x, child.y);

    let pos = createVector(node.x, node.y);
    let childPos = createVector(child.x, child.y);

    let petals = 3;
    // noStroke();
    strokeWeight(4);
    if (sin(t + nodeCount * 0.01 + node.x * 0.01) < 0) {
      fill("crimson");
      stroke("beige");
    } else {
      fill("beige");
      stroke("crimson");
    }
    for (let i = 0; i < petals; i++) {
      let t = map(i / petals, 0, 1, 0.5, 1) + 0.5;

      let mid = p5.Vector.lerp(pos, childPos, t);
      let dir = p5.Vector.sub(childPos, pos)
        .rotate(radians(90))
        .normalize()
        .mult(node.size / 5);
      let norm1 = p5.Vector.add(mid, dir);
      let norm2 = p5.Vector.sub(mid, dir);

      // circle(child.x, child.y, child.size / 2);
      circle(node.x, node.y, node.size / 2);
      circle(norm1.x, norm1.y, node.size / 2);
      circle(norm2.x, norm2.y, node.size / 2);
    }

    // noStroke();
    // fill("yellow");
    // circle(norm1.x, norm1.y, 10);
    // fill("green");
    // circle(norm2.x, norm2.y, 10);
    // circle(dir.x, dir.y, 10);

    // stroke("red");
    // strokeWeight(1);
    // line(node.x, node.y, norm1.x, norm1.y);
    // line(node.x, node.y, norm2.x, norm2.y);

    // leaf inside length shape
    // beginShape();
    // curveVertex(node.x, node.y);
    // curveVertex(node.x, node.y);
    // curveVertex(norm1.x, norm1.y);
    // curveVertex(child.x, child.y);
    // curveVertex(norm2.x, norm2.y);
    // curveVertex(node.x, node.y);
    // curveVertex(node.x, node.y);
    // endShape(CLOSE);
  }
}

function mousePressed() {
  for (let plant of plants) {
    const clickedNode = plant.getClickedNode(mouseX, mouseY);
    if (clickedNode) {
      clickedNode.prune();
    }
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
