var easycbt = easycbt || {};
easycbt.view = easycbt.view || {};

easycbt.view.ResultView = Backbone.View.extend({
  el: '#rendering_area',
  template: _.template($("#result_template").html()),
  initialize: function(options) {
    var self = this;
    self.questions2 = options.questions2;
    self.correctAnswersCount = options.correctAnswersCount;
    self.percentageOfCorrectAnswers = options.percentageOfCorrectAnswers;
    self.takeExamination = options.takeExamination;
  },
  render: function() {
    var self = this;

    var output = self.template({
      'takeExamination': self.takeExamination
      , 'questions2': self.questions2
      , 'correctAnswersCount': self.correctAnswersCount
      , 'percentageOfCorrectAnswers': self.percentageOfCorrectAnswers
    });

    self.$el.html(output);
    return self;
  }
})
