var easycbt = easycbt || {};
easycbt.model = easycbt.model || {};

easycbt.model.TakeExamination = Backbone.Model.extend({
  // 試験を取得する
  getExamination: function() {
    var self = this;
    return self.get('examination');
  },

  // 試験を設定する
  setExamination: function(examination) {
  	var self = this;
  	return self.set('examination', examination);
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

  // 受験日時を取得する
  getCreated: function() {
    var self = this;
    return self.get('created');
  },

  // 受験日時をを設定する
  setCreated: function(created) {
  	var self = this;
  	return self.set('created', created);
  },

  // 正答数を取得する
  getCorrectAnswersCount: function() {
    var self = this;
    var answers = self.getAnswers();
    var result = 0;
    for(var i=0; i<answers.size(); i++) {
      if(answers.at(i).isCorrectAnswer()) {
        result++;
      }
    }

    return result;
  },

  // 正答率を取得する
  getPercentageOfCorrectAnswers: function() {
    var self = this;

    var percentage = (self.getCorrectAnswersCount() / self.getExamination().getActualQuestionCount() * 100);
    // 小数点第2位まで表示（切り捨て）
    return (Math.floor(percentage * 100) / 100);
  },
});
