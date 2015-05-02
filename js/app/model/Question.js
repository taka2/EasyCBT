var easycbt = easycbt || {};
easycbt.model = easycbt.model || {};

easycbt.model.Question = Backbone.Model.extend({
  // 正解の説明文を取得する
  getCorrectAnswerDescription: function() {
  	 var self = this;
  	 return concatAnswersDescription(self.getCorrectAnswers());
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
  }
});