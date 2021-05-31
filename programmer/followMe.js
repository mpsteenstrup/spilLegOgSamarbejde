/*
Ellipsens centrum styres af musen med mouseX og mouseY. Baggrunden er i draw løkken så tidligere ellipser bliver overtegnet (prøv at fjern den).
*/
function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(	91, 146, 229);
  fill(200,00,0);
  ellipse(mouseX,mouseY,200,200);
}
