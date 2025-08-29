// ✨ ✨ ✨ ✨ ✨ ✨ ✨ 
// original sketch by Shunsuke Takawo -> https://editor.p5js.org/takawo/sketches/hHbKBM9pD 

// for recording
let videoRecorder;
function keyPressed() {
  if(videoRecorder == null) return 
  if(key === 'r' || key === 'R') {
    videoRecorder.startRecordingCycle()
  }
  if(key === 's' || key == 'S') {
    videoRecorder.stopRecordingCycle()
  }
}

// text related parameters
function getRandomLengthSubstring(string) {
  // Get a random length (1 or 2)
  const maxLength = Math.min(2, string.length); // Max length is 2 or less if string is shorter
  const length = Math.floor(Math.random() * maxLength) + 1;
  return length;
}
function combineCharactersPreservingOrder(strings) {
  let combinedString = '';

  // Initialize an array to keep track of the remaining indices for each string
  const remainingIndices = strings.map(str => 0); // Start from the beginning of each string

  // Loop until all strings have been fully processed
  while (remainingIndices.some(index => index < strings[remainingIndices.indexOf(index)].length)) {
    for (let i = 0; i < strings.length; i++) {
      if (remainingIndices[i] < strings[i].length) {
        const str = strings[i];
        const length = getRandomLengthSubstring(str.slice(remainingIndices[i])); // Get the max length substring from the remaining part
        const substring = str.slice(remainingIndices[i], remainingIndices[i] + length); // Take the substring

        combinedString += substring; // Append to combined string
        remainingIndices[i] += length; // Move the index forward
      }
    }
  }

  return combinedString;
}
// Define the text strings
const strings = ['क्रिएटिवकोडिंग', 'creativecoding', 'クリエイティブコーディング'];
// Combine characters while preserving the original order
let newString = combineCharactersPreservingOrder(strings);
console.log(newString);
let text1 = 'क्रिएटिवकोडिंगcreativecodingクリエイティブコーディング'
let textToDisplay = text1.split("").sort((a, b) => Math.random() - 0.5).join("")
// let text1 = 'क्रिएटिवकोडिंग'
let text1Index = Math.floor(Math.random(text1.length))
let selectedThreshRandom, threshRandom 
let col1, col2, col3
let fontSize 


let movers = [];
let timeDuration = 300;
let time = 0;
let palette;
let spatialGrid;
let isBackgroundBlack 
let mushiImage

function preload() {
  mushiImage = loadImage('jinsanshibanmushi.png')
}

function setup() {
  // createCanvas(windowWidth, windowHeight);
  createCanvas(900, 1600);
  // recording interval = every 300 frames with 60 fps
  // recordering duration = 1 sec
  // pixelDensity(1)
  videoRecorder = new P5Recorder(document.querySelector("canvas"), 300/60, 30, 10); // Record every 5 seconds, for 1 second
  spatialGrid = new SpatialGrid(20, 20, width, height);

  
  reset();
  fontSize = fitTextToBox(text1, width-64, height-64)
}

function draw() {
  // background(palette[0]);
  // background(255);
  isBackgroundBlack = threshRandom < 0.5

  if(isBackgroundBlack) {
    background(0);
  }
  else {
    background('whitesmoke')
  }

  // GRID SETUP --------------
  spatialGrid.clear(); 
  // spatialGrid.draw(); 
  // Add particles to the grid
  for (let p of movers) {
    if (p.dead == false) {
      spatialGrid.addParticle(p);
    }
    for (let c of p.children) {
      if (c.dead == false) {
        spatialGrid.addParticle(c);
      }
    }
  }

  // DRAWING ------------
  drawLetters(selectedThreshRandom, 1)

  let img = text1Index < text1.length/2 ? mushiImage : null

  // Update and draw particles
  for (let p of movers) {
    if (p.dead) continue;

    p.update();
    checkCollisionsAndResolve(p);
    p.display(isBackgroundBlack, img);
  }

  drawLetters(selectedThreshRandom, 0.3)
  for(let p of movers) {
    if(threshRandom < 0.3) {
      p.display(isBackgroundBlack, img)
    }
  }


  time += 5;
  if (time > timeDuration) {
    reset();
  }
}

function checkCollisionsAndResolve(mover) {
  let iscolliding = spatialGrid.checkCollisions(mover);

  if (iscolliding) {
    spatialGrid.resolveAllCollisions(mover);
    // p.iscolliding = true;
  } else {
    // p.iscolliding = false;
  }
}

function drawLetters(r, threshold = 1) {
  textFont('Noto Sans')
  textAlign(LEFT, TOP);
  textStyle(BOLD)
  textSize(fontSize)
  strokeWeight(2)
  noStroke()
  // text(text1[text1Index], width/2, height/2)
  let layout = layoutText(newString, 0, 0, width-32, height-32, fontSize)
  
  // randomSeed(selectedThreshRandom)
  push();
  translate(32, 32);
  for(let i = 0; i < layout.length; i++) {
    let item = layout[i]
    if(strings[0].includes(item.letter)) {
      fill(col1)
    }
    else if(strings[1].includes(item.letter)) {
      fill(col2)
    }
    else if(strings[2].includes(item.letter)) {
      fill(col3)
    }

    if(isBackgroundBlack) {
      fill('white')
    }

    if(r < threshold) {
      if(isBackgroundBlack) {
        fill('white')
      }
  
    
      // textSize(random(fontSize*0.75, fontSize*1.5))
      text(item.letter, item.x, item.y+fontSize)
    } 
   
  }
  pop()
}


function reset() {
  time = 0;
  noiseSeed(frameCount);
  randomSeed(frameCount);
  movers = [];
  palette = random(colorPalettes);
  for (let i = 0; i < 6000; i++) {
    let x = random(width);
    let y = random(height);
    let mover = new Mover(x, y, random(5, 100), palette);

    spatialGrid.addParticle(mover);
    let iscolliding = spatialGrid.checkCollisions(mover);
    if (iscolliding == true) {
      spatialGrid.removeParticle(mover);
    } else {
      movers.push(mover);
    }
  }

  newString = combineCharactersPreservingOrder(strings)

  // console.log(movers.length);
  text1Index = floor(random(text1.length))
  threshRandom = random()
  selectedThreshRandom = random()
  col1 = palette[3]
  col2 = palette[1]
  col3 = palette[2]
}





