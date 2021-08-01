class Game{
    constructor(){

    }

    getState() {
        var gameStateRef = database.ref('gameState');
        gameStateRef.on("value", function (data) {
            gameState = data.val();
        })

    }

    update(state) {
        database.ref('/').update({
            gameState: state
        });
    }
    async start() {
        
            if (gameState === 0) {
                player = new Player();
                var playerCountRef = await database.ref('playerCount').once("value");
                if (playerCountRef.exists()) {
                    playerCount = playerCountRef.val();
                    player.getCount();
                }
                
                form = new Form()
                form.display();
            }
    player1 = createSprite(200,500);
    player1.addImage("player1",player_img);

    player2 = createSprite(800,500);
    player2.addImage("player2", player_img);
    players=[player1,player2];
    lobby_background.play();lobby_background.loop(149);
// fullscreen(true);
        }

    play(){
        // cursor.visible = false;
        // noCursor();
        // back_img.resize(windowWidth, windowHeight)

        // if(mouseY<560 && mouseY>70){
        //     noCursor()
        // }
        // fullscreen(true);
        // document.getElementById(canvas).style.margin =0;
                form.hide();
                // lobby_background.stop();
                // if(soundTimer === 0){
                //     // game_started.play();game_started.loop(82);
                //     soundTimer = 1;
                // }
                Player.getPlayerInfo();
            if(fullscreenTimer === 0 ){
                alert("Please click on the fullscreen button as not being fullscreen may bother the images.");
                fullscreenTimer = 1;
            }


                imageMode(CENTER);
                // if(second()%5 === 0){
                //     fullscreen(true);}
                 image(back_img, width/2, height/2, window.innerWidth, window.innerHeight);
                 back_img.resize(window.innerWidth, window.innerHeight)
                 var x =100;
                 var y=200;
                 var index =0;
                 drawSprites();
                 for(var plr in allPlayers){


                     index = index+1;
                     x = 500-allPlayers[plr].distance;
                     y=500;

                     players[index -1].x = x;
                     players[index - 1].y = y;

                     if(index === player.index){
                        fill("cyan")
                        textSize(30);
                        textFont("comfortaa");
                        // stroke(3.4)
                        textStyle(BOLD)
                        text(allPlayers[plr].name  ,x-60, y+70 );
                       //add code to display the player's name on the respective basket.


                     }



                 }




                if (keyIsDown(RIGHT_ARROW) && player.index !== null) {
                    player.distance -= 20;
                    noCursor();
                    player.update();
                }
                if (keyIsDown(LEFT_ARROW) && player.index !== null) {
                    player.distance += 20
                    player.update();
                    noCursor();
                }

                 if (frameCount % 20 === 0) {
                     fruits = createSprite(random(100, window.innerWidth), 0, 100, 100);
                     fruits.velocityY = Math.round(random(7, 15))
                     var rand = Math.round(random(1,6));
                     switch(rand){
                         case 1: fruits.addImage("fruit1",fruit1_img);
                         break;
                         case 2: fruits.addImage("fruit1", fruit2_img);
                         break;
                         case 3: fruits.addImage("fruit1", fruit3_img);
                         break;
                         case 4: fruits.addImage("fruit1", fruit4_img);
                         break;
                         case 5: fruits.addImage("fruit1", fruit5_img);
                         break;
                         case 6: fruits.addImage("fruit1", memeFace);
                         break;
                     }
                     fruitGroup.add(fruits);


                 }

                  if (player.index !== null) {
                    for (var i = 0; i < fruitGroup.length; i++) {
                        if (fruitGroup.get(i).isTouching(players)) {
                            fruitGroup.get(i).destroy();


                        }

                    }
                  }







    }

    end(){
       console.log("Game Ended");
    }
}
