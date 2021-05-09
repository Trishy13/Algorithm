var box1, box2, box3, box4;

function setup(){

  createCanvas(600,600);

  box1= createSprite(300,300,100,70);
  box1.shapeColor= "crimson";

  box2 = createSprite(100,100,50,100);
  box2.shapeColor = "violet";

  box3=createSprite(200,200,25,125);
  box3.shapeColor = "blue";

  box4=createSprite(400,400,75,110);
  box4.shapeColor = "yellow";
}

function draw(){
  background(200);

  box2.x = World.mouseX;
  box2.y = World.mouseY;

  if(touch(box1,box2)){
    box1.x = random(100,500);
    box1.y = random(100,500);
  }

  if(touch(box3,box2)){
  box3.shapeColor = "black"; 
  }
  
  else{
  box3.shapeColor = "blue";
  }
  if(touch(box4,box2)){
  box4.visible=false;
  }

  else{
    box4.visible = true;
    
  }
  drawSprites();
}

