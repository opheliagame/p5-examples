class Particle {
  constructor(x, y, w, h, vx, vy) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.vx = vx;
    this.vy = vy;
    this.iscolliding = false;
    this.dead = false;
    this.collisionResolutionCount = 0;
    this.continuousCollisionCount = 0;
    this.maxContinuousCollisions = 10; // Threshold for continuous collision resolutions
    this.prevCollisionParticle = null; // Tracks last particle involved in a collision
    this.text1 = "";
  }

  setVelocity(vx, vy) {
    this.vx = vx;
    this.vy = vy;
  }

  setText(text) {
    this.text1 = text;
  }

  update() {
    this.x += this.vx;
    this.y += this.vy;

    // Bounce off edges of the canvas
    if (this.x < 0 || this.x + this.w > width) this.vx *= -1;
    if (this.y < 0 || this.y + this.h > height) this.vy *= -1;
  }

  checkCollision(other) {
    // console.log("collide")
    // console.log(this)
    // console.log(other)
    // console.log(this.x, this.y, this.w, this.h)
    //     return !(
    //       this.x + this.w < other.x ||
    //       this.x > other.x + other.w ||
    //       this.y + this.h < other.y ||
    //       this.y > other.y + other.h
    //     );

    // Check if particle is already marked dead
    if (this.dead || other.dead) return;

    // Increase continuous collision count if colliding with the same particle as last frame
    if (this.prevCollisionParticle === other) {
      this.continuousCollisionCount += 1;
    } else {
      this.continuousCollisionCount = 0; // Reset if it's a new collision
    }

    // If continuous collisions exceed threshold, mark the particle as dead
    if (this.continuousCollisionCount > this.maxContinuousCollisions) {
      this.dead = true;
      return;
    }

    // Log current collision particle to check for continuity in next frame
    this.prevCollisionParticle = other;

    let distance = dist(this.x, this.y, other.x, other.y);
    let minDistance = this.w / 2 + other.w / 2; // Radius sum for circular collision

    return distance < minDistance;
  }

  resolveCollision(other) {
    if (this.collisionResolutionCount > 100) {
      this.dead = true;
      return;
    }
    if (other.collisionResolutionCount > 100) {
      other.dead = true;
      return;
    }

    // console.log("resolving collision");
    let overlapX = (this.w + other.w) / 2 - abs(this.x - other.x);
    let overlapY = (this.h + other.h) / 2 - abs(this.y - other.y);

    if (overlapX < overlapY) {
      if (this.x < other.x) {
        this.x -= overlapX / 2;
        other.x += overlapX / 2;
      } else {
        this.x += overlapX / 2;
        other.x -= overlapX / 2;
      }
      this.vx *= -1;
      other.vx *= -1;
    } else {
      if (this.y < other.y) {
        this.y -= overlapY / 2;
        other.y += overlapY / 2;
      } else {
        this.y += overlapY / 2;
        other.y -= overlapY / 2;
      }
      this.vy *= -1;
      other.vy *= -1;
    }

    this.collisionResolutionCount += 1;
    other.collisionResolutionCount += 1;
  }

  show() {
    fill(this.c);
    rect(this.x, this.y, this.w, this.h);
    fill("black");
    textAlign(CENTER, TOP);
    textSize(this.h);
    text(this.text1, this.x + this.w / 2, this.y);
  }
}
