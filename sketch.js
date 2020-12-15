
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(3000, 900);


	engine = Engine.create();
	world = engine.world;

	ground = new Ground(0,680,4000,20);
	tree = new Tree(900,0,600,700);
	boy = new Boy(300,390,300,400);
	stone = new Stone(355,498,50);
	chain = new Chain(stone.body,{

        x: 360,
        y: 500

    });
  mango1 = new Mango(1250,130,40);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  
  ground.display();
  tree.display();
  boy.display();
  stone.display();
  chain.display();
  mango1.display();
  
  drawSprites();
 
}




function mouseDragged(){
  Matter.Body.setPosition(stone.body,{
      x: mouseX,
      y: mouseY
  })
}

function mouseReleased(){
  chain.fly();
  
}