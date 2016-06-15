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
  filterCategories: function(categories) {
    var self = this;

    var result = [];
    for(var i=0; i<this.length; i++) {
      var question = self.at(i);
      var questionCategory = question.getCategory();

      if(!categories) {
        // 試験にカテゴリ指定がない場合は、全ての要素が対象となる
        result.push(question);
      } else {
        // 試験にカテゴリ指定がある場合
        if(_.isString(questionCategory)) {
          if(_.contains(categories, questionCategory)) {
            result.push(question);
          }
	    } else if(_.isUndefined(questionCategory)) {
          if(_.contains(categories, undefined)) {
            result.push(question);
          }
	    }
	  }
    }

    return result;
  }
});
