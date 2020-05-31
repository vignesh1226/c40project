class Form {

  constructor() {
    this.input = createInput("Name");
    this.button = createButton('Play');
    this.greeting = createElement('h2');
    this.title = createElement('h2');
    this.reset = createButton("reset");
    this.pause = createButton("pause");
  }
  hide(){
    this.greeting.hide();
    this.button.hide();
    this.input.hide();
    this.title.hide();
  }

  display(){
    this.title.html("Horizontal Hurdles Game");
    this.title.position(displayWidth/2-130, 0);

    this.input.position(displayWidth/2-15, displayHeight/2-120);
    this.button.position(displayWidth/2+120, displayHeight/2-90);
    this.reset.position(displayWidth-100,20);
    this.pause.position(displayWidth-160,20)

    this.button.mousePressed(()=>{
      this.input.hide();
      this.button.hide();
      player.name = this.input.value();
      playerCount+=1;
      player.index = playerCount;
      player.update();
      player.updateCount(playerCount);
      this.greeting.html("Hello " + player.name)
      this.greeting.position(displayWidth/2-20, displayHeight/2-90);
    });

    this.reset.mousePressed(()=>{
      game.update(0);
      player.updateCount(0);
    })

  }
}
