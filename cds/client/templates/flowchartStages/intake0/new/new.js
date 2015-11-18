Template.newPatient.events({
  "click #createNewPatient": function (event) {

    // ensure the user has at least entered a first/last name for the patient
    if ($('#firstName').val() === "" || $('#lastName').val() === "") {
      return alert("Please fill out all form fields.");
    }

    var patientInfo = { // grab all patient data from the form using jQuery
      firstName: $('#firstName').val(),
      lastName: $('#lastName').val(),
      gender: $('input[name=gender]:checked').val(), 
      dob: $('#dob').val()
    };

    sAlert.success("Successfully signed in a new patient.", {position: "bottom"});

    Session.set("firstName", patientInfo.firstName);
    Session.set("lastName", patientInfo.lastName);

    Meteor.call('insertNewPatient', patientInfo, function (error, result) {
      if (error) { alert(error.reason); }
      Session.set("patientId", result); // after inserting the patient, set the session variable patientId appropriately
    });


    // reset input fields to blank
    $('#firstName').val("");
    $('#lastName').val("");
    $('#dob').val("");
    $('input[name="gender"]').prop('checked', false);

    setTimeout(function () {
      Router.go("communicate1");
    }, 1000);
  }
});