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
});
