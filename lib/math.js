/* 
  y: a continuous value between 0 and 1
  s: a step size, typically between 0 and 1
  Returns a value that is the nearest multiple of s to y.
  This function is useful for creating discrete steps in animations or transitions.
*/
function step(y, s) {
  return Math.round(y / s) * s;
}
