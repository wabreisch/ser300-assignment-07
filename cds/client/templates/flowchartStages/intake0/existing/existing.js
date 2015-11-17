var options = {
  keepHistory: 1000 * 60 * 5,
  localSearch: true
};

var fields = ['firstName', 'lastName'];

PatientSearch = new SearchSource('patients', fields, options);

Template.existing.helpers({
  getPatients: function() {
    return PatientSearch.getData({
      transform: function(matchText, regExp) {
        return matchText.replace(regExp, "$&")
      },
      sort: {isoScore: -1}
    });
  },
  
  isLoading: function() {
    return PatientSearch.getStatus().loading;
  }
});

Template.existing.rendered = function() {
  PatientSearch.search('');
};

Template.existing.events({
  "keyup #name": _.throttle(function(e) {
    var text = $(e.target).val().trim();
    PatientSearch.search(text);
  }, 200),
  "click #patient": function () {
    Session.set("firstName", this.firstName);
    Session.set("lastName", this.lastName);
    Session.set("patientId", this._id);
    setTimeout(function () {
      Router.go("communicate1");
    }, 1000);
  }
});