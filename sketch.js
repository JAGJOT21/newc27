
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	roof=new Roof(400,100,1000,20)
bob1= new Bob(400,100,25,25)
bob2= new Bob(350,100,25,25)
bob3= new Bob(300,100,25,25)
bob4= new Bob(250,100,25,25)



rope1 = new Rope(bob1.body,roof.body,200,10)
rope2 = new Rope(bob2.body,roof.body,150,10)
rope3 = new Rope(bob3.body,roof.body,100,10)
rope4 = new Rope(bob4.body,roof.body,50,10)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  roof.display()
  bob1.display()
  bob2.display()
  bob3.display()
  bob4.display()
  rope1.display()
	rope2.display()
		rope3.display()
			rope4.display()

  
 
}
function keyPressed(){
if(keyCode===32){
	Matter.Body.applyForce(bob4.body,bob4.body.position,{x:-50,y:-50})
}
}



