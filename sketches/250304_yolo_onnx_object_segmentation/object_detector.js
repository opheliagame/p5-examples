const worker = new Worker("worker.js");
let boxes = [];
window.boxes = boxes;
let interval;
let busy = false;
window.onload = () => {
  const canvas = document.querySelector("#canvas-for-inference");
  console.log(canvas);
  // canvas.width = video.videoWidth;
  // canvas.height = video.videoHeight;
  // const context = canvas.getContext("2d");
  console.log("start drawing boxes");

  interval = setInterval(() => {
    window.boxes = boxes;
    const input = prepare_input(canvas);
    if (!busy) {
      worker.postMessage(input);
      busy = true;
    }
  }, 30);
};

worker.onmessage = (event) => {
  const output = event.data;
  const canvasElement = document.querySelector("#canvas-for-inference");
  // boxes = process_object_detection_output(output, canvas.width, canvas.height);
  boxes = process_object_segmentation_output(output);
  // console.log("received boxes");
  // console.log(boxes);
  busy = false;
};

// const videoElement = document.querySelector("video");
// videoElement.addEventListener("pause", () => {
//   clearInterval(interval);
// });

// const playBtn = document.getElementById("play");
// const pauseBtn = document.getElementById("pause");
// playBtn.addEventListener("click", () => {
//   videoElement.play();
// });
// pauseBtn.addEventListener("click", () => {
//   videoElement.pause();
// });

function prepare_input(img) {
  const canvas = document.createElement("canvas");
  canvas.width = 640;
  canvas.height = 640;
  const context = canvas.getContext("2d");
  context.drawImage(img, 0, 0, 640, 640);
  const data = context.getImageData(0, 0, 640, 640).data;
  const red = [],
    green = [],
    blue = [];
  for (let index = 0; index < data.length; index += 4) {
    red.push(data[index] / 255);
    green.push(data[index + 1] / 255);
    blue.push(data[index + 2] / 255);

    // if (data[index] != 0) {
    //   console.log("true");
    // }
  }
  return [...red, ...green, ...blue];
}

function process_object_segmentation_output1(output) {
  console.log(`got: ${output.width} ${output.height} ${output.colorSpace}`);

  let canvasElement = document.querySelector("#temp-canvas");
  let ctx = canvasElement.getContext("2d");
  ctx.putImageData(output, 0, 0);

  let destCanvasElement = document.querySelector("#segmentation-canvas");
  let ctx2 = destCanvasElement.getContext("2d");
  ctx2.clearRect(0, 0, 900 / 2, 1600 / 2);
  ctx2.drawImage(canvasElement, 0, 0, 900 / 2, 1600 / 2);
}

function process_object_segmentation_output(output) {
  console.log(`got: ${output.length}`);
  console.log("putting image data");
  let canvasElement = document.querySelector("#temp-canvas");
  let ctx = canvasElement.getContext("2d");
  let resultImageData = ctx.createImageData(160, 160);

  function sigmoid(z) {
    return 1 / (1 + Math.exp(-z));
  }

  for (let index = 0; index < resultImageData.data.length; index += 4) {
    resultImageData[index + 0] = sigmoid(output[index + 0]) > 0.5 ? 255 : 0;
    resultImageData[index + 1] = sigmoid(output[index + 1]) > 0.5 ? 255 : 0;
    resultImageData[index + 2] = sigmoid(output[index + 2]) > 0.5 ? 255 : 0;
    resultImageData[index + 3] = sigmoid(output[index + 3]) > 0.5 ? 255 : 0;
  }

  ctx.putImageData(resultImageData, 0, 0);
  // ctx.fillStyle = "blue";
  // ctx.fillRect(0, 0, 50, 50);

  let destCanvasElement = document.querySelector("#segmentation-canvas");
  let ctx2 = destCanvasElement.getContext("2d");
  ctx2.clearRect(0, 0, 900 / 2, 1600 / 2);
  ctx2.drawImage(canvasElement, 0, 0, 900 / 2, 1600 / 2);
}

function process_object_detection_output(output, img_width, img_height) {
  let boxes = [];
  for (let index = 0; index < 8400; index++) {
    const [class_id, prob] = [...Array(yolo_classes.length).keys()]
      .map((col) => [col, output[8400 * (col + 4) + index]])
      .reduce((accum, item) => (item[1] > accum[1] ? item : accum), [0, 0]);
    if (prob < 0.5) {
      continue;
    }
    const label = yolo_classes[class_id];
    const xc = output[index];
    const yc = output[8400 + index];
    const w = output[2 * 8400 + index];
    const h = output[3 * 8400 + index];
    const x1 = ((xc - w / 2) / 640) * img_width;
    const y1 = ((yc - h / 2) / 640) * img_height;
    const x2 = ((xc + w / 2) / 640) * img_width;
    const y2 = ((yc + h / 2) / 640) * img_height;
    boxes.push([x1, y1, x2, y2, label, prob]);
  }
  boxes = boxes.sort((box1, box2) => box2[5] - box1[5]);
  const result = [];
  while (boxes.length > 0) {
    result.push(boxes[0]);
    boxes = boxes.filter(
      (box) => iou(boxes[0], box) < 0.7 || boxes[0][4] !== box[4]
    );
  }
  return result;
}

function iou(box1, box2) {
  return intersection(box1, box2) / union(box1, box2);
}

function union(box1, box2) {
  const [box1_x1, box1_y1, box1_x2, box1_y2] = box1;
  const [box2_x1, box2_y1, box2_x2, box2_y2] = box2;
  const box1_area = (box1_x2 - box1_x1) * (box1_y2 - box1_y1);
  const box2_area = (box2_x2 - box2_x1) * (box2_y2 - box2_y1);
  return box1_area + box2_area - intersection(box1, box2);
}

function intersection(box1, box2) {
  const [box1_x1, box1_y1, box1_x2, box1_y2] = box1;
  const [box2_x1, box2_y1, box2_x2, box2_y2] = box2;
  const x1 = Math.max(box1_x1, box2_x1);
  const y1 = Math.max(box1_y1, box2_y1);
  const x2 = Math.min(box1_x2, box2_x2);
  const y2 = Math.min(box1_y2, box2_y2);
  return (x2 - x1) * (y2 - y1);
}

// function draw_boxes(canvas, boxes) {
//   // const ctx = canvas.getContext("2d");
//   // ctx.strokeStyle = "#00FF00";
//   // ctx.lineWidth = 3;
//   // ctx.font = "18px serif";
//   boxes.forEach(([x1, y1, x2, y2, label]) => {
//     // ctx.strokeRect(x1, y1, x2 - x1, y2 - y1);
//     // ctx.fillStyle = "#00ff00";
//     // const width = ctx.measureText(label).width;
//     // ctx.fillRect(x1, y1, width + 10, 25);
//     // ctx.fillStyle = "#000000";
//     // ctx.fillText(label, x1, y1 + 18);
//     // canvas.stroke("green");
//     // canvas.rect(x1, y1, x2 - x1, y2 - y1);
//   });
// }

const yolo_classes = [
  "person",
  "bicycle",
  "car",
  "motorcycle",
  "airplane",
  "bus",
  "train",
  "truck",
  "boat",
  "traffic light",
  "fire hydrant",
  "stop sign",
  "parking meter",
  "bench",
  "bird",
  "cat",
  "dog",
  "horse",
  "sheep",
  "cow",
  "elephant",
  "bear",
  "zebra",
  "giraffe",
  "backpack",
  "umbrella",
  "handbag",
  "tie",
  "suitcase",
  "frisbee",
  "skis",
  "snowboard",
  "sports ball",
  "kite",
  "baseball bat",
  "baseball glove",
  "skateboard",
  "surfboard",
  "tennis racket",
  "bottle",
  "wine glass",
  "cup",
  "fork",
  "knife",
  "spoon",
  "bowl",
  "banana",
  "apple",
  "sandwich",
  "orange",
  "broccoli",
  "carrot",
  "hot dog",
  "pizza",
  "donut",
  "cake",
  "chair",
  "couch",
  "potted plant",
  "bed",
  "dining table",
  "toilet",
  "tv",
  "laptop",
  "mouse",
  "remote",
  "keyboard",
  "cell phone",
  "microwave",
  "oven",
  "toaster",
  "sink",
  "refrigerator",
  "book",
  "clock",
  "vase",
  "scissors",
  "teddy bear",
  "hair drier",
  "toothbrush",
];
