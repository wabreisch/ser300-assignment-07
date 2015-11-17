Template.detailedPain.events({
  "click #newLocation": function () {
    // insert new instance of pain location template
    Blaze.render(Template.painLocation, $("#newPainLocation").get(0));
  },
  "click #savePainDesc": function (template) {
    // save all data and write to DB, then remove inserted form from the DOM
    var painDescription = {
      side: $("#painSide").val(),
      bodyPart: $("#bodyPart").val(), 
      painSeverityMoving: $("#painSeverityMoving").val(),
      painSeverityRest: $("#painSeverityRest").val(),
      painFrequency: $("#painFrequency").val(),
      worsensPain: $("#worsensPain").val(),
      alleviatesPain: $("#alleviatesPain").val(),
      painType: $("#painType").val(),
    }

    $("#painLocationDiv").remove();    
  }
});