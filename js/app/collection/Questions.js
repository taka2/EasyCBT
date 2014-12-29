var easycbt = easycbt || {};
easycbt.collection = easycbt.collection || {};

easycbt.collection.Questions = Backbone.Collection.extend({
  model: easycbt.model.Question,
  initialize: function(options) {
    this.add(questions);
    console.log('Qestions#initialize: ' + questions.length);
  }
});