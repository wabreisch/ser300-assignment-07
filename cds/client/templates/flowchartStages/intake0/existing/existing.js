// options to change the search done on the applicatin's database
var options = {
  localSearch: true
};

var fields = ['firstName', 'lastName'];

// define the patients collection as a new search source
PatientSearch = new SearchSource('patients', fields, options);

// define helpers for the existing patient template
Template.existing.helpers({
  getPatients: function() {
    return PatientSearch.getData({
      transform: function(matchText, regExp) {
        return matchText.replace(regExp, "$&")
      },
      sort: {isoScore: -1}
    });
  }
});

Template.existing.rendered = function() {
  PatientSearch.search(''); // search for '' on rendering in order to display a list of all patients
};

Template.existing.events({
  "keyup #name": _.throttle(function(e) { // on a keyup event, serach for the current string
    var text = $(e.target).val().trim();
    PatientSearch.search(text);
  }, 200),
  "click #patient": function () { // when a patient is selected, set session variables to that patient's name and ID
    Session.set("firstName", this.firstName);
    Session.set("lastName", this.lastName);
    Session.set("patientId", this._id);
    setTimeout(function () {
      Router.go("communicate1");
    }, 1000);
  }
});