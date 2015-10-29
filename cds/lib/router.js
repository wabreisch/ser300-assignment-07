Router.configure({
  notFoundTemplate: 'notFound',
});

Router.route('/', {name: 'home'});

Router.route('/elsewhere/', {name: 'elsewhere'});