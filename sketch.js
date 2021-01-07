
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint



function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;




	//Create the ground here.
	ground = Bodies.rectangle(400, 680, 800, 10 , {isStatic:true} );
	 World.add(world, ground);


	//Create the Bodies Here.

	paper1=new Paper(200,200,40)

box1=new Box(330,235,70,70)
box2=new Box(330,235,70,70)
box3=new Box(330,235,70,70)
box4=new Box(330,235,70,70)
box5= new Box(330,235,70,70)
//level three
box6=new Box(430,195,70,70)
box7=new Box(430,195,70,70)
box8=new Box(430,195,70,70)
//top
box9=new Box(430,155,70,70)
box10=new Box(530,155,70,70)
box11=new Box(530,155,70,70)
box12=new Box(530,155,70,70)
rope=new Slingshot({x:200,y:100},paper1.body)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();

  paper1.display()
  fill("red")
 box1.display()
 box2.display()
 box3.display()
 box4.display()
 box5.display()
 fill("lime")
 box6.display()
 box7.display()
 box8.display()
 box9.display()
 fill("green")
 box10.display()
 box11.display()
 box12.display()
 rope.display()
rect(ground.position.x,ground.position.y,800,10)

}

function mouseDragged(){
      
     Matter.Body.setPosition(paper1.body,{x:mouseX,y:mouseY})
	  

}




