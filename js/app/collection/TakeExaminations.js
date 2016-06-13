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

  // 成績から誤回答した問題を誤回答数の多い順にソートして返す。
  // @return Map{easycbt.collection.Question, incorrectCount}
  getWrongAnswerCountGroupByQuestion: function() {
    var self = this;

    // 誤回答した問題を集計する
    var resultMap = {};
    for(var i=0; i<self.length; i++) {
      var answers = self.at(i).getAnswers();
      for(var j=0; j<answers.length; j++) {
        var answer = answers.at(j);
        if(!answer.isCorrectAnswer()) {
          var question = answer.getQuestion();
          if(question.getDescription() in resultMap) {
            var count = resultMap[question.getDescription()].count;
            resultMap[question.getDescription()] = {question: question, count: count+1};
          } else {
            resultMap[question.getDescription()] = {question: question, count: 1};
          }
        }
      }
    }

    // 配列に詰め直し
    var resultList = [];
    for(var key in resultMap) {
      resultList.push({
        question: resultMap[key].question
        , count: resultMap[key].count
      });
    }

    // 誤答の多い問題順に並べて返す
    return _.sortBy(resultList, function(obj) {
      return obj.count * (-1);
    });
  }
});
