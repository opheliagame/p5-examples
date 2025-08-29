// Usage in p5.js
let videoRecorder;

// 「r」キーでrecordingを取るようにする、「s」キーでrecordingをしないようにする
function keyPressed() {
  if(videoRecorder == null) return 
  if(key === 'r' || key === 'R') {
    videoRecorder.startRecordingCycle()
  }
  if(key === 's' || key == 'S') {
    videoRecorder.stopRecordingCycle()
  }
}

function setup() {
  createCanvas(400, 400);
  
  // recorderを作成します・make a recorder
  // 記録間隔 = 5秒ごと recording interval = every 5 secs
  // 録音時間 = 1 秒 recordering duration = 1 sec
  videoRecorder = new P5Recorder(document.querySelector("canvas"), 5, 1); // Record every 5 seconds, for 1 second

  // 自分のsetupコードはここ your own setup code here
}

function draw() {
  // ここでsketchを書きます
  background(220);
  ellipse(mouseX, mouseY, 50, 50);
}