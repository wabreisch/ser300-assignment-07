Template.detailedPain.events({
  "click #newLocation": function () {
    // insert new instance of pain location template
    Blaze.render(Template.painLocation, $("#newPainLocation").get(0));
    
    // disable buttons so the user cannot create multiple instances of the new pain location template
    $("#newLocation").prop("disabled", true);
    $("#finish").prop("disabled", true);
  },
  "click #savePainDesc": function () {
    // save all data and write to DB, then remove inserted form from the DOM
    var painDescription = {
      patientId: Session.get("patientId"),
      side: $("#painSide").val(),
      bodyPart: $("#bodyPart").val(), 
      painSeverityMoving: $("#painSeverityMoving").val(),
      painSeverityRest: $("#painSeverityRest").val(),
      painFrequency: $("#painFrequency").val(),
      worsensPain: $("#worsensPain").val(),
      alleviatesPain: $("#alleviatesPain").val(),
      painType: $("#painType").val(),
    }

    // insert the var painDescription into the DB
    Meteor.call('insertPainInfo', painDescription);

    // remove the div containing the insert pain item template
    $("#painLocationDiv").remove();    

    // re-enable previously disabled buttons
    $("#newLocation").prop("disabled", false);
    $("#finish").prop("disabled", false);
  },

  "click #cancelPainDesc" : function () { 
    // ensure the user doesn't accidentally click the "cancel" button
    if (confirm("Are you sure you wish to cancel?  Your changes will be lost.")) {
      $("#painLocationDiv").remove();    
      $("#newLocation").prop("disabled", false);
      $("#finish").prop("disabled", false);
    }
  },

  "click #finish": function () {
    // navigate to the next page in the flowchart
    setTimeout(function () {
      Router.go("info5");
    }, 1000);
  }
});

Template.painTable.helpers({
  getPainItems: function () { // return all pain information documents that match the current patient's ID
    return PainInformation.find({patientId: Session.get("patientId")});
  }
});