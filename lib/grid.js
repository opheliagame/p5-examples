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

class GridNode {
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

  grow(range) {
    let n = (noise(this.angle) * range) / 3;
    const childAngle =
      this.angle +
      (range == null ? random(-PI, PI) : random(-range / 2 - n, range / 2 + n));
    const child = new GridNode(
      this,
      this.size,
      this.g,
      childAngle,
      this.plantX,
      this.plantY,
    );

    if (child.size < 80) {
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

  maybeGrow(range) {
    let chance = random() > 0.6;
    let age = this.children.length > 3;

    if (!age) {
      this.grow(range);
    } else {
      const randomChild = random(this.children);
      if (randomChild) {
        randomChild.maybeGrow(range);
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
    let border = nodeBorder == undefined ? 0 : nodeBorder;
    if (
      dist(this.x, this.y, otherNodeX, otherNodeY) <
      this.size / 2 + otherNodeSize / 2 + border
    ) {
      return true;
    }

    return false;
  }

  draw(func) {
    // children
    for (const child of this.children) {
      child.draw(func);
    }

    func(this);
  }
}

window.Grid = Grid;
window.GridNode = GridNode;
