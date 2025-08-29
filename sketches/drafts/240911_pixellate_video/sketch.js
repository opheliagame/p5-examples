let shaderProgram;
let video;
let filterShader;
let playing;

let fragSrc = `precision highp float;

  // x,y coordinates, given from the vertex shader
  varying vec2 vTexCoord;

  // the canvas contents, given from filter()
  uniform sampler2D tex0;
  // other useful information from the canvas
  uniform vec2 texelSize;
  uniform vec2 canvasSize;
  
  uniform float res;


  void main() {
    vec2 vres = vec2(res, res/canvasSize.x * canvasSize.y);
    vec2 gridMidPixel = floor(vTexCoord * vres)/vres + 1.0/vres;

    // get the color at current pixel
    vec4 color = texture2D(tex0, gridMidPixel);
    
    // set the output color
    // color.b = 1.0;
    

    gl_FragColor = vec4(color.rgb, 1.0);
  }`;

function preload() {
  video = loadVideo("pandoraparkertrailer.mp4");
}

function setup() {
  // createCanvas(1600/2, 900/2, WEBGL);
  createCanvas(900 / 2, 1600 / 2, WEBGL);

  // Create a constraints object.
  // let constraints = {
  //   video: {
  //     mandatory: {
  //       minWidth: 1280/2,
  //       minHeight: 720/2
  //     },
  //     optional: [{ maxFrameRate: 10 }]
  //   },
  //   audio: false
  // };
  // video = createCapture(constraints)
  // video.hide()

  video = createVideo("videos/pandoraparkertrailer.mp4");
  // video = createVideo("videos/ryansolotrailer.mp4")
  // video = select("video");

  filterShader = createFilterShader(fragSrc);
}

function draw() {
  background(220);

  let videoWidth = video.width;
  let videoHeight = video.height;
  let aspect = videoHeight / videoWidth;

  filterShader.setUniform("res", 16);

  translate(-width / 2, -height / 2);
  image(video, 0, 0, width, width * aspect);
  image(video, 0, width * aspect, width, width * aspect);
  image(video, 0, width * aspect * 2, width, width * aspect);
  image(video, 0, width * aspect * 3, width, width * aspect);

  filter(filterShader);
}

function mousePressed() {
  // When the canvas is clicked, check to see if the videos are
  // paused or playing. If they are playing, pause the videos.
  if (playing) {
    video.pause();
  } else {
    // If they are paused, play the videos.
    video.loop();
  }

  // Change the playing value to the opposite boolean.
  playing = !playing;
}
