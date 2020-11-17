var game;
var form;
var bgimage;
var gameState = 0;
var bgimage1;
var player1_img;
var player2_img;
var player3_img;
var player;

function preload(){
 bgimage = loadImage("pictures/bg.png")

 player1_img = loadImage("pictures/player1.png");
 player2_img = loadImage("pictures/player2.png");
 
}

function setup() {
  createCanvas(displayWidth,displayHeight-100);

  //player = createSprite()

  game = new Game();
  game.start();

  
}

function draw() {
  if (gameState === 0){
   background("white");
  }
  if(gameState === 1){
    background("white");
    game.choosePlayer();
  }
  
  
}