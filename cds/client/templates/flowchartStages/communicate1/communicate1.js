Template.communicate1.events({ // handle click events on the communicate1 template
  "click #yes": function () {
    // go to [2]
    Router.go("reporting2");
  },
  "click #no": function () {
    // go to [6]
    Router.go("observe6");
  }
});