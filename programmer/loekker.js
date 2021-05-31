let y = [50, 170, 120, 355, 175];

function setup() {
	createCanvas(windowWidth, windowHeight);
  background(91, 146, 229);
}


function draw() {
  for (i in y){
    ellipse(40 + i * 80, y[i], 40);
  }
}
