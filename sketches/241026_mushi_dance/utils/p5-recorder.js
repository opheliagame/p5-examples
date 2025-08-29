class P5Recorder {
  constructor(canvas, intervalInSeconds = 5, durationInSeconds = 1, limit = 0) {
    this.canvas = canvas;
    this.recorder = null;
    this.chunks = [];
    this.recordIntervalInSeconds = intervalInSeconds;
    this.recordInterval = intervalInSeconds * 1000;
    this.recordingDurationInSeconds = durationInSeconds;
    this.recordingDuration = durationInSeconds * 1000 + 1; // without the offset of 1 millisecond, the set interval fires too quickly 
    this.videoCounter = 0;
    this.recordingLimit = limit
    this.intervalId = null;
  }

  initializeRecorder() {
    const stream = this.canvas.captureStream(30); // 30 fps
    this.recorder = new MediaRecorder(stream);
    this.recorder.ondataavailable = (event) => {
      if (event.data.size > 0) {
        this.chunks.push(event.data);
      }
    };
    this.recorder.onstop = () => this.saveVideo();
  }

  startRecordingCycle() {
    console.log("starting recording cycle");
    if (this.recorder == null) {
      this.initializeRecorder();
    }
    if (this.intervalId != null) {
      console.warn(
        "recording is already in progress, tried to start recording one more cycle"
      );
    }
    this.intervalId = setInterval(
      () => this.startRecording(),
      this.recordInterval
    );
  }

  stopRecordingCycle() {
    console.log("stopping recording cycle");
    if (this.intervalId == null) {
      console.warn("no recording in progress, tried to stop recording cycle");
    }
    clearInterval(this.intervalId);
    this.intervalId = null;
  }

  startRecording() {
    this.chunks = [];
    this.recorder.start();
    setTimeout(() => {
      console.info(`recording video #${this.videoCounter+1}`)
      this.stopRecording()
      this.videoCounter++ 

      if(this.recordingLimit != 0 && this.videoCounter == this.recordingLimit - 1) {
        this.stopRecordingCycle()
      }
    }, this.recordingDuration);
  }

  stopRecording() {
    this.recorder.stop();
  }

  saveVideo() {
    const blob = new Blob(this.chunks, { type: "video/webm" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.style.display = "none";
    a.href = url;
    // a.download = `video_${this.videoCounter++}.webm`;
    let now = new Date().toLocaleString(undefined, {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false, // Use 24-hour time format
    });
    a.download = `video_${now}.webm`;
    document.body.appendChild(a);
    a.click();
    window.URL.revokeObjectURL(url);
  }
}
