const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

function setup() {
  createCanvas(480, 800);
  engine = Engine.create();
  world = engine.world;

  //Ground
  ground = new Ground(100, 790, 800, 40);

  //Divisions
  div_1 = new Division(10, 595, 10, 350);
  div_2 = new Division(110, 595, 10, 350);
  div_3 = new Division(210, 595, 10, 350);
  div_4 = new Division(310, 595, 10, 350);
  div_5 = new Division(410, 595, 10, 350);
}

  var particles = [];
  var plinkos = [];
  var divisions = [];

function draw() {
  background("black");  

  ground.display();
  
  div_1.display();
  div_2.display();
  div_3.display();
  div_4.display();
  div_5.display();

  for(var j = 0; j < particles.length; j++){
    particels[j].display();
  }

  for(var k = 0; k < divisions.length; k++){
    divisions[k].display();
  }

  if(frameCount%60 === 0){
    particles.push(new Particle(random(width/2-10, width/2+10), 10, 10));
  }

  drawSprites();
}