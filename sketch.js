var form;
var wcoin1,wcoin2,wcoin3,wcoin4,wcoin5,wcoin6,wcoin7,wcoin8,wcoin9;
var bcoin1,bcoin2,bcoin3,bcoin4,bcoin5,bcoin6,bcoin7,bcoin8,bcoin9;
var striker1,striker2;
var hole;
var carrom;
var database;
var rcoin;
var game, gameState;
var player, playerCount;
function preload(){
  carromboardImage = loadImage("carromboard.png");
  wcoinImage = loadImage("whitecoin.png");
  strikerImage = loadImage("Striker.png");
  rcoinImage = loadImage("redcoin.png");
  bcoinImage = loadImage("blackcoin.png")
}
function setup() {
  createCanvas(displayWidth,displayHeight-142);
  database = firebase.database();
  
  /*carrom = createSprite(780,360,20,20)
  carrom.addImage(carromboardImage)
  carrom.scale = 0.72;

  wcoin1 = createSprite(900,200,20,20)
  wcoin1.addImage(wcoinImage)
  wcoin1.scale = 0.09
  wcoin1.friction = 0.02
  
  striker1 = createSprite(780,597,20,20)
  striker1.addImage(strikerImage)
  striker1.scale = 0.03
  striker1.velocityX = 0
  striker1.velocityY = -0
  striker1.friction = 0.02

  hole = createSprite(1080,50,20,20)*/
  gameState = 0

  game = new Game();
  game.getState();
  game.start();

  
}

function draw() {
   
  
  
  /*hole.visible = false
  wcoin1.debug = false
  wcoin1.setCollider("circle",10,-10,150)

  

  striker1.debug = false
  striker1.setCollider("circle",10,-10,700)
  if(striker1.isTouching(wcoin1)){
    striker1.friction += 0.01
  }

  striker1.bounce(wcoin1)
  if(wcoin1.isTouching(hole)){
    wcoin1.destroy();
    striker1.x = 780
    striker1.y = 597
    striker1.friction = 1
  }
 
  if(keyDown("space")){
    striker1.velocityX = 4.5
    striker1.velocityY = -18
  }*/

  

  if(playerCount === 2){
    game.update(1);
  }

  if(gameState === 1){
    game.play();
  }
  textSize(20)
  text(mouseX+":"+mouseY,mouseX,mouseY)
}



