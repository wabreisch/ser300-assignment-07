// publish painInformation collection
// (client must then subscribe to view this data)

Meteor.publish('painInformation', function () {
  return PainInformation.find({});
});