importScripts("https://cdn.jsdelivr.net/npm/onnxruntime-web/dist/ort.min.js");

let model = null;

onmessage = async (event) => {
  const input = event.data;
  const output = await run_model(input);
  postMessage(output);
};

async function run_model(input) {
  if (!model) {
    // https://drive.google.com/file/d/1uG1nagxQoyvcHfUYXcNDXJCvglsz7rdT/view
    model = await ort.InferenceSession.create("./models/yolov8m-seg.onnx");
  }
  input = new ort.Tensor(Float32Array.from(input), [1, 3, 640, 640]);
  const outputs = await model.run({ images: input });
  // console.log(outputs["output1"]);
  return outputs["output1"].data;
  // return outputs["output0"].data;
  // console.log("data url");
  // console.log(outputs["output1"].toDataURL());
  // return outputs["output1"].toImageData({
  //   format: "RGBA",
  //   norm: { bias: 0, mean: 255 },
  // });
}
