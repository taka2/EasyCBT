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

  // 正解を取得する
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

  // 回答が正答かどうか判定する
  // @param answers 回答番号のリスト
  isCorrectAnswer: function(answers) {
    var self = this;

    if(!answers || answers.length == 0) {
      // 無回答は不正解
      return false;
    }

    var answersLength = answers.length;
    var choices = self.getChoices();
    var choicesLength = choices.length;
    // 回答番号のリストを選択肢数分に拡張した配列
    var answersArray = [];

    // 配列を全てfalseで初期化
    for(var i=0; i<choicesLength; i++) {
      answersArray[i] = false;
    }

    // 回答箇所のみtrueに上書き
    for(i=0; i<answersLength; i++) {
      answersArray[answers[i]] = true;
    }

    for(i=0; i<choicesLength; i++) {
      if(choices[i].correct && answersArray[i]) {
        // 正解
      } else if(!choices[i].correct && !answersArray[i]) {
        // 不正解を選択してない
      } else {
        // 不正解
        return false;
      }
    }

    return true;
  },
}, {
  // 定数
  // n択問題の正解が1つ
  QUESTION_TYPE_SINGLE_CHOICE: 1,
  // n択問題の正解が複数
  QUESTION_TYPE_MULTIPLE_CHOICE: 2,
});