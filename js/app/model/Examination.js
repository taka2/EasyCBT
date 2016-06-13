var easycbt = easycbt || {};
easycbt.model = easycbt.model || {};

easycbt.model.Examination = Backbone.Model.extend({
  // 試験名を取得する
  getExaminationName: function() {
    var self = this;
    return self.get('examinationName');
  },

  // 問題数を取得する
  getQuestionCount: function() {
    var self = this;
    return self.get('questionCount');
  },

  // カテゴリ一覧を取得する
  getCategories: function() {
    var self = this;
    return self.get('categories');
  },

  // 実際の問題数を取得する
  getActualQuestionCount: function() {
    var self = this;
    var actualQuestionCount = self.get('actualQuestionCount');
    if(!actualQuestionCount) {
      return self.getQuestionCount()
    } else {
      return actualQuestionCount;
    }
  },

  // 実際の問題数を設定する
  setActualQuestionCount: function(actualQuestionCount) {
  	var self = this;
  	return self.set('actualQuestionCount', actualQuestionCount);
  },
});
