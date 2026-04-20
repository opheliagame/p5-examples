let script = [
  "猫を 飼いたい",
  "フル出社 なので",
  "猫を 飼えない",
  "猫を 飼ったら",
  "やばいこと になる",
  "毎朝出かける時",
  "自分が寂しくなる",
  "毎朝出かける時",
  "猫ちゃんが寂しくなる",
  "出社しても",
  "寂しいので",
  "フォーカスできなくなる",
  "餌があっても",
  "寂しいので",
  "気持ちよくなくなる",
  "やばいこと になる",
  "猫を 飼ったら",
  "猫を 飼えない",
  "フル出社 なので",
  "猫を 飼いたい",
];
let index = 0;

let fontName = "Noto Sans JP";
let tSize = 64;
let seed = Math.random() * 10000;
let sh;
let t;
let textFbo, g;

function preload() {
  font = loadFont("/assets/Noto_Sans_JP/static/NotoSansJP-Regular.ttf");

  sh = loadShader("/assets/shader/shader.vert", "/assets/shader/shader.frag");
}

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);

  textFbo = createFramebuffer();
  g = createGraphics(width, height, P2D);
}

function draw() {
  background("gold");
  randomSeed(seed);
  t = millis() / 1000;

  // get current phrase
  if (frameCount % 100 == 0) {
    index++;
  }
  let phrase = script[index % script.length];

  // get current text size
  tSize = fitTextToBox(phrase, "", width, height, fontName, g);

  g.push();
  g.background("gold");
  g.textFont(fontName);
  g.textSize(tSize);
  g.fill("white");
  g.stroke("black");
  layoutText(phrase, tSize, 36, 32, width - 36, height - 32, g);
  g.pop();

  let img = g;
  sh.setUniform("tex", img);
  sh.setUniform("u_time", t);

  textFbo.begin();
  shader(sh);
  rectMode(CENTER);
  rect(0, 0, width - 36 * 2, height - 32 * 2);
  textFbo.end();

  push();
  scale(1, -1);
  translate(-width / 2, -height / 2);
  image(textFbo, 0, 0);
  pop();
}
