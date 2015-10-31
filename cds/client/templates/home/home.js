Template.home.events({
  "click #btn": function () {
    Router.go("elsewhere");
  }
});

Template.elsewhere.events({
  "click #elsewhere-btn": function () {
    Router.go("home");
  }
});