//namespacing
const Engine=Matter.Engine;
const World= Matter.World;
const Bodies=Matter.Bodies;

var engine,world;
//var object;
//var object1;
var box1;
var box2,box3;
var ground;
function setup(){
 createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;

  
 // box3 = new Box(300,200,20,20);
 

  box1 = new Box(200,300,50,50);
  box2 = new Box(240,100,50,100);
  ground = new Ground(200,height,400,20)
  /*var options = {
    isStatic : true
  }
 
  var options1 = {
    restitution: 1.0
  }
  object=Bodies.rectangle(200,390,400,20,options);
  object1=Bodies.circle(300,100,20,options1);
  World.add(world,object);
  World.add(world,object1);
  console.log(object);
  console.log(object.position.x);
  console.log(object.position.y);*/

}
function draw()
{
  background(0);
  Engine.update(engine);

  box1.display();
  box2.display();
  //box3.display();
  ground.display();
  /*rectMode(CENTER);
    rect(object.position.x,object.position.y,400,20);

  ellipseMode(RADIUS);
    ellipse(object1.position.x,object1.position.y,20,20);*/
  
}
