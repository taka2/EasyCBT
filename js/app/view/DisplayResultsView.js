var easycbt = easycbt || {};
easycbt.view = easycbt.view || {};

easycbt.view.DisplayResultsView = Backbone.View.extend({
  el: '#rendering_area',
  template: _.template($("#display_results_template").html()),
  events: {
    'click #btn_clear_results': 'btnClearResults'
  },
  initialize: function(options) {
  },
  render: function() {
    var self = this;

    var takeExaminations = new easycbt.collection.TakeExaminations();
    takeExaminations.fetch();
    takeExaminations.restoreFromLocalStorage();

    var output = self.template({
      'takeExaminations': takeExaminations
    });

    self.$el.html(output);
    return self;
  },
  // 成績クリアボタンイベントハンドラ
  btnClearResults: function() {
    var self = this;

    var results = new easycbt.collection.Results();
    results.fetch();
    for(var i=results.length-1; i>=0; i--) {
      results.at(i).destroy();
    }

    var takeExaminations = new easycbt.collection.TakeExaminations();
    takeExaminations.fetch();
    for(var i=takeExaminations.length-1; i>=0; i--) {
      takeExaminations.at(i).destroy();
    }

    self.render();
    return self;
  }
})
