function setup() {
createCanvas(windowWidth, windowHeight);
t1=0; t2=0; n = 0; score=0;
}


function draw() {
	background(255);
  waite(1);
  print(int(t2/1000));
}

function waite(int) {
	t1=t2=millis(); // nulstiller uret
	while(t2-t1<int*1000){
		t2 = millis();
	}
}
