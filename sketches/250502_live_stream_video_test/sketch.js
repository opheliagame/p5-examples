let videos = [];
let videoIndex = 0;
let streamUrls = [
  // St Ives Harbour Webcam | Classic Cottages
  "https://eu01-smr04-relay.ozolio.com/hls-live/_definst_/relay01.aidcb74.fd0.sm1.av2.mt0.at0.as0.dv0.sh2.rt23850.rc0.edge.basic.stream/chunklist_w218962220.m3u8",
  // Sloppy Joe's Live Bar Cam
  "https://use01-smr05-relay.ozolio.com/hls-roll/_definst_/mp4:ozsd/ozolio-media-library/7121/videos/c1-68b09ad64096b132555674.mp4/playlist.m3u8",

  // Don't work anymore, find a better way to find live webcam streams
  // Mr Ed's "Hi Mom" Bar Cam
  // "https://use01-smr03-relay.ozolio.com/hls-live/_definst_/relay01.hsnzdta.fd0.sm1.av2.mt0.at0.as0.dv0.sh2.rt4704.rc0.edge.basic.stream/playlist.m3u8",
  // Falcon Cam - Full Nest View https://www.ozolio.com/explore/YFMN00000B83
  // "https://use01-smr03-relay.ozolio.com/hls-live/_definst_/relay01.yfmncj6.fd0.sm1.av2.mt0.at0.as0.dv0.sh2.rt4704.rc0.edge.basic.stream/playlist.m3u8",
];

function setup() {
  createCanvas(windowWidth, windowHeight);

  for (let i = 0; i < streamUrls.length; i++) {
    let video = createVideo("example.mp4");
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
  background("black");

  if (videos.length == 0) return;

  if (frameCount % 60 == 0) {
    videoIndex = (videoIndex + 1) % videos.length;
  }

  let video = videos[videoIndex];
  image(video, 0, 0, width, height);

  // textAlign(CENTER, CENTER);
  // textSize(124);
  // fill("white");
  // text("sloppy joe", width / 2, height / 2);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
