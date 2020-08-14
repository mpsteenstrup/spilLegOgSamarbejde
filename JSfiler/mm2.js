function preload(){
  img = loadImage('billeder/mpsFull.jpg');
}

function setup() {
createCanvas(windowWidth, windowHeight);
t1=0; t2=0; n = 0; score=0;
}

function draw() {
	background(0);
	image(img,400,200);

	fill(255,255,255);
	textSize(64);
	text('score: ' + score,100,200);

		if (n==0){
			fill(255,0,0);
			ellipse(800,500,200,200);
		}
		if (n==1){
			fill(0,255,0);
			ellipse(300,500,200,200);
		}
		if (n==2){
			fill(0,0,255);
			ellipse(500,200,200,200);
		}
		if (n==3){
			fill(255,255,255);
			ellipse(500,700,200,200);
		}




	timeIngervalRandomNumber();
}

function keyPressed(){
	if (keyCode == RIGHT_ARROW  && n==0)
	{
		score += 1;
		n=int(random(4));
		print(score);
	}

	if (keyCode == LEFT_ARROW  && n==1)
	{
		score += 1;
		n=int(random(4));
		print(score);
	}
	if (keyCode == UP_ARROW  && n==2)
	{
		score += 1;
		n=int(random(4));
		print(score);
	}
	if (keyCode == DOWN_ARROW  && n==3)
	{
		score += 1;
		n=int(random(4));
		print(score);
	}

}



function timeIngervalRandomNumber() {
	t2=millis();
	if (t2-t1>1000){
		t1=t2;
		n=int(random(4));
	}
}
