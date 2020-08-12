function setup() {
	createCanvas(windowWidth, windowHeight);
x = 200;
y = 200;
}


function draw() {
	background(0);
	fill(200,200,10);
	ellipse(x,y,200,200);



	if (keyIsDown(LEFT_ARROW)) {
    x -= 5;
  }

  if (keyIsDown(RIGHT_ARROW)) {
    x += 5;
  }

  if (keyIsDown(UP_ARROW)) {
    y -= 5;
  }

  if (keyIsDown(DOWN_ARROW)) {
    y += 5;
  }
}
