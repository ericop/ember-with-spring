import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});
// http://guides.emberjs.com/v1.13.0/routing/defining-your-routes/#toc_resetting-nested-route-namespace
Router.map(function() {
  this.route('home', {
    path: '/'
  });
  this.route('calculator', {}, function() {
    this.route('calculation', {
      //resetNamespace: true,
      path: 'calculator/:calculation_id'
    }, function() {
      this.route('delete', {});
    });
  });
  this.route('histories', {});
});

export default Router;
