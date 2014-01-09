Meteor.publish("me", function () {
  return Meteor.users.find(this.userId);
});

Meteor.publish("others", function () {
  return Meteor.users.find({}, {fields: {"services.facebook.id": 1}});
});

Meteor.publish("games", function () {
  return Games.find({}, {fields: {player1Id: 1, player2Id: 1}});
});

Meteor.publish("games1", function () {
  return Games.find({player1Id: this.userId}, {fields: {player1Id: 1, player1Move: 1}});
});

Meteor.publish("games2", function () {
  return Games.find({player2Id: this.userId}, {fields: {player2Id: 1, player2Move: 1}});
});

Meteor.publish("completeGames", function () {
  return Games.find({player1Move: {$exists: 1}, player2Move: {$exists: 1}});
});

