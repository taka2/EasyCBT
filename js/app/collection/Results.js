var easycbt = easycbt || {};
easycbt.collection = easycbt.collection || {};

easycbt.collection.Results = Backbone.Collection.extend({
  localStorage: new Backbone.LocalStorage("ResultCollection"),
  model: easycbt.model.Result, 

  // 成績から誤回答した問題を誤回答数の多い順にソートして返す。
  // @return easycbt.collection.Questions
  groupByWrongAnswerCount: function() {
    var self = this;

    // 誤回答した問題を集計する
    var resultMap = {};
    for(var i=0; i<self.length; i++) {
       var questions = self.at(i).get('questions');
       for(var j=0; j<questions.length; j++) {
          var question = questions[j];
          var questionDescription = question.description;
          if(question.correct) {
          	continue;
          }
          if(questionDescription in resultMap) {
            var count = resultMap[questionDescription].count;
            resultMap[questionDescription] = {question: question, count: count+1};
          } else {
            resultMap[questionDescription] = {question: question, count: 1};
          }
       }
    }

    // コレクションに詰め直し
    var questions = new easycbt.collection.Questions();
    for(var key in resultMap) {
      var question = new easycbt.model.Question(resultMap[key].question);
      question.set('count', resultMap[key].count);
      questions.add(question);
    }

    // 誤回答数の多い順にソート
    questions.comparator = function(q) {
      return q.get('count') * -1;
    };
    return questions.sort();
  }
});
