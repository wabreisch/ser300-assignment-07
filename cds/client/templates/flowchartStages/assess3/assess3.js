Template.assess3.events({
  "click #yes": function () {
    // go to [5]
    Router.go("info5");
  },
  "click #no": function () {
    // go to [4]
    Router.go("monitor4");
  }
});