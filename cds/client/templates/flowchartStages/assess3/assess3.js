Template.assess3.events({
  "click #yes": function () {
    // go to detailed pain history page
    Router.go("detailedPain");
  },
  "click #no": function () {
    // go to [4]
    Router.go("monitor4");
  }
});