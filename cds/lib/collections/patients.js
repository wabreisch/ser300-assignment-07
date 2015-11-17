Patients = new Mongo.Collection('patients');

Meteor.methods({
  insertNewPatient: function (patientInfo) {
    if (Roles.userIsInRole(Meteor.userId(), ['admin'])) {
      Patients.insert(patientInfo);
    }
  }
});