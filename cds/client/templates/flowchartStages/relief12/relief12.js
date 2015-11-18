Template.relief12.events({
  "click #finish": function () { // reset all session variables
    Session.set("firstName", null);
    Session.set("lastName", null);
    Session.set("patientId", null);
    setTimeout(function () {
      Router.go("landing");
    }, 1000);
  }
});