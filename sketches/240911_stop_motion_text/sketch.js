
// TODO copy to editor.p5js.org
let textString = "A GUIDE TO GETTING PREGNANT"
let textPathPoints = []
let spatialHashingGrid
let minDist = 100
let words = textString.split(' ')

let isDrawing = false
let currentPath = []

function setup() {
  createCanvas(900, 1200);

  spatialHashingGrid = new SpatialGrid(width, height, minDist*1.5)

  
  let n = words.length
  console.log(words)

  textSize(minDist)  
  let textWidths = words.map(w => textWidth(w))
  
  for(let i = 0; i < n; i++) {
    // let twidth = 

    let div = 20
    let pn = map(textWidths[i], min(textWidths), max(textWidths), min(textWidths)/div, max(textWidths)/div)

    // console.log(pn)


    let index = 0
    let count = 0
    let xpad = width/10
    let ypad = width/10 
    let xmin = 0+xpad
    let xmax = width-xpad
    let ymin = 0+ypad
    let ymax = height-ypad
    let validPoints = []
    while(index < words[i].length && count < 1000) {
      
      let point
      if(index == 0) {
        // point = createVector(random() * (xmax-xmin) + xmin, random() * (ymax-ymin) + ymin)
        let coords = spatialHashingGrid.findMostEmptyCell()
        point = createVector(coords.x, coords.y)
      } 
      else {
        let prevPoint = validPoints[index-1]
      
        // let nv = index
        let nv = (prevPoint[0]+prevPoint[1]+random()) * 0.01
        let rot = (noise(nv, random()*0.5)*2-1)*180
        let dirVector = createVector(minDist*0.5, 0).rotate(radians(rot))

        let neighbours = spatialHashingGrid.findNeighboringCellsByCrowdiness(createVector(prevPoint[0], prevPoint[1]))
        if(neighbours.length == 0) return 
        let targetPoint = neighbours[0].coords

        let t = random()
        let x = lerp(prevPoint[0], targetPoint.x, t)
        let y = lerp(prevPoint[1], targetPoint.y, t)

        let newPoint = createVector(x, y).add(dirVector)
        point = newPoint

      }     
      // console.log(point.x, point.y)

      let finalPoint = new Point(point.x, point.y, minDist/2)
      
      let isValid = spatialHashingGrid.addPoint(finalPoint)  

      if(isValid) {
        validPoints.push([point.x, point.y])
        index++
      }

      count++
    }

    // let points = getRandomPoints(pn, 0, width, 0, height)
    // let validPoints = points.map(p => {
    //   // let node = new Node(
    //   //   null,
    //   //   50,
    //   //   random(200, 255),
    //   //   -TAU * 0.75,
    //   //   p[0],
    //   //   p[1]
    //   // );
    //   const pointVector = createVector(p[0], p[1])
    // })
    

    textPathPoints.push(validPoints)
  }


  console.log(textPathPoints)

  // textPathPoints = []
}

function draw() {
  // background('whitesmoke');
  background('whitesmoke');
  
  for(let i = 0; i < textPathPoints.length; i++) {
    let points = textPathPoints[i]
    let pointsAsVectors = points.map(p => {
      // console.log("point", p)
      return createVector(p[0], p[1])
    })
    // console.log(pointsAsVectors)

    fill('red')
    stroke('black')
    strokeWeight(10)
    // circle(points[0][0], points[0][1], 10)
    drawBezierPath(points)

    // createAlignedText(words[i], pointsAsVectors, { fontSize: 64 })
    // createAlignedText(words[i], [createVector(width/2, height/2), createVector(width/2, height/2), createVector(width/2, height/2), createVector(width/2, height/2), createVector(width/2, height/2)], { fontSize: 64 })

    let newPoints = []

    for(let j = 0; j < points.length; j++) {
      let p = points[j]
      noFill()
      // circle(p[0], p[1], minDist)
      textSize(minDist*1.2)
      fill('red')
      noStroke()
      textStyle(BOLD)
      textAlign(CENTER, CENTER)
      text(words[i][j], p[0], p[1])
      // text("1", p[0], p[1])

      let mv = (noise((p[0] + p[1] * 0.001))*2-1)*10
      newPoints.push([p[0] + mv, p[1] + mv])
    }

    textPathPoints[i] = newPoints
  }


  // console.log(points)
  // noLoop()
}

// function mousePressed() {
//   isDrawing = true
//   currentPath = []
// }

// function mouseReleased() {
//   isDrawing = false
//   textPathPoints.push(currentPath)
//   currentPath = []

//   console.log(textPathPoints)
// }

// function mouseDragged() {
//   if(frameCount % 5 != 0) return
  
//   let p = [mouseX, mouseY]
//   currentPath.push(p)

// }

// let grid;
// let points = [];

// function setup() {
//   createCanvas(800, 800);
//   grid = new SpatialGrid(width, height, 100); // Create grid with 100px cell size

//   // Add random points to the grid
//   for (let i = 0; i < 100; i++) {
//     let point = createVector(random(width), random(height));
    
//     let isValid = grid.addPoint(point);

//     if(isValid) {
//       points.push(point)
//     }
//     else {
//       continue
//     }
//   }
// }

// function draw() {
//   background(255);

//   // Draw all points
//   for (let point of points) {
//     fill(0);
//     ellipse(point.x, point.y, 10, 10);
//   }

//   // Highlight neighbors of a random point
//   let target = points[0];
//   let neighbors = grid.getNeighbors(target, 50); // Get neighbors within 50px radius

//   fill(255, 0, 0);
//   ellipse(target.x, target.y, 15, 15); // Draw the target point

//   for (let neighbor of neighbors) {
//     fill(0, 255, 0);
//     ellipse(neighbor.x, neighbor.y, 12, 12); // Highlight neighboring points
//   }
// }
