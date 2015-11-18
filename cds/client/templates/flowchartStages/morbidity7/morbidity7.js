// simple event handlers for the morbidity page

Template.morbidity7.events({
  "click #yes": function () {
    // go to [8]
    Router.go("treat8");
  },
  "click #no": function () {
    // go to [11]
    Router.go("interpret11");
  },
});