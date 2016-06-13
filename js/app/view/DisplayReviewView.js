var easycbt = easycbt || {};
easycbt.view = easycbt.view || {};

easycbt.view.DisplayReviewView = Backbone.View.extend({
  el: '#rendering_area',
  template: _.template($("#display_review_template").html()),
  initialize: function(options) {
  },
  render: function() {
    var self = this;

    var takeExaminations = new easycbt.collection.TakeExaminations();
    takeExaminations.fetch();
    takeExaminations.restoreFromLocalStorage();

    var output = self.template({
      'wrongAnswerCountList': takeExaminations.getWrongAnswerCountGroupByQuestion()
    });

    self.$el.html(output);
    return self;
  }
})
