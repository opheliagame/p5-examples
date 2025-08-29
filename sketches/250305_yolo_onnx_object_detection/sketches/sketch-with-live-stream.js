let videos = [];
let videoIndex = 0;
let foundObjects = [];

// https://www.ozolio.com/
let streamUrls = [
  // St Ives Harbour Webcam | Classic Cottages
  "https://eu01-smr04-relay.ozolio.com/hls-live/_definst_/relay01.aidcb74.fd0.sm1.av2.mt0.at0.as0.dv0.sh2.rt4704.rc0.edge.basic.stream/chunklist_w872149454.m3u8",
  // Sloppy Joe's Live Bar Cam
  "https://usw01-smr03-relay.ozolio.com/hls-live/_definst_/relay01.eboldpj.fd0.sm1.av2.mt0.at0.as0.dv0.sh2.rt4704.rc0.edge.basic.stream/chunklist_w213087066.m3u8",
  // Mr Ed's "Hi Mom" Bar Cam
  "https://use01-smr03-relay.ozolio.com/hls-live/_definst_/relay01.hsnzdta.fd0.sm1.av2.mt0.at0.as0.dv0.sh2.rt4704.rc0.edge.basic.stream/playlist.m3u8",
  // Falcon Cam - Full Nest View https://www.ozolio.com/explore/YFMN00000B83
  "https://use01-smr03-relay.ozolio.com/hls-live/_definst_/relay01.yfmncj6.fd0.sm1.av2.mt0.at0.as0.dv0.sh2.rt4704.rc0.edge.basic.stream/playlist.m3u8",
  // Waaban Crossing
  "https://usw01-smr05-relay.ozolio.com/hls-live/_definst_/relay01.nwhoev7.fd0.sm1.av2.mt0.at0.as0.dv0.sh2.rt4704.rc0.edge.basic.stream/chunklist_w66213191.m3u8",
  // Beach Bar Camera
  "https://usw01-smr05-relay.ozolio.com/hls-live/_definst_/relay01.awjyeqm.fd0.sm1.av2.mt0.at0.as0.dv0.sh2.rt4704.rc0.edge.basic.stream/chunklist_w1642979400.m3u8",
];

// YOLO OBJECT DETECTION
let canvasForInference;

function setup() {
  createCanvas(windowWidth, windowHeight);
  pixelDensity(1);
  background("black");

  canvasForInference = createGraphics(
    windowWidth,
    windowHeight,
    P2D,
    document.getElementById("canvas-for-inference")
  );
  canvasForInference.pixelDensity(1);

  for (let i = 0; i < streamUrls.length; i++) {
    let video = createVideo([]);
    video.hide(); // Hide the default HTML video element

    let streamUrl = streamUrls[i];
    if (Hls.isSupported()) {
      hls = new Hls();
      hls.loadSource(streamUrl);
      hls.attachMedia(video.elt);
      hls.on(Hls.Events.MANIFEST_PARSED, function () {
        video.elt.play();
      });
    } else if (video.elt.canPlayType("application/vnd.apple.mpegurl")) {
      video.elt.src = streamUrl;
      video.elt.play();
    }

    videos.push(video);
  }
}

function draw() {
  if (videos.length == 0) return;

  if (frameCount % 30 == 0) {
    videoIndex = (videoIndex + 1) % videos.length;
  }

  let video = videos[videoIndex];
  canvasForInference.image(
    video,
    0,
    0,
    canvasForInference.width,
    canvasForInference.height
  );

  background(0, 10);
  // image(canvasForInference, 0, 0, width, height);
  for (let box of window.boxes) {
    let [x1, y1, x2, y2, label] = box;
    let w = x2 - x1;
    let h = y2 - y1;
    // let frame = canvasForInference.get(0, 0, width, height);
    let detectedObject = canvasForInference.get(x1, y1, x2 - x1, y2 - y1);

    // fill("red");
    // rect(x1, y1, x2 - x1, y2 - y1);
    image(detectedObject, x1 - w / 2, y1 - h / 2, w * 2, h * 2);

    foundObjects.push(label);
    foundObjects = [...new Set(foundObjects)];
  }
  if (window.boxes.length > 0) {
    fill("red");
    circle(10, 10, 8);
  }
  for (let i = 0; i < foundObjects.length; i++) {
    text(foundObjects[i], 4, 12 + 14 * (i + 1));
  }

  // draw entire video stream with red tint and highlight object detection with no tint and box with blue object class name
  // background("black");
  // tint("red");
  // image(video, 0, 0, width, height);
  // for (let box of window.boxes) {
  //   let [x1, y1, x2, y2, label] = box;
  //   let detectedObject = canvasForInference.get(x1, y1, x2 - x1, y2 - y1);
  //   noTint();
  //   image(detectedObject, x1, y1, x2 - x1, y2 - y1);
  //   fill("blue");
  //   text(label, x1, y1);
  // }
  // noTint();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  background("black");

  for (let box of window.boxes) {
    let [x1, y1, x2, y2, label] = box;
    let detectedObject = canvasForInference.get(x1, y1, x2 - x1, y2 - y1);

    // fill("red");
    // rect(x1, y1, x2 - x1, y2 - y1);
    image(detectedObject, x1, y1, x2 - x1, y2 - y1);

    foundObjects.push(label);
    foundObjects = [...new Set(foundObjects)];
  }

  if (window.boxes.length > 0) {
    fill("red");
    circle(10, 10, 8);
  }
  for (let i = 0; i < foundObjects.length; i++) {
    text(foundObjects[i], 2, 8 + 12 * (i + 1));
  }
}
