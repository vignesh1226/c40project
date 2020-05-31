class Game {
  constructor(){}

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
      form = new Form()
      form.display();
    }
    player1 = createSprite(300,175);
    player2 = createSprite(300,375);
    player3 = createSprite(300,575);
    player4 = createSprite(300,775);

    players = [player1,player2,player3,player4];
  }

  play(){
    form.hide();
    textSize(30);
    text("Game Start", 120, 100)
    Player.getPlayerInfo();

    if(allPlayers !== undefined){
     var index = 0;
     var x;
     var y = 175;
      for(var plr in allPlayers){
        index = index+1;
        x = displayHeight-allPlayers[plr].distance;
        y = y+200;
        players[index-1].x = x;
        players[index-1].y = y;
        if(index === player.index){
          players[index-1].shapeColor = "red";
          camera.position.x = players[index-1].x;
          camera.position.y = displayWidth/2;
        }
      }
    }

    if(keyIsDown(LEFT_ARROW) && player.index !== null){
      player.distance +=50
      player.update();
    }

    if(player.distance > 3860){
      gameState = 2;
      player.rank++;
      Player.updateRank(player.rank);
    }

    drawSprites();
  }

  end(){
    console.log("Game Ended");
    console.log(player.rank);
  }
  
}
