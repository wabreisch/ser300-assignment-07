Template.currentPatient.helpers({
  firstName: function () {
    return Session.get("firstName");
  },
  lastName: function () {
    return Session.get("lastName");
  }
})