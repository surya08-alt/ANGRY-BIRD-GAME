const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    ground =new Ground(600,380,1200,20)

    box1 = new Box(800,350,50,50);
    box2 = new Box(1000,350,50,50)
    Pig1=new Pig(900,350)
    log1= new Log(900,330,300,PI/2)
     
    
    box3 = new Box(800,300,50,50);
    box4 = new Box(1000,300,50,50);
    Pig2=new Pig(900,300)
    log2=new Log(900,270,300,PI/2)
    
    box5=new Box(900,250,50,50);
    log3=new Log(860,200,150,PI/5)
    log4=new Log(960,200,150,PI/-5)
    Bird1=new Bird(500,250)
}

function draw(){
    background(0);
    Engine.update(engine);
    box1.display();
    box2.display();  
    ground.display();
    Pig1.display();
    log1.display();
    box3.display();
    box4.display();
    log2.display();
    Pig2.display();
    box5.display();
    log3.display();
    log4.display();
    Bird1.display();
}