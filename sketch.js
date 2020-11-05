
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function setup() {
	createCanvas(1200, 600);

	engine = Engine.create();
	world = engine.world;

	ball = new Ball(200,300,70);
	ground = new Ground(600,570,1200,20);
	trash = new Trash(1050,460,180,200);

	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background(300,300,200);

  ball.display();
  ground.display();
  trash.display();
  
  drawSprites();
 
}
	

function keyPressed() {
	if(keyCode === UP_ARROW) {

		Matter.Body.applyForce(ball1.body,ball1.body.position,{x:85, y:-85});

	}
}



