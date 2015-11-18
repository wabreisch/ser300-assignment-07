Template.navbar.helpers({
  activeClass: function(/* route names */) {
    var args = Array.prototype.slice.call(arguments, 0);
    args.pop();

    var active = _.any(args, function(name) {
      return Router.current() && Router.current().route.getName() === name
    });
    
    return active && 'active';
  }
});

Template.navbar.events({
  "click #landingNav": function () { // if the user clicks the "landing" navbar element, reset the patient session variables to null
    Session.set("patientId", null);
    Session.set("firstName", null);
    Session.set("lastName", null);
  }
});