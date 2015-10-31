Router.configure({
  notFoundTemplate: 'notFound',
  layoutTemplate: 'layout'
});

Router.route('/', {name: 'home'});

Router.route('/elsewhere/', {name: 'elsewhere'});