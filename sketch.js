
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball,engine,world;

var ball_options={
	isStatic:false,
	restitution:0.3,
	friction:0,
	density:1.2
}

function preload()
{
	
}

function setup() {
	createCanvas(1800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	groundObj = new ground(width/2,670,width,20);
	leftSide= new ground(1100,600,20,120);
	rightSide= new ground(1400,600,20,120);
    
	var ball_options={
		restitution:0.5,
	}
    ball=Bodies.circle(100,10,20,ball_options)

	World.add(world,ball)

	Engine.run(engine);
  
}


function draw() {
	Engine.update(engine);
  rectMode(CENTER);
  background(0);
  groundObj.display();
  leftSide.display();
  rightSide.display();
  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,20,20)
  keyPressed();
  drawSprites();
 
}

 function keyPressed(){
	if(keyCode === UP_ARROW){
	Matter.Body.applyForce(ball,position,{x:-85,y:-85})
	}
 }



