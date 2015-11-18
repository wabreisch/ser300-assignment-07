// create a new MongoDB collection to hold all patient documents
Patients = new Mongo.Collection('patients');

// allow authorized clients to insert new patient documents into the DB 
Meteor.methods({
  insertNewPatient: function (patientInfo) {
    // **NOTE**:  commented out the Roles.userIsInRole... line because
    // your (Dr. Christov) database will be different from my database and
    // you would not have the same users with admin privileges
    // if (Roles.userIsInRole(Meteor.userId(), ['admin'])) {
      var id = Patients.insert(patientInfo);
    // }
    return id;
  }
});