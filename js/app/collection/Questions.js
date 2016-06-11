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
    var result = [];

    for(var i=0; i<this.length; i++) {
      if(!categories) {
        result.push(this.at(i));
      } else {
        var question = this.at(i);
        var matchCategory = false;
        for(var j=0; j<categories.length; j++) {
	  if(question.get('category') == categories[j]) {
	    matchCategory = true;
	    break;
	  }
	}
	if(matchCategory) {
          result.push(this.at(i));
	}
      }
    }

    return result;
  }
});
