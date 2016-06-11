var easycbt = easycbt || {};
easycbt.collection = easycbt.collection || {};

easycbt.collection.TakeExaminations = Backbone.Collection.extend({
  localStorage: new Backbone.LocalStorage("TakeExaminations"),
  model: easycbt.model.TakeExamination,

  // LocalStorageから戻したとき、Modelクラスではなく、普通のオブジェクトに戻るので、復元するためのメソッド
  restoreFromLocalStorage: function() {
    var self = this;

    for(var i=0; i<self.size(); i++) {
      var examination = new easycbt.model.Examination(self.at(i).get('examination'));
      var answers = new easycbt.collection.Answers();
      for(var j=0; j<self.at(i).get('answers').length; j++) {
        var question = new easycbt.model.Question(self.at(i).get('answers')[j].question);
        var answersIndex = self.at(i).get('answers')[j].answers;
        answers.push(new easycbt.model.Answer({
          question: question
          , answers: answersIndex
        }));
      }
      self.at(i).setExamination(examination);
      self.at(i).setAnswers(answers);
    }
  },
});
