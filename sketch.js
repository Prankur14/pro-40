var database;
var back_img;
var gameState =0;
var playerCount = 0;
var allPlayers;

var player, form,game;
var player1,player2;
var players;
var fruits;
var fruitGroup;
var fruit1_img, fruit2_img, fruit3_img, fruit4_img, fruit5_img;
var player_img;
var soundTimer = 0;
var fullscreenTimer = 0;

function preload(){
  back_img = loadImage("images/jungle.jpg");
  player_img = loadImage("images/basket2.png");
  fruit1_img = loadImage("images/apple2.png");
  fruit2_img = loadImage("images/banana2.png");
  fruit3_img = loadImage("images/melon2.png");
  fruit4_img = loadImage("images/orange2.png");
  fruit5_img = loadImage("images/pineapple2.png");
  memeFace = loadImage("images/meme.png");
  memeFace.scale = 0.04
  fruitGroup = new Group();
  game_started = loadSound("game_started.mp3");
  lobby_background = loadSound("lobby_background.mp3");
 back_img.resize(window.innerWidth, window.innerHeight)
}
function setup() {
  // fullscreen(true)
  createCanvas(/*1000, 600*/windowWidth, windowHeight);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
  
}

function draw() {
  background(back_img);
  
  // fullscreen(true)
  back_img.resize(window.innerWidth, windowHeight)

  // document.bgColor()
  // fullscreen

  cursor("images/cursor.cur")
  
   if (playerCount === 2) {
     game.update(1);
   }
   if (gameState === 1) {
     clear(); 
     game.play();
    //  lobby_background.stop();
    //  game_started.play();
    //  game_started.loop(82)
   }
   if (gameState === 2) {
    
     game.end();
   }
}
function windowResized() {
    resizeCanvas(windowWidth, windowHeight);

    
}
document.oncontextmenu = function(){
  return false;
}