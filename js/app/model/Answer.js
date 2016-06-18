var easycbt = easycbt || {};
easycbt.model = easycbt.model || {};

easycbt.model.Answer = Backbone.Model.extend({
  // 問題を取得する
  getQuestion: function() {
    var self = this;
    return self.get('question');
  },

  // 問題を設定する
  setQuestion: function(question) {
  	var self = this;
  	return self.set('question', question);
  },

  // 回答を取得する
  getAnswers: function() {
    var self = this;
    return self.get('answers');
  },

  // 回答を設定する
  setAnswers: function(answers) {
  	var self = this;
  	return self.set('answers', answers);
  },

  // 回答が正答かどうか判定する
  // @param answers 回答番号のリスト
  isCorrectAnswer: function() {
    var self = this;
    var answers = self.getAnswers();

    if(!answers || answers.length == 0) {
      // 無回答は不正解
      return false;
    }

    var question = self.getQuestion();
    if(question.getQuestionType() == easycbt.model.Question.QUESTION_TYPE_MULTIPLE_CHOICE) {
      var answersLength = answers.length;
      var choices = question.getChoices();
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
    } else if(question.getQuestionType() == easycbt.model.Question.QUESTION_TYPE_SINGLE_CHOICE) {
      return question.getSelectedAnswers([answers])[0].correct;
    } else {
      // QuestionType追加時にコード追加する場所
    }
  },

  // 回答した選択肢リストを取得する
  getAnsweredChoices: function() {
    var self = this;
    return self.getQuestion().getSelectedAnswers(self.getAnswers());
  },

  // 回答した選択肢リストを取得する
  getAnsweredChoicesDescription: function() {
    var self = this;
    return self.getQuestion().getSelectedAnswersDescription(self.getAnswers());
  },
});