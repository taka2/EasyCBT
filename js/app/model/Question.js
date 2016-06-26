var easycbt = easycbt || {};
easycbt.model = easycbt.model || {};

easycbt.model.Question = Backbone.Model.extend({
  // 問題のタイプを取得する
  getQuestionType: function() {
    var self = this;

    var questionType = self.get('question_type');
    if(questionType != undefined) {
      if(questionType == 'input_text') {
        return easycbt.model.Question.QUESTION_TYPE_INPUT_TEXT;
      }
    } else {
      if(self.get('multiple_answer')) {
        return easycbt.model.Question.QUESTION_TYPE_MULTIPLE_CHOICE;
      } else {
        return easycbt.model.Question.QUESTION_TYPE_SINGLE_CHOICE;
      }
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

  // カテゴリを取得する
  getCategory: function() {
  	var self = this;
  	return self.get('category');
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

    if(answers == undefined) {
      // 無回答は空リストを返す
      return resultList;
    }

    if(self.getQuestionType() == easycbt.model.Question.QUESTION_TYPE_MULTIPLE_CHOICE) {
      if(answers.length == 0) {
        // 無回答は空リストを返す
        return resultList;
      }

      for(var i=0; i<answers.length; i++) {
        resultList.push(choices[answers[i]]);
      }
    } else if(self.getQuestionType() == easycbt.model.Question.QUESTION_TYPE_SINGLE_CHOICE) {
      resultList.push(choices[answers]);
    } else if(self.getQuestionType() == easycbt.model.Question.QUESTION_TYPE_INPUT_TEXT) {
      // 何もしない
    } else {
      // QuestionType追加時にコード追加する場所
    }

    return resultList;
  },

  // 正解の説明文を取得する
  getCorrectAnswersDescription: function() {
  	var self = this;
    return self.getAnswersDescription(self.getCorrectAnswers());
  },

  // 指定したインデックスの選択肢リストの説明文を取得する
  getSelectedAnswersDescription: function(answers) {
  	var self = this;
    return self.getAnswersDescription(self.getSelectedAnswers(answers));
  },

  // 指定した選択肢リストの説明文を取得する
  getAnswersDescription: function(choices) {
  	var self = this;
    if(choices.length == 1) {
      // 1件の場合は加工せず返す
      return choices[0].description;
    }

    // 複数件の場合は加工して返す
    var resultStringArray = [];
    for(var i=0; i<choices.length; i++) {
      resultStringArray.push("(" + (i+1) + ") " + choices[i].description);
    }

    return resultStringArray.join(' ');
  },

  // 出題に誤りがないかどうかチェックする
  isValid: function() {
    var self = this;

    if(self.getQuestionType() == easycbt.model.Question.QUESTION_TYPE_SINGLE_CHOICE) {
      // 「n択問題の正解が1つ」にも関わらず、複数の正解が設定されている場合
      if(self.getCorrectAnswers().length > 1) {
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
  // テキスト入力
  QUESTION_TYPE_INPUT_TEXT: 3,
});