function setup(){
  createCanvas(windowWidth,windowHeight);
  fill(255,0,0);
}

function draw(){
  background(255);
  n = 0
  while (n<10){
    textSize(60);
    text(n,40*n,200);
    n = n + 1;
  }
}
