let video;

function setup() {
  createCanvas(1080 / 3, 1920 / 3);

  video = createVideo("../../assets/yoyogi-dance.mp4");
  video.hide();
  video.loop();
}

function draw() {
  tint(255, 80);
  image(video, 0, 0, width, height);
}

function mousePressed() {
  video.loop();
}
