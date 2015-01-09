var easycbt = easycbt || {};
easycbt.collection = easycbt.collection || {};

easycbt.collection.Results = Backbone.Collection.extend({
  localStorage: new Backbone.LocalStorage("ResultCollection"),
  model: easycbt.model.Result
});
