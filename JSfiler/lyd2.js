let boing;

function preload() {

}

function setup() {
	boing = loadSound('filer/boing.mp3');
  createCanvas(400, 400);
//  boing.play();
}

function mousePressed() {
boing.play();
}

function draw() {
//	boing.play();
//	boing.stop();
  background(220);
}
