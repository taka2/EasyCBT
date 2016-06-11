var easycbt = easycbt || {};
easycbt.model = easycbt.model || {};

easycbt.model.Question = Backbone.Model.extend({
  // 問題のタイプを取得する
  getQuestionType: function() {
    var self = this;
    if(self.get('multiple_answer')) {
      return easycbt.model.Question.QUESTION_TYPE_MULTIPLE_CHOICE;
    } else {
      return easycbt.model.Question.QUESTION_TYPE_SINGLE_CHOICE;
    }
  },

  // 問題文を取得する
  getDescription: function() {
    var self = this;
    return self.get('description');
  },

  // 選択肢を取得する
  getChoices: function() {
  	var self = this;
  	return self.get('answers');
  },

  // 選択肢を設定する
  setChoices: function(choices) {
  	var self = this;
  	return self.set('answers', choices);
  },

  // 正解の選択肢リストを取得する
  getCorrectAnswers: function() {
  	var self = this;
  	var answers = self.getChoices();

    var resultList = [];
    for(var i=0; i<answers.length; i++) {
      var answer = answers[i];
      if(answer.correct) {
      	resultList.push(answer);
      }
    }

    return resultList;
  },

  // 指定したインデックスの選択肢リストを取得する
  getSelectedAnswers: function(answers) {
  	var self = this;
  	var choices = self.getChoices();
    var resultList = [];

    for(var i=0; i<answers.length; i++) {
      resultList.push(choices[answers[i]]);
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
}, {
  // 定数
  // n択問題の正解が1つ
  QUESTION_TYPE_SINGLE_CHOICE: 1,
  // n択問題の正解が複数
  QUESTION_TYPE_MULTIPLE_CHOICE: 2,
});