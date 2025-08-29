let images = [];
let img1,
  img2,
  imgIndex = 0;
let textBox;
let fg;

let storyIndex = 0;
let storyLines = [
  "in many ways",
  "I am a corporate slave",
  "in many ways",
  "I am also an artist",
  "some times",
  "these two people",
  "sit next to each other",
  "and become friends",
  "on other days",
  "they dance in unrelenting abrasion",
  "and I burn myself",
  "how should I make peace",
  "with these compartments",
  "should I banish them",
  "from each other",
  "or should I",
  "grind",
  "blend",
  "mix",
  "until they unify",
  "and start looking like",
  "each other",
];

function preload() {
  images.push(loadImage("./images/Img_2025_04_04_11_00_01.png"));
  images.push(loadImage("./images/Img_2025_04_04_11_00_10.png"));
  images.push(loadImage("./images/Img_2025_04_04_11_00_14.jpeg"));
  images.push(loadImage("./images/Img_2025_04_04_11_00_57.jpeg"));
  images.push(loadImage("./images/Img_2025_04_04_11_01_03.jpeg"));
  images.push(loadImage("./images/Img_2025_04_04_11_01_12.jpeg"));
  images.push(loadImage("./images/Img_2025_04_04_11_01_19.jpeg"));
  images.push(loadImage("./images/Img_2025_04_04_11_01_25.jpeg"));
  images.push(loadImage("./images/Img_2025_04_04_11_01_33.jpeg"));
  images.push(loadImage("./images/Img_2025_04_04_11_01_39.jpeg"));
  images.push(loadImage("./images/Img_2025_04_04_11_01_46.jpeg"));
  images.push(loadImage("./images/Img_2025_04_04_11_01_53.jpeg"));
  images.push(loadImage("./images/Img_2025_04_04_11_02_00.jpeg"));
  images.push(loadImage("./images/Img_2025_04_04_11_02_06.jpeg"));
  images.push(loadImage("./images/Img_2025_04_04_11_02_15.jpeg"));
  images.push(loadImage("./images/Img_2025_04_04_11_02_11.jpeg"));
  images.push(loadImage("./images/Img_2025_04_04_11_02_21.jpeg"));
  images.push(loadImage("./images/Img_2025_04_04_11_02_26.jpeg"));
  images.push(loadImage("./images/Img_2025_04_04_11_02_31.jpeg"));
  images.push(loadImage("./images/Img_2025_04_04_11_02_35.jpeg"));
  images.push(loadImage("./images/Img_2025_04_04_11_02_40.jpeg"));
  images.push(loadImage("./images/Img_2025_04_04_11_02_45.jpeg"));
  images.push(loadImage("./images/Img_2025_04_04_11_02_50.jpeg"));
  images.push(loadImage("./images/Img_2025_04_04_11_02_54.jpeg"));
  images.push(loadImage("./images/Img_2025_04_04_11_02_59.jpeg"));
  images.push(loadImage("./images/Img_2025_04_04_11_03_03.jpeg"));
  images.push(loadImage("./images/Img_2025_04_04_11_03_08.jpeg"));
  images.push(loadImage("./images/Img_2025_04_04_11_03_12.jpeg"));
  images.push(loadImage("./images/Img_2025_04_04_11_03_22.jpeg"));
  images.push(loadImage("./images/Img_2025_04_04_11_03_27.jpeg"));
  images.push(loadImage("./images/Img_2025_04_04_11_03_34.jpeg"));
  images.push(loadImage("./images/Img_2025_04_04_11_03_38.jpeg"));
  images.push(loadImage("./images/Img_2025_04_04_11_03_43.jpeg"));
  images.push(loadImage("./images/Img_2025_04_04_11_03_47.jpeg"));
  images.push(loadImage("./images/Img_2025_04_04_11_03_53.jpeg"));
  images.push(loadImage("./images/Img_2025_04_04_11_03_57.jpeg"));
  images.push(loadImage("./images/Img_2025_04_04_11_04_03.jpeg"));
  images.push(loadImage("./images/Img_2025_04_04_11_04_09.jpeg"));
  images.push(loadImage("./images/Img_2025_04_04_11_04_14.jpeg"));
  images.push(loadImage("./images/Img_2025_04_04_11_04_18.jpeg"));
  images.push(loadImage("./images/Img_2025_04_04_11_04_23.jpeg"));
  images.push(loadImage("./images/Img_2025_04_04_11_04_28.jpeg"));
  images.push(loadImage("./images/Img_2025_04_04_11_04_32.jpeg"));
  images.push(loadImage("./images/Img_2025_04_04_11_04_36.jpeg"));
  images.push(loadImage("./images/Img_2025_04_04_11_04_41.jpeg"));
  images.push(loadImage("./images/Img_2025_04_04_11_04_45.jpeg"));
  images.push(loadImage("./images/Img_2025_04_04_11_04_50.jpeg"));
  images.push(loadImage("./images/Img_2025_04_04_11_04_54.jpeg"));
  images.push(loadImage("./images/Img_2025_04_04_11_05_00.jpeg"));
  images.push(loadImage("./images/Img_2025_04_04_11_05_05.jpeg"));
  images.push(loadImage("./images/Img_2025_04_04_11_05_10.jpeg"));
  images.push(loadImage("./images/Img_2025_04_04_11_05_14.jpeg"));
  images.push(loadImage("./images/Img_2025_04_04_11_05_20.jpeg"));
  images.push(loadImage("./images/Img_2025_04_04_11_05_24.jpeg"));
  images.push(loadImage("./images/Img_2025_04_04_11_05_29.jpeg"));
  images.push(loadImage("./images/Img_2025_04_04_11_05_34.jpeg"));
  images.push(loadImage("./images/Img_2025_04_04_11_05_39.jpeg"));
  images.push(loadImage("./images/Img_2025_04_04_11_28_05.jpeg"));
  images.push(loadImage("./images/Img_2025_04_04_11_28_12.jpeg"));
  images.push(loadImage("./images/Img_2025_04_04_11_28_19.jpeg"));
  images.push(loadImage("./images/Img_2025_04_04_11_28_24.jpeg"));
  images.push(loadImage("./images/Img_2025_04_04_11_28_29.jpeg"));
  images.push(loadImage("./images/Img_2025_04_04_11_28_34.jpeg"));
  images.push(loadImage("./images/Img_2025_04_04_11_28_39.jpeg"));
  images.push(loadImage("./images/Img_2025_04_04_11_28_43.jpeg"));
  images.push(loadImage("./images/Img_2025_04_04_11_28_48.jpeg"));
  images.push(loadImage("./images/Img_2025_04_04_11_28_52.jpeg"));
  images.push(loadImage("./images/Img_2025_04_04_11_28_57.jpeg"));
  images.push(loadImage("./images/Img_2025_04_04_11_29_01.jpeg"));
  images.push(loadImage("./images/Img_2025_04_04_11_29_06.jpeg"));
  images.push(loadImage("./images/Img_2025_04_04_11_29_10.jpeg"));
  images.push(loadImage("./images/Img_2025_04_04_11_29_14.jpeg"));
  images.push(loadImage("./images/Img_2025_04_04_11_29_18.jpeg"));
  images.push(loadImage("./images/Img_2025_04_04_11_29_23.jpeg"));
  images.push(loadImage("./images/Img_2025_04_04_11_29_27.jpeg"));
  images.push(loadImage("./images/Img_2025_04_04_11_29_31.jpeg"));
  images.push(loadImage("./images/Img_2025_04_04_11_29_36.jpeg"));
  images.push(loadImage("./images/Img_2025_04_04_11_29_40.jpeg"));
  images.push(loadImage("./images/Img_2025_04_04_11_29_44.jpeg"));
  images.push(loadImage("./images/Img_2025_04_04_11_29_48.jpeg"));
  images.push(loadImage("./images/Img_2025_04_04_11_29_53.jpeg"));
  images.push(loadImage("./images/Img_2025_04_04_11_29_58.jpeg"));
  images.push(loadImage("./images/Img_2025_04_04_11_30_06.jpeg"));
  images.push(loadImage("./images/Img_2025_04_04_11_30_15.jpeg"));
  images.push(loadImage("./images/Img_2025_04_04_11_30_21.jpeg"));
  images.push(loadImage("./images/Img_2025_04_04_11_30_25.jpeg"));
  images.push(loadImage("./images/Img_2025_04_04_11_30_29.jpeg"));
  images.push(loadImage("./images/Img_2025_04_05_08_24_56.jpeg"));
  images.push(loadImage("./images/Img_2025_04_05_08_25_15.jpeg"));
  images.push(loadImage("./images/Img_2025_04_05_08_25_20.jpeg"));
  images.push(loadImage("./images/Img_2025_04_05_08_25_25.jpeg"));
  images.push(loadImage("./images/Img_2025_04_05_08_25_30.jpeg"));
  images.push(loadImage("./images/Img_2025_04_05_08_25_35.jpeg"));
  images.push(loadImage("./images/Img_2025_04_05_08_25_40.jpeg"));
  images.push(loadImage("./images/Img_2025_04_05_08_25_46.jpeg"));
  images.push(loadImage("./images/Img_2025_04_05_08_25_51.jpeg"));
  images.push(loadImage("./images/Img_2025_04_05_08_25_56.jpeg"));
  images.push(loadImage("./images/Img_2025_04_05_08_26_03.jpeg"));
  images.push(loadImage("./images/Img_2025_04_05_08_26_08.jpeg"));
  images.push(loadImage("./images/Img_2025_04_05_08_26_14.jpeg"));
  images.push(loadImage("./images/Img_2025_04_05_08_26_18.jpeg"));
  images.push(loadImage("./images/Img_2025_04_05_08_26_23.jpeg"));
  images.push(loadImage("./images/Img_2025_04_05_08_26_28.jpeg"));
  images.push(loadImage("./images/Img_2025_04_05_08_26_32.jpeg"));
  images.push(loadImage("./images/Img_2025_04_05_08_26_37.jpeg"));
  images.push(loadImage("./images/Img_2025_04_05_08_26_42.jpeg"));
  images.push(loadImage("./images/Img_2025_04_05_08_26_47.jpeg"));
  images.push(loadImage("./images/Img_2025_04_05_08_26_51.jpeg"));
  images.push(loadImage("./images/Img_2025_04_05_08_26_57.jpeg"));
  images.push(loadImage("./images/Img_2025_04_05_08_27_01.jpeg"));
  images.push(loadImage("./images/Img_2025_04_05_08_27_06.jpeg"));
  images.push(loadImage("./images/Img_2025_04_05_08_27_11.jpeg"));
  images.push(loadImage("./images/Img_2025_04_05_08_27_20.jpeg"));
  images.push(loadImage("./images/Img_2025_04_05_08_27_15.jpeg"));
  images.push(loadImage("./images/Img_2025_04_05_08_27_25.jpeg"));
  images.push(loadImage("./images/Img_2025_04_05_08_27_29.jpeg"));
  images.push(loadImage("./images/Img_2025_04_05_08_27_34.jpeg"));
  images.push(loadImage("./images/Img_2025_04_05_08_27_39.jpeg"));
  images.push(loadImage("./images/Img_2025_04_05_08_27_53.jpeg"));
  images.push(loadImage("./images/Img_2025_04_05_08_27_58.jpeg"));
  images.push(loadImage("./images/Img_2025_04_05_08_28_03.jpeg"));
  images.push(loadImage("./images/Img_2025_04_05_08_28_09.jpeg"));
  images.push(loadImage("./images/Img_2025_04_05_08_28_19.jpeg"));
  images.push(loadImage("./images/Img_2025_04_05_08_28_24.jpeg"));
  images.push(loadImage("./images/Img_2025_04_05_08_28_28.jpeg"));
  images.push(loadImage("./images/Img_2025_04_05_08_28_33.jpeg"));
  images.push(loadImage("./images/Img_2025_04_05_08_28_37.jpeg"));
  images.push(loadImage("./images/Img_2025_04_05_08_28_42.jpeg"));
  images.push(loadImage("./images/Img_2025_04_05_08_28_47.jpeg"));
  images.push(loadImage("./images/Img_2025_04_05_08_28_56.jpeg"));
  images.push(loadImage("./images/Img_2025_04_05_08_29_01.jpeg"));
  images.push(loadImage("./images/Img_2025_04_05_08_28_52.jpeg"));
  images.push(loadImage("./images/Img_2025_04_05_08_29_07.jpeg"));
  images.push(loadImage("./images/Img_2025_04_05_08_29_15.jpeg"));
  images.push(loadImage("./images/Img_2025_04_05_08_29_19.jpeg"));
  images.push(loadImage("./images/Img_2025_04_05_08_29_25.jpeg"));
  images.push(loadImage("./images/Img_2025_04_05_08_29_30.jpeg"));
  images.push(loadImage("./images/Img_2025_04_05_08_29_35.jpeg"));
  images.push(loadImage("./images/Img_2025_04_05_08_29_40.jpeg"));
  images.push(loadImage("./images/Img_2025_04_05_08_29_45.jpeg"));
  images.push(loadImage("./images/Img_2025_04_05_08_29_51.jpeg"));
  images.push(loadImage("./images/Img_2025_04_05_08_29_57.jpeg"));
  images.push(loadImage("./images/Img_2025_04_05_08_30_03.jpeg"));
  images.push(loadImage("./images/Img_2025_04_05_08_30_08.jpeg"));
  images.push(loadImage("./images/Img_2025_04_05_08_30_14.jpeg"));
  images.push(loadImage("./images/Img_2025_04_05_08_30_18.jpeg"));
  images.push(loadImage("./images/Img_2025_04_05_08_30_23.jpeg"));
  images.push(loadImage("./images/Img_2025_04_05_08_30_29.jpeg"));
  images.push(loadImage("./images/Img_2025_04_05_08_30_33.jpeg"));
  images.push(loadImage("./images/Img_2025_04_05_08_30_38.jpeg"));
  images.push(loadImage("./images/Img_2025_04_05_08_30_43.jpeg"));
  images.push(loadImage("./images/Img_2025_04_05_08_30_47.jpeg"));
  images.push(loadImage("./images/Img_2025_04_05_08_30_53.jpeg"));
  images.push(loadImage("./images/Img_2025_04_05_08_30_58.jpeg"));
}

function setup() {
  createCanvas(864 / 1.8, 1537 / 1.8);
  fg = createGraphics(width, height);

  textBox = new TextBox({
    x: 0,
    y: 40,
    width: width,
    height: height - 40 - 15,
  });
  // textBox = new TextBox({
  //   x: 0,
  //   y: 0,
  //   width: width,
  //   height: height,
  // });

  console.log(`loaded ${images.length} images`);

  img1 = images[imgIndex];
  img2 = images[images.length - imgIndex - 1];
}

function draw() {
  if (frameCount % 15 == 0) {
    imgIndex = (imgIndex + 1) % images.length;
    img1 = images[imgIndex];
    img2 = images[images.length - imgIndex - 1];
  }
  if (frameCount % 100 == 0) {
    textBox = new TextBox({
      x: 0,
      y: 40,
      width: width,
      height: height - 40 - 15,
    });
    textBox.setText(storyLines[storyIndex]);
    storyIndex = (storyIndex + 1) % storyLines.length;
  }

  // background
  image(img1, 0, 0, width, height);

  // foreground mask
  fg.image(img2, 0, 0, width, height);
  let g = getMask();
  fg.mask(g);
  image(fg, 0, 0, width, height);

  // text with stroke

  textBox.setTextStyle({
    textStyle: "BOLD",
    textStrokeWeight: 2,
    textStrokeColor: "white",
    textColor: "transparent",
  });
  textBox.draw(this);
}

function getMask() {
  let g = createGraphics(width, height);

  // g.fill(255);
  g.textStyle(g.BOLD);
  // g.text('a', g.width/2, g.height/2)

  textBox.setTextStyle({
    textStyle: "BOLD",
    textStrokeColor: "white",
    textColor: "white",
  });
  textBox.draw(g);

  return g.get();
}
