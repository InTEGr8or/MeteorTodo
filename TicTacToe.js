
if(Meteor.isClient){
  var Board = function(){
    return [
      [null, null, null],
      [null, null, null],
      [null, null, null]
    ]
  };
  Template.body.helpers({
    board: function(){
      return new Board();
    },
    rows: function(){
      return board;
    },
    row: function(i){
      return board[i];
    },
  })
}

if(Meteor.isServer){
  Meteor.startup(function(){

  });
}
