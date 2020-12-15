const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint; 

var engine, world;
var ground, tree;
var mango1, mango2, mango3, mango4, mango5;
var chain;
var stone;
var boy_image, tree_image;

function preload() {
  boy_image = loadImage("boy.png"); 

  tree_image = loadImage("tree.png");
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
  world = engine.world;
  
  ground = new Ground(400, 490, 1000, 10);
  
  stone = new Stone(50, 450, 20, 20);

  mango1 = new Mango(500, 200, 20, 20);

  chain = new Chain(stone.stone, {x:50, y:300});
}

function draw() {
  Engine.update(engine);
  background("purple");
  

  image(boy_image, 100, 450, 100, 200);
  image(tree_image, 500, 300, 300, 400);

  ground.display();
  stone.display();
  mango1.display();
  chain.display();
}