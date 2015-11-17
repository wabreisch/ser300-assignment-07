PainInformation = new Mongo.Collection('painInformation');

Meteor.methods({
  insertPainInfo: function (painInfo) {
    if (Roles.userIsInRole(Meteor.userId(), ['admin'])) {
      PainInformation.insert(painInfo);
    }
  }
});