var easycbt = easycbt || {};
easycbt.collection = easycbt.collection || {};

easycbt.collection.Questions = Backbone.Collection.extend({
  model: easycbt.model.Question,

  // シャッフルするためにオリジナルインデックスを保存する
  saveOriginalIndex : function() {
    var self = this;

    for(var i=0; i<self.size(); i++) {
      var question = self.at(i);
      question.set({index: i});
      var choices = question.getChoices();
      for(var j=0; j<choices.length; j++) {
        choices[j].index = j;
      }
    }

    return self;
  },

  deepCopy: function() {
    return new easycbt.collection.Questions(
      JSON.parse(JSON.stringify(this))
    );
  },

  // 問題リストを指定されたカテゴリリストで抽出する
  // | Exam/Question | undefined     | string             |
  // | undefined     | Target        | Target             |
  // | one           | Non Target    | Target if match    |
  // | multiple      | Non Target    | Target if contains |
  filterCategories: function(categories) {
    var self = this;

    var result = [];
    for(var i=0; i<this.length; i++) {
      var question = self.at(i);
      var questionCategory = question.getCategory();

      if(!categories) {
        // 試験にカテゴリ指定がない場合は、無条件で対象となる
        result.push(question);
        continue;
      }
      if(!questionCategory) {
        // 問題にカテゴリ指定がない場合は、無条件で対象外となる
        continue;
      }

      if(categories.length == 1 && categories[0] == questionCategory) {
        // 試験に1つのカテゴリ指定がある場合
        result.push(question);
      } else {
        // 試験に複数のカテゴリ指定がある場合
        if(_.contains(categories, questionCategory)) {
          result.push(question);
        }
      }
    }

    return result;
  }
});
