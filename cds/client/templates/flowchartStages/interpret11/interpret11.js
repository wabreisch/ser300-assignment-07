Template.interpret11.events({
  "click #yes": function () {
    // go to [12]
    Router.go("relief12");
  },
  "click #no": function () {
    // go to [13], which is the same as [4]
    Router.go("monitor4");
  }
})