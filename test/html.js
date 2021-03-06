(function() {

  module('html');

  test('data-html', function() {
    var view = new Quilt.View({
      template: function() {
        return '<p><i data-html="x"></i></p>';
      },
      model: new Backbone.Model({x: 'x'})
    }).render();
    strictEqual(view.$('i').html(), 'x');
    view.model.set({x: 'y'});
    strictEqual(view.$('i').html(), 'y');
  });

  test('data-text', 1, function() {
    var view = new Quilt.View({
      template: function() {
        return '<p><i data-text="x"></i></p>';
      },
      model: new Backbone.Model({x: '1 < 2'})
    }).render();
    strictEqual(view.$('i').html(), '1 &lt; 2');
  });

  test('missing model', 0, function() {
    new Quilt.View({
      template: function() {
        return '<p><i data-text="x"></i></p>'
      }
    }).render();
  });

})();
