winner = {
  rock: {scissors: true},
  scissors: {paper: true},
  paper: {rock: true}
};

Template.games.helpers({
  games: function () {
    return Games.find();
  },

  canJoin: function () {
    return Meteor.userId() && this.player1Id !== Meteor.userId();
  },

  canPlay1: function () {
    return this.player1Id === Meteor.userId() && this.player2Id && !this.player1Move;
  },

  canPlay2: function () {
    return this.player2Id === Meteor.userId() && !this.player2Move;
  },

  showPlayed1Move: function () {
    return (this.player1Id === Meteor.userId() && this.player1Move)
      || (this.player1Move && this.player2Move);
  },

  showPlayed2Move: function () {
    return (this.player2Id === Meteor.userId() && this.player2Move)
      || (this.player1Move && this.player2Move);
  },

  player1Won: function () {
    return this.player1Move && this.player2Move && winner[this.player1Move][this.player2Move];
  },

  player2Won: function () {
    return this.player1Move && this.player2Move && winner[this.player2Move][this.player1Move];
  }
});

Template.games.events({
  'click .join': function () {
    Meteor.call("join", this._id);
  },

  'click .rock1': function () {
    Games.update(this._id, {$set: {player1Move: "rock"}});
  },
  'click .paper1': function () {
    Games.update(this._id, {$set: {player1Move: "paper"}});
  },
  'click .scissors1': function () {
    Games.update(this._id, {$set: {player1Move: "scissors"}});
  },

  'click .rock2': function () {
    Games.update(this._id, {$set: {player2Move: "rock"}});
  },
  'click .paper2': function () {
    Games.update(this._id, {$set: {player2Move: "paper"}});
  },
  'click .scissors2': function () {
    Games.update(this._id, {$set: {player2Move: "scissors"}});
  }
});
