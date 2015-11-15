Template.landing.events({
  'click #newPatient': function () {
    Router.go('newPatient');
  },
  'click #existingPatient': function () {
    Router.go('existing');
  }
});