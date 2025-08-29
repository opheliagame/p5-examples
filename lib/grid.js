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
    if(this.cells[col_idx][row_idx]) {
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
    this.pos = createVector(this.x, this.y)
    this.radius = this.size*1.4
    this.plantY = plantY;
    this.plantX = plantX;

    this.g = parentG + random(-25, 25);
    this.g = constrain(this.g, 128, 255);
    
    nodeCount += 1
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
    const childAngle = this.angle + random(-PI , PI );
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
    
    if(child.boundaryCheck() == false) {
      return false
    }

    
    let neighbors = grid.getNeighbors(this)
    console.log(neighbors)
    for (let neighbor of neighbors) {
      if (neighbor.intersects(child.x, child.y, child.size)) {
        return false;
      }
    }

    // console.log("children")
    this.children.push(child);
    grid.addParticle(child)
    
    
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
    return !(
      this.x < 0 || this.x > width || this.y < 0 || this.y > height
    )
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
