class SpatialGrid {
  constructor(cols, rows, w, h) {
    this.cols = cols;
    this.rows = rows;
    this.cellWidth = w / cols;
    this.cellHeight = h / rows;
    this.cells = Array.from({ length: cols }, () =>
      Array.from({ length: rows }, () => [])
    );
  }

  clear() {
    for (let i = 0; i < this.cols; i++) {
      for (let j = 0; j < this.rows; j++) {
        this.cells[i][j] = [];
      }
    }
  }

  addParticle(particle) {
    const { colStart, colEnd, rowStart, rowEnd } = this.getGridBounds(particle);

    for (let i = colStart; i <= colEnd; i++) {
      for (let j = rowStart; j <= rowEnd; j++) {
        if (this.isValidCell(i, j)) {
          this.cells[i][j].push(particle);
        }
      }
    }
  }

  removeParticle(particle) {
    const { colStart, colEnd, rowStart, rowEnd } = this.getGridBounds(particle);

    for (let i = colStart; i <= colEnd; i++) {
      for (let j = rowStart; j <= rowEnd; j++) {
        if (this.isValidCell(i, j)) {
          this.cells[i][j] = this.cells[i][j].filter((p) => p !== particle);
        }
      }
    }
  }

  getNearby(particle) {
    const { colStart, colEnd, rowStart, rowEnd } = this.getGridBounds(particle);
    const nearbyParticles = new Set();

    for (let i = colStart; i <= colEnd; i++) {
      for (let j = rowStart; j <= rowEnd; j++) {
        if (this.isValidCell(i, j)) {
          this.cells[i][j].forEach((other) => nearbyParticles.add(other));
        }
      }
    }

    return Array.from(nearbyParticles);
  }

  // Calculate the grid bounds for a particle
  getGridBounds(particle) {
    const colStart = floor(particle.x / this.cellWidth);
    const colEnd = floor((particle.x + particle.w) / this.cellWidth);
    const rowStart = floor(particle.y / this.cellHeight);
    const rowEnd = floor((particle.y + particle.h) / this.cellHeight);

    return { colStart, colEnd, rowStart, rowEnd };
  }

  isValidCell(col, row) {
    return col >= 0 && col < this.cols && row >= 0 && row < this.rows;
  }
  
  checkCollisions(particle) {
    const nearbyParticles = this.getNearby(particle);
    let collisionOccurred = false;

    for (let other of nearbyParticles) {
      if (particle !== other && particle.checkCollision(other)) {
        collisionOccurred = true;
        return true
      }
    }

    particle.isColliding = collisionOccurred;
    return particle.isColliding
  }

  resolveAllCollisions(particle) {
    const nearbyParticles = this.getNearby(particle);
    let collisionOccurred = false;

    for (let other of nearbyParticles) {
      if (particle !== other && particle.checkCollision(other)) {
        particle.resolveCollision(other);
        collisionOccurred = true;
      }
    }

    particle.isColliding = collisionOccurred;
  }

  draw() {
    stroke("red");
    strokeWeight(0.5);
    for (let i = 0; i < this.cols; i++) {
      line(i * this.cellWidth, 0, i * this.cellWidth, height);
    }

    for (let i = 0; i < this.rows; i++) {
      line(0, i * this.cellHeight, width, i * this.cellHeight);
    }
  }
}


// class SpatialGrid {
//   constructor(cols, rows, w, h) {
//     this.cols = cols;
//     this.rows = rows;
//     this.cellWidth = w / cols;
//     this.cellHeight = h / rows;
//     this.cells = Array.from({ length: cols }, () =>
//       Array.from({ length: rows }, () => [])
//     );
//   }

//   clear() {
//     for (let i = 0; i < this.cols; i++) {
//       for (let j = 0; j < this.rows; j++) {
//         this.cells[i][j] = [];
//       }
//     }
//   }

//   addParticle(particle) {
//     let colStart = floor(particle.x / this.cellWidth);
//     let colEnd = floor((particle.x + particle.w) / this.cellWidth);
//     let rowStart = floor(particle.y / this.cellHeight);
//     let rowEnd = floor((particle.y + particle.h) / this.cellHeight);

//     for (let i = colStart; i <= colEnd; i++) {
//       for (let j = rowStart; j <= rowEnd; j++) {
//         if (this.isValidCell(i, j)) {
//           this.cells[i][j].push(particle);
//         }
//       }
//     }
//   }

//   removeParticle(particle) {
//     let colStart = floor(particle.x / this.cellWidth);
//     let colEnd = floor((particle.x + particle.w) / this.cellWidth);
//     let rowStart = floor(particle.y / this.cellHeight);
//     let rowEnd = floor((particle.y + particle.h) / this.cellHeight);

//     for (let i = colStart; i <= colEnd; i++) {
//       for (let j = rowStart; j <= rowEnd; j++) {
//         if (this.isValidCell(i, j)) {
//           this.cells[i][j] = this.cells[i][j].filter((p) => p !== particle);
//         }
//       }
//     }
//   }

//   getNearby(particle) {
//     let colStart = floor(particle.x / this.cellWidth);
//     let colEnd = floor((particle.x + particle.w) / this.cellWidth);
//     let rowStart = floor(particle.y / this.cellHeight);
//     let rowEnd = floor((particle.y + particle.h) / this.cellHeight);

//     let nearbyParticles = [];

//     for (let i = colStart - 1; i <= colEnd + 1; i++) {
//       for (let j = rowStart - 1; j <= rowEnd + 1; j++) {
//         if (this.isValidCell(i, j)) {
//           nearbyParticles = nearbyParticles.concat(this.cells[i][j]);
//         }
//       }
//     }

//     return nearbyParticles;
//   }

//   isValidCell(col, row) {
//     return col >= 0 && col < this.cols && row >= 0 && row < this.rows;
//   }

//   checkCollisions(particle) {
//     let nearbyParticles = this.getNearby(particle);

//     // Check for collisions with nearby particles
//     for (let other of nearbyParticles) {
//       if (particle !== other && particle.isColliding(other)) {
//         console.log("collision!")
//         console.log(particle.x, particle.y)
//         return true;
//       } else {
//         return false;
//       }
//     }
//   }
  
//   resolveAllCollisions(particle) {
//     let nearbyParticles = this.getNearby(particle);

//     // Check for collisions with nearby particles
//     for (let other of nearbyParticles) {
//       if (particle !== other && particle.isColliding(other)) {
//         particle.resolveCollision(other);
//         particle.iscolliding = true;
//       } else {
//         particle.iscolliding = false;
//       }
//     }
//   }
  
//   draw() {
//     stroke('red')
//     strokeWeight(0.5)
//     for(let i = 0; i < this.cols; i++) {
//       line(i * this.cellWidth, 0, i * this.cellWidth, height)
//     }
    
//     for(let i = 0; i < this.rows; i++) {
//       line(0, i * this.cellHeight, width, i * this.cellHeight)
        
        
        
//       }
//   }

// }
