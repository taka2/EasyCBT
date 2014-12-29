var easycbt = easycbt || {};
easycbt.router = easycbt.router || {};

easycbt.router.MyRouter = Backbone.Router.extend({
  routes: {
    '': 'showQuestions'
    , 'showResult': 'showResult'
  },

  showQuestions: function() {
    var questions = new easycbt.collection.Questions();
    var examinationView = new easycbt.view.ExaminationView({collection: questions});
    examinationView.render();
    console.log('MyRouter#showQuestions');
  },
  showResult: function() {
    console.log('MyRouter#showResult');
  }
});
