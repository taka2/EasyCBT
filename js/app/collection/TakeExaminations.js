var easycbt = easycbt || {};
easycbt.collection = easycbt.collection || {};

easycbt.collection.TakeExaminations = Backbone.Collection.extend({
  localStorage: new Backbone.LocalStorage("TakeExaminations"),
  model: easycbt.model.TakeExamination,
});
