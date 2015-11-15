Template.newPatient.events({
  "click #createNewPatient": function (event) {
    var patientInfo = {
      firstName: $('#firstName').val(),
      lastName: $('#lastName').val(),
      gender: $('input[name=gender]:checked').val(), 
      dob: $('#dob').val()
    };

    sAlert.success("Successfully signed in a new patient.", {position: "bottom"});
    console.log(patientInfo);

    // reset input fields to blank
    $('#firstName').val("");
    $('#lastName').val("");
    $('#dob').val("");
    $('input[name="gender"]').prop('checked', false);
  }
});