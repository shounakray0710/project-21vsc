const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;

function setup() {
	createCanvas(1500,1500);

	engine = Engine.create();
	world = engine.world;

ground = new ground(width/2,670,width,20);
leftSide = new ground(1100,600,20,120);
rightSide = new ground(1200,600,20,120);

	var ball_options={
		isStatic:false,
		restitution:0.3,
		friction:0,
		density:1.2
		}
		
	//Create the Bodies Here.
	ball=Bodies.circle(200,100,20,ball_options)
	World.add(world,ball)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
ground.display();
leftSide.display();
rightSide.display();

ellipse(ball.position.x,ball.position.y,20)
Engine.update(engine);
 
}
function keyPressed(){
if (keyCode === UP_ARROW){
	Matter.Body.applyForce(ball,{x:0,y:0},{x:0.05,y:0.05})
}
}



