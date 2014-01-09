Meteor.methods({
  join: function (gameId) {
    Games.update(gameId, {$set: {player2Id: this.userId}});
  }
});
