let images = []
let filePaths = [
  "colon.png", "curly-brace-left.png", "curly-brace-right.png", "dash.png", "exclamation.png", "full-stop.png", "left-slash.png", "question-mark.png", "semicolon.png", "square-bracket-left.png", "square-bracket-right.png"
]

function preload() {
  for(let i = 0; i < filePaths.length; i++) {
    images.push(loadImage(`images/${filePaths[i]}`))
  }
}

function setup() {
  createCanvas(1600/1.5, 900/1.5);
// }

// function draw() {
  background(220);
  
  image(images[0], 0, 0)
  
}