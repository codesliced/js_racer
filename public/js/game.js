(function (window) {
    function Game(player1, player2) {
        this.player1 = player1;
        this.player2 = player2;
        count = 0;
    }

    Game.prototype.incrementCounter = function () {
        count++;
    };

    Game.prototype.startTimers = function () {
        if (count === 1) {
            start = new Date();
        }
    };

    Game.prototype.stopTimers = function () {
        end = new Date();
        race_time = (end - start) / 1000;
        return race_time;
    };

    Game.prototype.declareWinner = function (player) {
        if (player === this.player1){
          $('.winner h2').text(player.initials()+" ,you're a Speedy Foxzales!" + race_time + ' seconds!' );
          $('.winner').show();
        }
        else if (player === this.player2){
          $('.winner h2').text(player.initials()+" is a flying Squirrel! " + race_time + ' seconds!' );
          $('.winner').show();
        }
    };

     Game.prototype.movePlayer = function (player, key) {
        player.move(key);
            if (player.checkLocation(key) === "winner") {
                this.stopTimers();
                this.declareWinner(player);
            }
    };


    Game.prototype.onKeyUp = function (key) {
        this.incrementCounter();
        this.startTimers();

        if (key === 80) {
        this.movePlayer(this.player1, key);

    } else if (key === 81) {
      this.movePlayer(this.player2, key);
    }
};

window.Game = Game;

})(window);




 

