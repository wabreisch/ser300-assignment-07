Template.reporting2.events({
  "click #rest": function () {
    // go to [3]
    Router.go("assess3");
  },
  "click #moving": function () {
    // go to [3], the same as a "yes" in this case
    Router.go("assess3");
  },
  "click #both": function () {
    // go to [3]
    Router.go("assess3");
  },
  "click #no": function () {
    // go to [4]
    Router.go("monitor4");
  }
});