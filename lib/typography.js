// Function to calculate appropriate text size to fit within the box using binary search
function fitTextToBox(
  textContent,
  separator,
  boxWidth,
  boxHeight,
  fontName,
  g,
) {
  // g.textFont(font); // Make sure the font is set
  g.textFont(fontName);

  let minSize = 1;
  let maxSize = 400; // Set an upper limit for the text size
  let bestSize = minSize;

  while (minSize <= maxSize) {
    let midSize = Math.floor((minSize + maxSize) / 2); // Find the midpoint size
    g.textSize(midSize);

    let lines = breakTextIntoLines(textContent, separator, boxWidth, g);

    // g.textSize(midSize);
    // textFont(font);
    // textSize(midSize);
    // let v = textAscent() + textDescent();
    let gv = g.textAscent() + g.textDescent();

    let totalHeight = lines.length * gv;

    // Debugging: Print current text size, total height, and box height
    // console.log(
    //   `Testing size: ${midSize}, Ascent + Descent: ${gv}, Total Height: ${totalHeight}, Box Height: ${boxHeight}`
    // );

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

// Function to break text into multiple lines based on the width of the bounding box
function breakTextIntoLines(textContent, separator, boxWidth, g) {
  let words = textContent.split(separator);
  if (separator == " ") {
    return words;
  }
  let lines = [];
  let currentLine = "";

  for (let i = 0; i < words.length; i++) {
    let testLine = currentLine + words[i] + " ";
    if (g.textWidth(testLine) < boxWidth) {
      currentLine = testLine;
    } else {
      lines.push(currentLine);
      currentLine = words[i] + " ";
    }
  }
  lines.push(currentLine.trim()); // Push the last line
  return lines;
}

function layoutText(text1, currentTextSize, x, y, w, h, g) {
  g.textAlign(LEFT, TOP);
  g.textSize(currentTextSize);
  // textFont(font)
  g.push();
  g.translate(x, y);
  // fill("yellow");
  // circle(0, 0, 20);
  let currw = 0;
  let currh = -currentTextSize;
  for (let i = 0; i < text1.length; i++) {
    let letter = text1[i];

    let metrics = g.textWidth(letter);
    let nexth = g.textAscent() + g.textDescent();

    if (currw + metrics >= w) {
      currw = 0;

      currh += nexth;
    }

    g.push();
    g.translate(currw, currh);
    // fill("red");
    // circle(0, 0, 20);
    drawText(letter, currentTextSize, g);
    g.pop();

    currw += metrics;
    // currh += nexth
  }
  g.pop();
}

function drawText(text1, currentTextSize, g) {
  g.textSize(currentTextSize);

  let w = g.textWidth(text1);
  let h = g.textAscent() + g.textDescent();
  // if(debug) rect(0, 0, w, h);
  g.fill("white");
  g.text(text1, 0, currentTextSize);
}

function drawTextWithPoints(text1, currentTextSize) {
  fill("white");
  // drawText(text1);

  // randomSeed(random())
  beginShape();
  const points = font.textToPoints(text1, 0, currentTextSize, currentTextSize, {
    sampleFactor: 0.3,
    simplifyThreshold: 0,
  });
  for (let p of points) {
    let voff = createVector(noise(p.x * 10), noise(p.y * 10));
    // let voff = createVector(0, 0);

    // circle(p.x+voff.x, p.y+voff.y, 5);
    stroke("whitesmoke");
    strokeWeight(2);
    point(p.x + voff.x, p.y + voff.y);
    // vertex(p.x + voff.x, p.y + voff.y);
  }
  endShape();
}
