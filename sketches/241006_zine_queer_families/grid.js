
// a value between 0 and 1
function pattern1(v, res = 0.1) {
  return abs(sin(v * res));
}

function getColor(v) {
  return palette[floor(v * palette.length)];
}

class Grid {
  constructor(width, height, xn, yn, g) {
    this.width = width
    this.height = height
    this.xdiv = xn
    this.ydiv = yn

    this.sx = this.width / this.xdiv;
    this.sy = this.height / this.ydiv
  
    
  }

  draw(can) {

    this.canvas = can 
    let g = this.canvas

    // sorted and unsorted arrays look very different!
    let xstops = sort([0, ...getStops(this.xdiv), 1]);
    let yoff = 0;
    let xoff = 0;
    // let xws = getStops(xn + 1);
    for (let i = 0; i < this.xdiv + 1; i++) {
      let ystops = sort([0, ...getStops(this.ydiv), 1]);
      // let prevXws = [xws[0]];
      for (let j = 0; j < this.ydiv + 1; j++) {
        // let xws = getStops(xn + 1);
        let x = xstops[i] * this.width;
        // x = prevXws[j]
        let y = ystops[j] * this.height;
        let sx = ((i + 1 == this.xdiv ? this.width : xstops[i + 1]) - xstops[i]) * this.width;
        // let sw = xws[i] * sx;
        let sy = ((j + 1 == this.ydiv ? this.height : ystops[j + 1]) - ystops[j]) * this.height;
        let p1 = pattern1(abs(sin(i * 10)) * 20 + abs(sin(j * 10)) * 20);
        let col = getColor(p1);
  
        g.push();
        g.translate(x, y);
        // g.fill('red')
        // g.circle(0, 0, 20)
        g.strokeWeight(2);
        // g.noFill();
        // g.noStroke();
        g.stroke('white')

        // stroke('whitesmoke')
        // g.texture(g1)
        // if(random() < 0.5) {
          g.fill(col);
        // }
        // g.circle(0, 0, 10)
        // g.rotate(radians(random(-3, 3)));
        g.rectMode(CENTER);
        g.rect(sx / 2, sy / 2, sx + 0, sy + 0);
        g.pop();
  
        // prevXws.push(sw);
      }
      // xstops = sort([0, ...getStops(xn), 1]);
    }

  }



}