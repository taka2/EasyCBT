var easycbt = easycbt || {};
easycbt.model = easycbt.model || {};

easycbt.model.Question = Backbone.Model.extend({
  // 問題文を取得する
  getDescription: function() {
    var self = this;
    return self.get('description');
  },

  // 正解を取得する
  getCorrectAnswers: function() {
  	var self = this;
  	var answers = self.get('answers');

    var resultList = [];
    for(var i=0; i<answers.length; i++) {
      var answer = answers[i];
      if(answer.correct) {
      	resultList.push(answer);
      }
    }

    return resultList;
  },

  // 正解の説明文を取得する
  getCorrectAnswersDescription: function() {
  	var self = this;
  	var correctAnswers = self.getCorrectAnswers();
    if(correctAnswers.length == 1) {
      // 1件の場合は加工せず返す
      return correctAnswers[0].description;
    }

    // 複数件の場合は加工して返す
    var resultStringArray = [];
    for(var i=0; i<correctAnswers.length; i++) {
      resultStringArray.push("(" + (i+1) + ") " + correctAnswers[i].description);
    }

    return resultStringArray.join(' ');
  },
});