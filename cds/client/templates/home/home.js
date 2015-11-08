Template.home.events({
  "click #btn": function () {
    Router.go("elsewhere");
  },
  "keypress": function (event) {
    console.log(event);
  },
  "click #human": function (e) {
    alert("clicked on human:" + e.clientX + "," + e.clientY);
  }
});

Template.elsewhere.events({
  "click #elsewhere-btn": function () {
    Router.go("home");
  }
});