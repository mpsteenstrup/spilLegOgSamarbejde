let boing;

function preload() {
	boing = loadSound('filer/boing.mp3');
}

function setup() {
  createCanvas(windowWidth,windowHeight);

}

function mousePressed() {
	boing.setVolume(0.1);
	boing.play();
}

function draw() {
	background(220,200,200,10);
	fill(200,0,0,100);
	ellipse(mouseX,mouseY,200,200);
}
