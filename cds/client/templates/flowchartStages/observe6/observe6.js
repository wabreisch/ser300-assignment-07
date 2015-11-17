Template.observe6.events({
  "click #yes": function () {
    // go to [7]
    Router.go("morbidity7");
  },
  "click #no": function () {
    // go to [10], which is the same state as [4]
    Router.go("monitor4");
  },
})