
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,groundObject	
var world;


function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);

    //Agrego el motor físico al mundo
	engine = Engine.create();
	world = engine.world;
	//añado la clase a los bodies
	groundObject=new ground(width/2,670,width,20);
	dustbinObj=new dustbin(1200,650);
	paper = new Paper( 200, 500, 2, 2);
	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(230);

  paper.display();
  groundObject.display();
  dustbinObj.display();
  keyPressed();
  //drawSprites();

}
/*function keyPressed(){
	if(keyCode === UP_ARROW){
	  Matter.Body.applyForce(paper.body, paper.body.position,{x:130,y:-145});
	 
	}
  }
*/