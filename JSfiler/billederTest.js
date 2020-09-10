let img;
let billeder=[];

function preload() {
		img = loadImage('billeder/img1.jpg');
		billeder=[img1,img2];
}

function setup() {
	createCanvas(windowWidth, windowHeight);
  background(91, 146, 229);
	image(img,0,0);
}
