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

  filterCategories: function(categories) {
    var self = this;

    if(!categories) {
      // カテゴリ指定がない場合は、全ての要素が対象となる
      return self;
    }

    var result = [];
    for(var i=0; i<this.length; i++) {
      var question = self.at(i);
      for(var j=0; j<categories.length; j++) {
	    if(question.getCategory() == categories[j]) {
          result.push(this.at(i));
	      break;
	    }
	  }
    }

    return result;
  }
});
