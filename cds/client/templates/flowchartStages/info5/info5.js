// when the user clicks the finish button, set all session variables to null,
// thus clearing the current patient

Template.info5.events({
  "click #finish": function () {
    Session.set("firstName", null);
    Session.set("lastName", null);
    Session.set("patientId", null);
    setTimeout(function () {
      Router.go("landing");
    }, 1000);
  }
});