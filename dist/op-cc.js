let takawoColorPalettes = [
  ["#f19b4e", "#7f6640", "#dc5845", "#637055", "#e4d6c8", "#929e79"],
  ["#e6bc8a", "#da4742", "#202125", "#909062", "#dba380", "#dcc6b9"],
  ["#151015", "#511a28", "#8e563a", "#fcfbfa", "#bf9969", "#718282"],
  ["#e3cfb7", "#dba260", "#887d41", "#938d47", "#c46148"],
  ["#73924d", "#eb9f48", "#b19564", "#aabcb2", "#f0e3d7", "#6b4b2b"],
  ["#cec6bf", "#363021", "#c3a369", "#be1a23"],
  ["#e3d2c7", "#c91b34", "#f9c784", "#d9a068"],
  ["#eadfde", "#f13641", "#445168", "#fccd50", "#d89150"],
  ["#f0ebe1", "#d8ccb3", "#cd2a41", "#8bc08f", "#f69fac", "#c4714c"],
  ["#e8e4d4", "#e3c585", "#344e18", "#d1c2c3", "#503d4b"],
  ["#f9f5ec", "#d8ae6a", "#d4824b", "#588c92", "#89bfb3", "#b55847"],
  ["#dad7c3", "#c7895a", "#343530", "#899c63", "#60827d", "#d6b58a"],
  ["#cb4c42", "#786b3d", "#7b5b44", "#f5f4ed", "#687266", "#ca8b84"],
  ["#e5e9e9", "#da2034", "#8db4bb", "#4f6a31", "#6ab26d", "#e4bc89"],
  ["#efb984", "#f6a56b", "#98473f", "#544354", "#db6349"],
  ["#3c3e46", "#ddded7", "#c07552", "#5b6984", "#809c73", "#c3ae98"],
  ["#e22a42", "#fcb518", "#7cb360", "#9d91cc"],
  ["#fdf8f1", "#914954", "#f59363", "#a8a78b", "#1e1f1f"],
  ["#f7f8f9", "#c1434f", "#a6dab9", "#3a4d79"],
  ["#585046", "#eadaaf", "#d06f55"],
  ["#362b27", "#f5f2ee", "#623132", "#dba258", "#baa463"],
  ["#92c093", "#b7a6d2"],
  ["#646d4d", "#fac71a", "#e94943", "#8accd8"],
  ["#f69356", "#fcc982", "#9caba3", "#f2f1e1", "#524d35"],
  ["#bf473a", "#ed3b31", "#f8ca1b", "#8c874b"],
  ["#fffbf4", "#313f5f", "#cd464c", "#fca8bd", "#fa718d"],
  ["#ff8978", "#fccc6f", "#4facc2", "#3292b7", "#7879ab"],
  ["#f7cfd6", "#fd8591", "#fadfe3", "#3a7147", "#2b2828"],
  ["#f6a769", "#3e654d", "#4561a6", "#404e99"],
  ["#ffffff", "#516940", "#e9566d"],
  ["#fda9b9", "#82ccd0", "#3cb1de"],
  ["#fb6953", "#a37a4a", "#4899c8", "#356a85"],
  ["#4d5948", "#a79955", "#ef382d"],
  ["#c4413b", "#f35a2e", "#7db481", "#39436b"],
  ["#ddd453", "#addfba", "#4da57f"],
  ["#ecdfac", "#436775", "#458d7f", "#795446"],
  ["#e9ecf3", "#4ba3bc", "#db482e", "#33aa92"],
  ["#f98c25", "#68afa6", "#a2576e", "#faf4e5"],
  ["#62aa75", "#5d5f60", "#2e6345", "#e7e3d8", "#6c4e3d"],
  ["#ebe7e0", "#68bdc1", "#f8be44", "#5c6a92", "#a9625e"],
  ["#e9f1f6", "#db353d", "#6a8e89", "#34504a", "#6a87cc"],
  ["#efc4ab", "#2e241c", "#ea7843", "#ab9948", "#f6e7de"],
  ["#d3dedc", "#5ab9d6", "#2988ac", "#f3612c", "#daab82"],
  ["#4d4638", "#f77843", "#fbc836", "#d8b85a", "#6c6e47", "#b0e3ee"],
  ["#fefbf9", "#db5b44", "#87b4af", "#39446f", "#f7db8b"],
  ["#d1d0c9", "#353724", "#42415e", "#bf3e30", "#c8b757"],
  ["#f5da30", "#338ab6", "#8a8740", "#73563f", "#332321", "#e0dfdf"],
  ["#f7f6e5", "#9ad6f5", "#678970", "#a14453"],
  ["#ec4c38", "#aa5f3c", "#385645", "#2d5b6c"],
  ["#e84343", "#c38d73", "#b68542", "#bbc273", "#4395c7", "#7186c0"],
  ["#9781c3", "#90cb74", "#fed855", "#eb2039"],
  ["#fabc65", "#8e7f54", "#6f9598", "#3e64b1", "#30463d", "#1d1d2e"],
  ["#ba3f4c", "#eb213b", "#e2d1a5", "#fccb7d", "#80cddd"],
  ["#e54644", "#faf9f8", "#1a1a17"],
  ["#337544", "#e8d8cd", "#f8e3e1", "#f5f6f7"],
  ["#f9fafc", "#fac0d9", "#95bc7c", "#4eb7e7"],
  ["#f0ebe2", "#48a076", "#856fb1", "#55604f"],
  ["#f1e5d5", "#8d73ad", "#fb939d"],
  ["#f5e5d4", "#ac98c4", "#f19f49", "#e63b26", "#7aaf4f"],
  ["#f6fbf7", "#8fceea", "#be5b41", "#5d75aa"],
  ["#f7b4b3", "#cdd2c5", "#95b0a0", "#f9836f", "#6898a0"],
  ["#e2d7b9", "#7f5a41", "#7a3d38", "#616a6a", "#a97950", "#1a1316"],
  ["#83834f", "#e0c786", "#30363d", "#db2f38", "#66989c", "#e9ded1"],
  ["#abb163", "#e9e1cb", "#9b7c4a", "#74a7a0", "#e46641", "#5a5925"],
  ["#7aa467", "#695643", "#9a7b55", "#d4393a", "#ddb19e", "#394b3a"],
  ["#f6532d", "#cec4a4", "#3d4532", "#5e9682", "#becbbc", "#f7ac66"],
  ["#dd8458", "#76b661", "#ddd66d", "#0f0b0c", "#4d493b", "#f3f4ee"],
  ["#81bb91", "#dfc6a2", "#8c603f", "#f7c884"],
  ["#81bb91", "#dfc6a2", "#8c603f", "#f7c884"],
];

let brightColorpalettes = [
  ["#ff6f61", "#6f4c3e", "#88b04b", "#f7cac9", "#92a8d1", "#955251"],
  ["#ffcc00", "#ff6699", "#c2c2f0", "#ffb3e6", "#ff7f50", "#ffa07a"],
  ["#00bfff", "#ff1493", "#ff6347", "#3cb371", "#ff69b4", "#ffd700"],
  ["#ff4500", "#32cd32", "#00bfff", "#9370db", "#ff6347", "#ff8c00"],
  ["#ff1493", "#00fa9a", "#40e0d0", "#1e90ff", "#ffa07a", "#ffd700"],
  ["#ff8c00", "#00bfff", "#d2691e", "#7b68ee", "#ff69b4", "#8b0000"],
  ["#ff7f50", "#00fa9a", "#4682b4", "#da70d6", "#ffa07a", "#ffcc00"],
  ["#ff4500", "#7fff00", "#6495ed", "#ff1493", "#ffd700", "#ffb6c1"],
  ["#f08080", "#98fb98", "#add8e6", "#ff69b4", "#ffa07a", "#ff6347"],
  ["#00fa9a", "#ff6347", "#1e90ff", "#ff1493", "#ffcc00", "#ff4500"],
];

let cohesiveColorPalettes = [
  ["#ff6f61", "#f7cac9", "#88b04b", "#92a8d1", "#ffcc00"],
  ["#ff7f50", "#ff4500", "#ffa07a", "#00bfff", "#ffd700"],
  ["#ff69b4", "#ff1493", "#c2c2f0", "#ff6347", "#00fa9a"],
  ["#32cd32", "#ffa07a", "#ff8c00", "#4682b4", "#ff6347"],
  ["#00fa9a", "#7b68ee", "#1e90ff", "#ffb3e6", "#ff4500"],
  ["#ffcc00", "#d2691e", "#ff1493", "#40e0d0", "#9370db"],
  ["#ff6347", "#8b0000", "#ff8c00", "#f08080", "#00bfff"],
  ["#6495ed", "#ff4500", "#00fa9a", "#ffcc00", "#ff69b4"],
  ["#da70d6", "#ff6347", "#ffa07a", "#add8e6", "#ff7f50"],
  ["#ff6f61", "#f0e68c", "#ffb6c1", "#32cd32", "#ff1493"],
];

// Wado Sanzo gpt
let wadoColorPalettes = [
  // Palette 1
  [
    "#2E4C6E", // Background (dark blue)
    "#F2A900", // Bright yellow
    "#B94D5C", // Soft red
    "#FF7F50", // Coral
    "#56C7D9", // Turquoise
    "#E3C7A0", // Light tan
  ],
  // Palette 2
  [
    "#1B2D4D", // Background (deep navy)
    "#F24E1E", // Vibrant orange
    "#8FBA39", // Lime green
    "#D9B80E", // Gold
    "#1D9A99", // Teal
    "#EAE0B2", // Cream
  ],
  // Palette 3
  [
    "#4C3B56", // Background (dark purple)
    "#D88F8F", // Light pink
    "#FFD700", // Bright gold
    "#A4D65E", // Fresh green
    "#FF6F61", // Salmon
    "#B3D8C9", // Soft aqua
  ],
  // Palette 4
  [
    "#3C3F41", // Background (charcoal gray)
    "#FFB500", // Bright amber
    "#D8363D", // Crimson
    "#5DBB7A", // Emerald green
    "#FFA07A", // Light salmon
    "#E2E8B2", // Pale olive
  ],
  // Palette 5
  [
    "#2A2E31", // Background (dark slate)
    "#F57F20", // Vibrant tangerine
    "#B63D66", // Bright raspberry
    "#4FC3F7", // Sky blue
    "#C6DBA9", // Soft sage
    "#FFDAB9", // Light peach
  ],
  // Palette 6
  [
    "#1D2125", // Background (jet black)
    "#FBBF24", // Sunflower yellow
    "#D61C4E", // Cherry red
    "#0ABAB5", // Caribbean blue
    "#FFD3B6", // Light apricot
    "#FFE9E6", // Pale blush
  ],
  // Palette 7
  [
    "#212F35", // Background (deep teal)
    "#F5A623", // Bright saffron
    "#D50032", // Bold red
    "#00695C", // Deep teal
    "#FF6B6B", // Light coral
    "#BFD3C1", // Light olive
  ],
];

window.takawoColorPalettes = takawoColorPalettes;
window.brightColorpalettes = brightColorpalettes;
window.cohesiveColorPalettes = cohesiveColorPalettes;
window.wadoColorPalettes = wadoColorPalettes;


// https://github.com/processing/p5.js/issues/3610
// https://editor.p5js.org/davepagurek/sketches/D_ehdpTjO
p5.Renderer2D.prototype._getTintedImageCanvas = function (img) {
  if (!img.canvas) {
    return img;
  }

  if (!img.tintCanvas) {
    // Once an image has been tinted, keep its tint canvas
    // around so we don't need to re-incur the cost of
    // creating a new one for each tint
    img.tintCanvas = document.createElement("canvas");
  }

  // Keep the size of the tint canvas up-to-date
  if (img.tintCanvas.width !== img.canvas.width) {
    img.tintCanvas.width = img.canvas.width;
  }
  if (img.tintCanvas.height !== img.canvas.height) {
    img.tintCanvas.height = img.canvas.height;
  }

  // Goal: multiply the r,g,b,a values of the source by
  // the r,g,b,a values of the tint color
  const ctx = img.tintCanvas.getContext("2d");

  ctx.save();
  ctx.clearRect(0, 0, img.canvas.width, img.canvas.height);

  if (this._tint[0] < 255 || this._tint[1] < 255 || this._tint[2] < 255) {
    // Color tint: we need to use the multiply blend mode to change the colors.
    // However, the canvas implementation of this destroys the alpha channel of
    // the image. To accommodate, we first get a version of the image with full
    // opacity everywhere, tint using multiply, and then use the destination-in
    // blend mode to restore the alpha channel again.

    // Start with the original image
    ctx.drawImage(img.canvas, 0, 0);

    // This blend mode makes everything opaque but forces the luma to match
    // the original image again
    ctx.globalCompositeOperation = "luminosity";
    ctx.drawImage(img.canvas, 0, 0);

    // This blend mode forces the hue and chroma to match the original image.
    // After this we should have the original again, but with full opacity.
    ctx.globalCompositeOperation = "color";
    ctx.drawImage(img.canvas, 0, 0);

    // Apply color tint
    ctx.globalCompositeOperation = "multiply";
    ctx.fillStyle = `rgb(${this._tint.slice(0, 3).join(", ")})`;
    ctx.fillRect(0, 0, img.canvas.width, img.canvas.height);

    // Replace the alpha channel with the original alpha * the alpha tint
    ctx.globalCompositeOperation = "destination-in";
    ctx.globalAlpha = this._tint[3] / 255;
    ctx.drawImage(img.canvas, 0, 0);
  } else {
    // If we only need to change the alpha, we can skip all the extra work!
    ctx.globalAlpha = this._tint[3] / 255;
    ctx.drawImage(img.canvas, 0, 0);
  }

  ctx.restore();
  return img.tintCanvas;
};


// spatial hashing
class Grid {
  constructor(canv_wid, canv_hei, s) {
    this.cellSize = s;

    this.numCols = Math.ceil(canv_wid / s);
    this.numRows = Math.ceil(canv_hei / s);

    this.cells = [];

    for (let x = 0; x < this.numCols; x++) {
      this.cells[x] = [];
      for (let y = 0; y < this.numRows; y++) {
        this.cells[x][y] = [];
      }
    }
  }

  addParticle(particle) {
    let col_idx = Math.floor(particle.pos.x / this.cellSize);
    let row_idx = Math.floor(particle.pos.y / this.cellSize);

    // TODO check
    if (this.cells[col_idx][row_idx]) {
      this.cells[col_idx][row_idx].push(particle);
      particle.gridCell = { col: col_idx, row: row_idx };
    }
  }

  removeParticle(particle) {
    let { col: col_idx, row: row_idx } = particle.gridCell;
    let cell = this.cells[col_idx][row_idx];
    let arr_idx = cell.indexOf(particle);
    cell.splice(arr_idx, 1);
  }

  getNeighbors(particle) {
    let top_left = [
      floor((particle.pos.x - particle.radius) / this.cellSize),
      floor((particle.pos.y - particle.radius) / this.cellSize),
    ];

    let bottom_right = [
      floor((particle.pos.x + particle.radius) / this.cellSize),
      floor((particle.pos.y + particle.radius) / this.cellSize),
    ];

    let neighbors = [];
    for (let i = top_left[0]; i <= bottom_right[0]; i++) {
      for (let j = top_left[1]; j <= bottom_right[1]; j++) {
        if (i < 0 || j < 0 || i >= this.numCols || j >= this.numRows) continue;
        let c = this.cells[i][j];
        for (let p of c) {
          // don't add the particle itself
          if (p != particle) neighbors.push(p);
        }
      }
    }

    // console.log(neighbors)
    return neighbors;
  }
}

class Node {
  constructor(parent, parentSize, parentG, angle, plantX, plantY) {
    this.parent = parent;
    this.parentSize = parentSize;
    this.size = random(parentSize * minSizeMultiplier, parentSize);
    this.angle = angle;
    this.branchLength = random(minBranchLength, maxBranchLength);
    this.children = [];

    this.x = parent ? this.getX(parent.x) : plantX;
    this.y = parent ? this.getY(parent.y) : plantY;
    this.pos = createVector(this.x, this.y);
    this.radius = this.size * 1.4;
    this.plantY = plantY;
    this.plantX = plantX;

    this.g = parentG + random(-25, 25);
    this.g = constrain(this.g, 128, 255);

    nodeCount += 1;
  }

  getX(parentX) {
    return (
      parentX +
      cos(this.angle) *
        (this.parentSize / 2 + this.branchLength + this.size / 2)
    );
  }

  getY(parentY) {
    return (
      parentY +
      sin(this.angle) *
        (this.parentSize / 2 + this.branchLength + this.size / 2)
    );
  }

  grow() {
    const childAngle = this.angle + random(-PI, PI);
    const child = new Node(
      this,
      this.size,
      this.g,
      childAngle,
      this.plantX,
      this.plantY
    );

    if (child.size < 10) {
      return false;
    }

    if (child.boundaryCheck() == false) {
      return false;
    }

    let neighbors = grid.getNeighbors(this);
    console.log(neighbors);
    for (let neighbor of neighbors) {
      if (neighbor.intersects(child.x, child.y, child.size)) {
        return false;
      }
    }

    // console.log("children")
    this.children.push(child);
    grid.addParticle(child);

    return true;
  }

  maybeGrow() {
    const grew = this.grow();

    if (!grew) {
      const randomChild = random(this.children);
      if (randomChild) {
        randomChild.maybeGrow();
      }
    }
  }

  boundaryCheck() {
    return !(this.x < 0 || this.x > width || this.y < 0 || this.y > height);
  }

  prune() {
    // can't prune the first node
    if (this == plant) {
      return;
    }
    const index = this.parent.children.indexOf(this);
    this.parent.children.splice(index, 1);
  }

  getClickedNode(clickedX, clickedY) {
    if (dist(this.x, this.y, clickedX, clickedY) < this.size / 2) {
      return this;
    }

    for (const child of this.children) {
      const clickedChildNode = child.getClickedNode(clickedX, clickedY);
      if (clickedChildNode) {
        return clickedChildNode;
      }
    }

    return null;
  }

  intersects(otherNodeX, otherNodeY, otherNodeSize) {
    if (
      dist(this.x, this.y, otherNodeX, otherNodeY) <
      this.size / 2 + otherNodeSize / 2 + nodeBorder
    ) {
      return true;
    }

    return false;
  }

  draw() {
    // branches
    stroke(139, 69, 19);
    strokeWeight(2);
    for (const child of this.children) {
      line(this.x, this.y, child.x, child.y);
      // fill('red')
      // ellipse(this.x, this.y, child.x-this.x, child.y-this.y)

      let pos = createVector(this.x, this.y);
      let childPos = createVector(child.x, child.y);
      let mid = p5.Vector.lerp(pos, childPos, 0.5);
      let dir = p5.Vector.sub(childPos, pos)
        .rotate(radians(90))
        .normalize()
        .mult(this.size / 5);
      let norm1 = p5.Vector.add(mid, dir);
      let norm2 = p5.Vector.sub(mid, dir);

      //       noStroke()
      //       fill('yellow')
      //       circle(norm1.x, norm1.y, 10)
      //       fill('green')
      //       circle(norm2.x, norm2.y, 10)
      //       circle(dir.x, dir.y, 10)

      //       stroke('red')
      // line(this.x, this.y, norm1.x, norm1.y)
      // line(this.x, this.y, norm2.x, norm2.y)

      fill(0, this.g, 0);
      // fill('#00A36C')
      // stroke(0, this.g * 0.9, 0);
      // strokeWeight(3);
      // // noStroke()
      // strokeWeight(1)
      // stroke('gold')
      // beginShape();
      // curveVertex(this.x, this.y);
      // curveVertex(this.x, this.y);
      // curveVertex(norm1.x, norm1.y);
      // curveVertex(child.x, child.y);
      // curveVertex(norm2.x, norm2.y);
      // // curveVertex(this.x, this.y);
      // // curveVertex(this.x, this.y);
      // endShape(CLOSE);
    }

    // circle
    fill(0, this.g, 0);
    stroke(0, this.g * 0.9, 0);
    strokeWeight(4);
    circle(this.x, this.y, this.size);
    // rectMode(CENTER)
    // rect(this.x, this.y, this.size/2, this.size)

    // children
    for (const child of this.children) {
      child.draw();
    }
  }
}

window.Grid = Grid;
window.GridNode = Node;


/* 
  y: a continuous value between 0 and 1
  s: a step size, typically between 0 and 1
  Returns a value that is the nearest multiple of s to y.
  This function is useful for creating discrete steps in animations or transitions.
*/
function step(y, s) {
  return Math.round(y / s) * s;
}

window.step = step;


function getRandomValues(n, vmin, vmax, sorted = false) {
  let values = [];
  for (let i = 0; i < n; i++) {
    values.push(random() * (vmax - vmin) + vmin);
  }

  return sorted ? sort(values) : values;
}

function getRandomPoints(
  n,
  xmin,
  xmax,
  ymin,
  ymax,
  xsorted = false,
  ysorted = false
) {
  let xvalues = getRandomValues(n, xmin, xmax, xsorted);
  let yvalues = getRandomValues(n, ymin, ymax, ysorted);

  let points = [];
  for (let i = 0; i < n; i++) {
    let x = xvalues[i];
    let y = yvalues[i];
    points.push([x, y]);
  }
  return points;
}

function getCirclePoints(radius, res) {
  let points = [];
  for (let i = 0; i < res; i++) {
    let angle = map(i, 0, res - 1, 0, TWO_PI);
    let x = cos(angle) * radius;
    let y = sin(angle) * radius;
    points.push([x, y]);
  }

  // add first point again  - this looks weird
  let angle = 0;
  let x = cos(angle) * radius;
  let y = sin(angle) * radius;
  points.push([x, y]);

  return points;
}

function getRectPoints(width, height, res) {
  let points = [];
  let radius = sqrt(pow(width, 2) + pow(height, 2));

  // return getCirclePoints(radius, 5)

  for (let i = 0; i < 5; i++) {
    let angle = map(i, 0, 4, 0, TWO_PI);
    let x = cos(angle + PI / 4) * radius;
    let y = sin(angle + PI / 4) * radius;

    // push()
    // translate(400, 400)
    // fill('green')
    // circle(x, y, 20)
    // pop()

    points.push([x, y]);
  }

  // add first point again
  let angle = PI / 4;
  let roff = 0;
  let x = cos(angle) * (radius + roff);
  let y = sin(angle) * (radius + roff);

  // push()
  // translate(400, 400)
  //   fill('green')
  //   circle(x, y, 20)
  //   pop()
  points.push([x, y]);
  return points;
}

function getTrianglePoints(radius, res) {
  return getCirclePoints(radius, 4);
}

window.getRandomValues = getRandomValues;
window.getRandomPoints = getRandomPoints;
window.getCirclePoints = getCirclePoints;
window.getRectPoints = getRectPoints;
window.getTrianglePoints = getTrianglePoints;


function smoothContinuous(points, options) {
  const opts = options || {};
  const segments = points;
  const length = points.length;

  // path will not be closed
  const closed = false;
  const lp = false;
  const from = 0;
  const to = length - 1;

  let amount = to - from + 1;
  let n = amount - 1;
  let padding = 1;
  let paddingLeft = padding;
  let paddingRight = padding;
  let knots = [];

  paddingLeft = Math.min(1, from);
  paddingRight = Math.min(1, length - to - 1);

  let controlPoints = [];

  n += paddingLeft + paddingRight;
  for (let i = 0, j = from - paddingLeft; i <= n; i++, j++) {
    knots[i] = segments[(j < 0 ? j + length : j) % length];
  }
  // console.log(knots)

  let x = knots[0][0] + 2 * knots[1][0],
    y = knots[0][1] + 2 * knots[1][1],
    f = 2,
    n_1 = n - 1,
    rx = [x],
    ry = [y],
    rf = [f],
    px = [],
    py = [];

  // Solve with the Thomas algorithm
  for (let i = 1; i < n; i++) {
    var internal = i < n_1,
      //  internal--(I)  asymmetric--(R) (R)--continuous
      a = internal ? 1 : 2,
      b = internal ? 4 : 7,
      u = internal ? 4 : 8,
      v = internal ? 2 : 1,
      m = a / f;

    f = rf[i] = b - m;
    x = rx[i] = u * knots[i][0] + v * knots[i + 1][0] - m * x;
    y = ry[i] = u * knots[i][1] + v * knots[i + 1][1] - m * y;
  }

  px[n_1] = rx[n_1] / rf[n_1];
  py[n_1] = ry[n_1] / rf[n_1];
  for (let i = n - 2; i >= 0; i--) {
    px[i] = (rx[i] - px[i + 1]) / rf[i];
    py[i] = (ry[i] - py[i + 1]) / rf[i];
  }
  px[n] = (3 * knots[n][0] - px[n_1]) / 2;
  py[n] = (3 * knots[n][1] - py[n_1]) / 2;

  // Now update the segments
  for (
    let i = paddingLeft, mx = n - paddingRight, j = from;
    i <= mx;
    i++, j++
  ) {
    let controlPoint = [];
    var segment = segments[j < 0 ? j + length : j],
      pt = segment,
      hx = px[i] - pt[0],
      hy = py[i] - pt[1];

    //  controlPoint.push([hx, hy])
    // controlPoint.push([-hx, -hy])

    if (lp || i < mx) controlPoint.push([hx, hy]);
    if (lp || i > paddingLeft) controlPoint.push([-hx, -hy]);

    controlPoints.push(controlPoint);
  }

  return controlPoints;
}

function drawBezierPath(points, strokeColor) {
  if (points.length < 2) return;

  const path = smoothContinuous(points);
  beginShape();
  vertex(points[0][0], points[0][1]);
  for (let index = 1; index < path.length; index++) {
    let isFirst = index - 1 == 0;
    let isLast = index == path.length - 1;
    let p1 = points[index - 1];
    let p2 = points[index];
    let h1 = path[index - 1][0];
    let h2 = isLast ? path[index][0] : path[index][1];
    let cp1 = [p1[0] + h1[0], p1[1] + h1[1]];
    let cp2 = [p2[0] + h2[0], p2[1] + h2[1]];

    // fill('red')
    // noStroke()
    // circle(cp1[0], cp1[1], 10)
    // circle(cp2[0], cp2[1], 10)
    noFill();
    // noS
    // fill(strokeColor)
    // stroke(strokeColor);
    bezierVertex(cp1[0], cp1[1], cp2[0], cp2[1], p2[0], p2[1]);
  }
  endShape();
}

function drawBezierLine(points, res = 4, swidth = 30) {
  if (points.length < 2) return;
  // console.log(swidth)

  const path = smoothContinuous(points);
  beginShape(TRIANGLE_STRIP);
  // beginShape(TESS);
  vertex(points[0][0], points[0][1]);
  for (let index = 1; index < path.length; index++) {
    let isFirst = index - 1 == 0;
    let isLast = index == path.length - 1;
    let p1 = points[index - 1];
    let p2 = points[index];
    let h1 = path[index - 1][0];
    let h2 = isLast ? path[index][0] : path[index][1];
    let cp1 = [p1[0] + h1[0], p1[1] + h1[1]];
    let cp2 = [p2[0] + h2[0], p2[1] + h2[1]];

    // fill('red')
    // noStroke()
    // circle(cp1[0], cp1[1], 10)
    // circle(cp2[0], cp2[1], 10)
    // noS
    // fill(strokeColor)
    // stroke(strokeColor);
    // noFill();
    // bezierVertex(cp1[0], cp1[1], cp2[0], cp2[1], p2[0], p2[1]);

    let np = res;
    let bwidth = swidth;
    for (let i = 0; i < np; i++) {
      let t = i / np;
      let x = bezierPoint(p1[0], cp1[0], cp2[0], p2[0], t);
      let y = bezierPoint(p1[1], cp1[1], cp2[1], p2[1], t);
      let btx = bezierTangent(p1[0], cp1[0], cp2[0], p2[0], t);
      let bty = bezierTangent(p1[0], cp1[0], cp2[0], p2[0], t);
      let m = noise(btx * 0.01, bty * 0.01, t) * bwidth;
      let dir = createVector(btx, bty).rotate(radians(90)).normalize().mult(m);
      dir = dir.normalize();

      let nx = x / width;
      let ny = y / height;

      // noStroke()
      noFill();
      // strokeWeight(2)
      // fill(255, 0, 0, dir.x)// * (m-dir.y))
      // noStroke()
      // stroke(255, 0, 0, m)
      // circle(x, y, 10)
      stroke("black");
      fill("black");
      // line(x - dir.x, y - dir.y, x + dir.x, y + dir.y)

      // fill(255, 0, 0, dir.x*m/2)
      // stroke(255, 0, 0, m-dir.x*m/2)
      vertex(nx - dir.x, ny - dir.y);

      // stroke(255, 0, 0, dir.y*m/2)
      // fill(255, 0, 0, dir.y*m/2)
      vertex(nx + dir.x, ny + dir.y);
    }
  }
  endShape();
}

// // Function to align text along a bezier path in p5.js
// function createAlignedText(str, curvePoints, style) {
//   if (str && str.length > 0 && curvePoints && curvePoints.length >= 4) {
//     let glyphPositions = [];
//     let curveLength = 0;

//     // Calculate the approximate total length of the curve by summing segments
//     let resolution = 100; // Increase resolution for more accuracy
//     for (let i = 0; i < resolution; i++) {
//       let t1 = i / resolution;
//       let t2 = (i + 1) / resolution;

//       let x1 = curvePoint(curvePoints[0].x, curvePoints[1].x, curvePoints[2].x, curvePoints[3].x, t1);
//       let y1 = curvePoint(curvePoints[0].y, curvePoints[1].y, curvePoints[2].y, curvePoints[3].y, t1);
//       let x2 = curvePoint(curvePoints[0].x, curvePoints[1].x, curvePoints[2].x, curvePoints[3].x, t2);
//       let y2 = curvePoint(curvePoints[0].y, curvePoints[1].y, curvePoints[2].y, curvePoints[3].y, t2);

//       curveLength += dist(x1, y1, x2, y2);
//     }

//     // For each glyph, calculate its position on the curve
//     let xOffsets = [0];
//     textSize(style.fontSize || 18);
//     textAlign(CENTER);
//     for (let i = 1; i < str.length; i++) {
//       let prevCharWidth = textWidth(str.charAt(i - 1));
//       let charWidth = textWidth(str.charAt(i));
//       xOffsets[i] = xOffsets[i - 1] + (prevCharWidth + charWidth) / 2;
//     }

//     // console.log("drawing ", str, str.length)
//     // Draw each character along the curve
//     for (let k = 0; k < str.length; k++) {
//       // console.log("drawing ", str[k])
//       // console.log(k)
//       let centerOffs = xOffsets[k];
//       // if (centerOffs > curveLength) break; // Stop if the offset exceeds the curve length

//       let t = map(centerOffs, 0, curveLength, 0, 1);
//       let x = curvePoint(curvePoints[0].x, curvePoints[1].x, curvePoints[2].x, curvePoints[3].x, t);
//       let y = curvePoint(curvePoints[0].y, curvePoints[1].y, curvePoints[2].y, curvePoints[3].y, t);

//       // Get tangent (slope) at the current t
//       let tx = curveTangent(curvePoints[0].x, curvePoints[1].x, curvePoints[2].x, curvePoints[3].x, t);
//       let ty = curveTangent(curvePoints[0].y, curvePoints[1].y, curvePoints[2].y, curvePoints[3].y, t);
//       let angle = atan2(ty, tx);

//       // Draw the character at the calculated position, rotated along the tangent
//       push();
//       translate(x, y);
//       // console.log(x, y)
//       // textSize(200)
//       rotate(angle);
//       fill('red')
//       text(str.charAt(k), 0, 0);
//       pop();
//     }
//   }
// }

function createAlignedText(str, controlPoints, style) {
  if (str && str.length > 0 && controlPoints) {
    let glyphPositions = [];
    let curveLength = 0;

    // Calculate the total length of the curve by sampling it
    let resolution = 200; // Higher resolution gives more accurate length
    for (let i = 0; i < resolution; i++) {
      let t1 = i / resolution;
      let t2 = (i + 1) / resolution;

      let pos1 = getBezierPoint(controlPoints, t1);
      let pos2 = getBezierPoint(controlPoints, t2);

      curveLength += dist(pos1.x, pos1.y, pos2.x, pos2.y);
    }

    // For each glyph, calculate its position on the curve
    let xOffsets = [0];
    textSize(style.fontSize || 18);
    for (let i = 1; i < str.length; i++) {
      let prevCharWidth = textWidth(str.charAt(i - 1));
      let charWidth = textWidth(str.charAt(i));
      xOffsets[i] = xOffsets[i - 1] + (prevCharWidth + charWidth) / 2;
    }

    // Draw each character along the curve
    for (let i = 0; i < str.length; i++) {
      let centerOffs = xOffsets[i];
      if (centerOffs > curveLength) break; // Stop if the offset exceeds the curve length
      console.log("here");

      let t = map(centerOffs, 0, curveLength, 0, 1);
      let pos = getBezierPoint(controlPoints, t);

      // Get tangent (slope) at the current t
      let tangent = getBezierTangent(controlPoints, t);
      let angle = atan2(tangent.y, tangent.x);

      // Draw the character at the calculated position, rotated along the tangent
      push();
      translate(width / 2, height / 2);
      // rotate(angle);
      text(str.charAt(i), 0, 0);
      pop();
    }
  }
}

// Helper function to calculate the Bezier point for any number of control points
function getBezierPoint(controlPoints, t) {
  let x = 0;
  let y = 0;
  let n = controlPoints.length - 1;
  for (let i = 0; i <= n; i++) {
    let coeff = binomialCoefficient(n, i) * pow(1 - t, n - i) * pow(t, i);
    x += coeff * controlPoints[i].x;
    y += coeff * controlPoints[i].y;
  }
  return createVector(x, y);
}

// Helper function to calculate the Bezier tangent for any number of control points
function getBezierTangent(controlPoints, t) {
  let x = 0;
  let y = 0;
  let n = controlPoints.length - 1;
  for (let i = 0; i <= n - 1; i++) {
    let coeff =
      binomialCoefficient(n - 1, i) * pow(1 - t, n - 1 - i) * pow(t, i);
    let dx = controlPoints[i + 1].x - controlPoints[i].x;
    let dy = controlPoints[i + 1].y - controlPoints[i].y;
    x += coeff * dx;
    y += coeff * dy;
  }
  return createVector(x, y);
}

// Calculate binomial coefficient
function binomialCoefficient(n, k) {
  let res = 1;
  if (k > n - k) k = n - k;
  for (let i = 0; i < k; i++) {
    res *= n - i;
    res /= i + 1;
  }
  return res;
}

window.smoothContinuous = smoothContinuous;
window.drawBezierPath = drawBezierPath;
window.drawBezierLine = drawBezierLine;
window.createAlignedText = createAlignedText;
window.getBezierPoint = getBezierPoint;
window.getBezierTangent = getBezierTangent;
window.binomialCoefficient = binomialCoefficient;


class SpatialGrid {
  constructor(canv_wid, canv_hei, cellSize) {
    this.cellSize = cellSize;

    // Determine number of columns and rows based on canvas size and cell size
    this.numCols = Math.ceil(canv_wid / cellSize);
    this.numRows = Math.ceil(canv_hei / cellSize);

    // Initialize the 2D grid array
    this.cells = [];

    // Create the empty grid with no points
    for (let x = 0; x < this.numCols; x++) {
      this.cells[x] = [];
      for (let y = 0; y < this.numRows; y++) {
        this.cells[x][y] = [];
      }
    }
  }

  // Helper function to get the grid cell coordinates for a given point
  getCellCoords(point) {
    let col = Math.floor(point.x / this.cellSize);
    let row = Math.floor(point.y / this.cellSize);

    // Ensure the coordinates are within the grid bounds
    col = constrain(col, 0, this.numCols - 1);
    row = constrain(row, 0, this.numRows - 1);

    return { col, row };
  }

  // Add a point to the grid at the appropriate cell
  addPoint(point) {
    let { col, row } = this.getCellCoords(point);

    // Check if the point is too close to any neighbors in nearby cells
    // Get neighbors and check proximity
    let neighbors = this.getNeighbors(point);
    // console.log(neighbors)

    if (
      point.x > width - this.cellSize ||
      point.x < 0 + this.cellSize ||
      point.y < 0 + this.cellSize ||
      point.y > height - this.cellSize
    ) {
      return false;
    }
    for (let neighbor of neighbors) {
      if (point.isTooClose(neighbor)) {
        console.log("too close");
        // Don't add the point if it's too close to any neighbor
        return false;
      }
    }

    this.cells[col][row].push(point);

    // Optionally, store the cell indices on the point itself for easy reference
    point.gridCell = { col, row };

    return true;
  }

  // Remove a point from the grid
  removePoint(point) {
    let { col, row } = point.gridCell;
    let cell = this.cells[col][row];
    let index = cell.indexOf(point);

    // Remove the point from the cell's list
    if (index !== -1) {
      cell.splice(index, 1);
    }
  }

  // isTooClose(point, col_idx, row_idx) {
  //   // Get all nearby points from neighboring cells to check for proximity
  //   for (let i = col_idx - 1; i <= col_idx + 1; i++) {
  //     for (let j = row_idx - 1; j <= row_idx + 1; j++) {
  //       // Ensure indices are within bounds
  //       if (i < 0 || j < 0 || i >= this.numCols || j >= this.numRows) continue;

  //       let cell = this.cells[i][j];
  //       for (let neighbor of cell) {
  //         let d = dist(point.x, point.y, neighbor.x, neighbor.y);
  //         if (d <= this.cellSize) {
  //           return true; // Too close to a neighbor
  //         }
  //       }
  //     }
  //   }

  //   return false; // No neighbors are too close
  // }

  // Get neighbors of a point within its grid cell and surrounding cells
  getNeighbors(point) {
    let top_left = [
      floor((point.x - point.radius) / this.cellSize),
      floor((point.y - point.radius) / this.cellSize),
    ];

    let bottom_right = [
      floor((point.x + point.radius) / this.cellSize),
      floor((point.y + point.radius) / this.cellSize),
    ];

    let neighbors = [];
    for (let i = top_left[0]; i <= bottom_right[0]; i++) {
      for (let j = top_left[1]; j <= bottom_right[1]; j++) {
        if (i < 0 || j < 0 || i >= this.numCols || j >= this.numRows) continue;
        let cell = this.cells[i][j];
        for (let p of cell) {
          if (p !== point) neighbors.push(p);
        }
      }
    }

    return neighbors;
  }

  findMostEmptyCell() {
    let cellsWithCoords = [];

    // Collect all cells with their corresponding coordinates
    for (let i = 0; i < this.numCols; i++) {
      for (let j = 0; j < this.numRows; j++) {
        cellsWithCoords.push({
          coords: {
            x: i * this.cellSize + this.cellSize / 2,
            y: j * this.cellSize + this.cellSize / 2,
          },
          pointsCount: this.cells[i][j].length,
        });
      }
    }

    // Sort cells based on the number of children (points) in each cell
    cellsWithCoords.sort((a, b) => a.pointsCount - b.pointsCount);

    // Find the minimum number of children
    const minPoints = cellsWithCoords[0].pointsCount;

    // Filter out all cells with the minimum number of points
    const minCells = cellsWithCoords.filter(
      (cell) => cell.pointsCount === minPoints
    );

    // Return a random cell from those with the minimum number of points
    return random(minCells).coords;
  }

  // findLeastCrowdedCell() {
  //   let minCount = Infinity

  //   for (let x = 0; x < this.numCols; x++) {
  //     this.cells[x] = [];
  //     for (let y = 0; y < this.numRows; y++) {
  //       this.cells[x][y] = [];
  //     }
  //   }
  // }

  findNeighboringCellsByCrowdiness(point) {
    let neighbors = [];

    // Get the column and row of the point's cell
    let col = floor(point.x / this.cellSize);
    let row = floor(point.y / this.cellSize);

    // Define the range of neighboring cells (up, down, left, right, and diagonals)
    for (let i = -1; i <= 1; i++) {
      for (let j = -1; j <= 1; j++) {
        let neighborX = col + i;
        let neighborY = row + j;

        // Ensure the neighboring cell is within the grid bounds and not the original cell
        if (
          neighborX >= 0 &&
          neighborX < this.numCols &&
          neighborY >= 0 &&
          neighborY < this.numRows &&
          !(i === 0 && j === 0) // Skip the original cell
        ) {
          neighbors.push({
            coords: {
              x: neighborX * this.cellSize,
              y: neighborY * this.cellSize,
            },
            pointsCount: this.cells[neighborX][neighborY].length,
          });
        }
      }
    }

    // Sort neighboring cells by the number of points in ascending order
    neighbors.sort((a, b) => a.pointsCount - b.pointsCount);

    // Find the minimum number of children
    const minPoints = neighbors[0].pointsCount;

    let final = neighbors
      .filter((c) => c.pointsCount == minPoints)
      .sort((a, b) => random() - random());

    return final;
  }
}

class Point {
  constructor(x, y, radius) {
    this.x = x;
    this.y = y;
    this.radius = radius;
  }

  // Check if two points are too close based on their radius
  isTooClose(otherPoint) {
    const distance = dist(this.x, this.y, otherPoint.x, otherPoint.y);
    return distance < this.radius + otherPoint.radius;
  }
}

window.SpatialGrid = SpatialGrid;
window.Point = Point;
