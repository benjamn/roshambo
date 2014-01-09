if (Meteor.isClient) {
  Template.loggedInHeader.events({
    'click .sign-out': function () {
      Meteor.logout();
    }
  });

  Template.profileImage.helpers({
    user: function () {
      return Meteor.users.findOne(String(this));
    }
  });

  Template.newGame.events({
    'click .button': function () {
      Games.insert({
        player1Id: Meteor.userId()
      });
    }
  });
}
