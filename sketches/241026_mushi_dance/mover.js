class Mover extends Particle {
  constructor(x, y, r, palette) {
    super(x, y, r * 2 + 2, r * 2 + 2, random(-2, 2), random(-2, 2)); // Initialize width and height as diameter for circular appearance
    this.r = r;
    this.palette = palette;
    this.children = [];
    this.origin = createVector(x, y);
    this.pos = createVector(x, y);
    this.col = random(palette); // Color of the mover
    this.moveSpeed = 2;
    
    this.displayType = floor(random(3));
    

    // console.log(this.pos);
  }

  setColor(color) {
    this.col = color;
  }

  update() {
    super.update();
    this.move();
  }

  // Custom move function
  move() {
    // console.log("moving")
    //     let t = noise((this.x / width) * 1.0, (this.y / height) * 1.0) * TWO_PI;
    //     let vec = p5.Vector.fromAngle(t).mult(this.moveSpeed);

    this.pos = new p5.Vector(this.x, this.y);
    // this.pos.add();
    //     this.x = this.pos.x;
    //     this.y = this.pos.y;

    // Check if moved beyond radius distance from origin
    let gap = 2;
    if (p5.Vector.dist(this.origin, this.pos) >= this.r * 2 + gap) {
      // let childPos = p5.Vector.add(this.pos, new p5.Vector(gap, gap))

      // let childPos = this.pos
      // this.pos = childPos
      this.addChild();

      this.origin.set(this.pos); // Reset origin for next child
      // this.x = childPos.x
      // this.y = childPos.y
    }
  }

  // Add a child at current position
  addChild() {
    // console.log("adding child")
    let child = new Mover(this.pos.x, this.pos.y, this.r, this.r);
    child.setColor(this.col);
    this.children.push(child);

    // console.log(child);
  }

  display(isColored, img) {
    
    let col = isColored ? null : 'black'
    this.displayType = null

    switch (this.displayType) {
      case 0:
        this.displaySeparate(col);
        break;
      case 1:
        this.displayContinuous(col);
        break;
      case 2:
        this.displayLines(col);
        break;
      default:
        this.displayLines(col);
        break
    }

    if(img != null && random(this.displayType) < 1) {
      this.displayImage(img)
    }

  }

  displayImage(img) {
    imageMode(CENTER)
    image(img, this.x, this.y, this.r*2, this.r*2)
  }

  displaySeparate(col) {
   
    if (this.iscolliding) {
      fill(random(255));
    } else {
      fill(this.col);
    }
    if(col != null) {
      fill(col)
    }

    noStroke();
    // ellipseMode(RADIUS);
    // ellipse(this.x, this.y, this.r, this.r);

    circle(this.x, this.y, this.r * 2);
    for (let c of this.children) {
      c.display();
    }
  }

  // Override display to include children
  displayContinuous(col) {
    if (this.children.length == 0) return;
    let displayRes = 2;
    stroke(this.col);
    strokeWeight(this.r);
    if(col != null) {
      stroke(col);
    }
    // Display children as circles
    let start = this.children[0].pos;
    for (let i = 1; i < this.children.length; i++) {
      let c = this.children[i];

      for (let k = 0; k < displayRes; k++) {
        let lp = new p5.Vector.lerp(start, c.pos, k / displayRes);

        line(start.x, start.y, lp.x, lp.y);
      }
      start = c.pos;
    }
  }

  displayLines(col) {
    if (this.children.length == 0) return;
    let displayRes = 5;
    noStroke();
    fill(this.col);
    if(col != null) {
      fill(col)
    }
    // Display children as circles
    let start = this.children[0].pos;
    for (let i = 1; i < this.children.length; i++) {
      let c = this.children[i];

      for (let k = 0; k < displayRes; k++) {
        let lp = new p5.Vector.lerp(start, c.pos, k / displayRes);

        circle(lp.x, lp.y, this.r * 2);
      }
      start = c.pos;
    }
  }
}
