let vid;

function setup() {
  createCanvas(400, 400);

  vid = select("#sample-video");
  console.log(vid);

  // vid.hide();

  // // Add a listener to ensure the video is ready before playing.
  // vid.elt.onloadeddata = () => {
  //   console.log("Video metadata loaded!");
  //   // Now you can safely call playback methods.
  // };
}

function draw() {
  background("whitesmoke");
  image(vid, 0, 0);
}

function mousePressed() {
  vid.loop();
}
