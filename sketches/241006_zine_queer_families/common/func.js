// display words in a text spaced out and tokenized with rita.js
function spaceOut(text1, g, isbgwhite = false, minTextSize, maxTextSize) {
  let can = g ?? this;

  var words = RiTa.tokenize(text1);
  // .filter(token => RiTa.isNoun(token));
  minTextSize = minTextSize != null ? minTextSize : 64 * 2.5;
  maxTextSize = maxTextSize != null ? maxTextSize : 100 * 2.5;

  can.push();
  let remw = g.width;
  let remh = g.height;
  can.textSize(minTextSize);
  can.translate(0, minTextSize);
  // remh = remh - minTextSize
  let currTextHeight = minTextSize;
  for (let i = 0; i < words.length; i++) {
    if (remh < minTextSize) {
      // console.log(i)
      continue;
    }

    let word = words[i];

    let space = floor(random(2, 3));
    let textHeight = random(minTextSize, maxTextSize);
    currTextHeight = textHeight > currTextHeight ? textHeight : currTextHeight;
    can.textSize(textHeight);
    let currw = can.textWidth(word);
    let w = can.textWidth(word + " ".repeat(space));

    if (remw < w) {
      let xoff = random(minTextSize, maxTextSize);
      can.translate(-(g.width - remw) + xoff, currTextHeight);
      remw = g.width - xoff;
      remh = remh - currTextHeight;
    }

    // BG RECT

    if (isbgwhite) {
      can.fill("white");
      can.noStroke();
      can.rectMode(CENTER);
      // for inside pages
      can.rect(w / 2, 0, w, textHeight);
    } else {
      // for front page
      let rc = random(palette);
      can.fill(rc);
      rc = random(palette);
      can.strokeWeight(3);
      can.stroke(rc);
      can.rect(0, 0, currw, textHeight);
    }

    // TEXT
    // let isNoun = RiTa.isNoun(word);
    // let c = isNoun ? "blue" : "whitesmoke";
    // let c = "white";
    // can.fill('black');
    // if (isNoun) {
    //   can.textFont("Playpen Sans");
    // } else {
    //   can.textFont("Mingzat");
    // }

    rc = random(palette);
    can.fill(rc);
    rc = random(palette);
    can.stroke(rc);
    can.translate(w / 2, 0);
    can.textAlign(CENTER, CENTER);
    can.text(word, 0, 0);

    can.translate(w / 2, 0);

    remw -= w;
  }
  can.pop();
}

// returns distorted vertices based on subrows X subcols grid
function getDistortedVertices(distortion, distortWidth, distortHeight, subdivisionRows, subdivisionCols, t=0) {
  let distortedVertices = [];
  // Precompute the distorted vertex positions
  for (let y = 0; y <= subdivisionRows; y++) {
    distortedVertices[y] = [];
    for (let x = 0; x <= subdivisionCols; x++) {
      // Calculate the base position of the vertex
      let xPos = map(
        x,
        0,
        subdivisionCols,
        -distortWidth / 2,
        distortWidth / 2
      );
      let yPos = map(
        y,
        0,
        subdivisionRows,
        -distortHeight / 2,
        distortHeight / 2
      );

      // // Apply consistent noise-based distortion
      // let dx = noise(x * 0.1, y * 0.1) * distortion;
      // let dy = noise(x * 0.1 + 100, y * 0.1) * distortion;
      // Apply modified noise-based distortion
      let dx = ((noise(x * 0.1, y * 0.1, t) - 0.5) * distortion) / 2; // Centered and scaled noise for x distortion
      let dy = ((noise(x * 0.1 + 100, y * 0.1, t) - 0.5) * distortion) / 2; // Centered and scaled noise for y distortion

      // Store the distorted vertex position
      distortedVertices[y][x] = createVector(xPos + dx, yPos + dy);
    }
  }

  return distortedVertices;
}

function wrapTexture(img, distortedVertices, subdivisionRows, subdivisionCols, g) {
  // Apply texture
  g.textureMode(NORMAL);
  g.texture(img);

  // Begin drawing the shape with a series of quads
  g.beginShape(TRIANGLES);

  for (let y = 0; y < subdivisionRows; y++) {
    for (let x = 0; x < subdivisionCols; x++) {
      // Get the distorted vertex positions from the array
      let v0 = distortedVertices[y][x]; // Top-left corner
      let v1 = distortedVertices[y][x + 1]; // Top-right corner
      let v2 = distortedVertices[y + 1][x + 1]; // Bottom-right corner
      let v3 = distortedVertices[y + 1][x]; // Bottom-left corner

      // // Assign UV coordinates to the vertices
      // let u0 = x / cols, v0_uv = y / rows;        // Top-left UV
      // let u1 = (x + 1) / cols, v1_uv = y / rows;  // Top-right UV
      // let u2 = (x + 1) / cols, v2_uv = (y + 1) / rows; // Bottom-right UV
      // let u3 = x / cols, v3_uv = (y + 1) / rows;  // Bottom-left UV

      // Assign UV coordinates to the vertices, ensuring full texture mapping
      let u0 = map(x, 0, subdivisionCols, 0, 1),
        v0_uv = map(y, 0, subdivisionRows, 0, 1); // Top-left UV
      let u1 = map(x + 1, 0, subdivisionCols, 0, 1),
        v1_uv = map(y, 0, subdivisionRows, 0, 1); // Top-right UV
      let u2 = map(x + 1, 0, subdivisionCols, 0, 1),
        v2_uv = map(y + 1, 0, subdivisionRows, 0, 1); // Bottom-right UV
      let u3 = map(x, 0, subdivisionCols, 0, 1),
        v3_uv = map(y + 1, 0, subdivisionRows, 0, 1); // Bottom-left UV

      // Draw the first triangle (v0, v1, v2)
      g.vertex(v0.x, v0.y, 0, u0, v0_uv); // Top-left corner
      g.vertex(v1.x, v1.y, 0, u1, v1_uv); // Top-right corner
      g.vertex(v2.x, v2.y, 0, u2, v2_uv); // Bottom-right corner

      // Draw the second triangle (v0, v2, v3)
      g.vertex(v0.x, v0.y, 0, u0, v0_uv); // Top-left corner
      g.vertex(v2.x, v2.y, 0, u2, v2_uv); // Bottom-right corner
      g.vertex(v3.x, v3.y, 0, u3, v3_uv); // Bottom-left corner
    }
  }

  g.endShape();
}
