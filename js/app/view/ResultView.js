var easycbt = easycbt || {};
easycbt.view = easycbt.view || {};

easycbt.view.ResultView = Backbone.View.extend({
  el: '#rendering_area',
  template: _.template($("#result_template").html()),
  initialize: function(options) {
    var self = this;
    self.examination = options.examination;
    self.questions2 = options.questions2;
    self.correctAnswersCount = options.correctAnswersCount;
    self.percentageOfCorrectAnswers = options.percentageOfCorrectAnswers;
  },
  render: function() {
    var self = this;

    var output = self.template({
      'examinationName': self.examination.get('examinationName')
      , 'questionCount': self.examination.get('questionCount')
      , 'questions2': self.questions2
      , 'correctAnswersCount': self.correctAnswersCount
      , 'percentageOfCorrectAnswers': self.percentageOfCorrectAnswers
    });

    self.$el.html(output);
    return self;
  }
})
