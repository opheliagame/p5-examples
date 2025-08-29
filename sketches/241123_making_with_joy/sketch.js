

function setup() {
  createCanvas(600, 600);


  
}

function draw() {
  background('whitesmoke');
  

  let n = 10

  let shape = joy
    // .circle()
    // .rectangle()
    .line()
    .rotate({ angle: 90 })
    .translate({ x: 50 })
    .repeat({
      n: n,
      transform: joy.rotate({ angle: 360/n }).translate({ x: 50 })
    })

  

  let renderer = new joy.P5Renderer()
  renderer.show(shape)

}
