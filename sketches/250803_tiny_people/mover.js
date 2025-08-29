class Mover {
  constructor(x1, y1, x2, y2) {
    this.x1 = x1;
    this.y1 = y1;
    this.x2 = x2;
    this.y2 = y2;

    this.x = x1;
    this.y = y1;

    let a = x1 - x2;
    let b = y1 - y2;
    this.distance = Math.sqrt(a * a + b * b);
    this.t = 0;
  }

  move(speed) {
    let deltat = speed / this.distance;
    this.t += deltat;

    if (this.t >= 1) {
      this.t = 1;
    }

    this.x = this.x1 + (this.x2 - this.x1) * this.t;
    this.y = this.y1 + (this.y2 - this.y1) * this.t;
  }

  isMovingLeft() {
    return this.x2 < this.x1;
  }
}
