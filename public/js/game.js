(function(window){
  function Game (player1, player2){
    this.player1 = player1;
    this.player2 = player2;
  }

  Game.prototype.onKeyUp = function(key){
    if (key === 80){
      this.player1.move(key);
      // this.player1.checkLocation();
    } else if (key === 81){
     this.player2.move(key);
     // this.player2.checkLocation();
    }
  };

  window.Game = Game;

})(window);
