let boing;

function preload() {
	boing = loadSound('filer/boing.mp3');
}

function setup() {
  createCanvas(windowWidth,windowHeight);
	background(220);
}

function mousePressed() {
	boing.setVolume(0.1);
	boing.play();
}

function draw() {
	fill(200,100,0,100);
	ellipse(mouseX,mouseY,200,200);
}
