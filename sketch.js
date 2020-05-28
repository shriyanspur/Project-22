const Bodies = Matter.Bodies;
const Engine = Matter.Engine;
const World = Matter.World;


var engine, world;
var heli, heliImg;
var box, boxImg, boxBody;
var backImg;
var land;

function preload() {
  heliImg = loadImage("Heli.png");

  boxImg = loadImage("box.png");

  backImg = loadImage("back.png");
}

function setup() {
  createCanvas(1200, 500);

  engine = Engine.create();
  world = engine.world;


  heli = createSprite(50, 50, 100, 50);
  heli.addImage(heliImg);
  heli.scale = 0.3;
  heli.velocityX = 5;

  
  box = new Box(50, 80, 60, 50);
  

  land = Bodies.rectangle(600, 480, 1200, 5, {restitution:1.5, isStatic:true});
  World.add(world,land);
}

function draw() {
  background(backImg);

  box.x = heli.x+40;


  heli.display();
  box.display();
  

  Engine.update(engine);
  rectMode(CENTER);
  rect(land.position.x,land.position.y,1200, 5);

}

