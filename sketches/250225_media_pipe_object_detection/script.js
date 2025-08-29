// import { ObjectDetector, FilesetResolver } from "../node_modules/@mediapipe/tasks-vision/vision_bundle.js";
import { ObjectDetector, FilesetResolver } from "./vision_bundle.js";

let objectDetector;
let runningMode = "IMAGE";

// Initialize the object detector
export const initializeObjectDetector = async () => {
  const vision = await FilesetResolver.forVisionTasks(
    "https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@latest/wasm"
  );
  // const vision = await FilesetResolver.forVisionTasks("./wasm");
  objectDetector = await ObjectDetector.createFromOptions(vision, {
    baseOptions: {
      modelAssetPath: `./efficientdet_lite0.tflite`,
      delegate: "GPU",
    },
    scoreThreshold: 0.5,
    runningMode: runningMode,
  });
};
window.initializeObjectDetector = initializeObjectDetector;
let video = null;
let image = null;

export function setCameraStreamToMediaPipe(v) {
  video = v;
  video.addEventListener("loadeddata", predictVideo);
  video = v;
}
window.setCameraStreamToMediaPipe = setCameraStreamToMediaPipe;

export async function setCanvasToMediaPipe(canvas, vid) {
  const imageBitmap = await createImageBitmap(canvas);
  image = imageBitmap;
  video = vid;
  predictVideo();
}
window.setCanvasToMediaPipe = setCanvasToMediaPipe;

let lastVideoTime = -1;
async function predictVideo() {
  // if image mode is initialized, create a new classifier with video runningMode
  if (runningMode === "IMAGE") {
    runningMode = "VIDEO";
    await objectDetector.setOptions({ runningMode: "VIDEO" });
  }
  let nowInMs = Date.now();
  // Detect objects using detectForVideo
  const timestamp = video.currentTime * 1000;
  if (video.currentTime !== lastVideoTime) {
    lastVideoTime = video.currentTime;
    const detections = await objectDetector.detectForVideo(image, nowInMs);

    gotDetections(detections);
  }
  if (!video.paused) {
    window.requestAnimationFrame(predictVideo);
  }
}
