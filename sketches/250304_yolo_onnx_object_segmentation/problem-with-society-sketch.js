let video,
  canvasForInference,
  objects = [];
let index = 0;
let canvasForObjectMask,
  currentClips = [];

function setup() {
  createCanvas(900 / 2, 1600 / 2);
  pixelDensity(1);

  // background video stuff
  canvasForInference = createGraphics(
    height,
    width,
    document.getElementById("canvas-for-inference")
  );
  video = createVideo("./assets/morning-bike-ride-lucknow.mp4");
  video.hide();

  canvasForObjectMask = createGraphics(width, height);

  // overlay text on video
  textBox = new TextBox({
    x: 0,
    y: 0,
    width: width,
    height: height,
    textColor: "white",
  });
  textBox.setText(messages[index]);

  background("black");
  textSize(24);
}

function draw() {
  canvasForInference.image(
    video,
    0,
    0,
    canvasForInference.width,
    canvasForInference.height
  );

  // noFill();
  // rect(0, 0, width, height);

  // tint("red");
  // image(video, 0, 0, width, height / 3);
  // image(video, 0, height / 3, width, height / 3);
  // image(video, 0, (height / 3) * 2, width, height / 3);

  // overlay text
  if (frameCount % 100 == 0) {
    index = (index + 1) % messages.length;
    textBox = new TextBox({
      x: 0,
      y: 0,
      width: width,
      height: height,
      textColor: "white",
    });
    textBox.setText(messages[index]);
  }

  currentClips = [];
  objects = [];
  for (let i = 0; i < window.boxes.length; i++) {
    let box = window.boxes[i];
    let [x1, y1, x2, y2, label] = box;

    let detectedObject = canvasForInference.get(x1, y1, x2 - x1, y2 - y1);
    let y1m = map(y1, 0, width, 0, height / 3),
      y2m = map(y2, 0, width, 0, height / 3),
      yhm = y2m - y1m;

    currentClips.push(
      [x1, y1m, x2 - x1, yhm],
      [x1, y1m * 2, x2 - x1, yhm * 2],
      [x1, y1m * 3, x2 - x1, yhm * 3]
    );
    objects.push(
      [detectedObject, label],
      [detectedObject, label],
      [detectedObject, label]
    );
  }

  background("black");

  // console.log(currentClips);
  // console.log(objects);
  tint("red");
  imageMode(CORNER);
  image(video, 0, 0, width, height / 3);
  image(video, 0, height / 3, width, height / 3);
  image(video, 0, (height / 3) * 2, width, height / 3);
  textBox.draw(this); // Pass 'this' as the graphics context

  canvasForObjectMask = createGraphics(width, height);
  canvasForObjectMask.background(255, 0);
  if (currentClips.length > 0) {
    canvasForObjectMask.beginClip();
    for (let i = 0; i < currentClips.length; i++) {
      let clip = currentClips[i];

      canvasForObjectMask.rect(clip[0], clip[1], clip[2], clip[3]);
    }

    canvasForObjectMask.endClip();

    canvasForObjectMask.noTint();
    for (let i = 0; i < objects.length; i++) {
      let obj = objects[i];
      let clip = currentClips[i];

      canvasForObjectMask.image(
        obj[0],
        clip[0],
        clip[1],
        clip[2] * 1.2,
        clip[3] * 1.2
      );
      fill("blue");
      text(obj[1], clip[0], clip[1]);
    }

    textBox.draw(canvasForObjectMask, "red"); // Pass 'this' as the graphics context
  }

  noTint();
  image(canvasForObjectMask, 0, 0, width, height);
  // noFill();
  // rect(0, 0, width, height);

  // if (frameCount == 200) {
  //   noLoop();
  // }
}

function mousePressed() {
  video.loop();
}

let messages = [
  "trying to register algorave as a trademark?",
  "india has lot of problems when it comes to people (fake djs / movie types / venue types) trying to take over the scene",
  "think its best for someone to take ownership of it in somewhat legal terms just the ensure algorave guidelines are maintained",
  "so basically to ensure things are safe and sound for the artists and the crowd thought it might help",
  "a completely bizarre argument",
  "india is very wierd",
  "This is not funny. Cease and desist this action.",
  "well you get trademark after a year or so .... just application filed for now",
  "in any case it would be better if someone from india   country holds the trademark  and acts as poc, legal matters which are wierd",
  "Bizarre",
];

let guidelines = [
  "Algorave is not a protected brand or franchise",
  "Algorave is free culture so be careful with any sponsorship or institutional alignment",
  "Use Algorave to lift each other up",
  "Try to have a diverse lineup, thinking about e.g. gender, ethnicity, class, age, belief/non-belief, and education",
  "To further support inclusivity in audiences, algorave events should consider affordability",
  "Algoraves should be safe spaces, consider having a code of conduct to promote accessibility",
  "By all means, please go ahead and host/promote an Algorave!",
  "And have fun",
];

messages = [...guidelines, ...messages, ...guidelines];
