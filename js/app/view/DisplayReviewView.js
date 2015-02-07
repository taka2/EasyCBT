var easycbt = easycbt || {};
easycbt.view = easycbt.view || {};

easycbt.view.DisplayReviewView = Backbone.View.extend({
  el: '#rendering_area',
  template: _.template($("#display_review_template").html()),
  initialize: function(options) {
  },
  render: function() {
    var self = this;

    var results = new easycbt.collection.Results();
    results.fetch();

    self.questions = results.groupByWrongAnswerCount();
    var output = self.template({
      'questions': self.questions
    });

    self.$el.html(output);
    return self;
  }
})
