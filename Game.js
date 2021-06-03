class Game {
    constructor(){
  
    }
  
    getState(){
      var gameStateRef  = database.ref('gameState');
      gameStateRef.on("value",function(data){
         gameState = data.val();
      })
  
    }
  
    update(state){
      database.ref('/').update({
        gameState: state
      });
    }
  
    async start(){
      if(gameState === 0){
        player = new Player();
        var playerCountRef = await database.ref('playerCount').once("value");
        if(playerCountRef.exists()){
          playerCount = playerCountRef.val();
          player.getCount();
        }
        
      }
  
      carrom = createSprite(780,360,20,20)
      striker1 = createSprite(780,597,20,20)
      wcoin1 = createSprite(760,342,20,20)
      wcoin2 = createSprite(807,356,20,20)
      wcoin3 = createSprite(772,390,20,20)
      wcoin4 = createSprite(740,321,20,20)
      bcoin1 = createSprite(789,331,20,20)
      bcoin2 = createSprite(799,379,20,20)
      bcoin3 = createSprite(754,366,20,20)
      rcoin = createSprite(783,361,20,20)
      hole = createSprite(1080,50,20,20)

    }
  
    play(){
      
  
      Player.getPlayerInfo();
      background(0)
  
  
  
  carrom.addImage(carromboardImage)
  carrom.scale = 0.72;

  
  striker1.addImage(strikerImage)
  striker1.scale = 0.03
  striker1.velocityY = 0
  striker1.friction = 0.02
  striker1.depth = carrom.depth;
  striker1.depth = striker1.depth+1
  striker1.bounce(wcoin3)
  striker1.bounce(wcoin2)
  striker1.bounce(wcoin1)
  striker1.bounce(bcoin3)
  striker1.bounce(bcoin2)
  striker1.bounce(bcoin1)
  striker1.bounce(rcoin)
  striker1.x = World.mouseX

  wcoin1.addImage(wcoinImage)
  wcoin1.scale = 0.095
  wcoin1.friction = 0.07
  wcoin1.setCollider("circle",10,-10,150)
  wcoin1.bounce(bcoin2)
  wcoin1.bounce(bcoin3)
  wcoin1.bounce(bcoin1)
  
  wcoin2.addImage(wcoinImage)
  wcoin2.scale = 0.095
  wcoin2.friction = 0.07
  wcoin2.setCollider("circle",10,-10,150)
  wcoin2.bounce(bcoin2)
  wcoin2.bounce(bcoin3)
  wcoin2.bounce(bcoin1)
  
  wcoin3.addImage(wcoinImage)
  wcoin3.scale = 0.095
  wcoin3.friction = 0.07
  wcoin3.setCollider("circle",10,-10,150)
  wcoin3.bounce(bcoin2)
  wcoin3.bounce(bcoin3)
  wcoin3.bounce(bcoin1)

  wcoin4.addImage(wcoinImage)
  wcoin4.scale = 0.095
  wcoin4.friction = 0.07
  wcoin4.setCollider("circle",10,-10,150)
 
  
  
  bcoin1.addImage(bcoinImage)
  bcoin1.scale = 0.172
  bcoin1.friction = 0.07
  bcoin1.setCollider("circle",-6,9,80)

  
  bcoin2.addImage(bcoinImage)
  bcoin2.scale = 0.172
  bcoin2.friction = 0.07
  bcoin2.setCollider("circle",-6,9,80)

  
  bcoin3.addImage(bcoinImage)
  bcoin3.scale = 0.172
  bcoin3.friction = 0.07
  bcoin3.setCollider("circle",-6,9,80)




  
  rcoin.addImage(rcoinImage)
  rcoin.scale = 0.12
  rcoin.friction = 0.07
  rcoin.setCollider("circle",-20,-10,125)
  rcoin.bounce(bcoin2)
  rcoin.bounce(bcoin3)
  rcoin.bounce(bcoin1)
  rcoin.bounce(wcoin2)
  rcoin.bounce(wcoin3)
  rcoin.bounce(wcoin1)
  rcoin.bounce(striker1)


  
  if(striker1.isTouching(wcoin3)){
    striker1.friction = striker1.friction+10
  }
  
  if(mousePressedOver(striker1)) { 
    striker1.velocityY=-500
  }
  drawSprites();
    }
  }