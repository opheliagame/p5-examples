
// not using

// // Function to draw the lines of text inside the box
// function drawTextInBox(lines, x, y, boxWidth, boxHeight) {
//   let lineHeight = textAscent() + textDescent();
//   let totalTextHeight = lines.length * lineHeight;

//   let startY = y + (boxHeight - totalTextHeight) / 2; // Center the text vertically

//   for (let i = 0; i < lines.length; i++) {
//     let offx = boxWidth / 2;
//     let offy = startY + i * lineHeight + lineHeight / lines.length / 2;
//     // fill('red')
//     // circle(x + offx, offy, 10)
//     // fill("black");
//     push()
//     translate(x + offx, offy)
// //     rotate(random(-Math.PI/12, Math.PI/12))
//     // text(lines[i], 0, 0);
//     drawTextWithPoints(lines[i]);
//     pop()
//   }
// }

// // Function to calculate appropriate text size to fit within the box
// function fitTextToBox(textContent, boxWidth, boxHeight) {
//   let size = 1; // Start with the smallest possible size
//   textSize(size);
//   let bounds = textBounds(textContent, boxX, boxY, size);

//   while (bounds.w < boxWidth && bounds.h < boxHeight) {
//     size++; // Incrementally increase the size
//     textSize(size);
//     bounds = textBounds(textContent, boxX, boxY, size);
//   }

//   return size - 1; // Return one size smaller to ensure it fits
// }

// // Function to measure text bounds (using p5's textWidth and approximation for height)
// function textBounds(textContent, x, y, size) {
//   textSize(size);
//   let w = textWidth(textContent);
//   let h = textAscent() + textDescent(); // Approximate height
//   return { w: w, h: h };
// }

// function processLargeArrayWithRAF(array) {
//   let index = 0;

//   function processNextFrame() {
//     let chunkSize = 100; // Process 100 items at a time

//     for (let i = 0; i < chunkSize && index < array.length; i++, index++) {
//       // Process each item in the chunk
//       // console.log(array[index]);

//       let value = fitTextToBox(array[index], boxWidth, boxHeight);
//       textSizeValues.push(value);
//     }

//     if (index < array.length) {
//       // Schedule the next chunk before the next frame
//       requestAnimationFrame(processNextFrame);
//     } else {
//       console.log("Processing complete!");
//     }
//   }

//   // Start processing
//   requestAnimationFrame(processNextFrame);
// }

// Break the text into lines and display them inside the bounding box
// let lines = breakTextIntoLines(currentDisplayText, boxWidth);
// fill("white");
// drawTextInBox(lines, boxX, boxY, boxWidth, boxHeight);

// // Function to calculate appropriate text size to fit within the box
// function fitTextToBox(textContent, boxWidth, boxHeight) {
//   let size = 1; // Start with the smallest possible size
//   g.textFont(font);
//   g.textSize(size);

//   let lines = breakTextIntoLines(textContent, boxWidth);
//   let totalHeight = lines.length * (g.textAscent() + g.textDescent());

//   while (totalHeight < boxHeight) {
//     size++; // Incrementally increase the size
//     g.textSize(size);
//     lines = breakTextIntoLines(textContent, boxWidth);
//     totalHeight = lines.length * (g.textAscent() + g.textDescent());
//   }

//   return size - 1; // Return one size smaller to ensure it fits
// }