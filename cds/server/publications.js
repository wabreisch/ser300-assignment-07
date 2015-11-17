Meteor.publish('painInformation', function () {
  return PainInformation.find({});
});