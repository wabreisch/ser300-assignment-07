Router.configure({
  notFoundTemplate: 'notFound',
  layoutTemplate: 'layout'
});

Router.route('/communicate/', {name: 'communicate1'});