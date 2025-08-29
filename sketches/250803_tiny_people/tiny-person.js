class TinyPerson {
  constructor(x, y, scl = 1) {
    this.x = x;
    this.y = y;
    this.scl = scl;

    this.bodyColor = random(colorPalette);

    this.posHead = createVector(0, -28);
    this.posArmLeft = createVector(-20, -20);
    this.posArmRight = createVector(20, -20);
    this.posLegLeft = createVector(-10, 0);
    this.posLegRight = createVector(10, 0);
    this.posTorso = createVector(0, 0);

    this.rotHead = random(TWO_PI);
    this.rotLegLeft = 90 + 15;
    this.rotLegRight = 90 - 15;

    this.lenLegLeft = 30;
    this.lenLegRight = 30;

    this.walkSpeed = random(0.5, 1.5);
    this.walkSpeed = 2;
  }

  walkTo(x, y) {
    this.walking = true;
    this.mover = new Mover(this.x, this.y, x, y);
    this.rotHead = atan2(y - this.y, x - this.x);
  }

  update() {
    if (!this.walking) return;

    this.mover.move(this.walkSpeed);

    if (this.mover.t >= 1) {
      this.walking = false;
      this.mover = null;
      return;
    }

    this.x = this.mover.x;
    this.y = this.mover.y;

    // doesn't look natural
    // this.scl = this.scl + random(-0.01, 0.01) * this.mover.t;

    let steps = this.mover.distance / 40;
    let angleRange = random(20, 30);
    let angleStep = angleRange / steps;
    if (this.mover.isMovingLeft()) {
      // natural walking motion

      this.rotLegLeft =
        90 + 15 + step(sin(this.mover.t * steps) * angleRange, angleStep);
      this.rotLegRight =
        90 - 15 + step(sin(this.mover.t * steps + PI) * angleRange, angleStep);

      this.lenLegLeft = 30 + step(sin(this.mover.t * steps) * 5, 2);
      this.lenLegRight = 30 - step(sin(this.mover.t * steps) * 5, 2);
    } else {
      this.rotLegLeft =
        90 + 15 + step(sin(this.mover.t * steps + PI) * angleRange, angleStep);
      this.rotLegRight =
        90 - 15 + step(sin(this.mover.t * steps) * angleRange, angleStep);

      this.lenLegLeft = 30 - step(sin(this.mover.t * steps) * 5, 2);
      this.lenLegRight = 30 + step(sin(this.mover.t * steps) * 5, 2);
    }
  }

  draw() {
    this.update();

    push();
    translate(this.x, this.y);
    scale(this.scl);

    // noStroke();

    stroke("black");
    strokeWeight(1.5);

    // head
    push();
    translate(this.posHead.x, this.posHead.y);
    rotate(this.rotHead);

    fill(this.bodyColor);
    stroke("white");
    circle(0, 0, 25);

    fill("white");
    stroke("black");
    ellipse(25 / 3, 0, 5, 10);

    pop();

    this.drawArmsAndLegsUsingShapes();
    // this.drawArmsAndLegsUsingStrokes();

    // torso
    // push();
    // translate(this.posTorso.x, this.posTorso.y);
    // fill(this.bodyColor);
    // rect(0, 0, 25, 35);
    // pop();

    pop();
  }

  drawArmsAndLegsUsingShapes() {
    // arms and legs using shapes
    fill(this.bodyColor);
    rectMode(CENTER);

    // arms
    // push();
    // translate(this.posArmLeft.x, this.posArmLeft.y);
    // rotate(radians(-90 - 60));
    // rect(0, 0, 30, 10);
    // pop();

    // push();
    // translate(this.posArmRight.x, this.posArmRight.y);
    // rotate(radians(-30));
    // rect(0, 0, 30, 10);
    // pop();

    // legs
    push();
    translate(this.posLegLeft.x, this.posLegLeft.y);
    rotate(radians(this.rotLegLeft));
    translate(this.lenLegLeft / 3, 0);

    noStroke();
    circle(-this.lenLegLeft / 2, 0, 10);
    circle(this.lenLegLeft / 2, 0, 10);
    rect(0, 0, this.lenLegLeft, 10);

    stroke("white");
    strokeWeight(1.5);
    line(-this.lenLegLeft / 2, -10 / 2, this.lenLegLeft / 2, -10 / 2);
    line(-this.lenLegLeft / 2, 10 / 2, this.lenLegLeft / 2, 10 / 2);

    noFill();
    arc(this.lenLegLeft / 2, 0, 10, 10, -PI / 2, PI / 2);
    arc(-this.lenLegLeft / 2, 0, 10, 10, PI / 2, -PI / 2);
    pop();

    push();
    translate(this.posLegRight.x, this.posLegRight.y);
    rotate(radians(this.rotLegRight));
    translate(this.lenLegRight / 3, 0);

    noStroke();
    circle(-this.lenLegRight / 2, 0, 10);
    circle(this.lenLegRight / 2, 0, 10);
    rect(0, 0, this.lenLegRight, 10);
    stroke("white");
    strokeWeight(1.5);
    line(-this.lenLegRight / 2, -10 / 2, this.lenLegRight / 2, -10 / 2);
    line(-this.lenLegRight / 2, 10 / 2, this.lenLegRight / 2, 10 / 2);

    noFill();
    arc(this.lenLegRight / 2, 0, 10, 10, -PI / 2, PI / 2);
    arc(-this.lenLegRight / 2, 0, 10, 10, PI / 2, -PI / 2);

    pop();
  }

  drawArmsAndLegsUsingStrokes() {
    // arms and legs using strokes
    stroke(this.bodyColor);
    strokeWeight(12);

    // arms
    // push();
    // translate(this.posArmLeft.x, this.posArmLeft.y);
    // rotate(radians(-90 - 60));
    // fill(this.bodyColor);
    // line(0, 0, 30, 0);
    // pop();

    // push();
    // translate(this.posArmRight.x, this.posArmRight.y);
    // rotate(radians(-30));
    // fill(this.bodyColor);
    // line(0, 0, 30, 0);
    // pop();

    // // legs
    push();
    translate(this.posLegLeft.x, this.posLegLeft.y);
    rotate(radians(this.rotLegLeft));
    fill(this.bodyColor);
    line(0, 0, this.lenLegLeft, 0);
    pop();

    push();
    translate(this.posLegRight.x, this.posLegRight.y);
    rotate(radians(this.rotLegRight));
    fill(this.bodyColor);
    line(0, 0, this.lenLegRight, 0);
    pop();
  }
}
