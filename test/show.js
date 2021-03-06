(function() {

  module('show and hide');

  test('data-show', function() {
    var view = new Quilt.View({
      template: function(){
        return '<p><i data-show="x"></i></p>';
      },
      model: new Backbone.Model({x: true})
    }).render();
    ok(!view.$('i').is('.hide'));
    view.model.set({x: false});
    ok(view.$('i').is('.hide'));
  });

  test('data-hide', function() {
    var view = new Quilt.View({
      template: function() {
        return '<p><i data-hide="x"></i></p>';
      },
      model: new Backbone.Model({x: true})
    }).render();
    ok(view.$('i').is('.hide'));
    view.model.set({x: false});
    ok(!view.$('i').is('.hide'));
  });

  test('missing model', 0, function() {
    new Quilt.View({
      template: function() {
        return '<p><i data-hide="x"></i></p>';
      }
    }).render();
  });

})();
