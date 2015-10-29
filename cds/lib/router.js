Router.configure({
  notFoundTemplate: 'notFound',
  loadingTemplate: 'loading'
});

Router.route('/', {name: 'home'});

Router.route('/elsewhere/', {name: 'elsewhere'});