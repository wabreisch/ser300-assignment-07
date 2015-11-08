Template.reporting2.events({
  "click #yes": function () {
    // go to [3]
    Router.go("assess3");
  },
  "click #reluctant": function () {
    // go to [3]
    Router.go("assess3");
  },
  "click #no": function () {
    // go to [4]
    Router.go("monitor4");
  }
});