 
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;


var side1, side2, side3;
var paper;
var ground;

function preload()
{
   }

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(400, 675, 800, 50);
	World.add(world, ground);

	side1 = new Dustbin(530, 645, 120, 15);
	World.add(world, side1);

	side2 = new Dustbin(585, 595, 15, 100);
	World.add(world, side2);

	side3 = new Dustbin(475, 595, 15, 100);
	World.add(world, side3);

	paper = new Paper(200, 490, 18);
	World.add(world, paper);

	launcher= new Launcher(paper.body,{x:200,y:450});

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("cyan");
  
  ground.display();

  
 
  side1.display();
  paper.display();
  
  drawSprites();

}



function mouseDragged(){
    Matter.Body.setPosition(paper.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    launcher.fly();
}




