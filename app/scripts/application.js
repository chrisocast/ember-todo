define([
  'ember'
], function(Ember) {

  window.Todos = Ember.Application.create({
    //LOG_ACTIVE_GENERATION: true,
    LOG_TRANSITIONS: true,
    LOG_VIEW_LOOKUPS: true
  });

    return App;
});