// looks like this function is attempting to make itself compatible with many browsers
// calling setTimeout like this is better than just a vanilla call, it allows your
// browser to perform optimizations, like stopping calls when the tab isn't active.
var animate = window.requestAnimationFrame ||
  window.webkitRequestAnimationFrame ||
  window.mozRequestAnimationFrame ||
  function(callback) { window.setTimeout(callback, 1000/60) };

// setup a canvas and grab its 2d context to perform rendering
var canvas = document.createElement('canvas');
var width = 400;
var height = 600;
canvas.width = width;
canvas.height = height;
var context = canvas.getContext('2d');

// on page load, attach canvas to screen and call step function with animate method
window.onload = function() {
  document.body.appendChild(canvas);
  animate(step);
};

// step will update our objects (paddles and ball), renders them, and then uses
// requestAnimationFrame to call step again recursively.
var step = function() {
  update();
  render();
  animate(step);
};

// update will be implemented as a 'no operation'
var update = function() {
};

// render will set the background using fillStyle and fillRect
var render = function() {
  context.fillStyle = "#FF00FF";
  context.fillRect(0, 0, width, height)
};
