(function(window) {
  function Player(initials) {
    var _initials = initials;
    this.initials = function(){return _initials;};
  }


  Player.prototype.move = function(key){
    var currentCol = $('#player_'+key+'_strip .active_'+key);

    currentCol.removeClass('active_'+key);
    currentCol.next().addClass('active_'+key);
  };

  // Player.prototype.checkLocation = function(){
  //   var currentCol = $('#player_'+key+'_strip .active_'+key);

  //   currentCol.removeClass('active_'+key);
  //   currentCol.next().addClass('active_'+key);
  // };


  window.Player = Player;


})(window);



