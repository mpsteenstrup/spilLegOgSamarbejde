t1=0; t2=0; n=0; score=0;

function setup() {
createCanvas(windowWidth, windowHeight);
i = 0
while (i<4){
    print(i)
    i += 1;
}
}


function draw() {
	background(0);
	if (n==0){
			fill(255,0,0);
			ellipse(500,500,200,200);
	}
	timeInterval();
}

function timeInterval() {
	t2=millis();
	if (t2-t1>1000){
		t1=t2;
		n=int(random(4));
	}
}

function keyPressed(){
	if (keyCode == UP_ARROW  && n==0)
	{
		score += 1;
		n=int(random(4));
		print(score);
	}
}
