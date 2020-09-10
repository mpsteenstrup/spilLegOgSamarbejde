let boing;

function preload() {
	boing = loadSound('filer/boing.mp3');
}

function setup() {
  createCanvas(400, 400);
}

function mousePressed() {
	boing.play();
}

function draw() {
  background(220);
}
