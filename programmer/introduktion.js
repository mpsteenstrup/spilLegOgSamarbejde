function setup() {
  createCanvas( window.innerWidth, window.innerHeight);
  background(0);
}
function draw() {
  fill(200,mouseX,mouseY);
  ellipse(mouseX,mouseY,20,200);
  textFont("monospace",100);
  fill(0);
  text("GCP4 - Innovation, Programmering og Verdensmål",200,200,1000,600);
}
