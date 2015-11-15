Router.configure({
  notFoundTemplate: 'notFound',
  layoutTemplate: 'layout'
});

Router.route('/landing/', {name: 'landing'});

Router.route('/new/', {name: 'newPatient'});

Router.route('/existing/', {name: 'existing'});

Router.route('/communicate/', {name: 'communicate1'});

Router.route('/reporting/', {name: 'reporting2'});

Router.route('/assess/', {name: 'assess3'});

Router.route('/monitor/', {name: 'monitor4'});

Router.route('/info/', {name: 'info5'});

Router.route('/observe/', {name: 'observe6'});

Router.route('/morbidity/', {name: 'morbidity7'});