Patients = new Mongo.Collection('patients');

Meteor.methods({
  insertNewPatient: function (patientInfo) {
    if (Roles.userIsInRole(Meteor.userId(), ['admin'])) {
      var id = Patients.insert(patientInfo);
    }
    return id;
  }
});