/*
visuel programmerings svar på hello world.
background(rød, grøn, blå) bestemmer baggrundsfarven, 0-255.
draw() er en uendelig løkke som kører igen og igen.
fill(255,0,0) giver en rød.
ellipse() giver en cirkel.
*/
function setup() {
  createCanvas(windowWidth, windowHeight);
  background(91, 146, 229);
}

function draw() {
  fill(200,0,0);
  ellipse(400,400,200,200);
}
