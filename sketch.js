const Engine= Matter.Engine;
const World= Matter.World;
const Bodies=Matter.Bodies;
const Constraint=Matter.Constraint;

var engine,world;
var ground;
var ball;
var rope;
var brick1,brick2,brick3,brick4,brick5,brick6,brick7,brick8;
var brick9,brick10,brick11,brick12,brick13,brick14;
var brick15,brick16,brick17,brick18,brick19,brick20;

function setup(){
createCanvas(3000,800);
engine=Engine.create();
world=engine.world;

ground= new Ground(600,600,2000,20);
ball= new Ball(200,200,80,80);
rope= new Rope(ball.body,{x:550,y:50});
brick1= new Box(700,200,50,50);
brick2= new Box(700,210,50,50);
brick3= new Box(700,220,50,50);
brick4= new Box(700,230,50,50);
brick5= new Box(700,240,50,50);
brick6= new Box(700,250,50,50);
brick7= new Box(700,260,50,50);
brick8= new Box(700,270,50,50);
brick9= new Box(750,280,50,50);
brick10= new Box(750,290,50,50);
brick11= new Box(750,300,50,50);
brick12= new Box(750,310,50,50);
brick13= new Box(750,320,50,50);
brick14= new Box(750,330,50,50);
brick15= new Box(800,310,50,50);
brick16= new Box(800,320,50,50);
brick17= new Box(800,330,50,50);
brick18= new Box(800,340,50,50);
brick19= new Box(800,350,50,50);
brick20= new Box(800,360,50,50);


}

function draw(){
Engine.update(engine);
background(180)
ground.display();
ball.display();
rope.display();
brick1.display();
brick2.display();
brick3.display();
brick4.display();
brick5.display();
brick6.display();
brick7.display();
brick8.display();
brick9.display();
brick10.display();
brick11.display();
brick12.display();
brick13.display();
brick14.display();
brick15.display();
brick16.display();
brick17.display();
brick18.display();
brick19.display();
brick20.display();

}

function mouseDragged(){
    Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY});
}