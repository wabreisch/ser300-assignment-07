// when the user clicks the finish button, reset the patient's session variables

Template.monitor4.events({
  "click #finish": function () {
    Session.set("firstName", null);
    Session.set("lastName", null);
    Session.set("patientId", null);
    setTimeout(function () {
      Router.go("landing");
    }, 1000);
  }
});