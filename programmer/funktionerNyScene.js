n = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  if (n==0){
    scene0();
  }
  if (n==1){
    scene1();
  }
}

function scene0(){
  background(250,0,0);
}
function scene1(){
  background(0,250,0);
}

function mouseClicked(){
  n = (n+1)%2;
  print(n);
}
