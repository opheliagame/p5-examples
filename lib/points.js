function getRandomValues(n, vmin, vmax, sorted=false) {
  let values = []
  for(let i = 0; i < n; i++) {
    values.push(random() * (vmax-vmin) + vmin)
  }
  
  return (sorted ? sort(values) : values)
}

function getRandomPoints(n, xmin, xmax, ymin, ymax, xsorted=false, ysorted=false) {
  let xvalues = getRandomValues(n, xmin, xmax, xsorted) 
  let yvalues = getRandomValues(n, ymin, ymax, ysorted)
  
  let points = []
  for(let i = 0; i < n; i++) {
    let x = xvalues[i]
    let y = yvalues[i]
    points.push([x, y])
  }
  return points
}

function getCirclePoints(radius, res) {
  let points = []
  for(let i = 0; i < res; i++) {
    let angle = map(i, 0, res-1, 0, TWO_PI)
    let x = cos(angle) * radius
    let y = sin(angle) * radius
    points.push([x, y])
  }
  
  // add first point again  - this looks weird
  let angle = 0
  let x = cos(angle) * radius
  let y = sin(angle) * radius
  points.push([x, y])
  
  return points
}

function getRectPoints(width, height, res) {
  
  let points = []
  let radius = sqrt(pow(width, 2) + pow(height, 2))
  
  // return getCirclePoints(radius, 5)
  
  for(let i = 0; i < 5; i++) {
    let angle = map(i, 0, 4, 0, TWO_PI)
    let x = cos(angle+PI/4) * radius
    let y = sin(angle+PI/4) * radius
    
    // push()
    // translate(400, 400)
    // fill('green')
    // circle(x, y, 20)
    // pop()

    points.push([x, y])
  }
  
  // add first point again  
  let angle = PI/4
  let roff = 0
  let x = cos(angle) * (radius+roff)
  let y = sin(angle) * (radius+roff)
  
  // push()
  // translate(400, 400)
  //   fill('green')
  //   circle(x, y, 20)
  //   pop()
  points.push([x, y])
  return points
  
}

function getTrianglePoints(radius, res) {
  return getCirclePoints(radius, 4)
}
