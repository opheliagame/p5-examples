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

    if (point.x > (width-this.cellSize) || point.x < (0+this.cellSize) || point.y < (0+this.cellSize) || point.y > (height-this.cellSize)) {
      return false;
    }
    for (let neighbor of neighbors) {

      if (point.isTooClose(neighbor)) {
        console.log("too close")
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
          coords: { x: i * this.cellSize + this.cellSize/2, y: j * this.cellSize + this.cellSize/2},
          pointsCount: this.cells[i][j].length
        });
      }
    }
  
    // Sort cells based on the number of children (points) in each cell
    cellsWithCoords.sort((a, b) => a.pointsCount - b.pointsCount);
  
    // Find the minimum number of children
    const minPoints = cellsWithCoords[0].pointsCount;
  
    // Filter out all cells with the minimum number of points
    const minCells = cellsWithCoords.filter(cell => cell.pointsCount === minPoints);
  
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
            coords: { x: neighborX * this.cellSize, y: neighborY * this.cellSize },
            pointsCount: this.cells[neighborX][neighborY].length
          });
        }
      }
    }
  
    // Sort neighboring cells by the number of points in ascending order
    neighbors.sort((a, b) => a.pointsCount - b.pointsCount);

    // Find the minimum number of children
    const minPoints = neighbors[0].pointsCount;

    let final = neighbors.filter(c => c.pointsCount == minPoints).sort((a, b) => random() - random())

  
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