Template.treat8.events({
  "click #yes": function () {
    // go to [11]
    Router.go("interpret11");
  },
  "click #no": function () {
    // go to [9]
    Router.go("monitorTreat9");
  }
});