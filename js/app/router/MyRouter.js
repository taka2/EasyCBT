var easycbt = easycbt || {};
easycbt.router = easycbt.router || {};

easycbt.router.MyRouter = Backbone.Router.extend({
  routes: {
    '': 'showQuestions'
    , 'questions/:examination_id': 'showQuestions'
    , 'showResult': 'showResult'
    , '*default': 'showQuestions'
  },

  showQuestions: function(examination_id) {
    examination_id = examination_id || 0;
    var examination = examinations.at(examination_id);
    var examinationView = new easycbt.view.ExaminationView({
      examination: examinations.at(examination_id)
      , collection: questions
    });
    examinationView.render();
  },

  showResult: function() {
    console.log('MyRouter#showResult');
  }
});
