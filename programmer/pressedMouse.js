/*
Interaktivt hvor et billed bliver skabt hver gang musen klickes.
*/
function preload() {
	img = createImg('http://mpsteenstrup.dk/FN_maal/FN1.jpg');
	img.hide();
}

function setup() {
	createCanvas(windowWidth, windowHeight);
	background(91, 146, 229);
}

function draw(){

}

function mousePressed() {
  image(img,mouseX,mouseY,60,60);
}
