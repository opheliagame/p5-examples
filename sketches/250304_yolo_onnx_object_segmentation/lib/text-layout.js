class TextBox {
  /**
   * Creates a text box that renders text inside a box with proper sizing and alignment
   * @param {Object} options - Configuration options
   * @param {Number} options.x - X position of the box
   * @param {Number} options.y - Y position of the box
   * @param {Number} options.width - Width of the box
   * @param {Number} options.height - Height of the box
   * @param {Number} options.padding - Padding inside the box (default: 20)
   * @param {String} options.fontName - Font to use (default: "Arial")
   * @param {Number} options.fontSize - Initial font size (adjusted automatically to fit, default: 36)
   * @param {String} options.textColor - Text color (default: "white")
   * @param {String} options.boxColor - Box color (default: "transparent")
   * @param {String} options.boxBorderColor - Border color (default: "white")
   * @param {Number} options.boxBorderWeight - Border weight (default: 2)
   * @param {String} options.textAlign - Text alignment (default: "CENTER")
   * @param {Boolean} options.debug - Debug mode (default: false)
   */
  constructor(options = {}) {
    this.x = options.x || 0;
    this.y = options.y || 0;
    this.width = options.width || 400;
    this.height = options.height || 200;
    this.padding = options.padding || 20;
    this.fontName = options.fontName || "Arial";
    this.fontSize = options.fontSize || 36;
    this.textColor = options.textColor || "white";
    this.textStrokeColor = options.textStrokeColor || "white";
    this.textStrokeWeight = options.textStrokeWeight || 1;
    this.textStyle = options.textStyle || "NORMAL";
    this.boxColor = options.boxColor || "black";
    this.boxBorderColor = options.boxBorderColor || "white";
    this.boxBorderWeight = options.boxBorderWeight || 2;
    this.textAlign = options.textAlign || "CENTER";
    this.debug = options.debug || false;

    // Internal properties
    this.textAnimIndex = 0;
    this.currentText = "";
    this.textSizeCache = new Map(); // Cache for optimized text sizing
    this.lines = [];
    this.textIsFitted = false;
  }

  /**
   * Set the text to be displayed
   * @param {String} text - Text to display
   * @param {Boolean} animate - Whether to animate the text (default: false)
   * @param {Number} animationSpeed - Animation speed in frames (default: 6)
   */
  setText(text, animate = false, animationSpeed = 6) {
    this.fullText = text;
    this.shouldAnimate = animate;
    this.animationSpeed = animationSpeed;

    if (!animate) {
      this.textAnimIndex = text.length;
      this.currentText = text;
    } else {
      this.textAnimIndex = 0;
      this.currentText = "";
    }

    this.textIsFitted = false;
  }

  setTextStyle(options = {}) {
    this.textColor = options.textColor || "white";
    this.textStrokeColor = options.textStrokeColor || "white";
    this.textStyle = options.textStyle || "NORMAL";
    this.textStrokeWeight = options.textStrokeWeight || 1;
  }

  /**
   * Update the animation state
   */
  update() {
    if (this.shouldAnimate && this.textAnimIndex < this.fullText.length) {
      if (frameCount % this.animationSpeed === 0) {
        this.textAnimIndex++;
        this.currentText = this.fullText.substring(0, this.textAnimIndex);
        this.textIsFitted = false;
      }
    }
  }

  /**
   * Calculate the appropriate text size to fit within the box
   * @param {Object} g - P5 graphics object to draw on
   * @param {String} text - Text to measure
   * @returns {Number} Best font size that fits the box
   */
  fitTextToBox(g, text) {
    // Check cache first
    if (this.textSizeCache.has(text)) {
      return this.textSizeCache.get(text);
    }

    g.textFont(this.fontName);
    g.textStyle(this.textStyle);

    // Use binary search to find the best size
    let minSize = 1;
    let maxSize = 400; // Upper limit
    let bestSize = minSize;
    const boxWidth = this.width - this.padding * 2;
    const boxHeight = this.height - this.padding * 2;

    while (minSize <= maxSize) {
      const midSize = Math.floor((minSize + maxSize) / 2);
      g.textSize(midSize);

      // Break text into lines at the current font size
      const lines = this.breakTextIntoLines(g, text, "");
      const lineHeight = g.textAscent() + g.textDescent();
      const totalHeight = lines.length * lineHeight;

      if (totalHeight <= boxHeight) {
        // Text fits, try larger size
        bestSize = midSize;
        minSize = midSize + 1;
      } else {
        // Text too big, try smaller size
        maxSize = midSize - 1;
      }
    }

    // Cache result
    this.textSizeCache.set(text, bestSize);
    return bestSize;
  }

  /**
   * Break text into multiple lines based on box width
   * @param {Object} g - P5 graphics object to draw on
   * @param {String} text - Text to break into lines
   * @param {String} splitter - Character to split on (default: "")
   * @returns {Array} Array of lines
   */
  breakTextIntoLines(g, text, splitter = "") {
    const words = text.split(splitter);
    const lines = [];
    let currentLine = "";
    const boxWidth = this.width - this.padding * 2;

    for (let i = 0; i < words.length; i++) {
      const testLine = currentLine + words[i] + (splitter || "");
      if (g.textWidth(testLine) < boxWidth) {
        currentLine = testLine;
      } else {
        lines.push(currentLine);
        currentLine = words[i] + (splitter || "");
      }
    }

    if (currentLine.trim().length > 0) {
      lines.push(currentLine.trim());
    }

    return lines;
  }

  /**
   * Draw the box and text
   * @param {Object} g - P5 graphics object to draw on
   */
  draw(g) {
    g.push();

    // Update animation if needed
    this.update();

    // Fit text if needed
    if (!this.textIsFitted && this.currentText.length > 0) {
      this.fontSize = this.fitTextToBox(g, this.currentText);
      g.textSize(this.fontSize);
      this.lines = this.breakTextIntoLines(g, this.currentText, "");
      this.textIsFitted = true;
    }

    // Draw box
    g.strokeWeight(this.boxBorderWeight);
    if (this.boxBorderColor == "transparent") {
      g.stroke(255, 0);
    } else {
      g.stroke(this.boxBorderColor);
    }
    if (this.boxColor == "transparent") {
      g.fill(255, 0);
    } else {
      g.fill(this.boxColor);
    }
    g.rect(this.x, this.y, this.width, this.height);

    // Draw text
    g.textFont(this.fontName);
    g.textSize(this.fontSize);
    g.fill(this.textColor);
    g.stroke(this.textStrokeColor);
    g.strokeWeight(this.textStrokeWeight);
    g.textStyle(this.textStyle);

    const lineHeight = g.textAscent() + g.textDescent();
    const totalTextHeight = this.lines.length * lineHeight;
    const startY = this.y + (this.height - totalTextHeight) / 2;

    // Set alignment
    if (this.textAlign === "CENTER") {
      g.textAlign(CENTER, CENTER);
    } else if (this.textAlign === "LEFT") {
      g.textAlign(LEFT, CENTER);
    } else if (this.textAlign === "RIGHT") {
      g.textAlign(RIGHT, CENTER);
    }

    // Draw each line
    for (let i = 0; i < this.lines.length; i++) {
      const line = this.lines[i];
      const lineY = startY + i * lineHeight + lineHeight / 2;

      if (this.textAlign === "CENTER") {
        g.text(line, this.x + this.width / 2, lineY);
      } else if (this.textAlign === "LEFT") {
        g.text(line, this.x + this.padding, lineY);
      } else if (this.textAlign === "RIGHT") {
        g.text(line, this.x + this.width - this.padding, lineY);
      }

      // Debug mode - draw line boxes
      if (this.debug) {
        g.push();
        g.noFill();
        g.stroke("red");
        g.strokeWeight(1);
        g.rect(
          this.x + this.padding,
          lineY - lineHeight / 2,
          this.width - this.padding * 2,
          lineHeight
        );
        g.pop();
      }
    }

    g.pop();
  }

  /**
   * Check if animation is complete
   * @returns {Boolean} True if animation is complete
   */
  isAnimationComplete() {
    return !this.shouldAnimate || this.textAnimIndex >= this.fullText.length;
  }

  /**
   * Resize the box
   * @param {Number} width - New width
   * @param {Number} height - New height
   */
  resize(width, height) {
    this.width = width;
    this.height = height;
    this.textIsFitted = false; // Need to recalculate text size
  }
}
