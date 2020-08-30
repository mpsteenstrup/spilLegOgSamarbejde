let img;
let list = [];

function preload() {
	for (i=1;i<18;i++){
		img = createImg('http://mpsteenstrup.dk/FN_maal/FN'+ i +'.jpg');
		img.hide();
	  list.push(img);
	}
}

function setup() {
	createCanvas(windowWidth, windowHeight);
  background(91, 146, 229);
}


function draw() {
    w = random(0,windowWidth);
    h = random(0,windowHeight);
		image(list[parseInt(random(0,16))],w,h,40,40);
}

function mousePressed(){
	background(0,200,200);
}
