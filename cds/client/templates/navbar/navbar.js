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
  "click #landingNav": function () {
    Session.set("patientId", null);
    Session.set("firstName", null);
    Session.set("lastName", null);
  }
});