var box1,box2;

function setup(){
  createCanvas(600,600);
}


function draw(){

background(0);
box1=createSprite(random(5,50),10,15);
box2=createSprite(random(5,50),15,20);
}

drawSprites();