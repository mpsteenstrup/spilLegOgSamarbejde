x = 200;
y = 400;

move = 0;
speed = 0;
xpos = 0;
ypos = 0;
d = 1000;
function setup() {
  createCanvas(windowWidth,windowHeight);
xmax = width;
ymax = height;

}

function draw() {
  background(220);
  fill(200,0,0);
  xpos = xmax-move;
  ypos = 200;
  ellipse(xpos,ypos,100,100);
  ellipse(xpos,ypos+400,100,100);

  fill(0,0,255);
  ellipse(x,y,50,50);

  y += speed;

  move += 10;
  if (move>xmax){
    move = 0;
  }

  d = distance(x,xpos,y,ypos);
  dead();

}

function dead(){
  if (d<50){
    ellipse(400,400,600,600);

      }
}



function keyPressed(){


	if (keyCode == UP_ARROW  )
	{
        speed -=1;
	}
  if (keyCode == DOWN_ARROW  )
	{
        speed +=1;
	}
}

function distance(x0,y0,x1,y1){
  return ((x1-x0)**2+(y1-y0)**2)**0.5;
}
