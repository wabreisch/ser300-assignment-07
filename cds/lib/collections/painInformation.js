// create a new MongoDB collection to hold all painInformation documents
PainInformation = new Mongo.Collection('painInformation');

// allow authorized clients to insert new pain info into DB
Meteor.methods({
  insertPainInfo: function (painInfo) {
    // **NOTE**:  commented out the Roles.userIsInRole... line because
    // your (Dr. Christov) database will be different from my database and
    // you would not have the same users with admin privileges
    // if (Roles.userIsInRole(Meteor.userId(), ['admin'])) {
      PainInformation.insert(painInfo);
    // }
  }
});