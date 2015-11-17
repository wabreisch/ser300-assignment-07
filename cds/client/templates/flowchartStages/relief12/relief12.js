Template.relief12.events({
  "click #finish": function () {
    Session.set("firstName", null);
    Session.set("lastName", null);
    setTimeout(function () {
      Router.go("landing");
    }, 3000);
  }
});