var l = ['hej','med','dig',9];
var i = 0;

function setup() {
  createCanvas(windowWidth,windowHeight);
  frameRate(2);
}

function draw(){
  for (i in l) {
    console.log(i);
  }
}


function temp(){
  console.log(l[i]);
  i = (i+1)%4;

  l[3]='MP';

  l.pop();
  l.push('informatik!');

}
