x=400;
y = 400;
speed = 0;
xpos = [1100,1000,2000,3000];
ypos = [0,100,200,300];
xspeed = [10,10,10,10];

function setup() {
  createCanvas(windowWidth,windowHeight);
xmax = width;
ymax = height;

}

function draw() {
  background(220);
 loekke();
}


function loekke(){
  for (let i=0;i<4;i++){

    fill(0,0,255);
    ellipse(x,y,50,50);
    y += speed;



    fill(200,0,0);
    ellipse(xpos[i],ypos[i],50,50);
    xpos[i]-=xspeed[i];


    if (xpos[i]<0){
    xpos[i] =  xmax;
    ypos[i] = random(0,ymax);
    xspeed[i] = random(2,20);
    }
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
