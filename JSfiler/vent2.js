function setup() {
createCanvas(windowWidth, windowHeight);
t1=0; t2=0; n = 0; score=0;
}


function draw() {
	background(255);
  if (0==(n%2)){
  fill(200,0,0);
  }
	if (1==(n%2)){
		fill(0,0,200);
	}

  n = int(waite(1));
	print(n);
  ellipse(200,200,200,200);
}

function waite(int) {
	t1=t2=millis(); // nulstiller uret
	while(t2-t1<int*1000){
		t2 = millis();
	}
	return t2/1000;
}
