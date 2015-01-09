var easycbt = easycbt || {};
easycbt.router = easycbt.router || {};

easycbt.router.MyRouter = Backbone.Router.extend({
  routes: {
    '': 'showExaminations'
    , 'questions/:examination_id': 'showQuestions'
    , 'results': 'showResults'
    , '*default': 'showExaminations'
  },

  showExaminations: function() {
    var examinationsView = new easycbt.view.ExaminationsView({
    });
    examinationsView.render();
  }, 

  showQuestions: function(examination_id) {
    var self = this;

    examination_id = examination_id || 0;
    var examination = examinations.at(examination_id);
    if(!examination) {
      self.navigate('/', {trigger: true, replace: true});
      return self;
    }
    var questionsView = new easycbt.view.QuestionsView({
      examination: examinations.at(examination_id)
      , collection: questions
    });
    questionsView.render();
  },
  
  showResults: function() {
    var displayResultsView = new easycbt.view.DisplayResultsView({
    });
    displayResultsView.render();
  }, 
});
