Games.allow({
  insert: function (userId, doc) {
    return doc.player1Id === userId;
  },

  update: function (userId, doc, fieldNames) {
    if (doc.player1Id === userId) {
      return _.isEqual(fieldNames, ['player1Move']);
    } else if (doc.player2Id === userId) {
      return _.isEqual(fieldNames, ['player2Move']);
    } else {
      return false;
    }
  }
});
