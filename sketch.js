
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground1,ground2,ground3,ground4,ground5;
var paper;
var log1,log2,log3

function preload()
{
	
}

function setup() {
	createCanvas(800, 400);


	engine = Engine.create();
	world = engine.world;
	Engine.run(engine);
  //Create the Bodies Here.
  paper=new Paper(100,300,10)
  log1=new Log(640,341,130,10);
  log2=new Log(700,310,13,70);
  log3=new Log(580,310,13,70);
  ground1=new Ground(width/2,350,width,10)
  
  
  
    
	
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ground1.display()
  paper.display()
  log1.display();
  log2.display();
  log3.display();
  
  drawSprites();
 
}

function keyPressed(){
  if(keyCode === UP_ARROW){

  Matter.Body.applyForce(paper.Body,paper.Body.position,{
    x:85,
    y:-85
  })

  }
}



