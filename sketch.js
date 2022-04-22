var correcaminos, correcaminos_running;
var ground;
var coyote, coyote_running;
var dinamita, tronco;

function preload(){
  correcaminos_running = loadAnimation("correca1.png","correca2.png","corred.png");
  ground = loadImage("Fondo_des.png");
  coyote_running = loadAnimation("coyote 1.png","coyote 2.png");
  dinamita = loadImage("dinamita.png");
  tronco = loadImage("tronco.png");
}

function setup(){
createCanvas(5000,800);


correcaminos = createSprite(100,400,10,10);
correcaminos.addAnimation("running",correcaminos_running);

coyote = createSprite(500,400,10,10);
coyote.addAnimation("running",coyote_running);

dinamita = createSprite();
tronco = createSprite();

}

function draw(){
  background(ground);

  drawSprites();
}
function keyIsDown(LEFT_ARROW){
 correcaminos
}
function keyIsDown(RIGHT_ARROW){

}
function keyIsDown(UP_ARROW){

}

function keyIsDown(w){
 coyote
}
function keyIsDown(d){

}
function keyIsDown(a){

}