Router.configure({
  notFoundTemplate: 'notFound',
  layoutTemplate: 'layout'
});

Router.route('/', {name: 'landing'});

Router.route('/new/', {name: 'newPatient'});

Router.route('/existing/', {name: 'existing'});

Router.route('/communicate/', {name: 'communicate1'});

Router.route('/reporting/', {name: 'reporting2'});

Router.route('/assess/', {name: 'assess3'});

Router.route('/detailedPain/', {name: 'detailedPain'});

Router.route('/monitor/', {name: 'monitor4'});

Router.route('/info/', {name: 'info5'});

Router.route('/observe/', {name: 'observe6'});

Router.route('/morbidity/', {name: 'morbidity7'});

Router.route('/treat/', {name: 'treat8'});

Router.route('/monitortreat/', {name: 'monitorTreat9'});

Router.route('/interpret/', {name: 'interpret11'});

Router.route('/relief/', {name: 'relief12'});