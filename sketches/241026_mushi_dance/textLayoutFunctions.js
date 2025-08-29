
// Function to calculate appropriate text size to fit within the box using binary search
function fitTextToBox(textContent, boxWidth, boxHeight) {
  // textFont(font); // Make sure the font is set
  // textFont(fontName);

  let minSize = 1;
  let maxSize = 400; // Set an upper limit for the text size
  let bestSize = minSize;

  while (minSize <= maxSize) {
    let midSize = Math.floor((minSize + maxSize) / 2); // Find the midpoint size
    textSize(midSize);

    let lines = breakTextIntoLines(textContent, boxWidth);
    let gv = textAscent() + textDescent();
    let totalHeight = lines.length * gv;
    
    if (totalHeight <= boxHeight) {
      // If the text fits within the box, try a larger size
      bestSize = midSize;
      minSize = midSize + 1;
    } else {
      // If the text exceeds the box height, try a smaller size
      maxSize = midSize - 1;
    }
  }

  return bestSize; // Return the largest size that fits
}

function layoutText(text1, x, y, w, h, currentTextSize) {
  let layout = []

  textAlign(LEFT, TOP);
  textSize(currentTextSize);
  push();
  translate(x, y);
  let currw = 0;
  let currh = -currentTextSize;
  for (let i = 0; i < text1.length; i++) {
    let letter = text1[i];

    let metrics = textWidth(letter);
    let nexth = textAscent() + textDescent();

    if (currw + metrics >= w) {
      currw = 0;
      currh += nexth;
    }

    // push();
    // translate(currw, currh);
    layout.push({letter: letter, x: currw, y: currh})
    // drawText(letter, currentTextSize);
    // pop();

    currw += metrics;
  }
  pop();

  return layout
}

// Function to break text into multiple lines based on the width of the bounding box
function breakTextIntoLines(textContent, boxWidth) {
  let words = textContent.split("");
  let lines = [];
  let currentLine = "";

  for (let i = 0; i < words.length; i++) {
    let testLine = currentLine + words[i] + "";
    if (textWidth(testLine) < boxWidth) {
      currentLine = testLine;
    } else {
      lines.push(currentLine);
      currentLine = words[i] + "";
    }
  }
  lines.push(currentLine.trim()); // Push the last line
  return lines;
}

function drawText(text1, currentTextSize) {
  textSize(currentTextSize);

  // let w = textWidth(text1);
  // let h = textAscent() + textDescent();
  // if(debug) rect(0, 0, w, h);
  text(text1, 0, currentTextSize);
}

function drawTextWithPoints(text1) {

  beginShape();
  const points = font.textToPoints(text1, 0, currentTextSize, currentTextSize, {
    sampleFactor: 0.3,
    simplifyThreshold: 0,
  });
  for (let p of points) {
    let voff = createVector(noise(p.x * 10), noise(p.y * 10));

    stroke("whitesmoke");
    strokeWeight(2);
    point(p.x + voff.x, p.y + voff.y);
  }
  endShape();
}
