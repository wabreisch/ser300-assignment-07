// The router.js file, used in conjunction with the iron-router package,
// simulates the look and feel of a multi-page application

Router.configure({ // define some default templates
  notFoundTemplate: 'notFound',
  layoutTemplate: 'layout'
});

// tell iron-router which template to load when each route is visited

Router.route('/', {name: 'landing'});

Router.route('/new/', {name: 'newPatient'});

Router.route('/existing/', {name: 'existing'});

Router.route('/communicate/', {name: 'communicate1'});

Router.route('/reporting/', {name: 'reporting2'});

Router.route('/assess/', {name: 'assess3'});

Router.route('/detailedpain/', {
  name: 'detailedPain',
  waitOn: function () { // wait until a subscription to painInformation is established
    Meteor.subscribe('painInformation');
  },
  onBeforeAction: function () { // ensure that there is a patient ID set before rendering the detailedPain page
    if (Session.get("patientId")) {
      this.next();
    } else {
      this.render('landing');
    }
  }
});

Router.route('/monitor/', {name: 'monitor4'});

Router.route('/info/', {name: 'info5'});

Router.route('/observe/', {name: 'observe6'});

Router.route('/morbidity/', {name: 'morbidity7'});

Router.route('/treat/', {name: 'treat8'});

Router.route('/monitortreat/', {name: 'monitorTreat9'});

Router.route('/interpret/', {name: 'interpret11'});

Router.route('/relief/', {name: 'relief12'});