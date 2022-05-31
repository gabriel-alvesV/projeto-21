
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var bola;
var chao;
var esquerda;
var direita;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    chao=new Parede(800,670,1600,20);
	esquerda=new Parede(1100,600,20,120);
	direita=new Parede(1350,600,20,120);
	bola=Bodies.circle(260,100,20);
    World.add(world,bola);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  chao.mostrar();
  esquerda.mostrar();
  direita.mostrar();
  ellipse(bola.position.x,bola.position.y,20);


  drawSprites();
 
}


function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(bola,bola.position,{x:0.07,y:-0.07});
	}
}



