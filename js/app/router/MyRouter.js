var easycbt = easycbt || {};
easycbt.router = easycbt.router || {};

easycbt.router.MyRouter = Backbone.Router.extend({
  routes: {
    '': 'showQuestions'
    , 'questions/:examination_id': 'showQuestions'
    , '*default': 'showQuestions'
  },

  showQuestions: function(examination_id) {
    examination_id = examination_id || 0;
    var examination = examinations.at(examination_id);
    var questionsView = new easycbt.view.QuestionsView({
      examination: examinations.at(examination_id)
      , collection: questions
    });
    questionsView.render();
  },
});
