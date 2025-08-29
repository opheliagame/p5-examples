function smoothContinuous(points, options) {
  const opts = options || {};
  const segments = points;
  const length = points.length;

  // path will not be closed
  const closed = false;
  const lp = false;
  const from = 0;
  const to = length - 1;

  let amount = to - from + 1;
  let n = amount - 1;
  let padding = 1;
  let paddingLeft = padding;
  let paddingRight = padding;
  let knots = [];

  paddingLeft = Math.min(1, from);
  paddingRight = Math.min(1, length - to - 1);

  let controlPoints = [];

  n += paddingLeft + paddingRight;
  for (let i = 0, j = from - paddingLeft; i <= n; i++, j++) {
    knots[i] = segments[(j < 0 ? j + length : j) % length];
  }
  // console.log(knots)

  let x = knots[0][0] + 2 * knots[1][0],
    y = knots[0][1] + 2 * knots[1][1],
    f = 2,
    n_1 = n - 1,
    rx = [x],
    ry = [y],
    rf = [f],
    px = [],
    py = [];

  // Solve with the Thomas algorithm
  for (let i = 1; i < n; i++) {
    var internal = i < n_1,
      //  internal--(I)  asymmetric--(R) (R)--continuous
      a = internal ? 1 : 2,
      b = internal ? 4 : 7,
      u = internal ? 4 : 8,
      v = internal ? 2 : 1,
      m = a / f;

    f = rf[i] = b - m;
    x = rx[i] = u * knots[i][0] + v * knots[i + 1][0] - m * x;
    y = ry[i] = u * knots[i][1] + v * knots[i + 1][1] - m * y;
  }

  px[n_1] = rx[n_1] / rf[n_1];
  py[n_1] = ry[n_1] / rf[n_1];
  for (let i = n - 2; i >= 0; i--) {
    px[i] = (rx[i] - px[i + 1]) / rf[i];
    py[i] = (ry[i] - py[i + 1]) / rf[i];
  }
  px[n] = (3 * knots[n][0] - px[n_1]) / 2;
  py[n] = (3 * knots[n][1] - py[n_1]) / 2;

  // Now update the segments
  for (
    let i = paddingLeft, mx = n - paddingRight, j = from;
    i <= mx;
    i++, j++
  ) {
    let controlPoint = [];
    var segment = segments[j < 0 ? j + length : j],
      pt = segment,
      hx = px[i] - pt[0],
      hy = py[i] - pt[1];

    //  controlPoint.push([hx, hy])
    // controlPoint.push([-hx, -hy])

    if (lp || i < mx) controlPoint.push([hx, hy]);
    if (lp || i > paddingLeft) controlPoint.push([-hx, -hy]);

    controlPoints.push(controlPoint);
  }

  return controlPoints;
}

// draws a p5 shape / line with bezierVertex 
function drawBezierPath(points, strokeColor) {
  if (points.length < 2) return;

  const path = smoothContinuous(points);
  beginShape();
  vertex(points[0][0], points[0][1]);
  for (let index = 1; index < path.length; index++) {
    let isFirst = index - 1 == 0;
    let isLast = index == path.length - 1;
    let p1 = points[index - 1];
    let p2 = points[index];
    let h1 = path[index - 1][0];
    let h2 = isLast ? path[index][0] : path[index][1];
    let cp1 = [p1[0] + h1[0], p1[1] + h1[1]];
    let cp2 = [p2[0] + h2[0], p2[1] + h2[1]];

    // fill('red')
    // noStroke()
    // circle(cp1[0], cp1[1], 10)
    // circle(cp2[0], cp2[1], 10)
    noFill();
    // noS
    // fill(strokeColor)
    // stroke(strokeColor);
    bezierVertex(cp1[0], cp1[1], cp2[0], cp2[1], p2[0], p2[1]);
  }
  endShape();
}

// draws a p5 shape / line with bezierVertex and controllable thickness 
function drawBezierLine(points, res=4, swidth=30) {
  if (points.length < 2) return;
  // console.log(swidth)

  const path = smoothContinuous(points);
  beginShape(TRIANGLE_STRIP);
  // beginShape(TESS);
  vertex(points[0][0], points[0][1]);
  for (let index = 1; index < path.length; index++) {
    let isFirst = index - 1 == 0;
    let isLast = index == path.length - 1;
    let p1 = points[index - 1];
    let p2 = points[index];
    let h1 = path[index - 1][0];
    let h2 = isLast ? path[index][0] : path[index][1];
    let cp1 = [p1[0] + h1[0], p1[1] + h1[1]];
    let cp2 = [p2[0] + h2[0], p2[1] + h2[1]];

    // fill('red')
    // noStroke()
    // circle(cp1[0], cp1[1], 10)
    // circle(cp2[0], cp2[1], 10)
    // noS
    // fill(strokeColor)
    // stroke(strokeColor);
    // noFill();
    // bezierVertex(cp1[0], cp1[1], cp2[0], cp2[1], p2[0], p2[1]);
    
    
    let np = res
    let bwidth = swidth
    for(let i = 0; i < np; i++) {
      let t = i/np
      let x = bezierPoint(p1[0], cp1[0], cp2[0], p2[0], t);
      let y = bezierPoint(p1[1], cp1[1], cp2[1], p2[1], t);
      let btx = bezierTangent(p1[0], cp1[0], cp2[0], p2[0], t);
      let bty = bezierTangent(p1[0], cp1[0], cp2[0], p2[0], t);
      let m = noise(btx*0.01, bty*0.01, t)*bwidth
      let dir = createVector(btx, bty).rotate(radians(90)).normalize().mult(m)
      dir = dir.normalize()
      
      let nx = x/width 
      let ny = y/height
      
      // noStroke()
      noFill()
      // strokeWeight(2)
      // fill(255, 0, 0, dir.x)// * (m-dir.y))
      // noStroke()
      // stroke(255, 0, 0, m)
      // circle(x, y, 10)
      stroke('black')
      fill('black')
      // line(x - dir.x, y - dir.y, x + dir.x, y + dir.y)
      
      // fill(255, 0, 0, dir.x*m/2)
      // stroke(255, 0, 0, m-dir.x*m/2)
      vertex(nx - dir.x, ny - dir.y)
      
      // stroke(255, 0, 0, dir.y*m/2)
      // fill(255, 0, 0, dir.y*m/2)
      vertex(nx + dir.x, ny + dir.y)
    }
  }
  endShape();
}

function drawTextOnBezier(points, text1, fontSize) {
  if (points.length < 2 || text1.length === 0) return;

  const path = smoothContinuous(points);
  let textIndex = 0;
  let textLength = text1.length;
  let t = 0; // Initial parameter on the Bezier curve
  let totalDistance = 0; // Total distance traveled along the curve

  textSize(fontSize);
  textAlign(CENTER, CENTER);

  while (textIndex < textLength && t <= 1) {
    let currentChar = text1[textIndex];
    let charWidth = textWidth(currentChar);
    console.log(charWidth)

    // We will step along the curve based on the width of the character
    let stepDistance = charWidth ; // Step half the character width

    let p1 = points[0];
    let p2 = points[1];
    let h1 = path[0][0];
    let h2 = path[1][1];

    let startX = bezierPoint(p1[0], p1[0] + h1[0], p2[0] + h2[0], p2[0], t);
    let startY = bezierPoint(p1[1], p1[1] + h1[1], p2[1] + h2[1], p2[1], t);

    // Loop to find the next `t` where the character should be placed
    let tNext = t;
    let distanceCovered = 0;

    // Increment 'tNext' until we reach the desired distance along the curve
    while (distanceCovered < stepDistance && tNext <= 1) {
      let x1 = bezierPoint(p1[0], p1[0] + h1[0], p2[0] + h2[0], p2[0], tNext);
      let y1 = bezierPoint(p1[1], p1[1] + h1[1], p2[1] + h2[1], p2[1], tNext);
      let x2 = bezierPoint(p1[0], p1[0] + h1[0], p2[0] + h2[0], p2[0], tNext + 0.01);
      let y2 = bezierPoint(p1[1], p1[1] + h1[1], p2[1] + h2[1], p2[1], tNext + 0.01);

      distanceCovered += dist(x1, y1, x2, y2);
      tNext += 0.01; // Increment the `tNext` value to advance along the curve
    }

    // Get the final position and angle at this `tNext`
    let x = bezierPoint(p1[0], p1[0] + h1[0], p2[0] + h2[0], p2[0], tNext);
    let y = bezierPoint(p1[1], p1[1] + h1[1], p2[1] + h2[1], p2[1], tNext);

    let tanX = bezierTangent(p1[0], p1[0] + h1[0], p2[0] + h2[0], p2[0], tNext);
    let tanY = bezierTangent(p1[1], p1[1] + h1[1], p2[1] + h2[1], p2[1], tNext);
    let angle = atan2(tanY, tanX);

    // Draw the letter at the calculated position and angle
    push();
    translate(x, y);
    rotate(angle);
    noStroke();
    fill(0);
    text(currentChar, 0, 0);
    pop();

    // Move to the next letter
    t = tNext; // Update `t` to the next position
    textIndex++;
  }
}


// // Function to align text along a bezier path in p5.js
// function createAlignedText(str, curvePoints, style) {
//   if (str && str.length > 0 && curvePoints && curvePoints.length >= 4) {
//     let glyphPositions = [];
//     let curveLength = 0;
    
//     // Calculate the approximate total length of the curve by summing segments
//     let resolution = 100; // Increase resolution for more accuracy
//     for (let i = 0; i < resolution; i++) {
//       let t1 = i / resolution;
//       let t2 = (i + 1) / resolution;
      
//       let x1 = curvePoint(curvePoints[0].x, curvePoints[1].x, curvePoints[2].x, curvePoints[3].x, t1);
//       let y1 = curvePoint(curvePoints[0].y, curvePoints[1].y, curvePoints[2].y, curvePoints[3].y, t1);
//       let x2 = curvePoint(curvePoints[0].x, curvePoints[1].x, curvePoints[2].x, curvePoints[3].x, t2);
//       let y2 = curvePoint(curvePoints[0].y, curvePoints[1].y, curvePoints[2].y, curvePoints[3].y, t2);
      
//       curveLength += dist(x1, y1, x2, y2);
//     }
    
//     // For each glyph, calculate its position on the curve
//     let xOffsets = [0];
//     textSize(style.fontSize || 18);
//     textAlign(CENTER);
//     for (let i = 1; i < str.length; i++) {
//       let prevCharWidth = textWidth(str.charAt(i - 1));
//       let charWidth = textWidth(str.charAt(i));
//       xOffsets[i] = xOffsets[i - 1] + (prevCharWidth + charWidth) / 2;
//     }

//     // console.log("drawing ", str, str.length)
//     // Draw each character along the curve
//     for (let k = 0; k < str.length; k++) {
//       // console.log("drawing ", str[k])
//       // console.log(k)
//       let centerOffs = xOffsets[k];
//       // if (centerOffs > curveLength) break; // Stop if the offset exceeds the curve length

//       let t = map(centerOffs, 0, curveLength, 0, 1);
//       let x = curvePoint(curvePoints[0].x, curvePoints[1].x, curvePoints[2].x, curvePoints[3].x, t);
//       let y = curvePoint(curvePoints[0].y, curvePoints[1].y, curvePoints[2].y, curvePoints[3].y, t);

//       // Get tangent (slope) at the current t
//       let tx = curveTangent(curvePoints[0].x, curvePoints[1].x, curvePoints[2].x, curvePoints[3].x, t);
//       let ty = curveTangent(curvePoints[0].y, curvePoints[1].y, curvePoints[2].y, curvePoints[3].y, t);
//       let angle = atan2(ty, tx);

//       // Draw the character at the calculated position, rotated along the tangent
//       push();
//       translate(x, y);
//       // console.log(x, y)
//       // textSize(200)
//       rotate(angle);
//       fill('red')
//       text(str.charAt(k), 0, 0);
//       pop();
//     }
//   }
// }

function createAlignedText(str, controlPoints, style) {
  if (str && str.length > 0 && controlPoints) {
    let glyphPositions = [];
    let curveLength = 0;
    
    // Calculate the total length of the curve by sampling it
    let resolution = 200; // Higher resolution gives more accurate length
    for (let i = 0; i < resolution; i++) {
      let t1 = i / resolution;
      let t2 = (i + 1) / resolution;

      let pos1 = getBezierPoint(controlPoints, t1);
      // console.log(pos1)
      let pos2 = getBezierPoint(controlPoints, t2);

      curveLength += dist(pos1.x, pos1.y, pos2.x, pos2.y);
    }

    console.log(curveLength)
    
    // For each glyph, calculate its position on the curve
    let xOffsets = [0];
    let fontSize1 = style != null && style.fontSize != null ? style.fontSize : 18 
    textSize(fontSize1);
    for (let i = 1; i < str.length; i++) {
      let prevCharWidth = textWidth(str.charAt(i - 1));
      let charWidth = textWidth(str.charAt(i));
      xOffsets[i] = xOffsets[i - 1] + (prevCharWidth + charWidth) / 2;
    }


    // Draw each character along the curve
    for (let i = 0; i < str.length; i++) {
      let centerOffs = xOffsets[i];
      if (centerOffs > curveLength) break; // Stop if the offset exceeds the curve length
      console.log("here")

      let t = map(centerOffs, 0, curveLength, 0, 1);
      let pos = getBezierPoint(controlPoints, t);

      // Get tangent (slope) at the current t
      let tangent = getBezierTangent(controlPoints, t);
      let angle = atan2(tangent.y, tangent.x);

      // Draw the character at the calculated position, rotated along the tangent
      push();
      translate(width/2, height/2);
      rotate(angle);
      text(str.charAt(i), 0, 0);
      pop();
    }
  }
}

// Helper function to calculate the Bezier point for any number of control points
function getBezierPoint(controlPoints, t) {
  let x = 0;
  let y = 0;
  let n = controlPoints.length - 1;
  for (let i = 0; i <= n; i++) {
    let coeff = binomialCoefficient(n, i) * pow(1 - t, n - i) * pow(t, i);
    x += coeff * controlPoints[i].x;
    y += coeff * controlPoints[i].y;
  }
  return createVector(x, y);
}

// Helper function to calculate the Bezier tangent for any number of control points
function getBezierTangent(controlPoints, t) {
  let x = 0;
  let y = 0;
  let n = controlPoints.length - 1;
  for (let i = 0; i <= n - 1; i++) {
    let coeff = binomialCoefficient(n - 1, i) * pow(1 - t, n - 1 - i) * pow(t, i);
    let dx = controlPoints[i + 1].x - controlPoints[i].x;
    let dy = controlPoints[i + 1].y - controlPoints[i].y;
    x += coeff * dx;
    y += coeff * dy;
  }
  return createVector(x, y);
}

// Calculate binomial coefficient
function binomialCoefficient(n, k) {
  let res = 1;
  if (k > n - k) k = n - k;
  for (let i = 0; i < k; i++) {
    res *= n - i;
    res /= i + 1;
  }
  return res;
}