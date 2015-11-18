Template.currentPatient.helpers({ // helpers to return data to the currentPatient template
  firstName: function () {
    return Session.get("firstName");
  },
  lastName: function () {
    return Session.get("lastName");
  },
  id: function () {
    return Session.get("patientId");
  }
})