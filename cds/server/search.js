// implements an updating search feature using the meteorhacks:search-source package

SearchSource.defineSource('patients', function(searchText, options) {
  var options = {limit: 20};
  
  if (searchText) {
    var regExp = buildRegExp(searchText);
    var selector = {$or: [
      {firstName: regExp},
      {lastName: regExp}
    ]};
    
    return Patients.find(selector, options).fetch();
  } else {
    return Patients.find({}, options).fetch();
  }
});


function buildRegExp(searchText) {
  var parts = searchText.trim().split(/[ \-\:]+/);
  return new RegExp("(" + parts.join('|') + ")", "ig");
}